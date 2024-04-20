import React from 'react'
import Header from './Header'
import Products from './Products'
import { WOMENS_CLOTHING } from '../utils/constants'
import { useLocation } from 'react-router-dom';

const WomensClothing = () => {
  const location = useLocation();
  const { state } = location;

  // Access the props passed from the previous route (womensClothingItems)
  const { womensClothingItems } = state;

  return (
    <>
        <Header />

        <Products title={WOMENS_CLOTHING} productsList={womensClothingItems} />
    </>
  )
}

export default WomensClothing