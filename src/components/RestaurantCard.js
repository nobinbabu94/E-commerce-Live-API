import { CardImage_CDN, RestaurantList } from "../constants"

const RestaurantCard = () => {
    console.log(RestaurantList[0].data)

    
    return (
        <div className="cardList">
            {/* <img src={imges+RestaurantList[0].data.cloudinaryImageId} /> */}
            {
                RestaurantList.map((restaurant) => {
                    const { name, cloudinaryImageId
                        , id, cuisineslastMileTravel } = restaurant.data;
                    return (
                        <div key={id} className='card'>
                            <img width={'100%'} src={CardImage_CDN + cloudinaryImageId} />
                            <h2>{name}</h2>
                            <h4>{cuisineslastMileTravel}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RestaurantCard