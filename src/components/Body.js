import { useState, useEffect } from "react";
import { CardImage_CDN, RESTAURANT_LIST, RestaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./RestaurantMenu";
import ShimmerUi from "./ShimmerUi";
import { filterAll } from "../utils/helperfile";
import useOnline from "../utils/useOnline";


const Body = () => {


    const [restaurantData, setRestaurantData] = useState([])
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([])
    const [data, setData] = useState('')

    const isOnline = useOnline()

    const inputData = (e) => {
        setData(e.target.value)
    }

    useEffect(() => {
        getApi()
    }, [])

    async function getApi() {
        const data = await fetch(RESTAURANT_LIST);
        const json = await data.json();
        setRestaurantData(json?.data?.cards[2]?.data?.data?.cards)

        setFilteredRestaurantData(json?.data?.cards[2]?.data?.data?.cards)
        console.log(json.data.cards[2]?.data?.data?.cards)
    }
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
    }, [])

    if (!filteredRestaurantData) return null;


    return (

        <>

            <div className="p-2 h-12 bg-teal-700 flex justify-center items-center border-4 gap-2  ">
                <input
                    className=" appearance-none rounded-md border-2 "
                    type={'text'}
                    value={data}
                    onChange={(e) => inputData(e)}
                />
                <button className="text-white rounded-md border-2 w-16 " onClick={() => {
                    const fillData = filterAll(data, restaurantData);
                    setFilteredRestaurantData(fillData)
                    console.log(fillData, 'data')
                }}>Search  </button>
            </div>
            {isOnline ?
                (
                    <div className="flex flex-wrap justify-center ">
                        {restaurantData?.length === 0 ? <ShimmerUi /> : (

                            filteredRestaurantData.length === 0 ? <h1>Not found product</h1> :
                                filteredRestaurantData.map((restaurant) => {
                                    return <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />

                                })
                        )}
                    </div>
                )
                :
                <h1>You are offline now</h1>
            }
        </>
    )
}

export default Body