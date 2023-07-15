import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [logBtn,setLogBtn]= useState("Login")
    return (
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <button className="log-btn" onClick={()=>{return logBtn==="Login"?setLogBtn("Logout"):setLogBtn("Login")}}>{logBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;