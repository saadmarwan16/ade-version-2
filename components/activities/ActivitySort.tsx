'use client';

import { FunctionComponent, useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { constructNewActivityQuery } from '@/utils/constructNewActivityQuery';

interface ActivitySortProps {
	searchParams: {
		query?: string;
		sort?: string;
		category?: string;
	};
}

export const ActivitySort: FunctionComponent<ActivitySortProps> = ({
	searchParams,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations();
	const router = useRouter();
	const sort = searchParams.sort;

	return (
		<div className='relative'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 transition-all hover:bg-gray-50'
			>
				<ArrowUpDown className='h-5 w-5' />
				<span className='hidden sm:inline'>
					{t('ActivitiesPage.sort-by-button')}
				</span>
			</button>

			{isOpen && (
				<div className='absolute right-0 z-30 mt-2 w-48 rounded-xl border border-gray-100 bg-white py-2 shadow-lg'>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${!sort ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/activities',
									query: constructNewActivityQuery(
										searchParams.query,
										searchParams.category
									),
								},
								{
									scroll: false,
								}
							);
						}}
					>
						{t('ActivitiesPage.latest-first-option')}
					</button>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${sort === 'date:asc' ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/activities',
									query: constructNewActivityQuery(
										searchParams.query,
										searchParams.category,
										'date:asc'
									),
								},
								{
									scroll: false,
								}
							);
						}}
					>
						{t('ActivitiesPage.oldest-first-option')}
					</button>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${sort === 'title' ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/activities',
									query: constructNewActivityQuery(
										searchParams.query,
										searchParams.category,
										'title'
									),
								},
								{
									scroll: false,
								}
							);
						}}
					>
						A-Z
					</button>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${sort === 'title:desc' ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/activities',
									query: constructNewActivityQuery(
										searchParams.query,
										searchParams.category,
										'title:desc'
									),
								},
								{
									scroll: false,
								}
							);
						}}
					>
						Z-A
					</button>
				</div>
			)}
		</div>
	);
};
