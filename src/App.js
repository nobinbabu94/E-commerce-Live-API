import React, { createElement } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import '../index.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
return(
    <React.Fragment>
        <Header />
       <Outlet/>
        <Footer />
    </React.Fragment>
)}

const rootLayout = createBrowserRouter([
    {
        path: '/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            
            {
                path:'/',
                element:<Body/>
            },
            
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contactus',
                element:<Contact/>
            },
        ]

    },
 
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={rootLayout}/>)