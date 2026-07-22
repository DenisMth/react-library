import './Btn.css';

type BtnType = {
    onClick: () => void;
    children: React.ReactNode;
}

type BtnProps = {
    type: 'primary' | 'secondary';
    btn: BtnType;
}

export default function Btn({ type, btn }: BtnProps) {
    return (
        <button
            className={`btn ${type}`}
            onClick={btn.onClick}
        >
            {btn.children}
        </button>
    );
}
