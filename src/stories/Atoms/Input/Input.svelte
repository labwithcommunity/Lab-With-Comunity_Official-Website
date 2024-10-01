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
	class="{$$props.class} flex w-full rounded-md border-2 border-primary-300 p-1 drop-shadow-sm *:placeholder:text-primary-300"
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
		border-color: theme(colors.error.400);
		color: theme(colors.error.300);
		::placeholder {
			color: theme(colors.error.400);
		}
	}
</style>
