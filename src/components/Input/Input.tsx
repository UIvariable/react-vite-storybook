import { useState, useEffect } from "react";
import "./input.css";

export interface InputProps {
    inputValue?: string;
    type: string;
    placeholder?: string;
    error?: string;
    onChange: (value: string) => void;
}

export const Input = ({ inputValue, type, placeholder, error, onChange }: InputProps) => {
    const [value, setValue] = useState(inputValue ?? ""); // Internal input state
    const [localError, setLocalError] = useState(""); // Internal validation error

    useEffect(() => {
        setLocalError(error || ""); // Sync external error when it changes
    }, [error]);

    const validateEmail = (email: string) => {
        if (!email) return ""; // No error on empty input
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? "" : "Invalid email address";
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        setLocalError(validateEmail(newValue)); // Validate in real-time

        if (onChange) onChange(newValue); // Notify parent
    };

    return (
        <div className="input-container">
        <input
            type={type}
            className={`custom-input ${localError ? "error" : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
        {localError && <span className="error-message">{localError}</span>}
        </div>
    );
};