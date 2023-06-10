import { IMG_URL } from "../utils/constants";

const RestaurantCard=({name,cuisines,avgRating,costForTwoString,deliveryTime,cloudinaryImageId})=>{
    return(
        <>
        <div className="res-card">
            <img src={IMG_URL+ cloudinaryImageId} alt="logo"/>
            <h3>{name}</h3>
            <p>{cuisines?.join(", ")}</p>
            <p>{avgRating}</p>
            <p>{costForTwoString}</p>
            <p>{deliveryTime} mins</p> 
        </div>
        </>
    )
}

export default RestaurantCard;