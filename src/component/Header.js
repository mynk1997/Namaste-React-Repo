import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useShowOnline from "../utils/useShowOnline";

const Header = () => {
  const status=useShowOnline();
  let [logBtn,setLogBtn]= useState("Login")
    return (
      <div className="header flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 items-center">
        <div className="logo">
          <img className="w-20"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              {status? "Online":"Offline"}
            </li>
            <li className="px-4">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
            <Link to="/contact">Contact</Link>
            </li>
            <button className="log-btn" onClick={()=>{return logBtn==="Login"?setLogBtn("Logout"):setLogBtn("Login")}}>{logBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;