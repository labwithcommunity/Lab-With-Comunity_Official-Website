<script context="module">
	import Button from './Button.svelte';

	export const meta = {
		title: 'Atoms/Button',
		component: Button
	};
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Button on:click {...args}>Button</Button>
</Template>

<Story name="Default" />
