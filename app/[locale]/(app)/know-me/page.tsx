import { AboutHero } from '@/components/about/AboutHero';
import { AboutContent } from '@/components/about/AboutContent';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getPathname, Locale } from '@/i18n/routing';
import { FunctionComponent } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { KnowMeSchema } from '@/lib/types/know_me';
import { knowMePageQuery } from '@/lib/quiries/know_me_page';
import { env } from '@/env';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/constructMetadata';

interface KnowMePageProps {
	params: {
		locale: Locale;
	};
}

export const generateMetadata = async ({
	params: { locale },
}: KnowMePageProps): Promise<Metadata> => {
	const t = await getTranslations();
	const keywords = t('KnowMePage.title')
		.split(' ')
		.map((word) => word.toLowerCase());

	return constructMetadata({
		title: t('KnowMePage.title'),
		description: t('KnowMePage.description'),
		keywords: ['ademon', 'adebayo', 'amedee', ...keywords],
		canonical: `${env.NEXT_PUBLIC_BASE_URL}/${locale}${getPathname({
			href: '/know-me',
			locale: locale,
		})}`,
	});
};

const KnowMePage: FunctionComponent<KnowMePageProps> = async ({
	params: { locale },
}) => {
	setRequestLocale(locale);
	const t = await getTranslations();
	const { data } = await fetchWithZod(
		KnowMeSchema,
		`${env.NEXT_PUBLIC_API_URL}/know-me?${knowMePageQuery(locale)}`
	);

	return (
		<main className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
			<AboutHero />
			<div
				id={t('Shared.content')}
				className='py-12 sm:py-16 md:py-20 lg:py-24'
			>
				<AboutContent details={data.details} />
			</div>
		</main>
	);
};

export const revalidate = 60;

export default KnowMePage;
