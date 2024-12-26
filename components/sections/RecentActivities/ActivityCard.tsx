import { Calendar, ArrowRight } from 'lucide-react';
import { Activity } from './types';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface ActivityCardProps {
	activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
	const t = useTranslations();
	const categoryColors = {
		Diplomacy: 'bg-purple-50 text-purple-700 ring-1 ring-purple-600/10',
		Technology: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
		Education: 'bg-pink-50 text-pink-700 ring-1 ring-pink-600/10',
	};

	return (
		<Link
			href={{
				pathname: '/activities/[slug]',
				params: {
					slug: activity.id,
				},
			}}
			className='block h-full'
		>
			<div className='group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg'>
				<div className='relative aspect-video overflow-hidden'>
					<div className='absolute inset-0 z-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
					<Image
						src={activity.image}
						alt={activity.title}
						width={800}
						height={450}
						className='h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105'
					/>
				</div>
				<div className='flex flex-grow flex-col p-6'>
					<div className='mb-4 flex items-center gap-3'>
						<span
							className={`rounded-md px-3 py-1 text-sm font-medium ${
								categoryColors[activity.category as keyof typeof categoryColors]
							}`}
						>
							{activity.category}
						</span>
						<div className='flex items-center text-sm text-gray-500'>
							<Calendar className='mr-1 h-4 w-4' />
							{activity.date}
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
}
