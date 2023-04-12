import { useState, useEffect } from "react";
import { CardImage_CDN, RestaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./RestaurantMenu";
import ShimmerUi from "./ShimmerUi";

const filterAll = (data, restaurantData) => {
    const filterlist = restaurantData.filter((item) => {
        console.log(item, 'item')

        return item?.data?.name?.toLowerCase()?.includes(data?.toLowerCase())


    })
    console.log(filterlist, 'filterlist')
    return filterlist;
}


const Body = () => {
    // console.log(RestaurantList[0].data)

    const [restaurantData, setRestaurantData] = useState([])
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([])

    const [data, setData] = useState('')

    const inputData = (e) => {
        setData(e.target.value)
    }

    useEffect(() => {
        getApi()
    }, [])

    async function getApi() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0158605&lng=76.3418666&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantData(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards)
        console.log(json.data.cards[2]?.data?.data?.cards)
    }

    if (!filteredRestaurantData) return null;

    // if (filteredRestaurantData.length === 0) {
    //     return <h1>Not found</h1>
    // }


    return (

        <>

            <div className="searchBar">
                <input
                    type={'text'}
                    value={data}
                    onChange={(e) => inputData(e)}
                />
                <button onClick={() => {
                    const fillData = filterAll(data, restaurantData);
                    setFilteredRestaurantData(fillData)
                    console.log(fillData, 'data')
                }}>Search  </button>
            </div>
            <div className="cardList">
                {restaurantData?.length === 0 ? <ShimmerUi /> : (

                    filteredRestaurantData.length === 0 ? <h1>Not found product</h1> :
                        filteredRestaurantData.map((restaurant) => {
                            return <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />

                        })
                )}
            </div>
        </>
    )
}

export default Body