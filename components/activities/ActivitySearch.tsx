'use client';

import { useRouter } from '@/i18n/routing';
import { constructNewActivityQuery } from '@/utils/constructNewActivityQuery';
import { useDebounce } from '@/utils/hooks/useDebounce';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FunctionComponent, useEffect, useState } from 'react';

interface ActivitySearchProps {
	searchParams: {
		query?: string;
		sort?: string;
		category?: string;
	};
}

export const ActivitySearch: FunctionComponent<ActivitySearchProps> = ({
	searchParams,
}) => {
	const [search, setSearch] = useState(searchParams.query);
	const t = useTranslations();
	const router = useRouter();
	const debouncedValue = useDebounce(search, 500);

	useEffect(() => {
		router.push(
			{
				pathname: '/activities',
				query: constructNewActivityQuery(
					debouncedValue,
					searchParams.category,
					searchParams.sort
				),
			},
			{
				scroll: false,
			}
		);
	}, [debouncedValue, router, searchParams.category, searchParams.sort]);

	return (
		<div className='relative flex-grow'>
			<Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
			<input
				type='text'
				placeholder={t('ActivitiesPage.search-placeholder')}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200'
			/>
		</div>
	);
};
