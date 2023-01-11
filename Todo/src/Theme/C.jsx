import ReactSwitch from "react-switch";
import { useContext} from "react";
import { ThemeContext } from "./MainRoute";
import { Link } from "react-router-dom";
import './style.css'
const C=()=>
{
    const {theme,toggleTheme} = useContext(ThemeContext);
   
    console.log(theme);
    return(
        <div className="container" id={theme}>
           
            
            <div className='mode'>
            <label>
                {theme === "light" ? "Light Mode": "Dark Mode"}
            </label>
           
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
            </div>
            <div>
            <h1>I am Component C</h1>
            <Link to="/A">A</Link>
            <br></br><br></br>
            <Link to="/B">B</Link>
            </div>
        </div>
    )
}
export default C;

