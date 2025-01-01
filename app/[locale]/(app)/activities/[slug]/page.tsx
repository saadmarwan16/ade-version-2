import 'dayjs/locale/fr';
import 'dayjs/locale/tr';

import dynamic from 'next/dynamic';
import { Calendar } from 'lucide-react';
import { ActivityContent } from '@/components/activities/details/ActivityContent';
import { RelatedActivities } from '@/components/activities/details/RelatedActivities';
import { ImageCarousel } from '@/components/activities/carousel/ImageCarousel';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { getTranslations } from 'next-intl/server';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivityDetailsSchema } from '@/lib/types/activity_details';
import { env } from '@/env';
import { activityDetailsQuery } from '@/lib/quiries/activity_details';
import { constructImageLink } from '@/lib/contructImageLink';
import { getPathname, Locale } from '@/i18n/routing';
import dayjs from 'dayjs';
import { typeColors } from '@/utils/constants/typeColors';
import { ActivitiesSchema } from '@/lib/types/activities';
import { activitiesQuery } from '@/lib/quiries/activities';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/constructMetadata';

interface ActivityDetailsPageProps {
	params: {
		locale: Locale;
		slug: string;
	};
}

export const generateMetadata = async ({
	params: { locale, slug },
}: ActivityDetailsPageProps): Promise<Metadata> => {
	const { data: activity } = await fetchWithZod(
		ActivityDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities/${slug}?${activityDetailsQuery(locale)}`
	);
	const keywords = activity.title.split(' ').map((word) => word.toLowerCase());

	return constructMetadata({
		title: activity.title,
		keywords: ['ademon', 'adebayo', 'amedee', ...keywords],
		canonical: `${env.NEXT_PUBLIC_BASE_URL}/${locale}${getPathname({
			href: '/activities',
			locale: locale,
		})}/${slug}`,
	});
};

export const generateStaticParams = async ({
	params: { locale },
}: ActivityDetailsPageProps) => {
	const { data: activities } = await fetchWithZod(
		ActivitiesSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery({
			locale,
		})}`
	);

	return activities.map((activity) => ({
		slug: activity.slug,
		locale: locale,
	}));
};

const ActivityShare = dynamic(
	() => import('../../../../../components/activities/details/ActivityShare'),
	{ ssr: false }
);

const ActivityDetailsPage: FunctionComponent<
	ActivityDetailsPageProps
> = async ({ params: { locale, slug } }) => {
	const t = await getTranslations();
	const { data: activity } = await fetchWithZod(
		ActivityDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/activities/${slug}?${activityDetailsQuery(locale)}`
	);
	const related_activities = activity.related.filter(
		(a) => a.id !== activity.id
	);

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<div className='relative h-[60vh] bg-gray-900'>
				<Image
					src={constructImageLink(activity.thumbnail.url)}
					alt={`Thumnail of ${activity.title}`}
					className='h-full w-full object-cover opacity-50'
					fill
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent' />

				<div className='absolute bottom-0 left-0 right-0 p-8'>
					<div className='mx-auto max-w-7xl'>
						<div className='mb-4 hidden flex-wrap items-center gap-4 sm:flex'>
							{activity.activity_categories.map((category) => (
								<span
									key={category.documentId}
									className={`rounded-md px-4 py-1.5 text-sm font-medium ${
										typeColors[category.color as keyof typeof typeColors]
									}`}
								>
									{category.title}
								</span>
							))}
							<div className='flex items-center text-sm text-gray-300'>
								<Calendar className='mr-2 h-4 w-4' />
								{dayjs(activity.date).locale(locale).format('MMMM DD, YYYY')}
							</div>
						</div>

						<h1 className='mb-4 text-3xl font-medium text-white sm:text-4xl sm:font-semibold md:text-5xl md:font-bold'>
							{activity.title}
						</h1>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
					{/* Main Content */}
					<div className='lg:col-span-2'>
						<div className='mb-6 flex flex-wrap items-center gap-4 sm:hidden'>
							{activity.activity_categories.map((category) => (
								<span
									key={category.documentId}
									className={`rounded-md px-4 py-1.5 text-sm font-medium ${
										typeColors[category.color as keyof typeof typeColors]
									}`}
								>
									{category.title}
								</span>
							))}
							<div className='flex items-center gap-2 text-sm text-gray-600'>
								<Calendar className='h-4 w-4 text-indigo-600' />
								{dayjs(activity.date).locale(locale).format('MMMM DD, YYYY')}
							</div>
						</div>

						<div className='flex flex-col gap-8 rounded-xl bg-white shadow-sm sm:gap-10 md:gap-12'>
							{activity.images.length > 0 && (
								<div className='overflow-hidden rounded-t-xl'>
									<ImageCarousel
										images={activity.images.map((image) =>
											constructImageLink(image.url)
										)}
										title={activity.title}
									/>
								</div>
							)}
							<div className='p-8'>
								<ActivityContent body={activity.body} />
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className='space-y-8'>
						<div className='rounded-xl bg-white p-6 shadow-sm'>
							<h3 className='mb-4 text-lg font-semibold text-gray-900'>
								{t('ActivityDetailsPage.share')}
							</h3>
							<ActivityShare locale={locale} slug={slug} />
						</div>

						{related_activities.length > 0 && (
							<div className='rounded-xl bg-white p-6 shadow-sm'>
								<h3 className='mb-4 text-lg font-semibold text-gray-900'>
									{t('ActivityDetailsPage.related-activities-title')}
								</h3>
								<RelatedActivities
									locale={locale}
									activities={related_activities}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivityDetailsPage;
