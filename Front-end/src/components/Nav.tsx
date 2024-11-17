import logo from '../assets/logo.svg';
import logoText from '../assets/EcoImpacto.svg';
import { Link } from 'react-router-dom';


export const Nav = () => {
    return (
        <div className='flex flex-1 mx-48 mt-10 justify-between bg-dark rounded-2xl'>
            <Link to="/">
                <div className='flex items-center'>
                    <img src={logo} alt='logo' className='w-24'/>
                    <img src={logoText} alt='logo' className='w-32'/>
                </div>
            </Link>
            <div className='flex items-center gap-10'>
                <Link to="/calculadora-energia">
                    <span className='text-white text-2xl'>Calculadora</span>
                </Link>
                <Link to="/ranking">
                    <span className='text-white text-2xl'>Ranking</span>
                </Link>
                <Link to="/sobre">
                    <span className='text-white text-2xl'>Sobre Nós</span>
                </Link>
            </div>
            <div className='min-w-56'></div>
        </div>
    )
}