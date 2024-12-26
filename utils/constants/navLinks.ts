import { getPathname, Locale, StaticPathnames } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export const getNavLinks = (
	locale: Locale
): { href: StaticPathnames; path: string; label: string }[] => {
	const t = useTranslations();

	return [
		{
			href: '/',
			path: `/${locale}`,
			label: t('Shared.welcome'),
		},
		{
			href: '/know-me',
			path: `/${locale}${getPathname({ locale: locale, href: '/know-me' })}`,
			label: t('Shared.know-me'),
		},
		{
			href: '/activities',
			path: `/${locale}${getPathname({ locale: locale, href: '/activities' })}`,
			label: t('Shared.activities'),
		},
		{
			href: '/galleries',
			path: `/${locale}${getPathname({ locale: locale, href: '/galleries' })}`,
			label: t('Shared.galleries'),
		},
		{
			href: '/contact',
			path: `/${locale}${getPathname({ locale: locale, href: '/contact' })}`,
			label: t('Shared.contact'),
		},
	];
};
