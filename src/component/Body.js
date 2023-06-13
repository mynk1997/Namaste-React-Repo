import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList]= useState([]);
    console.log(restaurantList)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch(API_URL);
        const json=await data.json();
        setRestaurantList(json?.data?.cards[2].data?.data?.cards);
    };
    if(restaurantList.length===0){
        return <Shimmer/>
    }
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
