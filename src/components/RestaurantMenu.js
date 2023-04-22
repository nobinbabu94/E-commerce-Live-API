import React, { useEffect, useState } from "react";
import { CardImage_CDN } from "../constants";
import ShimmerUi from './ShimmerUi'
import useRestaurant from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {

  const {restaurantData, isLoading} = useRestaurant()
  console.log(restaurantData,'loading')

  const imageId = restaurantData[0]?.card?.card?.info?.cloudinaryImageId
  const imageUrl = imageId && CardImage_CDN + imageId
  const menuItems = restaurantData[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  const restaurantName = restaurantData[0]?.card?.card?.info?.name

  return (


    <div className="restaurantMenu">
      {!isLoading ? <ShimmerUi /> : (
        <>

          <img src={CardImage_CDN + restaurantData[0]?.card?.card?.info?.cloudinaryImageId} alt={'restaurantMenu'} className="restaurant-image" />

          <h1 className="restaurantName">{restaurantName}</h1>
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
