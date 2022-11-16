import { StoresContext } from "../../contexts/StoresContext";
import { useContext } from "react";

export function useStores() {
    return useContext(StoresContext)
}