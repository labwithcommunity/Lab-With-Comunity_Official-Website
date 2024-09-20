<script lang="ts">
	import Input from '../../Atoms/Input/Input.svelte';
	import Button from '../../Atoms/Button/Button.svelte';
	import * as v from 'valibot';

	const LoginSchema = v.object({
		email: v.pipe(v.string(), v.email()),
		password: v.pipe(v.string(), v.minLength(8))
	});

	type LoginType = v.InferOutput<typeof LoginSchema>;

	let loginData: LoginType = {} as LoginType;

	const test = () => {
		console.log(v.parse(LoginSchema, loginData));
	};
</script>

<form on:submit|preventDefault={test} class=" flex w-fit flex-col gap-2 p-2">
	<Input name="email" type="email" bind:value={loginData.email}></Input>
	<Input name="password" type="password" bind:value={loginData.password}></Input>
	<Button type="submit">Submit</Button>
</form>
