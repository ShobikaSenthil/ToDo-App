import React from "react";
import {Routes,Route} from "react-router-dom"
import { createContext,useState } from "react";
import "./style.css";
import A from "./A";
import B from "./B";
import C from"./C";


export const ThemeContext = createContext(null);
const ThemeContextProvider = ThemeContext.Provider;

const MainRoute = () =>
{
    const [theme,setTheme] = useState("light"); 

    const toggleTheme = ()=>
    {
        setTheme((prev)=>(prev === 'light'? "dark":"light"));
    };
    return(
    <ThemeContextProvider value={{theme,toggleTheme}}>
    <Routes>
          <Route path="/A" element={<A />} />
          <Route path="/B" element={<B />} />
          <Route path="/C" element={<C />} />
         
    </Routes>
    </ThemeContextProvider>
    )
}
export default MainRoute;