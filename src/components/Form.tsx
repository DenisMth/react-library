import { type SubmitEvent, type ReactNode } from 'react';
import Btn from './Btn';
import './Form.css';

type FormProps = {
    onSubmit: (values: Record<string, FormDataEntryValue>) => void;
    title?: string;
    description?: string;
    error?: string;
    submitLabel?: string;
    submitVariant?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
    onCancel?: () => void;
    cancelLabel?: string;
    disabled?: boolean;
    children: ReactNode;
};

export default function Form({
    onSubmit,
    title,
    description,
    error,
    submitLabel = 'Submit',
    submitVariant = 'primary',
    loading,
    onCancel,
    cancelLabel = 'Cancel',
    disabled,
    children,
}: FormProps) {
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const values = Object.fromEntries(
            new FormData(event.currentTarget).entries(),
        );
        onSubmit(values);
    };

    const blocked = disabled || loading;

    return (
        <form className="form" onSubmit={handleSubmit}>
            {(title || description) && (
                <header className="form-header">
                    {title && <h2 className="form-title">{title}</h2>}
                    {description && (
                        <p className="form-description">{description}</p>
                    )}
                </header>
            )}

            {error && (
                <p className="form-error" role="alert">
                    {error}
                </p>
            )}

            <fieldset className="form-fields" disabled={blocked}>
                {children}
            </fieldset>

            <div className="form-actions">
                {onCancel && (
                    <Btn
                        type="secondary"
                        htmlType="reset"
                        disabled={blocked}
                        btn={{ onClick: onCancel, children: cancelLabel }}
                    />
                )}
                <Btn
                    type={submitVariant}
                    htmlType="submit"
                    disabled={blocked}
                    btn={{
                        onClick: () => {},
                        children: loading ? 'Submitting…' : submitLabel,
                    }}
                />
            </div>
        </form>
    );
}
