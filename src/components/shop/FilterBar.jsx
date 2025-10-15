import React from 'react'

export const FilterBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className='flex gap-4 mb-6 mt-20'>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 shadow-2xs text-[#5E5E5E] rounded-full font-inter font-medium text-sm bg-[#F3EFEF] ${
            selectedCategory === category
              ? "border-2 border-[#FF4C05] "
              : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
