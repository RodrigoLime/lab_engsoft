import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";
import { Link } from "react-router-dom";
import { NextButton } from "./components/NextButton";
import { ProgressBar } from "@/components/ProgressBar";

export const CalculatorGas = () => {
    const {gas, setGas} = useContext(CalculatorContext);

    return (
        <div className="flex flex-col items-center w-full gap-10">
            <div className="mt-12 w-full">
                <ProgressBar progress={1} />
            </div>
            <div className="flex flex-col items-center max-w-[650px]">
                <h1 className="flex justify-center text-white bg-blue w-full rounded-xl px-12 py-4 text-2xl">Qual seu consumo mensal de gás em m³?</h1>
                <div className="flex flex-col justify-center items-center gap-20 bg-lightgray rounded-xl">
                    <p className="mt-4 px-8 text-dark">Insira seu consumo MENSAL de gás em m³. Veja onde encontrar essa informação na sua conta de gás.
                    </p>
                    <input  
                        type="number"
                        min="0"
                        placeholder="0" 
                        value={gas} 
                        onChange={(e) => setGas(e.target.value)}
                        className="flex w-5/6 p-4 text-2xl bg-white rounded-xl border border-dark" 
                    />
                    <Link to="/calculadora-transporte" className="mb-6">
                        <NextButton />
                    </Link>
                </div>
            </div>
        </div>
    );
}