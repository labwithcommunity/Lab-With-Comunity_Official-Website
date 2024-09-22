import type { Meta, StoryObj } from '@storybook/svelte';

import Input from './Input.svelte';

const meta = {
	title: 'Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	parameters: {}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		name: 'Text',
		placeholder: 'Text'
	}
};

export const Password: Story = {
	args: {
		name: 'Password',
		placeholder: 'Password',
		type: 'password'
	}
};

export const Email: Story = {
	args: {
		name: 'Email',
		placeholder: 'Email',
		type: 'email'
	}
};
