import React, { createElement } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'
import '../index.css'
import Title from "./components/Title";
import MenuItems from "./components/MenuItems";
import { useState, useEffect } from 'react'
import RestaurantCard from "./components/RestaurantCard";

const RestaurantList = [

]



const SearchBar = () => {
    return (
        <div className="searchBar">
            <input  ></input>
        </div>
    )
}


const Header = () => {

    const [abc, setAbc] = useState('ture')

    return (
        <>
            <div className="header">
                <Title />
                <SearchBar />
                <MenuItems />



            </div>
           
        </>
    )
}



const Apps = () => (

    <React.Fragment>
        <Header />
        <RestaurantCard />
    </React.Fragment>
)


const root = createRoot(document.getElementById("root"))

root.render(<Apps />)