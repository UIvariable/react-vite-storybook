import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import './header.css';

type User = {
	name: string;
};

export interface HeaderProps {
	user?: User;
	onLogin?: () => void;
	onLogout?: () => void;
	onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
	return (
	<header>
		<div className="storybook-header">
			<Logo title='Acme'/>
			<div>
				{user ? (
					<>
						<span className="welcome">
							Welcome, <b>{user.name}</b>!
						</span>
						<Button size="small" onClick={onLogout} label="Log out" />
					</>
				) : (
					<>
						<Button size="small" onClick={onLogin} label="Log in" />
						<Button primary size="small" onClick={onCreateAccount} label="Sign up" />
					</>
				)}
			</div>
		</div>
	</header>
);
}
