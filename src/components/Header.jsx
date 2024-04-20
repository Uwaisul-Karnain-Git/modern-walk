import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

    const handleHeaderClick = () => {
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