import { createContext, ReactNode, useState } from "react";

type CalculatorContextType = {
    electricity: string;
    gas: string;
    fuel: string;
    fuelEfficiency: string;
    publicTransport: string;
    recycling: string;
    setElectricity: (value: string) => void;
    setGas: (value: string) => void;
    setFuel: (value: string) => void;
    setFuelEfficiency: (value: string) => void;
    setPublicTransport: (value: string) => void;
    setRecycling: (value: string) => void;
}


export const CalculatorContext = createContext({} as CalculatorContextType);

export const CalculatorProvider = ({children}: {children: ReactNode}) => {
    const [electricity, setElectricity] = useState('');
    const [gas, setGas] = useState('');
    const [fuel, setFuel] = useState('');
    const [fuelEfficiency, setFuelEfficiency] = useState('');
    const [publicTransport, setPublicTransport] = useState('');
    const [recycling, setRecycling] = useState('');

    return (
        <CalculatorContext.Provider 
            value={{
                electricity,
                gas,
                fuel,
                fuelEfficiency,
                publicTransport,
                recycling,
                setElectricity,
                setGas,
                setFuel,
                setFuelEfficiency,
                setPublicTransport,
                setRecycling
            }}
        >
            {children}
        </CalculatorContext.Provider>
    )
}