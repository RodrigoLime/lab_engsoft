import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";
import { Link } from "react-router-dom";
import { NextButton } from "./components/NextButton";

export const CalculatorTransport = () => {
    const {fuel, fuelEfficiency, publicTransport, setFuel, setFuelEfficiency, setPublicTransport} = useContext(CalculatorContext);

    return (
        <div className="flex flex-col items-center">
            <p className="mt-2 text-white">Insira quantos litros de combustível você usa no mês com seu carro/moto pessoal.</p>
                <input 
                    placeholder="0" 
                    value={fuel} 
                    onChange={(e) => setFuel(e.target.value)} 
                />

                <p className="mt-2 text-white">Insira quantos km/l seu carro/moto costuma fazer em média.</p>
                <input 
                    placeholder="0" 
                    value={fuelEfficiency} 
                    onChange={(e) => setFuelEfficiency(e.target.value)} 
                />

                <p className="mt-2 text-white">Insira quantos quilômetros você costuma andar de transporte público no mês.</p>
                <input 
                    placeholder="0" 
                    value={publicTransport} 
                    onChange={(e) => setPublicTransport(e.target.value)} 
                 />
                <Link to="/calculadora-reciclagem">
                    <NextButton />
                </Link>
        </div>
    );
}