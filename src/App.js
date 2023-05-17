<<<<<<< HEAD
import React, { lazy, Suspense, useContext } from "react";
=======
import React, { lazy,Suspense } from "react";
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
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
<<<<<<< HEAD
import Context, { userContext } from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import('./components/Instamart'))
=======

const Instamart = lazy(()=> import('./components/Instamart'))
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a


const AppLayout = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Context>
                    <Header />
                    <Outlet />
                    <Footer />
                </Context>
            </Provider>
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

            },{
                path:'cart',
                element:<Cart/>
            }
            ,

            {
                path: '/instamart',
                element:
                    <Suspense fallback={<ShimmerUi />}>
                        <Instamart />
                    </Suspense>
            },
<<<<<<< HEAD
            
           
=======
            ,

            {
                path: '/instamart',
                element: <Suspense fallback={<ShimmerUi/>}><Instamart/></Suspense>
            },
         
>>>>>>> 04b0252172f2eace16a8cecea2fe0d797bebef0a
        ]

    },


]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={rootLayout} />)