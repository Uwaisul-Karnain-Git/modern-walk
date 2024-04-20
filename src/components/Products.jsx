import React from 'react'

const Products = ({ title, productsList }) => {
    console.log("Products: ", productsList)
    return (
        <>
            <div className='ml-16 mt-20'>
                <span className='text-4xl text-black font-bold'>{title}</span>
            </div>

            <div>
                {
                    // productsList.map(p => (
                    //     <div key={p.id}>{p.title}</div>
                    // ))
                }
            </div>
        </>
    )
}

export default Products