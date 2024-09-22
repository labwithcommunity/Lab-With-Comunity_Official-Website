<script lang="ts">
	export let show = true;
</script>

<div class:show class="{$$props.class} grid">
	<slot />
</div>

<style lang="postcss">
	div {
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.5s;
		&.show {
			grid-template-rows: 1fr;
		}
	}

	div > :global(*) {
		overflow: hidden;
	}
</style>
