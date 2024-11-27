import { useContext, useEffect, useState } from "react";
import { api } from "@/shared/services/api";
import { AppContext } from "@/shared/contexts/AppContext";
import { Envelope } from "@phosphor-icons/react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS, registerables} from 'chart.js';

ChartJS.register(...registerables);

interface RankingDataItem {
    name: string;
    result: number;
}

export const Ranking = () => {
    const [rankingData, setRankingData] = useState<RankingDataItem[]>([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    //TODO: Fazer o grafico, vai ter que ter um contexto para ter o valor do usuario, e depois injetar no rankingData, o contexto deve mudar o valor quando o usuario calcular de novo

    const {emissionTotal} = useContext(AppContext)

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        result: 0,
    });

    useEffect(() => { //Pega os dados do banco de dados
        const fetchRankingData = async () => {
            try {
                const response = await api.get('/user/');
                const tempData: RankingDataItem[] = response.data;
                

                if (tempData.some(item => item.name === 'Você')) {
                    delete tempData[tempData.findIndex(item => item.name === 'Você')];
                }
                if (emissionTotal != 0) {
                    tempData.push({ name: 'Você', result: emissionTotal });
                }

                tempData.sort((b, a) => b.result - a.result);

                setRankingData(tempData);

            } catch (error) {
                console.error(error);
            }
        }
        fetchRankingData();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //Manda dados para o banco de dados
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({...formData, result: emissionTotal});

        const fetchData = async () => {
            const requestData = {
                nome: formData.nome,
                email: formData.email,
                result: emissionTotal,
            }
            const response = await api.post('/user/', requestData);
            console.log(response.data);
            
            setFormData({
                nome: '',
                email: '',
                result: 0,
            });

            setIsFormSubmitted(true);
        }

        fetchData();

    };

    const voceIndex = rankingData.findIndex(item => item.name === "Você");


    return (
        <div className="flex flex-col w-full items-center">
            <span></span>
            <div className="flex gap-32 my-8">
                <div className="flex w-[600px] overflow-hidden min-h-[400px]">
                    <RankingChart data={rankingData} />
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
                                    <span>{item.result}</span>          
                                </div>
                            ))}                        
                        </div>
                        <div className="border-t border-dark h-3"></div>
                        <div className="flex justify-between px-5 py-2 bg-lightgreen text-2xl pt-2 mb-4">
                            <span>{voceIndex + 1}</span>
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
                            <span>ecoimpactooficial@gmail.com</span>
                        </div>
                    </div>
                    <span className="text-white text-3xl pl-40">Envie seu Resultado para nós! -</span>
                    <form className="flex flex-col gap-6 mb-8" onSubmit={handleSubmit}>
                        {isFormSubmitted && <span className="text-lightgreen text-xl">Formulário enviado com sucesso!</span>}
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Nome Completo" 
                            className="w-96 h-10 bg-transparent border border-lightgray rounded text-white" 
                            value={formData.nome}
                            onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        />
                        <input 
                            type="text" 
                            name="email"
                            placeholder="Email" 
                            className="w-96 h-10 bg-transparent border border-lightgray rounded text-white"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <button type="submit" className="bg-lightgray rounded h-10 text-xl active:bg-lightgray/75">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


interface RankingChartProps {
    data: {
        name: string;
        result: number;
    } [];
}

const RankingChart = ({data}: RankingChartProps) => {
  const [chartKey, setChartKey] = useState<number>(0);

  useEffect(() => {
    setChartKey(prevKey => prevKey + 1);
  }, [data]);

  const backgroundColors = data.map((item) => 
    item.name === 'Você' ? '#1e90ff' : '#b9feb9' // Change the color of the first bar as an example
 );

  const borderColors = data.map((item) =>
    item.name === 'Você' ? '#1e90ff' : '#009200' // Change the color of the first bar as an example
 );

  return (
    <div className="h-full w-full bg-white border-4 border-green rounded-lg">
        <Bar
            key={chartKey} 
            data={{
                labels: data.map(item => item.name),
                datasets: [
                    {
                        type: 'bar',
                        label: 'Emissão de CO2',
                        data: data.map(item => item.result),
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 2
                    },
                ],
            }} 
            options={{
                responsive: true,
                maintainAspectRatio: false,
            }} 
        />
    </div>
  )
}