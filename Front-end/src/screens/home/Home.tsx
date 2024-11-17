import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/calculadora-energia");
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center w-full gap-3">
                <h1 className="flex items-center justify-center w-full p-2 text-white text-6xl font-bold bg-black/50">CALCULADORA DE CO2</h1>
                <h2 className="flex items-center justify-center text-lightgreen text-3xl max-w-[1200px] text-center">
                    Atividades do dia a dia emitem, direta ou indiretamente, gases causadores das mudanças climáticas. Use nossa calculadora para descobrir sua emissão de carbono pessoal.
                </h2>
            </div>
            <Button text="COMECE A CALCULAR" onClick={handleButtonClick} className="font-extrabold text-4xl mt-20"/>
        </div>
    );
};
