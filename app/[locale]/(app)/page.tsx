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

interface HomePageProps {
	params: {
		locale: Locale;
	};
}

const HomePage: FunctionComponent<HomePageProps> = async ({
	params: { locale },
}) => {
	const { data } = await fetchWithZod(
		HomePageSchema,
		`${env.NEXT_PUBLIC_API_URL}/home-page?${homePageQuery(locale)}`
	);

	return (
		<main>
			<Hero />
			{data.projects.length > 0 && <Projects projects={data.projects} />}
			{data.partners.length > 0 && <Partners partners={data.partners} />}
			{data.activities.length > 0 && (
				<RecentActivities locale={locale} activities={data.activities} />
			)}
		</main>
	);
};

export default HomePage;
