import { defineRouting } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
	locales: ['en', 'fr', 'tr'],
	defaultLocale: 'en',
	pathnames: {
		'/': '/',
		'/activities': {
			en: '/activities',
			fr: '/activites',
			tr: '/etkinlikler',
		},
		'/activities/[slug]': {
			en: '/activities/[slug]',
			fr: '/activites/[slug]',
			tr: '/etkinlikler/[slug]',
		},
		'/galleries': {
			en: '/galleries',
			fr: '/galeries',
			tr: '/galeriler',
		},
		'/galleries/[slug]': {
			en: '/galleries/[slug]',
			fr: '/galeries/[slug]',
			tr: '/galeriler/[slug]',
		},
		'/know-me': {
			en: '/know-me',
			fr: '/me-connaitre',
			tr: '/beni-taniyin',
		},
		'/contact': {
			en: '/contact',
			fr: '/contacter',
			tr: '/iletisim',
		},
	},
});

const {
	'/activities/[slug]': _,
	'/galleries/[slug]': __,
	...staticPathnames
} = routing.pathnames;

export type StaticPathnames = keyof typeof staticPathnames;

export type Pathnames = keyof typeof routing.pathnames;

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createLocalizedPathnamesNavigation(routing);
