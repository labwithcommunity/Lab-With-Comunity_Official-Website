
<script lang="ts">
	import Input from '../../Atoms/Input/Input.svelte';
	import Button from '../../Atoms/Button/Button.svelte';
	import * as v from 'valibot';
	import AutoTransitionH from '../../Atoms/AutoTransitionH/AutoTransitionH.svelte';

	const LoginSchema = v.object({
		email: v.pipe(v.string(), v.email()),
		password: v.pipe(v.string(), v.minLength(8))
	});

	type LoginType = v.InferOutput<typeof LoginSchema>;

	let loginData: LoginType = {} as LoginType;

	let isError = false;

	const test = () => {
		try {
			console.log(v.parse(LoginSchema, loginData));
		} catch {
			isError = true;
		}
	};



</script>

<form on:submit|preventDefault={test} class="{$$props.class} flex w-fit flex-col gap-2 p-2">
	<Input {isError} name="email" type="email" bind:value={loginData.email}></Input>
	<Input {isError} name="password" type="password" bind:value={loginData.password}></Input>
	<AutoTransitionH show={isError}>
		<div class="text-red-800">Nieprawidłowy login lub hasło.</div>
	</AutoTransitionH>
	<Button type="submit">Submit</Button>
</form>
