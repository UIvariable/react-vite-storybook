import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
	title: 'Example/Components/Atomic/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		onChange: () => {
			console.log('onchange called');
		}
	}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyInput: Story = {
	args: {
		inputValue: '',
		placeholder: 'you@domain.com',
		type: 'email'
	},
};

export const InvalidInput: Story = {
    args: {
		inputValue: 'johndoe#gmail.com',
		placeholder: 'you@domain.com',
		error: 'Invalid email address',
		type: 'email'
    },
};

export const ValidInput: Story = {
    args: {
		inputValue: 'johndoe@gmail.com',
		placeholder: 'you@domain.com',
		type: 'email'
    },
};