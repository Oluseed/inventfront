import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = `Hello, I want to make an inquiry about the product: ${product.name} (Price: #${product.price}).`;
  const whatsappLink = `https://wa.me/2348123456789?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6">
      <div className="
        bg-white rounded-3xl shadow-xl 
        w-full max-w-3xl 
        p-5 md:p-7 
        animate-fadeIn
      ">
        
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            className="text-gray-600 hover:text-black text-lg font-bold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Layout Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* --- Left: Product Image --- */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* --- Right: Product Details --- */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold font-inter mb-1">
              {product.name}
            </h2>

            <p className="text-xl text-[#FF4C05] font-bold font-inter mb-3">
              #{product.price}
            </p>

            <p className="text-gray-700 font-inter leading-relaxed mb-6">
              {product.spec}
            </p>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#25D366] text-white text-center py-2 
                rounded-full font-inter font-medium
                hover:bg-[#1da851] transition
              "
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
