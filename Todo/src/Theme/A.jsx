
import React from "react";
import ReactSwitch from "react-switch";
import "./style.css";
import { useContext } from "react";
import { ThemeContext } from "./MainRoute";
import { Link } from "react-router-dom";


const A =()=>
{
    const {theme,toggleTheme} = useContext(ThemeContext);
    return(
    <div className="container" id={theme}>
        <div className='mode'>
        <div>
        <label>
          {theme === "light" ? "Light Mode": "Dark Mode"}
        </label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        
      </div>
      <div>
        <h1>I am Component A</h1>
        <h2><Link to="/B">B</Link></h2>
        <br></br><br></br>
        <h2><Link to="/C">C</Link></h2>
        </div>

     </div>
    
    )
}

export default A;