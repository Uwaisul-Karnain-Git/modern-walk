import React from 'react';
import { useNavigate } from 'react-router-dom'
import { MENS_CLOTHING, WOMENS_CLOTHING } from '../utils/constants';

const CategoryTile = ({ mensClothingItems, womensClothingItems}) => {
    const navigate = useNavigate();

    const handleMensClothingClick = () => {
        // Navigate to "mensClothing" page
        navigate("/mensClothing", { state: { mensClothingItems } });
    };

    const handleWomensClothingClick = () => {
        // Navigate to "womensClothing" page
        navigate("/womensClothing", { state: { womensClothingItems } });
    };

    return (
        <>
            <div className='ml-16 mt-20'>
                <span className='text-4xl text-black font-bold'>Categories</span>
            </div>
            <div className='flex ml-16 mt-20 mb-20 w-11/12 h-44 text-5xl'>
                <button 
                    className='w-1/2 bg-green-400 rounded-3xl text-white'
                    onClick={handleMensClothingClick}
                >
                    {MENS_CLOTHING}
                </button>

                <button 
                    className='w-1/2 ml-16 bg-rose-400 rounded-3xl text-white'
                    onClick={handleWomensClothingClick}
                >
                    {WOMENS_CLOTHING}
                </button>
            </div>
        </>
    )
}

export default CategoryTile