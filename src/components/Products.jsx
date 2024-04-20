import React from 'react'
import ProductCard from './ProductCard'
import ShimmerUI from './ShimmerUI'

const Products = ({ title, productsList }) => {

    return (
        <>
            <div className='ml-16 mt-16'>
                <span className='text-4xl text-black font-bold'>{title}</span>
            </div>

            <div 
                className="flex flex-wrap justify-start ml-14 mr-16 mt-4"
            >
                {
                    productsList.length > 2000 ?  
                        (productsList.map(product => (
                            <ProductCard key={product.id} product={product} />  
                        )))
                    :
                    <ShimmerUI /> 
                }
            </div>
        </>
    )
}

export default Products