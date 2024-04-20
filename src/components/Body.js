import React from 'react';
import Home from './Home';
import MensClothing from './MensClothing';
import WomensClothing from './WomensClothing'; 
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/mensClothing",
            element: <MensClothing />
        },
        {
            path: "/womensClothing",
            element: <WomensClothing />
        }
    ]);

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
}

export default Body;
