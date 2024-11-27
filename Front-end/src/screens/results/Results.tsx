import { CheckCircle } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import solarPanel from '@/assets/solarpanel.png'
import bus from '@/assets/bus.png'
import pipe from '@/assets/pipe.png'
import recycle from '@/assets/recycle.png'
import { Link } from "react-router-dom";
import { AppContext } from "@/shared/contexts/AppContext";
import { CalculatorContext } from "../calculator/context/CalculatorContext";

export const Results = () => {
    const [resultsText, setResultsText] = useState<string>('');
    const [resultsImage, setResultsImage] = useState<string>('');

    const {emissionTotal} = useContext(AppContext);

    const { electricity, fuel, gas, recycling, worstSector } = useContext(CalculatorContext);

    useEffect(() => {
        console.log(emissionTotal);

        if (worstSector === ('Energia')) {
            setResultsText('Identificamos que seu uso de energia está bem acima da média, recomendamos que você instale placas solares, para ajudar tanto no valor da conta, quanto o meio ambiente!');
            setResultsImage(solarPanel);
        } else if (worstSector === ('Gás')) { 
            setResultsText('Identificamos que seu uso de gas está bem acima da média, recomendamos reduzir o seu consúmo de gás e manter um ambiente mais verde! Um encanador pode te ajudar a resolver esse problema');
            setResultsImage(pipe);
        } else if (worstSector === ('Combustível')) {
            setResultsText('Identificamos que você anda utilizando muito transporte público, recomendamos que você comece a utilizar mais transporte público para ajudar o meio ambiente');
            setResultsImage(bus);
        } else if (worstSector === ('Reciclagem')) {
            setResultsText('Identificamos que você anda reciclando pouco, recomendamos seguir mais práticas de reciclagem como jogar o lixo no lugar adequado');
            setResultsImage(recycle);
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
                            <div className="border-b border-dark font-semibold">
                                <span>Fonte</span>
                            </div>
                            <div className="flex border-b border-dark gap-4">
                                <span>Eletricidade:</span>
                                <span>{electricity}</span>
                            </div>
                            <div className="flex border-b border-dark gap-4">
                                <span>Gás:</span>
                                <span>{gas}</span>
                            </div>
                            <div className="flex border-b border-dark gap-4">
                                <span>Transporte:</span>
                                <span>{fuel}</span>
                            </div>
                            <div className="flex border-b border-dark gap-4">
                                <span>Reciclagem:</span>
                                <span>{recycling}</span>
                            </div> 
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