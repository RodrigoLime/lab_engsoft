import { Nav } from "@/components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import bghome from '../assets/backgrounds/bg-home.png';
import bgcalculatorenergy from '../assets/backgrounds/bg-calc-energy.png';
import bgcalculatorgas from '../assets/backgrounds/bg-calc-gas.png';
import bgcalculatortransport from '../assets/backgrounds/bg-calc-transport.png';
import bgcalculatorrecycling from '../assets/backgrounds/bg-calc-recycling.png';
import bgresults from '../assets/backgrounds/bg-results.png';
import bgranking from '../assets/backgrounds/bg-ranking.png';
import bgabout from '../assets/backgrounds/bg-about.png';

export const DefaultLayout = () => {
    const { pathname } = useLocation();

    let backgroundImage;
    switch (pathname) {
        case '/':
            backgroundImage = bghome;
            break;
        case '/calculadora-energia':
            backgroundImage = bgcalculatorenergy;
            break;
        case '/calculadora-gas':
            backgroundImage = bgcalculatorgas;
            break;
        case '/calculadora-transporte':
            backgroundImage = bgcalculatortransport;
            break;
        case '/calculadora-reciclagem':
            backgroundImage = bgcalculatorrecycling;
            break;
        case '/resultados':
            backgroundImage = bgresults;
            break;
        case '/ranking':
            backgroundImage = bgranking;
            break;
        case '/sobre':
            backgroundImage = bgabout;
            break;
        default:
            backgroundImage = bghome;
    } 

    return (
        <div className="flex flex-col items-center flex-1 min-h-screen" 
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="flex w-full">
                <Nav />
            </div>
            <div className="flex h-full overflow-auto flex-1">
                <Outlet />
            </div>    
        </div>
    );
}