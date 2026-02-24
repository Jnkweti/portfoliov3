// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isPagesBuild =
	process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const ownerName = process.env.GITHUB_REPOSITORY_OWNER ?? '';

// https://astro.build/config
export default defineConfig({
	site: isPagesBuild && ownerName ? `https://${ownerName}.github.io` : undefined,
	base: isPagesBuild && repoName ? `/${repoName}/` : '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
