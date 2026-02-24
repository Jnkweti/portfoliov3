// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';

const isPagesBuild =
	process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const ownerName = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const customDomainFromEnv = process.env.CUSTOM_DOMAIN?.trim() ?? '';

let customDomainFromCname = '';
try {
	const cnameContents = readFileSync(new URL('./CNAME', import.meta.url), 'utf8')
		.trim()
		.split(/\r?\n/)[0]
		.trim();
	if (cnameContents) {
		customDomainFromCname = cnameContents;
	}
} catch {
	// CNAME is optional; ignore if missing.
}

const customDomain = customDomainFromEnv || customDomainFromCname;
const siteUrl = isPagesBuild
	? customDomain
		? `https://${customDomain}`
		: ownerName
			? `https://${ownerName}.github.io`
			: undefined
	: undefined;
const basePath =
	isPagesBuild && !customDomain && repoName ? `/${repoName}/` : '/';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: basePath,
	vite: {
		plugins: [tailwindcss()],
	},
});
