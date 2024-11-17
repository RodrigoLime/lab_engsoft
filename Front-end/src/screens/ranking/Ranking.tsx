import { useContext, useEffect, useState } from "react";
import tempImg from "../../assets/solarpanel.png";
import { api } from "@/shared/services/api";
import { AppContext } from "@/shared/contexts/AppContext";
import { Envelope } from "@phosphor-icons/react";

const tempData = [
    {
        name: "João",
        score: 200,
    },
    {
        name: "Maria",
        score: 150,
    },
    {
        name: "José",
        score: 100,
    },
    {
        name: "Ana",
        score: 300,
    },
    {
        name: "Pedro",
        score: 10,
    },
    {
        name: "Carlos",
        score: 5,
    },
    {
        name: "Lucas",
        score: 50,
    },
    {
        name: "Mariana",
        score: 250,
    },
    {
        name: "Fernanda",
        score: 150,
    },
    {
        name: "Paulo",
        score: 100,
    },
    {
        name: "Luciana",
        score: 300,
    },
    {
        name: "Felipe",
        score: 10,
    },
    {
        name: "Carla",
        score: 5,
    },
    {
        name: "Luiz",
        score: 50,
    },
    {
        name: "Marta",
        score: 250,
    },
    {
        name: "Fernando",
        score: 150,
    },
    {
        name: "Paula",
        score: 100,
    },
    {
        name: "Lucas",
        score: 300,
    },
    {
        name: "Fernando",
        score: 10,
    },
    {
        name: "Luiz",
        score: 50,
    },
]


export const Ranking = () => {
    const [rankingData, setRankingData] = useState<any[]>([]);
    //TODO: Fazer o grafico, vai ter que ter um contexto para ter o valor do usuario, e depois injetar no rankingData, o contexto deve mudar o valor quando o usuario calcular de novo

    const {emissionTotal} = useContext(AppContext)

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        tempData.sort((a, b) => b.score - a.score);
        setRankingData(tempData);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        //TODO: Enviar o formData para o backend
    };


    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex gap-32 my-8">
                <div className="flex w-[600px] overflow-hidden">
                    <img src={tempImg} /> 
                </div>
                <div className="flex flex-col w-[600px] items-center">
                    <h1 className="flex items-center justify-center text-4xl py-3 mb-[-12px] z-10 rounded w-full bg-blue text-white">Ranking</h1>
                    <div className="flex flex-col bg-gray-100 w-full h-full px-8 pt-4 rounded-3xl ">
                        <div className="flex text-dark bg-lightgray justify-between px-2 py-1 text-3xl mt-4 mb-6">
                            <span>Posição</span>
                            <span>Nome</span>
                            <span>Emissão</span>
                        </div>
                        <div className="flex flex-col flex-1 gap-3 mb-4 overflow-y-auto max-h-[453px]">
                            {rankingData.map((item, index) => (
                                <div key={index} className="flex justify-between px-5 py-1 bg-lightgray text-2xl">
                                    <span>{index + 1}</span>
                                    <span>{item.name}</span>
                                    <span>{item.score}</span>          
                                </div>
                            ))}                        
                        </div>
                        <div className="border-t border-dark h-3"></div>
                        <div className="flex justify-between px-5 py-2 bg-lightgreen text-2xl pt-2 mb-4">
                            <span>100</span>
                            <span>Você</span>
                            <span>{emissionTotal}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full bg-black/70 justify-center">
                <div className="flex w-full justify-between max-w-[1328px] mt-6">
                    <div>
                        <span className="text-white text-xl">Contato</span>
                        <div className="text-white flex items-center gap-3 mt-6">
                            <Envelope size={50} weight="thin" />
                            <span>EcoImpacto@gmail.com</span>
                        </div>
                    </div>
                    <span className="text-white text-3xl pl-40">Envie seu Resultado para nós! -</span>
                    <form className="flex flex-col gap-6 mb-8" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Nome Completo" 
                            className="w-96 h-10 bg-transparent border border-lightgray rounded text-white" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <input 
                            type="text" 
                            name="email"
                            placeholder="Email" 
                            className="w-96 h-10 bg-transparent border border-lightgray rounded text-white"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <button type="submit" className="bg-lightgray rounded h-10 text-xl">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
