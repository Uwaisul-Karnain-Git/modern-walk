import React, { useState, useEffect } from 'react'
import Header from './Header'
import Products from './Products'
import { MENS_CLOTHING, WOMENS_CLOTHING } from '../utils/constants';
import CategoryTile from './CategoryTiles';

const Home = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [mensClothingItems, setMensClothingItems] = useState([]);
  const [womensClothingItems, setWomensClothingItems] = useState([]);

  useEffect(() => {
    // Fetch All the Products
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const result = await response.json();
        setAllProducts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
      // Filter out Men's and Women's clothing
      setMensClothingItems(allProducts.filter(p => p.category.toLowerCase() === MENS_CLOTHING.toLowerCase()));
      setWomensClothingItems(allProducts.filter(p => p.category.toLowerCase() === WOMENS_CLOTHING.toLowerCase()));
  }, [allProducts]);

  return (
    <>
        <Header isHomePage={true} />

        <Products title="Flash Sale" productsList={[...mensClothingItems, ...womensClothingItems]} />

        <CategoryTile mensClothingItems={mensClothingItems} womensClothingItems={womensClothingItems} />
    </>
  )
}

export default Home