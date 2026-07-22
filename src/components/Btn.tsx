import './Btn.css';

type BtnType = {
    onClick: () => void;
    children: React.ReactNode;
}

type BtnProps = {
    type: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    btn: BtnType;
    icon?: React.ReactNode;
}

export default function Btn({ type, btn, disabled, icon }: BtnProps) {
    return (
        <button
            className={`btn ${type}`}
            onClick={btn.onClick}
            disabled={disabled}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {btn.children}
        </button>
    );
}
