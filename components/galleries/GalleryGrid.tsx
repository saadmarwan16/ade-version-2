'use client';

import { FunctionComponent } from 'react';
import { GalleryCard } from './GalleryCard';
import { LoadingSpinner } from '../activities/LoadingSpinner';
import { SeeMoreButton } from '../activities/SeeMoreButton';
import useSWRInfinite from 'swr/infinite';
import { env } from '@/env';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { GalleriesSchema } from '@/lib/types/galleries';
import { galleriesQuery } from '@/lib/quiries/galleries';
import { Locale } from '@/i18n/routing';
import { EmptyState } from './EmptyState';

interface GalleryGridProps {
	locale: Locale;
	query?: string;
	sort?: string;
}

export const GalleryGrid: FunctionComponent<GalleryGridProps> = ({
	locale,
	query,
	sort,
}) => {
	const {
		data: galleries,
		size,
		setSize,
		isLoading,
		isValidating,
	} = useSWRInfinite(
		(pageIdx) => {
			return `${env.NEXT_PUBLIC_API_URL}/galleries?${galleriesQuery({
				locale: locale,
				page: pageIdx + 1,
				search: query,
				sort: sort,
			})}`;
		},
		async (url) => {
			const { data } = await fetchWithZod(GalleriesSchema, url);

			return data;
		},
		{
			revalidateOnFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<>
			{size === 1 && galleries?.[0]?.length === 0 ? (
				<EmptyState />
			) : (
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{galleries?.map((page) => (
						<>
							{page.map((gallery) => (
								<GalleryCard key={gallery.documentId} gallery={gallery} />
							))}
						</>
					))}
				</div>
			)}

			{isLoading || isValidating && <LoadingSpinner />}

			<SeeMoreButton
				onClick={() => setSize(size + 1)}
				loading={isLoading || isValidating}
				hasMore={galleries?.[size - 1]?.length !== 0}
			/>
		</>
	);
};
