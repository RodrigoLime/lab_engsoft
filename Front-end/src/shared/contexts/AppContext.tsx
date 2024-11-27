import { createContext, ReactNode, useState, useEffect } from "react";

type AppContextType = {
    emissionTotal: number;
    setEmissionTotal: (value: number) => void;
}

export const AppContext = createContext({} as AppContextType);

export const AppProvider = ({children}: {children: ReactNode}) => {
    const [emissionTotal, setEmissionTotal] = useState<number>(() => {
        // Initialize state from local storage if available
        const storedValue = localStorage.getItem('emissionTotal');
        return storedValue ? parseFloat(storedValue) : 0;
    });

    useEffect(() => {
        // Store emissionTotal in local storage whenever it changes
        localStorage.setItem('emissionTotal', emissionTotal.toString());
    }, [emissionTotal]);

    return (
        <AppContext.Provider 
            value={{
                emissionTotal,
                setEmissionTotal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}