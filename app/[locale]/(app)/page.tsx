import 'dayjs/locale/fr';
import 'dayjs/locale/tr';

import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Partners } from '@/components/sections/Partners';
import { RecentActivities } from '@/components/sections/RecentActivities';
import { FunctionComponent } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { HomePageSchema } from '@/lib/types/home_page';
import { homePageQuery } from '@/lib/quiries/home_page';
import { env } from '@/env';
import { Locale } from '@/i18n/routing';
import { constructMetadata } from '@/lib/constructMetadata';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

interface HomePageProps {
	params: {
		locale: Locale;
	};
}

export const generateMetadata = async ({
	params: { locale },
}: HomePageProps): Promise<Metadata> => {
	const t = await getTranslations();
	const keywords = t('HomePage.profession')
		.split(' ')
		.filter((word) => word !== '&')
		.map((word) => word.toLowerCase());

	return constructMetadata({
		title: t('HomePage.profession'),
		description: t('HomePage.description'),
		keywords: ['ademon', 'adebayo', 'amedee', ...keywords],
		canonical: `${env.NEXT_PUBLIC_BASE_URL}/${locale}`,
	});
};

const HomePage: FunctionComponent<HomePageProps> = async ({
	params: { locale },
}) => {
	setRequestLocale(locale);
	const { data } = await fetchWithZod(
		HomePageSchema,
		`${env.NEXT_PUBLIC_API_URL}/home-page?${homePageQuery(locale)}`
	);

	return (
		<main>
			<Hero locale={locale} />
			{data.projects.length > 0 && <Projects projects={data.projects} />}
			{data.partners.length > 0 && <Partners partners={data.partners} />}
			{data.activities.length > 0 && (
				<RecentActivities locale={locale} activities={data.activities} />
			)}
		</main>
	);
};

export const revalidate = 60;

export default HomePage;
