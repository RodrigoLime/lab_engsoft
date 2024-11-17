import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";
import { Link } from "react-router-dom";
import { NextButton } from "./components/NextButton";

export const CalculatorGas = () => {
    const {gas, setGas} = useContext(CalculatorContext);

    return (
        <div className="flex flex-col items-center">
            <p className="mt-2 text-white">Insira seu consumo MENSAL de gás em m³. Veja onde encontrar essa informação na sua conta de gás.</p>
                <input 
                    placeholder="0" 
                    value={gas} 
                    onChange={(e) => setGas(e.target.value)} 
                />
            <Link to="/calculadora-transporte">
                <NextButton />
            </Link>
        </div>
    );
}