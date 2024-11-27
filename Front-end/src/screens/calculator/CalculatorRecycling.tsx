import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "./context/CalculatorContext";
import { ProgressBar } from "@/components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import { NextButton, SubmitButton } from "./components/NextButton";
import { api } from "@/shared/services/api";
import { AppContext } from "@/shared/contexts/AppContext";

export const CalculatorRecycling = () => {
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    const {electricity, fuel, fuelEfficiency, gas, publicTransport, recycling, setRecycling, setWorstSector} = useContext(CalculatorContext);
    const {setEmissionTotal} = useContext(AppContext);

    const navigate = useNavigate(); 

    function handleSubmitToAPI() {
        if (electricity === '' || fuel === '' || fuelEfficiency === '' || gas === '' || publicTransport === '' || recycling === '') {
            setIsFieldEmpty(true);
        } else {
            setIsFieldEmpty(false);

            const fetchData = async () => {
                const requestData = {
                    electricity: electricity,
                    ConsumoGasM3: gas,
                    ConsumoCombustivelLitros : fuel,
                    onsumoVeiculoKmPorLitro: fuelEfficiency,
                    TransportePublicoKm: publicTransport,
                    PraticasReciclagem: recycling
                }
                const response = await api.post('/calculator/', requestData);
                console.log(response.data);
                
                setEmissionTotal(response.data.result);
                setWorstSector(response.data.worstSector);

                navigate('/resultados');
            }
            fetchData();         
        }
        
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
                        type="number"  
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