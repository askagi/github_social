import { createContext } from 'react';
import { useThemeProvider } from '../hooks/useTheme/useThemeProvider';

export const ThemeContextCustom = createContext({})

export function ThemeProviderCustom(props) {
    const themeProvider = useThemeProvider();

    return (
        <ThemeContextCustom.Provider value={themeProvider}>
            {props.children}
        </ThemeContextCustom.Provider>
    )
}