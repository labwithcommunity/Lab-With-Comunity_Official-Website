// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// type Optional<T> = T | undefined

declare global {
	type Optional<T> = T | undefined;
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
