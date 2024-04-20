import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ isHomePage = false }) => {
  const navigate = useNavigate();

    const handleHeaderClick = () => {
        // If on the 'Home' page just 'return' without navigating
        if(isHomePage)
          return;

        // Navigate to "Home" page
        navigate("/");
    };

  return (
    <>
        <h1 
          className="text-center text-black text-6xl font-bold"
          onClick={handleHeaderClick}
        >
            Modern Walk
        </h1>

        <hr className='mt-6 border-4 border-b-slate-200' />
    </>
  )
}

export default Header