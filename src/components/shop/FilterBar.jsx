import React from "react";

export const FilterBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-4 px-1 mt-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 cursor-pointer shadow text-[#5E5E5E] rounded-full font-inter font-medium text-sm bg-[#F3EFEF] transition-all duration-100 whitespace-nowrap border border-transparent ${
            selectedCategory === category
              ? "border border-[#FF4C05] bg-[#FFF8F5]"
              : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
