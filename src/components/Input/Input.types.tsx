import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search' | 'date' | 'color',
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void,
    onSearchButtonClick?: (value: React.ChangeEvent<HTMLInputElement>) => void
}
