import logo from '@/assets/logo.svg';
import logoText from '@/assets/EcoImpacto.svg';

export const About = () => {
    return (
        <div className="flex flex-col w-full gap-4">
            <h1 className="flex items-center justify-center w-full p-6 text-white text-6xl font-bold bg-black/50 mt-10">SOBRE NÓS</h1>
            <div className='flex bg-black/75 flex-1 justify-center'>
                <div className="flex flex-col items-center max-w-[1200px] gap-6 text-white text-justify text-3xl font-light">
                    <p className='mt-6'>&nbsp;&nbsp; O EcoImpacto é um projeto comprometido em promover a conscientização ambiental e ajudar as 
                        pessoas a entenderem o impacto de suas atividades diárias no meio ambiente. Nossa missão é fornecer 
                        uma ferramenta simples e eficaz para calcular, monitorar e melhorar hábitos relacionados ao consumo 
                        de energia, transporte e reciclagem. Acreditamos que pequenas mudanças podem gerar grandes impactos, 
                        e nosso simulador foi desenvolvido para tornar esse processo acessível e inclusivo para todos. 
                        Com uma interface intuitiva e recursos de acessibilidade.
                    </p>
                    <p> &nbsp;&nbsp; O EcoImpacto incentiva ações sustentáveis, oferecendo recomendações práticas e comparando resultados 
                        com uma média global para motivar o usuário a reduzir seu impacto ambiental. Estamos comprometidos 
                        em criar um futuro mais verde, e convidamos você a fazer parte dessa mudança!
                    </p>
                    <div className='flex items-center '>
                        <img src={logo} alt='logo' className='w-48'/>
                        <img src={logoText} alt='logo' className='w-64'/>
                    </div>
                </div>
            </div>
        </div>
    );
};
