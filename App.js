import React from "react";
import ReactDOM from "react-dom/client";

function getdata(){
        
}

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://images.designtrends.com/wp-content/uploads/2016/03/28110718/Restaurant-Logo-Design.jpg"
          alt="logo"
        />
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard=()=>{
    return(
        <>
        <div className="res-card">
            <img src="food.jpg" alt="logo"/>
            <h3>Name</h3>
            <p>Rating</p>
            <p>Cusine</p>
        </div>
        </>
    )
}
//When you want to pass dynamic data to a component pass it as a prop.
const RestaurantContainer = ()=>{
  return(
    <div className="res-container">
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    </div>
  )
}
const Body = () => {
    return(
        <>
        <div className="main-container">
        <div className="search-container">
            <input type="text" className="search-box"></input>
            <button className="search-button">Search</button>
        </div>
        <RestaurantContainer/>
        </div>
        </>
    )
}

const App = () => {
  return (
    <>
      <Header />
      <Body/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
