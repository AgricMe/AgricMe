import React from 'react'
import { ProductCard } from './ProductCard'
const Products = () => {
  return (
    <div className='flex justify-center mt-10 mb-12 flex-col items-center'>
        <div>
            <h2 className='font-bold text-black text-2xl'>View The Trending Products</h2>
        </div>
        <div className='w-[88%] flex justify-between flex-wrap'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default Products