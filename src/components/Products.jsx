import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ title, productsList }) => {
    console.log("Products: ", title, productsList)
    return (
        <>
            <div className='ml-16 mt-16'>
                <span className='text-4xl text-black font-bold'>{title}</span>
            </div>

            <div 
                className="flex flex-wrap justify-start ml-14 mr-16 mt-4"
            >
                {productsList.map(product => (
                    <ProductCard product={product} />   
                ))}
            </div>
        </>
    )
}

export default Products