/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#CED4DA',
					200: '#ADB5BD',
					300: '#6C757D'
				},
				secondary: {
					100: '#495057',
					200: '#343A40',
					300: '#212529'
				},
				accent: {
					100: '#F8F9FA',
					200: '#E9ECEF',
					300: '#DEE2E6'
				},
				error: {
					100: '#F61B4B',
					200: '#D41740',
					300: '#FF1C4D',
					400: '#B31436',
					500: '#91102C',
					600: '#6F0C21'
				}
			}
		}
	},
	plugins: []
};
