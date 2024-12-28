'use client';

import { useState } from 'react';
import { Search, Activity, Briefcase } from 'lucide-react';
import { ActivityFilters } from '@/components/activities/ActivityFilters';
import { ActivityGrid } from '@/components/activities/ActivityGrid';
import { ActivitySort } from '@/components/activities/ActivitySort';
import { useTranslations } from 'next-intl';

export default function AllActivities() {
	const [searchQuery, setSearchQuery] = useState('');
	const [activeFilter, setActiveFilter] = useState('All');
	const t = useTranslations();

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
							<div className='text-lg text-indigo-200'>{t('ActivitiesPage.activities')}</div>
						</div>
						<div className='w-full max-w-xs rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm'>
							<Briefcase className='mx-auto mb-4 h-10 w-10 text-indigo-200' />
							<div className='mb-2 text-3xl font-bold text-white'>25+</div>
							<div className='text-lg text-indigo-200'>{t('ActivitiesPage.projects')}</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='bg-gradient-to-br from-gray-50 to-white py-12'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					{/* Search and Filter Section */}
					<div className='mb-8 flex gap-2 sm:gap-3 md:gap-4'>
						<div className='relative flex-grow'>
							<Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
							<input
								type='text'
								placeholder={t('ActivitiesPage.search-placeholder')}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className='w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200'
							/>
						</div>
						<ActivitySort />
					</div>

					<ActivityFilters
						activeFilter={activeFilter}
						onFilterChange={setActiveFilter}
					/>
					<ActivityGrid filter={activeFilter} searchQuery={searchQuery} />
				</div>
			</div>
		</div>
	);
}
