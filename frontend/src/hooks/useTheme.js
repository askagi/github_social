import { ThemeContextCustom } from "../contexts/ThemeContextCustom";
import { useContext } from "react";

export function useTheme() {
    return useContext(ThemeContextCustom)
}