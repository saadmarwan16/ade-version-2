import { ArrowRight } from 'lucide-react';
import { ActivitiesList } from './ActivitiesList';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export const RecentActivities = async () => {
	const t = await getTranslations();

	return (
		<section
			className='sm:py-18 bg-white py-16 md:py-20 lg:py-24'
			id='activities'
		>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mb-16 flex flex-col items-end justify-between gap-4 sm:flex-row'>
					<div>
						<h2 className='mb-2 inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:mb-3'>
							{t('HomePage.recent-activities-title')}
						</h2>
						<p className='max-w-2xl text-lg text-gray-600'>
							{t('HomePage.recent-activities-description')}
						</p>
					</div>
					<Link
						href='/activities'
						className='flex items-center gap-2 text-lg font-medium text-gray-900 hover:text-indigo-600'
					>
						{t('HomePage.view-all-button')}
						<ArrowRight className='h-5 w-5' />
					</Link>
				</div>

				<ActivitiesList />
			</div>
		</section>
	);
};
