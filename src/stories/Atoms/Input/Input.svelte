<script lang="ts">
	import Icon from '@iconify/svelte';

	export let value = '';

	export let type: 'email' | 'text' | 'password' | 'number' = 'text';
	export let name: string;
	export let placeholder = '';

	export let isError: boolean = false;

	export let required = true;
	export let disabled = false;

	let show: boolean = true;
</script>

<label
	class="{$$props.class} flex w-full rounded-md border border-gray-600 p-1 text-gray-400"
	class:error={isError}
>
	<input
		class="w-full bg-transparent focus:outline-none"
		{placeholder}
		id={name}
		{name}
		{...{ type: show ? type : 'text' }}
		{required}
		{disabled}
		bind:value
	/>
	{#if type == 'password'}
		<button on:click={() => (show = !show)}>
			{#if show == false}
				<Icon icon="tabler:eye" class="my-auto" />
			{:else}
				<Icon icon="tabler:eye-closed" />
			{/if}
		</button>
	{/if}
</label>

<style lang="postcss">
	.error {
		/* border-gray-600 text-gray-400 */
		border-color: theme(colors.red.800);
		color: theme(colors.red.800);
	}
</style>
