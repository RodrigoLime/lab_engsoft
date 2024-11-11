
interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

export const Button = ({text, onClick, className}: ButtonProps) => {
    return (
        <button onClick={onClick} className={`flex items-center bg-green text-white rounded-full px-8 py-3 hover:bg-green/75 ${className}`}>
            {text}
        </button>
    )
}