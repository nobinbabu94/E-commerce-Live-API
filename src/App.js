import React, { createElement } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'
import '../index.css'
import Title from "./components/Title";
import MenuItems from "./components/MenuItems";
import { useState, useEffect } from 'react'
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";
import WorkingFile from "./components/WorkingFile";
import Body from "./components/Body";

const RestaurantList = []

const Header = () => {
    const [abc, setAbc] = useState('ture')
    return (
        <>
            <div className="header">
                <Title />
                <MenuItems />
            </div>

        </>
    )
}


const Apps = () => (

    <React.Fragment>
        <Header />
        <WorkingFile />
        <Body />
    </React.Fragment>
)


const root = createRoot(document.getElementById("root"))

root.render(<Apps />)