type ButtonProps = {
    onClick: () => void;
};

export const NextButton = () => {
    return (
        <button 
            className="bg-green hover:bg-green/85 text-white font-bold py-2 px-16 text-xl rounded-full mt-4"
        >
            PRÓXIMO
        </button>
    );
}

export const SubmitButton = ({ onClick }: ButtonProps) => {
    return (
        <button 
            className="bg-green hover:bg-green/85 text-white font-bold py-2 px-16 text-xl rounded-full mt-4"
            onClick={onClick}
        >
            ENVIAR
        </button>
    );
}