import { type SubmitEvent ,type ReactNode } from 'react';
import Btn from './Btn';

type FormProps = {
    onSubmit: (values: Record<string, FormDataEntryValue>) => void;
    submitLabel?: string;
    children: ReactNode;
};

export default function Form({
                                 onSubmit,
                                 submitLabel = 'Submit',
                                 children,
                             }: FormProps) {
    const handleSubmit = (event: SubmitEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const values = Object.fromEntries(
            new FormData(event.currentTarget).entries(),
        );
        onSubmit(values);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {children}
            <Btn
                type="primary"
                btn={{ onClick: () => {}, children: submitLabel }}
            />
        </form>
    );
}