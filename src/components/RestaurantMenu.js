import React, { useEffect, useState } from "react";
import { CardImage_CDN } from "../constants";
import ShimmerUi from './ShimmerUi'
import useRestaurant from "../utils/useRestaurantMenu";
import { ADD_ITEM } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export const RestaurantMenu = () => {

  const { restaurantData, isLoading } = useRestaurant()
  const dispatch = useDispatch();


  const imageId = restaurantData[0]?.card?.card?.info?.cloudinaryImageId
  const imageUrl = imageId && CardImage_CDN + imageId
  const menuItems = restaurantData[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards ?
    restaurantData[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards :
    restaurantData[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card.itemCards
  const restaurantName = restaurantData[0]?.card?.card?.info?.name
  console.log()

  const handleAddToCart = (menuItem) =>{
    dispatch(ADD_ITEM(menuItem))
  }

  return (


    <div className="flex flex-col items-center p-10 justify-center bg-gray-200 w-full">
      {!isLoading ? <ShimmerUi /> : (
        <>

          <img className="rounded-3xl" src={CardImage_CDN + restaurantData[0]?.card?.card?.info?.cloudinaryImageId}
            alt={'restaurantMenu'} />
          <h1 className="text-red-700 text-2xl font-serif font-bold p-5 underline">{restaurantName}</h1>
          <h3 className="font-bold text-teal-950 pb-3">Menu Items</h3>
          <div className="flex flex-wrap justify-arount bg-gray-300 rounded-xl m-5 p-2">
            {
              menuItems?.map((menuItem, index) => {
                // console.log(menuItem?.card,'price');
                return (

                  <>
                    <ul key={menuItem?.card?.info?.id} className="flex flex-col m-2 p-2 w-60">
                      <li className="flex flex-wrap">{menuItem?.card?.info?.name}</li>
                      <li className="font-bold">Rs.{menuItem?.card?.info?.price ? menuItem?.card?.info?.price / 100 : menuItem?.card?.info?.defaultPrice / 100
                      }.00</li>
                    </ul>
                    <button key={index} onClick={()=>handleAddToCart(menuItem)} className="bg-teal-700 rounded-lg text-white m-2 p-2 w-32">Add to cart</button>
                  </>

                )
              })
            }
          </div>
        </>
      )}

    </div>


  );
};
