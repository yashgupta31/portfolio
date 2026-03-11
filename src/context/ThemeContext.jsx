import { createContext, useEffect, useReducer, useState } from "react";

const getInitialTheme = () => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === null) return true; // Default to true for dark mode
      return JSON.parse(savedTheme);
    } catch {
      // Clear invalid value from localStorage
      localStorage.removeItem("theme");
      return true; // Default to true for dark mode
    }
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