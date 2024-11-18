import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";
import { Link } from "react-router-dom";
import { NextButton } from "./components/NextButton";
import { ProgressBar } from "@/components/ProgressBar";

export const CalculatorTransport = () => {
    const {fuel, fuelEfficiency, publicTransport, setFuel, setFuelEfficiency, setPublicTransport} = useContext(CalculatorContext);

    return (
        <div className="flex flex-col items-center w-full gap-10">
            <div className="mt-12 w-full">
                <ProgressBar progress={2} />
            </div>
            <div className="flex gap-20">
                <div className="flex flex-col items-center max-w-[650px]">
                    <h1 className="flex justify-center text-white bg-blue w-full rounded-xl px-12 py-4 text-2xl">Quanto você gasta com combustíveis?</h1>
                    <div className="flex flex-col justify-center items-center gap-8 bg-lightgray rounded-xl pb-12">
                        <p className="mt-4 px-8 text-dark">Insira quantos litros de combustível você usa no mês com seu carro/moto pessoal.</p>
                        <input  
                            type="number"
                            min="0"
                            placeholder="0" 
                            value={fuel} 
                            onChange={(e) => setFuel(e.target.value)}
                            className="flex w-5/6 p-4 text-2xl bg-white rounded-xl border border-dark" 
                        />
                        <p className="px-8 text-dark">Insira quantos km/l seu carro/moto costuma fazer em média.</p>
                        <input  
                            type="number"
                            min="0"
                            placeholder="0" 
                            value={fuelEfficiency} 
                            onChange={(e) => setFuelEfficiency(e.target.value)}
                            className="flex w-5/6 p-4 text-2xl bg-white rounded-xl border border-dark" 
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center max-w-[650px]">
                    <h1 className="flex justify-center text-white bg-blue w-full rounded-xl px-12 py-4 text-2xl text-center">Quanto você gasta com combustíveis, no transporte público?</h1>
                    <div className="flex flex-col justify-center items-center gap-14 bg-lightgray rounded-xl w-full">
                        <p className="mt-4 px-8 text-dark">Insira quantos quilômetros você costuma andar de transporte público no mês.</p>
                        <input  
                            type="number"
                            min="0"
                            placeholder="0" 
                            value={publicTransport} 
                            onChange={(e) => setPublicTransport(e.target.value)}
                            className="flex w-5/6 p-4 text-2xl bg-white rounded-xl border border-dark" 
                        />
                        <Link to="/calculadora-reciclagem" className="mb-8">
                            <NextButton />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}