import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/constants/socialLinks.ts',
	],
	safelist: [
		'hover:bg-[#0077b5]',
		'hover:border-[#0077b5]',
		'hover:bg-[#1DA1F2]',
		'hover:border-[#1DA1F2]',
		'hover:bg-[#E4405F]',
		'hover:border-[#E4405F]',
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: '#333',
						a: {
							color: '#3182ce',
							'&:hover': {
								color: '#2c5282',
							},
						},
					},
				},
			},
			animation: {
				blob: 'blob 12s infinite',
				float: 'float 6s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

export default config;
