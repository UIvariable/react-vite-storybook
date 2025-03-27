import type { Meta, StoryObj } from '@storybook/react';
import { SubscribeForm } from './SubscribeForm';
import { action } from "@storybook/addon-actions";

const meta = {
	title: 'Example/Components/SubscribeForm',
	component: SubscribeForm,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		onSubmit: { action: "form-submitted" }, // Track form submission
	},
} satisfies Meta<typeof SubscribeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubscribeFormStory: Story = {
	args: {
		onSubmit: (email) => {
			action("form-submitted")(email);
		},
	}
};
