'use client';

import { Search } from 'lucide-react';
import { FunctionComponent, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { useDebounce } from '@/utils/hooks/useDebounce';

interface GallerySearchProps {
	searchParams: {
		query?: string;
		sort?: string;
	};
}

export const GallerySearch: FunctionComponent<GallerySearchProps> = ({
	searchParams,
}) => {
	const [search, setSearch] = useState(searchParams.query);
	const t = useTranslations();
	const router = useRouter();
	const debouncedValue = useDebounce(search, 500);

	useEffect(() => {
		if (!!debouncedValue) {
			router.push(
				{
					pathname: '/galleries',
					query: {
						...searchParams,
						query: debouncedValue,
					},
				},
				{
					scroll: false,
				}
			);
		} else {
			router.push(
				{
					pathname: '/galleries',
					query: searchParams.sort ? { sort: searchParams.sort } : undefined,
				},
				{
					scroll: false,
				}
			);
		}
	}, [debouncedValue, router, searchParams]);

	return (
		<div className='relative flex-grow'>
			<Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
			<input
				type='text'
				placeholder={t('GalleriesPage.search-placeholder')}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200'
			/>
		</div>
	);
};
