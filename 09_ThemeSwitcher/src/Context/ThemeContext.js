import { createContext } from 'react'

const ThemeContext=createContext({
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme: ()=>{}
})

const ThemeContextProvider=ThemeContext.Provider

export default ThemeContextProvider

export {ThemeContext}
