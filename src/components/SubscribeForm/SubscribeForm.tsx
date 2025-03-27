import { useState } from "react";
import "./subscribeForm.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export interface SubscribeFormProps {
	onSubmit: (email: string) => void;
}

export const SubscribeForm = ({onSubmit}: SubscribeFormProps) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const onSubscribe = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError("Please enter a valid email");
			return;
		}
		
		onSubmit(email);
		
		setEmail("");
		setError("");
	};

	return (
		<form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
			<Input placeholder="Enter your email" inputValue={email} type="email" onChange={setEmail} error={error} />
			<Button label="Subscribe" primary size="large" onClick={onSubscribe} />
		</form>
	);
};
