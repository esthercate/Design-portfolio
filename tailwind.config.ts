import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: '#ffffff',
			orange: '#FF8C00',
			'bg-gray': '#1b1b1c',
			'bg-dark': '#121212',
		},
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px',
		},
		extend: {},
	},
	plugins: [],
};
export default config;
