import React from 'react'
import Section1 from '../components/products/Section1'
import GetStartedSection from '../components/home/GetStartedSection'
import { ProductList } from '../components/products/ProductList'

export const Product = () => {
  return (
    <div>
      <Section1/>
      <ProductList/>
      <GetStartedSection/>
    </div>
  )
}
