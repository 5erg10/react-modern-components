import { InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search' | 'date' | 'color'
}
