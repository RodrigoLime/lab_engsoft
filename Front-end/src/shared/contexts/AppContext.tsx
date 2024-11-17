import { createContext, ReactNode, useState } from "react";

type AppContextType = {
    emissionTotal: number;
    setEmissionTotal: (value: number) => void;
}


export const AppContext = createContext({} as AppContextType);

export const AppProvider = ({children}: {children: ReactNode}) => {
    const [emissionTotal, setEmissionTotal] = useState(0);
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