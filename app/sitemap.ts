import { MetadataRoute } from 'next';
import { Locale, getPathname, routing } from '@/i18n/routing';
import { env } from '@/env';
import { fetchAllSitemapData } from '@/lib/fetchAllSitemapData';

const urls = {
	activities: {
		en: 'activities',
		fr: 'activites',
		tr: 'etkinlikler',
	},
	galleries: {
		en: 'galleries',
		fr: 'galeries',
		tr: 'galeriler',
	},
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const activities = routing.locales.map(async (locale) => {
		const activities = await fetchAllSitemapData(
			`${env.NEXT_PUBLIC_API_URL}/activities`,
			locale
		);
		return activities.map((activity) =>
			getLocalizedEntry(urls['activities'][locale], locale, activity.slug)
		);
	});
	const galleries = routing.locales.map(async (locale) => {
		const galleries = await fetchAllSitemapData(
			`${env.NEXT_PUBLIC_API_URL}/galleries`,
			locale
		);
		return galleries.map((gallery) =>
			getLocalizedEntry(urls['galleries'][locale], locale, gallery.slug)
		);
	});
	const entries = await Promise.all([...activities, ...galleries]);
	return [
		getEntry('/'),
		getEntry('/activities'),
		getEntry('/galleries'),
		getEntry('/know-me'),
		getEntry('/contact'),
		...entries.flat(),
	];
};

type Href = Parameters<typeof getPathname>[0]['href'];

function getLocalizedEntry(href: string, locale: string, slug: string) {
	const pathname = `${env.NEXT_PUBLIC_BASE_URL}/${locale}/${href}/${slug}`;

	return {
		url: pathname,
		lastModified: new Date(),
	};
}

function getEntry(href: Href) {
	return {
		url: getUrl(href, routing.defaultLocale),
		lastModified: new Date(),
	};
}

function getUrl(href: Href, locale: Locale) {
	const pathname = getPathname({ locale, href });
	return env.NEXT_PUBLIC_BASE_URL + pathname;
}

export default sitemap;
