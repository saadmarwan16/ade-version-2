'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';
import { SeeMoreButton } from './SeeMoreButton';
import { useTranslations } from 'next-intl';
import { Link, Locale } from '@/i18n/routing';
import useSWRInfinite from 'swr/infinite';
import { env } from '@/env';
import { activitiesQuery } from '@/lib/quiries/activities';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { ActivitiesSchema } from '@/lib/types/activities';
import { constructImageLink } from '@/lib/contructImageLink';
import { typeColors } from '@/utils/constants/typeColors';
import { EmptyState } from './EmptyState';
import dayjs from 'dayjs';

interface ActivityGridProps {
	locale: Locale;
	query?: string;
	sort?: string;
	category?: string;
}

export const ActivityGrid: FunctionComponent<ActivityGridProps> = ({
	locale,
	query,
	sort,
	category,
}) => {
	const t = useTranslations();
	const {
		data: activities,
		size,
		setSize,
		isLoading,
		isValidating,
	} = useSWRInfinite(
		(pageIdx) => {
			return `${env.NEXT_PUBLIC_API_URL}/activities?${activitiesQuery({
				locale: locale,
				page: pageIdx + 1,
				search: query,
				sort: sort,
				category: category,
			})}`;
		},
		async (url) => {
			const { data } = await fetchWithZod(ActivitiesSchema, url);

			return data;
		},
		{
			revalidateOnFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<>
			{size === 1 && activities?.[0]?.length === 0 ? (
				<EmptyState
					locale={locale}
					searchParams={{
						query: query,
						sort: sort,
						category: category,
					}}
				/>
			) : (
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{activities?.map((page) => (
						<>
							{page.map((activity) => (
								<Link
									key={activity.documentId}
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
											<div className='mb-4 flex items-center gap-3'>
												{activity.activity_categories.map((category) => (
													<span
														key={category.documentId}
														className={`rounded-md px-3 py-1 text-sm font-medium ${
															typeColors[
																category.color as keyof typeof typeColors
															]
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
							))}
						</>
					))}
				</div>
			)}

			{isLoading || (isValidating && <LoadingSpinner />)}

			<SeeMoreButton
				onClick={() => setSize(size + 1)}
				loading={isLoading || isValidating}
				hasMore={activities?.[size - 1]?.length !== 0}
			/>
		</>
	);
};
