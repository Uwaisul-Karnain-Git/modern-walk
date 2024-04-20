import React from 'react'
import { MENS_CLOTHING } from '../utils/constants'

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="w-1/5 min-h-1/4 p-2 m-4 border-2 rounded-xl bg-white">
        <div className="py-2 min-h-28 text-center font-bold text-lg">
            <span>{product.title}</span>
        </div>

        <div className='flex justify-around p-2 mb-4'>
            <img 
                className='h-52'
                alt={product.title} 
                src={product.image}
            />
        </div>

        <div className={`flex flex-col -m-2 p-4 min-h-40 rounded-xl text-center bg-${product.category.toLowerCase() === MENS_CLOTHING.toLowerCase() ? 'green' : 'rose'}-400`}>
            <span className='pb-2 text-blue-800 font-bold'>Rs {product.price}</span>
            <span>{product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}</span>
        </div>
    </div>
  )
}

export default ProductCard