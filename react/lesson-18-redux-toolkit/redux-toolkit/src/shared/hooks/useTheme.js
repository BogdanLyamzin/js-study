import { useContext } from "react";

import { themeContext } from "../../context/ThemeProvider";

const useTheme = ()=> {
    const context = useContext(themeContext);

    return context;
}

export default useTheme;