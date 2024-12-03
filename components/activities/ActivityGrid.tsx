'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { activities } from './data';
import { EmptyState } from './EmptyState';
import { LoadingSpinner } from './LoadingSpinner';
import { SeeMoreButton } from './SeeMoreButton';

interface ActivityGridProps {
	filter: string;
	searchQuery: string;
}

export function ActivityGrid({ filter, searchQuery }: ActivityGridProps) {
	const [loading, setLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(6);

	const filteredActivities = activities.filter((activity) => {
		const matchesFilter = filter === 'All' || activity.category === filter;
		const matchesSearch = activity.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	const visibleActivities = filteredActivities.slice(0, displayCount);
	const hasMore = displayCount < filteredActivities.length;

	const handleLoadMore = useCallback(() => {
		setLoading(true);
		setTimeout(() => {
			setDisplayCount((prev) => Math.min(prev + 6, filteredActivities.length));
			setLoading(false);
		}, 800);
	}, [filteredActivities.length]);

	if (filteredActivities.length === 0) {
		return (
			<EmptyState filter={filter} onReset={() => window.location.reload()} />
		);
	}

	return (
		<>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{visibleActivities.map((activity) => (
					<Link
						key={activity.id}
						href={`/activities/${activity.id}`}
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
											activity.categoryColor
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
										Read more
										<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
									</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{loading && <LoadingSpinner />}

			<SeeMoreButton
				onClick={handleLoadMore}
				loading={loading}
				hasMore={hasMore}
			/>
		</>
	);
}
