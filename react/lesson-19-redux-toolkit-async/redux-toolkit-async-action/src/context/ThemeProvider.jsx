import { useState, createContext } from "react";

export const themeContext = createContext("light");

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = ()=> setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");

    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider;