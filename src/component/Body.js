import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useShowOnline from "../utils/useShowOnline";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log(restaurantList)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        setRestaurantList(json?.data?.cards[2].data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2].data?.data?.cards);

    };
    const status=useShowOnline();
    if(status==false) return <h1>Looks like you are Offline. Please check you Internet.</h1>
    if (restaurantList.length === 0) {
        return <Shimmer />
    }
    return (
        <>
            <div className="main-container">
                <div className="search-container">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                    <button className="search-button" onClick={() => {
                        const serachList = restaurantList.filter(res => res.data.name.toLowerCase().includes(searchText));
                        setFilteredRestaurants(serachList)
                    }}>Search</button>
                    <button className="search-button" onClick={() => {
                        filteredList = restaurantList.filter(
                            res => res?.data?.avgRating >= 4)
                        setFilteredRestaurants(filteredList)
                    }}>Top Rated</button>
                </div>
                <div className="res-container">
                    {filteredRestaurants.map((res) => {
                        return <Link to={"/restaurant/"+res.data.id}  key={res?.data?.id} ><RestaurantCard {...res.data}/></Link>;
                    })}
                </div>
            </div>
        </>
    )
}

export default Body;
