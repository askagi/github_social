import { useState } from "react";

export function useThemeProvider() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    function handleTheme() {
        setIsDarkTheme(!isDarkTheme);
    }
    return {
        isDarkTheme,
        handleTheme,
    }
}