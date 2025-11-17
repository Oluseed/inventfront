import React, { useState } from "react";
import ProductModal from "./ProductModal";

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="shadow bg-[#fffdfd] rounded-xl p-4 grid gap-y-2 place-content-center mx-7">
        {/* Image */}
        <div className="place-self-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-70 h-auto object-cover rounded-lg mb-4"
          />
        </div>

        {/* Name and Price */}
        <div className="flex justify-between items-center font-inter font-medium text-[#121212]">
          <h1>{product.name}</h1>
          <h1>#{product.price}</h1>
        </div>

        {/* Specification */}
        <div>
          <p className="font-inter text-[#505359] text-sm">{product.spec}</p>
        </div>

        {/* Checkout */}
        <div className="place-self-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#FF4C05] text-[#ffffff] p-2 px-4 font-inter font-medium text-sm rounded-full hover:bg-[#121212] hover:text-white transition duration-300 cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <ProductModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ProductCard;
