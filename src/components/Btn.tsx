import './Btn.css';

type BtnType = {
    onClick: () => void;
    children: React.ReactNode;
}

type BtnProps = {
    type: 'primary' | 'secondary' | 'danger';
    htmlType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    btn: BtnType;
    icon?: React.ReactNode;
}

export default function Btn({ type, htmlType = 'button', btn, disabled, loading, icon }: BtnProps) {
    return (
        <button
            type={htmlType}
            className={`btn ${type}`}
            onClick={btn.onClick}
            disabled={disabled || loading}
        >
            {loading ? (
                <span className="btn-loader"></span>
            ) : (
                <>
                    {icon && <span className="btn-icon">{icon}</span>}
                    {btn.children}
                </>
            )}
        </button>
    );
}
