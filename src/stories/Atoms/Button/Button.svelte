<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button on:click {type} class="text rounded-md bg-gray-400 p-2 text-gray-800">
	<slot />
</button>
