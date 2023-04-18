import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardImage_CDN } from "../constants";
import ShimmerUi from './ShimmerUi'

export const RestaurantMenu = () => {

  const { id } = useParams();
  const [restaurantData, setRestaurantdata] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  console.log(id)

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // const getRestaurantInfo = async () =>{
  //   const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.8969727&lng=76.41581289999999&restaurantId=${id}&submitAction=ENTER`)
  //   const json = await data.json() 
  //    setIsLoading(false)
  //   setRestaurantdata(json.data.cards)
  //   console.log(json.data)
  // }
 

  const getRestaurantInfo = async () => {
    let response, jsonResponse;
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.8969727&lng=76.41581289999999&restaurantId=${id}&submitAction=ENTER`);
      jsonResponse = response.ok ? await response.json() : await Promise.reject(response.status)
      setRestaurantdata(jsonResponse.data.cards)
      setIsLoading(false)
    } catch (e) {
      console.log("Error occurred")
    }

  };



  const imageId = restaurantData[0]?.card?.card?.info?.cloudinaryImageId
  const imageUrl = imageId && CardImage_CDN + imageId
  const menuItems = restaurantData[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards

  return (


    <div className="restaurantMenu">
      {isLoading ? <ShimmerUi /> : (
        <>

          <img src={CardImage_CDN + restaurantData[0]?.card?.card?.info?.cloudinaryImageId} alt={'restaurantMenu'} className="restaurant-image" />

          <h1 className="restaurantName">{restaurantData[0]?.card?.card?.info?.name}</h1>
          <h3 >Menu Items</h3>
          <ul>
            {
              menuItems?.map((menuItem, index) => {
                return (
                  <li key={index} className="menu-list">{menuItem?.card?.info?.name} - 
                  Rs.{menuItem?.card?.info?.price
                  }</li> 
                )
              })
            }
          </ul>
        </>
     )} 

    </div>


  );
};
