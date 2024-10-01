<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let isError = false;
</script>

<button
	on:click
	{type}
	class:error={isError}
	class="{$$props.class} text rounded-md bg-primary-200 p-2 font-black text-secondary-300 drop-shadow-sm"
>
	<slot />
</button>

<style lang="postcss">
	button {
		font-family: 'Playfair Display', serif;
	}

	.error {
		background-color: theme(colors.error.500);
		color: theme(colors.primary.100);
	}
</style>
