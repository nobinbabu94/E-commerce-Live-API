import React, { lazy,Suspense } from "react";
import ReactDOM from 'react-dom/client'
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import '../index.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import ShimmerUi from "./components/ShimmerUi";

const Instamart = lazy(()=> import('./components/Instamart'))


const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

const rootLayout = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [

            {
                path: '/',
                element: <Body />
            },

            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contactus',
                element: <Contact />
            },
            {
                path: '/restaurantmenu/:id',
                element: <RestaurantMenu />

            },
            ,

            {
                path: '/instamart',
                element: <Suspense fallback={<ShimmerUi/>}><Instamart/></Suspense>
            },
         
        ]

    },


]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={rootLayout} />)