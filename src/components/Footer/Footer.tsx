import { Logo } from '../Logo/Logo';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import './footer.css';

export interface FooterProps {
	onSubscribe: (email: string) => void;
}

export const Footer = ({onSubscribe} : FooterProps) => (
	<footer>
		<div className="storybook-footer">
			<Logo title='Acme'/>
			<SubscribeForm onSubmit={onSubscribe}/>
		</div>
	</footer>
);
