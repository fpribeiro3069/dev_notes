import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import forms from '@tailwindcss/forms'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
		container: {
			center: true,
		},
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'rocket',
						enhancements: true,
					},
				],
			},
		}),
		forms,
	],
} satisfies Config;
