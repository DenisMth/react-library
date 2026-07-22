import './Btn.css';

type BtnType = {
    onClick: () => void;
    children: React.ReactNode;
}

type BtnProps = {
    type: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    btn: BtnType;
}

export default function Btn({ type, btn, disabled }: BtnProps) {
    return (
        <button
            className={`btn ${type}`}
            onClick={btn.onClick}
            disabled={disabled}
        >
            {btn.children}
        </button>
    );
}
