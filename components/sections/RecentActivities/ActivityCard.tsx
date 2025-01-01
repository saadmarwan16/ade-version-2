import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, Locale } from '@/i18n/routing';
import { THomePageActivity } from '@/lib/types/home_page';
import { FunctionComponent } from 'react';
import { constructImageLink } from '@/lib/contructImageLink';
import { typeColors } from '@/utils/constants/typeColors';
import dayjs from 'dayjs';

interface ActivityCardProps {
	locale: Locale;
	activity: THomePageActivity;
}

export const ActivityCard: FunctionComponent<ActivityCardProps> = ({
	locale,
	activity,
}) => {
	const t = useTranslations();

	return (
		<Link
			href={{
				pathname: '/activities/[slug]',
				params: {
					slug: activity.slug,
				},
			}}
			className='block h-full'
		>
			<div className='group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg'>
				<div className='relative aspect-video overflow-hidden'>
					<div className='absolute inset-0 z-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
					<Image
						src={constructImageLink(activity.thumbnail.url)}
						alt={activity.title}
						width={800}
						height={450}
						className='h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105'
					/>
				</div>
				<div className='flex flex-grow flex-col p-6'>
					<div className='mb-4 flex items-center gap-3 flex-wrap'>
						{activity.activity_categories.map((category) => (
							<span
								key={category.documentId}
								className={`rounded-md px-3 py-1 text-sm font-medium ${
									typeColors[category.color as keyof typeof typeColors]
								}`}
							>
								{category.title}
							</span>
						))}
						<div className='flex items-center text-sm text-gray-500'>
							<Calendar className='mr-1 h-4 w-4' />
							{dayjs(activity.date).locale(locale).format('MMM DD, YYYY')}
						</div>
					</div>
					<h3 className='mb-4 line-clamp-2 text-xl font-semibold text-gray-900'>
						{activity.title}
					</h3>
					<div className='mt-auto'>
						<span className='inline-flex items-center gap-2 font-medium text-indigo-600 group-hover:text-indigo-700'>
							{t('ActivitiesPage.read-more-button')}
							<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};
