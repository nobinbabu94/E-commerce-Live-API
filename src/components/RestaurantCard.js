import { Link } from "react-router-dom";
import { CardImage_CDN } from "../constants";


const RestaurantCard = ({ name, cloudinaryImageId
    , id, cuisineslastMileTravel, lastMileTravelString, cuisines }) => {

    return (

        <>
        <Link style={{textDecoration:'none'}} to={'/restaurantmenu/'+id}>
            <div className='card'>
                <img  src={CardImage_CDN + cloudinaryImageId} />
                <h2>{name}</h2>
                <h4>{cuisines}</h4>
                <h4>{lastMileTravelString}</h4>


            </div>
            </Link>

        </>
    )
}

export default RestaurantCard;