import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResInfo from "../utils/useResInfo";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo= useResInfo(resId);
    if (resInfo===null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => { return <li key={item?.card?.info?.id}>{item?.card?.info?.name}- {" Rs."}{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li> })}
            </ul>
        </div>
    )
}

export default RestaurantMenu