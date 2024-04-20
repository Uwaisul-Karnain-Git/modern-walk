import React from 'react'
import Header from './Header'
import Products from './Products'
import { MENS_CLOTHING } from '../utils/constants'
import { useLocation } from 'react-router-dom';

const MensClothing = () => {
  const location = useLocation();
  const { state } = location;

  // Access the props passed from the previous route (mensClothingItems)
  const { mensClothingItems } = state;

  return (
    <>
        <Header />

        <Products title={MENS_CLOTHING} productsList={mensClothingItems} />
    </>
  )
}

export default MensClothing