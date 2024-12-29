import { AboutHero } from '@/components/about/AboutHero';
import { AboutContent } from '@/components/about/AboutContent';
import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';
import { FunctionComponent } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { KnowMeSchema } from '@/lib/types/know_me';
import { knowMePageQuery } from '@/lib/quiries/know_me_page';
import { env } from '@/env';

interface HomePageProps {
	params: {
		locale: Locale;
	};
}

const KnowMePage: FunctionComponent<HomePageProps> = async ({
	params: { locale },
}) => {
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

export default KnowMePage;
