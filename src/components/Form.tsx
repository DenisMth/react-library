import { type SubmitEvent, type ReactNode } from 'react';
import Btn from './Btn';
import './Form.css';

type FormProps = {
    onSubmit: (values: Record<string, FormDataEntryValue>) => void;
    submitLabel?: string;
    disabled?: boolean;
    children: ReactNode;
};

export default function Form({
    onSubmit,
    submitLabel = 'Submit',
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

    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset className="form-fields" disabled={disabled}>
                {children}
            </fieldset>
            <Btn
                type="primary"
                disabled={disabled}
                btn={{ onClick: () => { }, children: submitLabel }}
            />
        </form>
    );
}
