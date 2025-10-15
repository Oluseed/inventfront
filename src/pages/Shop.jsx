import React from 'react'
import ProductCard from '../components/shop/ProductCard'
import { products } from '../data/products'
import { FilterBar } from '../components/shop/FilterBar'
import { useState } from 'react'

export const Shop = () => {
  // Store category selected 
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Gets a lists of categories in the product data 
  const categories = ["All Products", ...new Set(products.map((product) => product.category))];

  // Filters products based on selected category
  const filteredProducts = selectedCategory === "All Products"       // If "All Products" is selected, show all products
    ? products 
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className='py-4 bg-[#FFFFFF]'>
      {/* Filter Section */}
      <div className='mt-20'>
        <FilterBar 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      
      {/* Products Section */}
      {filteredProducts.length === 0 ? 'No Products Available' : (
        <div className='grid gap-y-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center mb-10 '>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      )}
    </div>
  )
}
