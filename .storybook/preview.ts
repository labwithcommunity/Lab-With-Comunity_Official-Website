import type { Preview } from '@storybook/svelte';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			values: [
				// 👇 Default values
				{ name: 'Dark', value: '#212529' },
				{ name: 'Light', value: '#f1f5f9' }
			],
			// 👇 Specify which background is shown by default
			default: 'Dark'
		}
	}
};

export default preview;
