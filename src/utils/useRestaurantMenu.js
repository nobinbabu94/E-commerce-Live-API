
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRestaurant = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState({})
  const [isLoading, setIsLoading] = useState(false);
 


  useEffect(() => {
    getRestaurantInfo();
  }, []);


  const getRestaurantInfo = async () => {
    let response, jsonResponse;
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.8969727&lng=76.41581289999999&restaurantId=${id}&submitAction=ENTER`);
      jsonResponse = response.ok ? await response.json() : await Promise.reject(response.status)
      setRestaurantData(jsonResponse.data.cards)
      setIsLoading(true)
    } catch (e) {
      console.log("Error occurred")
    }

  };

  return { restaurantData, isLoading }


}
export default useRestaurant;