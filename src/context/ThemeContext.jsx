import { createContext, useEffect, useReducer, useState } from "react";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true; // Default to true for dark mode
  };

const ThemeContext= createContext();

export const ThemeProvider=({children})=>{
    const [isDark, setIsDark]= useState(getInitialTheme)
    useEffect(()=>{
        localStorage.setItem("theme", JSON.stringify(isDark));
    },[isDark])
    
    return(
<ThemeContext.Provider value={{isDark, setIsDark}}>
{children}
</ThemeContext.Provider>
    )
}

export default ThemeContext;