import { resList } from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restaurantList, setRestaurantList]= useState(resList );
    console.log(restaurantList)
    return(
        <>
        <div className="main-container">
        <div className="search-container">
            <input type="text" className="search-box"></input>
            <button className="search-button">Search</button>
            <button className="search-button" onClick={()=>{filteredList=restaurantList.filter(
                res=>res?.data?.avgRating>=4)
                setRestaurantList(filteredList)}}>Top Rated</button>
        </div>
        <div className="res-container">
          {restaurantList.map((res) =>{
              return <RestaurantCard {...res.data} key={res?.data?.id}/>
          })}
        </div>        
        </div>
        </>
    )
}

export default Body;
