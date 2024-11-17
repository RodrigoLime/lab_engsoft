import { Route, Routes } from 'react-router-dom';
import { Home } from '@/screens/home/Home';
import { Results } from '@/screens/results/Results';
import { Ranking } from '@/screens/ranking/Ranking';
import { About } from '@/screens/about/About';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { CalculatorProvider } from '@/screens/calculator/context/CalculatorContext';
import { CalculatorEnergy } from '@/screens/calculator/CalculatorEnergy';
import { CalculatorGas } from '@/screens/calculator/CalculatorGas';
import { CalculatorTransport } from '@/screens/calculator/CalculatorTransport';
import { CalculatorRecycling } from '@/screens/calculator/CalculatorRecycling';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>

                <Route path="/" element={<Home />} />

                <Route path="/calculadora-energia" element={<CalculatorProvider><CalculatorEnergy /></CalculatorProvider>} />
                <Route path="/calculadora-gas" element={<CalculatorProvider><CalculatorGas /></CalculatorProvider>} />
                <Route path="/calculadora-transporte" element={<CalculatorProvider><CalculatorTransport /></CalculatorProvider>} />
                <Route path="/calculadora-reciclagem" element={<CalculatorProvider><CalculatorRecycling /></CalculatorProvider>} />

                <Route path="/resultados" element={<Results />} />

                <Route path="/ranking" element={<Ranking />} />

                <Route path="/sobre" element={<About />} />
            </Route>
        </Routes>
    );
};
