import { Calendar } from 'lucide-react';
import { activities } from '@/components/activities/data';
import { ActivityContent } from '@/components/activities/details/ActivityContent';
import { ActivityShare } from '@/components/activities/details/ActivityShare';
import { RelatedActivities } from '@/components/activities/details/RelatedActivities';
import { ImageCarousel } from '@/components/activities/carousel/ImageCarousel';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { getTranslations } from 'next-intl/server';

interface ActivityDetailsPageProps {
	params: {
		id: string;
	};
}

export const generateStaticParams = () => {
	return activities.map((activity) => ({ id: activity.id.toString() }));
};

const ActivityDetailsPage: FunctionComponent<ActivityDetailsPageProps> = async ({
	params: { id },
}) => {
	const t = await getTranslations();
	const activity = activities.find((a) => a.id === Number(id));

	if (!activity) {
		return (
			<div className='flex min-h-screen items-center justify-center'>
				<p className='text-gray-600'>{t('NotFoundPage.not-found')}</p>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<div className='relative h-[60vh] bg-gray-900'>
				<Image
					src={activity.image}
					alt={activity.title}
					className='h-full w-full object-cover opacity-50'
					fill
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent' />

				<div className='absolute bottom-0 left-0 right-0 p-8'>
					<div className='mx-auto max-w-7xl'>
						<div className='mb-4 hidden flex-wrap items-center gap-4 sm:flex'>
							<span
								className={`rounded-md px-4 py-1.5 text-sm font-medium ${activity.categoryColor}`}
							>
								{activity.category}
							</span>
							<div className='flex items-center text-sm text-gray-300'>
								<Calendar className='mr-2 h-4 w-4' />
								{activity.date}
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
							<span
								className={`rounded-md px-4 py-1.5 text-sm font-medium ${activity.categoryColor}`}
							>
								{activity.category}
							</span>
							<div className='flex items-center gap-2 text-sm text-gray-600'>
								<Calendar className='h-4 w-4 text-indigo-600' />
								{activity.date}
							</div>
						</div>

						<div className='flex flex-col gap-8 rounded-xl bg-white shadow-sm sm:gap-10 md:gap-12'>
							{activity.gallery && (
								<div className='overflow-hidden rounded-t-xl'>
									<ImageCarousel
										images={activity.gallery}
										title={activity.title}
									/>
								</div>
							)}
							<div className='p-8'>
								<ActivityContent activity={activity} />
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className='space-y-8'>
						<div className='rounded-xl bg-white p-6 shadow-sm'>
							<h3 className='mb-4 text-lg font-semibold text-gray-900'>
								{t('ActivityDetailsPage.share')}
							</h3>
							<ActivityShare />
						</div>

						<div className='rounded-xl bg-white p-6 shadow-sm'>
							<h3 className='mb-4 text-lg font-semibold text-gray-900'>
								{t('ActivityDetailsPage.related-activities-title')}
							</h3>
							<RelatedActivities
								currentId={activity.id}
								category={activity.category}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivityDetailsPage;
