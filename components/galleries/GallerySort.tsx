'use client';

import { FunctionComponent, useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';

interface GallerySortProps {
	searchParams: {
		query?: string;
		sort?: string;
	};
}

export const GallerySort: FunctionComponent<GallerySortProps> = ({
	searchParams,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const t = useTranslations();
	const sort = searchParams.sort;

	return (
		<div className='relative'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 transition-all hover:bg-gray-50'
			>
				<ArrowUpDown className='h-5 w-5' />
				<span className='hidden sm:inline'>
					{t('GalleriesPage.sort-by-button')}
				</span>
			</button>

			{isOpen && (
				<div className='absolute right-0 z-30 mt-2 w-48 rounded-xl border border-gray-100 bg-white py-2 shadow-lg'>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${sort === 'createdAt:desc' ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/galleries',
									query: searchParams.query
										? { query: searchParams.query }
										: undefined,
								},
								{
									scroll: false,
								}
							);
						}}
					>
						{t('GalleriesPage.latest-first-option')}
					</button>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${sort === 'createdAt' ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/galleries',
									query: { ...searchParams, sort: 'createdAt' },
								},
								{ scroll: false }
							);
						}}
					>
						{t('GalleriesPage.oldest-first-option')}
					</button>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${sort === 'title' ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/galleries',
									query: { ...searchParams, sort: 'title' },
								},
								{ scroll: false }
							);
						}}
					>
						A - Z
					</button>
					<button
						className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 ${sort === 'title:desc' ? '!bg-indigo-100 !text-indigo-600' : ''}`}
						onClick={() => {
							setIsOpen(false);
							router.push(
								{
									pathname: '/galleries',
									query: { ...searchParams, sort: 'title:desc' },
								},
								{ scroll: false }
							);
						}}
					>
						Z - A
					</button>
				</div>
			)}
		</div>
	);
};
