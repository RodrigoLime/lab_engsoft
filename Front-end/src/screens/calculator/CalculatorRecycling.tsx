import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";

export const CalculatorRecycling = () => {
    const {recycling, setRecycling} = useContext(CalculatorContext);

    return (
        <div className="flex flex-col items-center">
            <p className="mt-2 text-white">Insira quantas vezes por mês você costuma reciclar.</p>
                <input 
                    placeholder="0" 
                    value={recycling} 
                    onChange={(e) => setRecycling(e.target.value)} 
                />
        </div>
        
    );
}