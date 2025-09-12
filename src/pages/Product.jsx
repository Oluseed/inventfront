import React from "react";

export default function Product() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-16">
      <br />  <br /><br />
      <header className="relative text-center mb-16">
  {/* Surrounding Icons (desktop only) */}
  <img
    className="hidden md:block absolute w-[76px] h-[60px] top-0 left-[120px]"
    src="src/assets/images/pricing-icon-1.svg"
    alt="decorative icon"
  />
  <img
    className="hidden md:block absolute w-[74px] h-[69px] bottom-[100px] right-[180px]"
    src="src/assets/images/pricing-icon-2.svg"
    alt="decorative icon"
  />
  <img
    className="hidden md:block absolute w-[76px] h-[60px] bottom-0 right-[160px]"
    src="src/assets/images/pricing-icon-3.svg"
    alt="decorative icon"
  />
  <img
    className="hidden md:block absolute w-[74px] h-[69px] bottom-0 left-[200px]"
    src="src/assets/images/pricing-icon-4.svg"
    alt="decorative icon"
  />
  <img
    className="hidden md:block absolute w-[80px] h-[65px] -bottom-[60px] left-1/2 -translate-x-1/2"
    src="src/assets/images/pricing-icon-5.svg"
    alt="decorative icon"
  />

  {/* Header Content */}
  <h1 className="text-3xl md:text-4xl font-bold mb-3 font-clashDisplay tracking-tight">
    Tools to manage every part
    <br />
    of your business
  </h1>
  <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
    Feis orci tempor sed sit aliquam. Sit donec egestas ridiculus <br className="hidden md:block"/>
    porttitor amet. Consectetur pulvinar mauris aliquet.
  </p>
</header>
            <br /> <br />
      {/* Grid Layout */}
      <section className="grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* POS Image */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="src/assets/images/pos-register.png"
            alt="Point of sale register"
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Point of sale</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
            <li>
              Speed up order processing in your restaurant with customizable
              screens.
            </li>
            <li>Easily apply discounts and run promotions.</li>
            <li>
              Create, save, and edit orders — letting customers pay later.
            </li>
            <li>Offer full or partial refunds for customer convenience.</li>
            <li>
              Keep track of cash, refunds, and shift reports with audit logs.
            </li>
            <li>
              Remain online during network issues and sync automatically later.
            </li>
          </ul>
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-[#f9532d] text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Explore Now
          </a>
        </div>
      </section>
    </div>
  );
}
