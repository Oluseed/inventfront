import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  const token = localStorage.getItem("authToken");

  const fetchRequests = async () => {
    try {
      const response = await fetch(
        "https://demo-requests-api.olastute.com/api/demo-requests",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // 🔥 Fetch a specific request by ID
  const fetchSingleRequest = async (id) => {
    setModalLoading(true);

    try {
      const response = await fetch(
        `https://demo-requests-api.olastute.com/api/demo-requests/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setSelectedRequest(data);
    } catch (error) {
      console.error("Single fetch error:", error);
    } finally {
      setModalLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 font-clashDisplay">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

          <button
            onClick={logout}
            className="bg-[#ff4c05] text-white px-4 py-2 rounded-lg hover:bg-black transition"
          >
            Logout
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          {loading ? (
            <p className="p-4">Loading...</p>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Company</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((req) => (
                  <tr
                    key={req.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{req.name}</td>
                    <td className="p-4">{req.email}</td>
                    <td className="p-4">{req.company || "N/A"}</td>
                    <td className="p-4">
                      {new Date(req.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => fetchSingleRequest(req.id)}
                        className="bg-[#ff4c05] text-white py-1 px-3 rounded-lg hover:bg-black transition"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* =================== MODAL =================== */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setSelectedRequest(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Demo Request Details
            </h2>

            {modalLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="space-y-3 text-gray-700 text-sm">

                <p><span className="font-semibold">ID:</span> {selectedRequest.id}</p>

                <p><span className="font-semibold">Name:</span> {selectedRequest.name}</p>

                <p><span className="font-semibold">Email:</span> {selectedRequest.email}</p>

                <p><span className="font-semibold">Details:</span> {selectedRequest.details ?? "No details"}</p>

                <p><span className="font-semibold">Status:</span> {selectedRequest.status}</p>

                <p>
                  <span className="font-semibold">Sent At:</span>{" "}
                  {selectedRequest.sent_at
                    ? new Date(selectedRequest.sent_at).toLocaleString()
                    : "Not sent"}
                </p>

                <p>
                  <span className="font-semibold">Created At:</span>{" "}
                  {selectedRequest.created_at
                    ? new Date(selectedRequest.created_at).toLocaleString()
                    : "N/A"}
                </p>

                <p>
                  <span className="font-semibold">Updated At:</span>{" "}
                  {selectedRequest.updated_at
                    ? new Date(selectedRequest.updated_at).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={() => setSelectedRequest(null)}
                className="w-full bg-[#ff4c05] text-white py-2 rounded-lg hover:bg-black transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
