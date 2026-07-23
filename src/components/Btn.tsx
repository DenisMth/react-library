import './Btn.css';

type BtnType = {
    onClick: () => void;
    children: React.ReactNode;
}

type BtnProps = {
    type: 'primary' | 'secondary' | 'danger';
    htmlType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    btn: BtnType;
    icon?: React.ReactNode;
}

export default function Btn({ type, htmlType = 'button', btn, disabled, icon }: BtnProps) {
    return (
        <button
            type={htmlType}
            className={`btn ${type}`}
            onClick={(e) => {
              e.stopPropagation();
              btn.onClick();
            }}
            disabled={disabled}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {btn.children}
        </button>
    );
}
