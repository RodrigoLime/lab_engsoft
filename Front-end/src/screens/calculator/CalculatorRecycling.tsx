import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "./context/CalculatorContext";
import { ProgressBar } from "@/components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import { NextButton, SubmitButton } from "./components/NextButton";

export const CalculatorRecycling = () => {
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    const {electricity, setElectricity, fuel, setFuel, fuelEfficiency, setFuelEfficiency, gas, setGas, publicTransport, setPublicTransport, recycling, setRecycling} = useContext(CalculatorContext);

    const navigate = useNavigate(); 

    function handleSubmitToAPI() {
        if (electricity === '' || fuel === '' || fuelEfficiency === '' || gas === '' || publicTransport === '' || recycling === '') {
            setIsFieldEmpty(true);
        } else {
            setIsFieldEmpty(false);
            // send data to API
            navigate('/resultados');
        }

        // const requestData = {
        //     electricity: electricity,
        //     fuel: fuel,
        //     fuelEfficiency: fuelEfficiency,
        //     gas: gas,
        //     publicTransport: publicTransport,
        //     recycling: recycling
        // }
        
    }


    return (
        <div className="flex flex-col items-center w-full gap-10">
            <div className="mt-12 w-full">
                <ProgressBar progress={3} />
            </div>
            <div className="flex flex-col items-center max-w-[650px]">
                <h1 className="flex justify-center text-white bg-blue w-full rounded-xl px-12 py-4 text-2xl">Quantas vezes por mês você costuma reciclar?</h1>
                <div className="flex flex-col justify-center items-center gap-20 bg-lightgray rounded-xl min-w-[600px]">
                    <p className="mt-4 px-8 text-dark">Insira quantas vezes por mês você costuma reciclar.</p>
                    <input  
                        placeholder="0" 
                        value={recycling} 
                        onChange={(e) => setRecycling(e.target.value)}
                        className="flex w-5/6 p-4 text-2xl bg-white rounded-xl border border-dark" 
                    />
                     {isFieldEmpty && <p className="text-red-600 text-xl">Por favor, preencha todos os campos de emissão!</p>}
                    <div className="mb-6">
                        <SubmitButton onClick={handleSubmitToAPI} />
                    </div>
                </div>
            </div>
        </div>
        
    );
}