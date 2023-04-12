import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { CardImage_CDN } from "../constants";

export const RestaurantMenu = () => {

    const { id } = useParams();
    const [restaurantData, setRestaurantdata] = useState({})

    console.log(id)

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      const getRestaurantInfo = async () => {
        try {
          const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.8969727&lng=76.41581289999999&restaurantId=${id}&submitAction=ENTER`);
          const res_data = await response.json();
          setRestaurantdata(res_data.data)
        } catch (error) {
          console.log(error);
        }
      };
      console.log(restaurantData)
 

    // API ISSUE SO NOT FETCHED INFORMATION
    return (

        <div>
            <h1>API ISSUE SO NOT FETCHED INFORMATION</h1>
            {/* <h3>{restaurantData}</h3> */}

            <h1>{id}</h1>
            {/* <h1>{restaurantData.cards[0].cards.card.name}</h1> */}

        </div>

    );
};
