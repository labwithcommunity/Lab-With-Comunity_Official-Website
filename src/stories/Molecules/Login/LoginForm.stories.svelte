<script context="module">
	import LoginForm from './LoginForm.svelte';

	export const meta = {
		title: 'Molecules/LoginForm',
		component: LoginForm
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<LoginForm {...args}></LoginForm>
</Template>

<Story name="Default" />
