import 'dayjs/locale/fr';
import 'dayjs/locale/tr';

import { FunctionComponent } from 'react';
import { Activity, Briefcase } from 'lucide-react';
import { ActivityFilters } from '@/components/activities/ActivityFilters';
import { ActivityGrid } from '@/components/activities/ActivityGrid';
import { ActivitySort } from '@/components/activities/ActivitySort';
import { Locale } from '@/i18n/routing';
import { ActivitySearch } from '@/components/activities/ActivitySearch';
import { getTranslations } from 'next-intl/server';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivityCategorySchema } from '@/lib/types/activity_category';
import { env } from '@/env';

interface ActivitiesPageProps {
	params: {
		locale: Locale;
	};
	searchParams: {
		query?: string;
		sort?: string;
		category?: string;
	};
}

const ActivitiesPage: FunctionComponent<ActivitiesPageProps> = async ({
	params: { locale },
	searchParams,
}) => {
	const t = await getTranslations();
	const { data } = await fetchWithZod(
		ActivityCategorySchema,
		`${env.NEXT_PUBLIC_API_URL}/activity-categories?locale=${locale}`
	);

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<div className='relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pb-16 pt-24'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='absolute -right-20 -top-20 h-64 w-64 animate-blob rounded-full bg-indigo-400 opacity-20 mix-blend-multiply blur-xl filter' />
					<div className='animation-delay-2000 absolute -bottom-20 -left-20 h-64 w-64 animate-blob rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter' />
					<div className='animation-delay-4000 absolute left-20 top-20 h-64 w-64 animate-blob rounded-full bg-pink-400 opacity-20 mix-blend-multiply blur-xl filter' />
				</div>

				<div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='mb-12 text-center'>
						<h1 className='mb-6 text-4xl font-bold text-white md:text-6xl'>
							{t('ActivitiesPage.title')}
						</h1>
						<p className='mx-auto max-w-3xl text-xl text-indigo-100'>
							{t('ActivitiesPage.description')}
						</p>
					</div>

					<div className='mt-12 flex justify-center gap-8'>
						<div className='w-full max-w-xs rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm'>
							<Activity className='mx-auto mb-4 h-10 w-10 text-indigo-200' />
							<div className='mb-2 text-3xl font-bold text-white'>150+</div>
							<div className='text-lg text-indigo-200'>
								{t('ActivitiesPage.activities')}
							</div>
						</div>
						<div className='w-full max-w-xs rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm'>
							<Briefcase className='mx-auto mb-4 h-10 w-10 text-indigo-200' />
							<div className='mb-2 text-3xl font-bold text-white'>25+</div>
							<div className='text-lg text-indigo-200'>
								{t('ActivitiesPage.projects')}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='bg-gradient-to-br from-gray-50 to-white py-12'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					{/* Search and Filter Section */}
					<div className='mb-8 flex gap-2 sm:gap-3 md:gap-4'>
						<ActivitySearch searchParams={searchParams} />
						<ActivitySort searchParams={searchParams} />
					</div>

					<ActivityFilters
						searchParams={searchParams}
						filters={data.map((filter) => filter.title)}
					/>
					<ActivityGrid
						locale={locale}
						query={searchParams.query}
						sort={searchParams.sort}
						category={searchParams.category}
					/>
				</div>
			</div>
		</div>
	);
};

export default ActivitiesPage;
