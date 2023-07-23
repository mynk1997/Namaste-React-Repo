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
            <div className="main-container ">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}></input>
                    <button className="search-button px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const serachList = restaurantList.filter(res => res.data.name.toLowerCase().includes(searchText));
                        setFilteredRestaurants(serachList)
                    }}>Search</button>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        filteredList = restaurantList.filter(
                            res => res?.data?.avgRating >= 4)
                        setFilteredRestaurants(filteredList)
                    }}>Top Rated</button>
                </div>
                <div className="res-container flex flex-wrap">
                    {filteredRestaurants.map((res) => {
                        return <Link to={"/restaurant/"+res.data.id}  key={res?.data?.id} ><RestaurantCard {...res.data}/></Link>;
                    })}
                </div>
            </div>
        </>
    )
}

export default Body;
