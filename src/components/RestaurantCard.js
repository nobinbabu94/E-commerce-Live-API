import { Link } from "react-router-dom";
import { CardImage_CDN } from "../constants";


const RestaurantCard = ({ name, cloudinaryImageId
    , id, cuisineslastMileTravel, lastMileTravelString, cuisines }) => {

    return (

        <>
        <Link style={{textDecoration:'none'}} to={'/restaurantmenu/'+id}>
            <div className='flex-wrap flex-col h-80 w-60 p-3 shadow-lg rounded-lg gap-10 : hover:bg-slate-200 '>
                <img  src={CardImage_CDN + cloudinaryImageId} /> 
                <h2 className="font-extrabold mt-3">{name}</h2>
                <h4 className='flex-col mt-3'>{cuisines.join(" , ")}</h4>
                <h4>{lastMileTravelString}</h4>


            </div>
            </Link>

        </>
    )
}

export default RestaurantCard;