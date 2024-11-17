import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";
import { NextButton } from "./components/NextButton";
import { Link } from "react-router-dom";

export const CalculatorEnergy = () => {
    const {electricity, setElectricity} = useContext(CalculatorContext);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-white">Calculadora de Energia</h1>
            <p className="mt-2 text-white">Insira seu consumo MENSAL de energia elétrica em kWh. Veja onde encontrar essa informação na sua conta de energia elétrica</p>
                <input  
                    placeholder="0" 
                    value={electricity} 
                    onChange={(e) => setElectricity(e.target.value)} 
                />
            <Link to="/calculadora-gas">
                <NextButton />
            </Link>
        </div>
    );
}