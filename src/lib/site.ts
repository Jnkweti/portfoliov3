export type NavItem = {
	label: string;
	path: string;
};

export const navItems: NavItem[] = [
	{ label: 'About', path: '/about/' },
	{ label: 'Skills', path: '/skills/' },
	{ label: 'Projects', path: '/projects/' },
	{ label: 'Experience', path: '/experience/' },
	{ label: 'Certifications', path: '/certifications/' },
	{ label: 'Resume', path: '/resume/' },
	{ label: 'Contact', path: '/contact/' },
];

export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL;
	return `${base}${path.replace(/^\/+/, '')}`;
}

export function normalizePath(path: string): string {
	if (!path) return '/';
	const clean = path.replace(/\/+$/, '');
	return clean === '' ? '/' : `${clean}/`;
}

export function currentPathWithoutBase(pathname: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	let path = pathname;

	if (base && base !== '/' && path.startsWith(base)) {
		path = path.slice(base.length) || '/';
	}

	return normalizePath(path);
}
