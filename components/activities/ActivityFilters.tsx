'use client';

import { useRouter } from '@/i18n/routing';
import { constructNewActivityQuery } from '@/utils/constructNewActivityQuery';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface ActivityFiltersProps {
	filters: string[];
	searchParams: {
		query?: string;
		sort?: string;
		category?: string;
	};
}

export const ActivityFilters: FunctionComponent<ActivityFiltersProps> = ({
	filters,
	searchParams,
}) => {
	const router = useRouter();
	const t = useTranslations();

	return (
		<div className='mb-8 flex flex-wrap gap-3'>
			<button
				key='All'
				onClick={() =>
					router.push(
						{
							pathname: '/activities',
							query: constructNewActivityQuery(
								searchParams.query,
								undefined,
								searchParams.sort
							),
						},
						{
							scroll: false,
						}
					)
				}
				className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
					!searchParams.category
						? 'bg-indigo-600 text-white shadow-md'
						: 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
				}`}
			>
				{t('ActivitiesPage.all-tab')}
			</button>
			{filters.map((filter) => (
				<button
					key={filter}
					onClick={() =>
						router.push(
							{
								pathname: '/activities',
								query: constructNewActivityQuery(
									searchParams.query,
									filter,
									searchParams.sort
								),
							},
							{
								scroll: false,
							}
						)
					}
					className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
						searchParams.category === filter
							? 'bg-indigo-600 text-white shadow-md'
							: 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
					}`}
				>
					{filter}
				</button>
			))}
		</div>
	);
};
