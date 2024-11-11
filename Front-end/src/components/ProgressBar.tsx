import { LightbulbFilament, GasPump, CarProfile, Recycle, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

type ProgressBarProps = {
    progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div className="relative flex items-center justify-center bg-black/50 w-full gap-20">
            <div className="absolute w-full h-2 bg-gray-300 top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex items-center justify-center gap-20">
                <Link to="/calculadora-energia" className="flex flex-col items-center">
                    <LightbulbFilament size={110} className='rounded-full p-2 text-white bg-green hover:bg-green/90'/>
                </Link>

                <Link to="/calculadora-gas" className="flex flex-col items-center">
                    <GasPump size={110} className={`rounded-full p-2 ${progress < 1 ? 'text-dark bg-lightgray hover:bg-lightgray/90' : 'text-white bg-green hover:bg-green/90'}`}/>
                </Link>

                <Link to="/calculadora-transporte" className="flex flex-col items-center">
                    <CarProfile size={110} className={`rounded-full p-2 ${progress < 2 ? 'text-dark bg-lightgray hover:bg-lightgray/90' : 'text-white bg-green hover:bg-green/90'}`}/>
                </Link>

                <Link to="/calculadora-reciclagem" className="flex flex-col items-center">
                    <Recycle size={110} className={`rounded-full p-2 ${progress < 3 ? 'text-dark bg-lightgray hover:bg-lightgray/90' : 'text-white bg-green hover:bg-green/90'}`}/>
                </Link>
                
                <CheckCircle size={110} className='rounded-full p-2 text-dark bg-lightgray'/>
            </div>
        </div>
    );
};