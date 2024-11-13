import { CheckCircle } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import solarPanel from '@/assets/solarpanel.png'
import { Link } from "react-router-dom";
import { AppContext } from "@/shared/contexts/AppContext";

export const Results = () => {
    const [resultsText, setResultsText] = useState<string>('');
    const [resultsImage, setResultsImage] = useState<string>('');

    const {emissionTotal, setEmissionTotal} = useContext(AppContext);

    useEffect(() => {
        if (emissionTotal === 0) {
            setEmissionTotal(200); // Example value, should be replaced with the value from the API
        }
        console.log(emissionTotal);

        if (emissionTotal < 10) {
            setResultsText('Baixo');
            setResultsImage(solarPanel);
        } else if (emissionTotal < 100) {
            setResultsText('Médio');
            setResultsImage(solarPanel);
        } else {
            setResultsText('Identificamos que seu uso de energia está bem acima da média, recomendamos que você instale placas solares, para ajudar tanto no valor da conta, quanto o meio ambiente!');
            setResultsImage(solarPanel);
        }

    }, []);


    return (
        <div className="flex flex-col items-center w-full gap-4">
            <div className="flex items-center justify-center w-full bg-black/50 mt-10">
                <CheckCircle size={110} className='rounded-full p-2 mr-10 text-white bg-green'/>
                <h1 className=" text-white text-6xl font-bold">RESULTADOS</h1>
            </div>
            <div className='flex flex-col flex-1 justify-center max-w-[1300px]'>
                <div className="flex items-center justify-center bg-green gap-4 rounded-xl py-4 mb-[-12px] z-10">
                    <span className="text-white font-semibold text-3xl">Sua Emissão de Gás CO2 é de:</span>
                    <span className="text-white font-semibold text-5xl">{emissionTotal}</span>
                </div>
                <div className="flex bg-lightgray/75 rounded-3xl pb-3 pr-8">
                    <img src={resultsImage} className="p-6 w-[450px]" />
                    <div className="flex flex-col mt-6 justify-between">
                        <p className="text-2xl font-semibold">{resultsText}</p>
                        <div className="flex flex-col text-xl gap-3">
                            <span className="border-b border-dark font-semibold">Fonte</span>
                            <span className="border-b border-dark">Eletricidade</span>
                            <span className="border-b border-dark">Gás</span>
                            <span className="border-b border-dark">Transporte</span>
                            <span className="border-b border-dark">Reciclagem</span>
                        </div>
                        <Link to="/ranking" className="self-end">
                            <button className="bg-blue text-white text-xl px-16 py-3 rounded-full mr-14 hover:bg-blue/75">
                                COMPARE
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};