<script context="module">
	import RegisterForm from './RegisterForm.svelte';

	export const meta = {
		title: 'Atoms/RegisterForm',
		component: RegisterForm
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<RegisterForm {...args}></RegisterForm>
</Template>

<Story name="Default" />
