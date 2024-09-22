<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import AutoTransitionH from './AutoTransitionH.svelte';

	export const meta = {
		title: 'Atoms/AutoTransitionH',
		tags: ['autodocs'],
		component: AutoTransitionH
	} satisfies Meta<AutoTransitionH>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<AutoTransitionH {...args}>
		<div class="bg-slate-300">asdasd</div>
	</AutoTransitionH>
</Template>

<Story name="Height" />
