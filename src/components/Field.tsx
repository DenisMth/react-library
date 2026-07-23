import './Field.css';

type FieldProps = {
    label: string;
    name: string;
    type?: string;
    defaultValue?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
};

export default function Field({
    label,
    name,
    type = 'text',
    defaultValue,
    placeholder,
    required,
    error,
}: FieldProps) {
    const id = `field-${name}`;
    return (
        <label className="field" htmlFor={id}>
            <span className="field-label">{label}</span>
            <input
                id={id}
                name={name}
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                required={required}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {error && (
                <span className="field-error" id={`${id}-error`}>
                    {error}
                </span>
            )}
        </label>
    );
}
