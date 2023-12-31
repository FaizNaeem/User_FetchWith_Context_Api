'use client'
import React ,{createContext, useState}from 'react'
 export  const ThemeContext = createContext()
 export default function ThemProvider({children}){
    const [theme, SetTheme] = useState({
        red :"red",
        yellow : "yellow"
    })
    return(
        <ThemeContext.Provider value={{theme,SetTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}