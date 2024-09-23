
<!--suppress TypeScriptCheckImport -->
<script lang="ts">
	import Input from '../../Atoms/Input/Input.svelte';
	import Button from '../../Atoms/Button/Button.svelte';
	import * as v from 'valibot';
	import validate from 'validate';


	const LoginSchema = v.object({
		email: v.pipe(v.string(), v.email()),
		password: v.pipe(v.string(), v.minLength(8)),
		confirmPassword: v.pipe(v.string(), v.minLength(8))
	});

	type LoginType = v.InferOutput<typeof LoginSchema>;

	let loginData: LoginType = {} as LoginType;

	const test = () => {
		console.log(v.parse(LoginSchema, loginData));
	};



	const formData = {
		email: "example@domain.net",
		password: "Password1!",
		confirmPassword: "Password1!",
	};



	try {
		validate(formData);
		console.log("Validation passed");
	} catch (errors) {
		console.log(errors);
	}


</script>


<form on:submit|preventDefault={test} class=" flex w-fit flex-col gap-2 p-2">
	<Input name="email" type="email" bind:value={loginData.email}></Input>
	<Input name="password" type="password" bind:value={loginData.password}></Input>
	<Input name="confirm-password" type="password" bind:value={loginData.confirmPassword}></Input>
	<Button type="submit">Submit</Button>
</form>