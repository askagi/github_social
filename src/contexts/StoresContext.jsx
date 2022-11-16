import { createContext } from "react";
import { useStoresProvider } from "../hooks/useStores/useStoresProvider";

export const StoresContext = createContext({});

export function StoresProvider(props) {
    const storesProvider = useStoresProvider();

    return (
        <StoresContext.Provider value={storesProvider}>
            {props.children}
        </StoresContext.Provider>
    )
}