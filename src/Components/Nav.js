import React from "react";
import "./Nav.css";
import { AuthContext } from "./Context";
import { useContext } from "react";

function Nav(props) {
    const { setIsLoggedIn } = useContext(AuthContext);
    return (
      <div className="nav">
        <div id="title">
          <h2>React Context</h2>
        </div>
        <div id="menu">
          <p>Home</p>
          <p>Profile</p>
          <p>Products</p>
          <p>Support</p>
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
          <span style={{ marginLeft: "30px", color: "yellow", fontSize: "22px" }}>
            <b></b>
          </span>
        </div>
      </div>
    );
  }
  
  export default Nav;
