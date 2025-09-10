import React from "react";

export default function POSLandingClone() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-12">
      {/* Decorative emoji images */}
      <img
        className="absolute w-10 h-10 -top-6 left-[6%]"
        src="/images/emoji-sunglasses.png"
        alt="emoji"
      />
      <img
        className="absolute w-10 h-10 -top-6 right-[6%]"
        src="/images/emoji-fire.png"
        alt="emoji"
      />

      {/* Curly arrow images */}
      <img
        className="absolute w-12 h-12 -top-2 left-[44%] rotate-[15deg]"
        src="/images/curly-1.png"
        alt="curly"
      />
      <img
        className="absolute w-12 h-12 -bottom-3 right-[18%] -rotate-[30deg]"
        src="/images/curly-2.png"
        alt="curly"
      />

      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Tools to manage every part
          <br />
          of your business
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Powerful point-of-sale, inventory and customer tools built to help
          modern retailers and restaurants run faster — designed to scale as you
          grow.
        </p>
      </header>

      {/* Grid Layout */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* POS Image */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="/images/pos-register.jpg"
            alt="Point of sale register"
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Point of sale</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Turn any device into a powerful point-of-sale system suitable for
              restaurants and retail.
            </li>
            <li>
              Faster checkout flows and multi-tender payments to speed up
              operations.
            </li>
            <li>
              Create, save, and edit orders — letting customers pay when it’s
              most convenient.
            </li>
            <li>
              Offline-first capabilities so transactions continue during
              connectivity issues.
            </li>
            <li>
              Keep track of cash movements, refunds, and shift reports with audit
              logs.
            </li>
          </ul>
          <a
            href="#"
            className="inline-block mt-4 px-5 py-3 bg-[#f9532d] text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Learn more
          </a>
        </div>
      </section>
    </div>
  );
}