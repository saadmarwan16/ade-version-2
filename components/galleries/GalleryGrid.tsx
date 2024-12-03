'use client';

import { useState } from 'react';
import { GalleryCard } from './GalleryCard';
import { galleries } from './data';
import { LoadingSpinner } from '../activities/LoadingSpinner';
import { SeeMoreButton } from '../activities/SeeMoreButton';
import { EmptyState } from './EmptyState';

interface GalleryGridProps {
	searchQuery: string;
}

export function GalleryGrid({ searchQuery }: GalleryGridProps) {
	const [loading, setLoading] = useState(false);
	const [displayCount, setDisplayCount] = useState(6);

	const filteredGalleries = galleries.filter((gallery) =>
		gallery.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const visibleGalleries = filteredGalleries.slice(0, displayCount);
	const hasMore = displayCount < filteredGalleries.length;

	const handleLoadMore = () => {
		setLoading(true);
		setTimeout(() => {
			setDisplayCount((prev) => Math.min(prev + 6, filteredGalleries.length));
			setLoading(false);
		}, 800);
	};

	if (filteredGalleries.length === 0) {
		return <EmptyState />;
	}

	return (
		<>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{visibleGalleries.map((gallery) => (
					<GalleryCard key={gallery.id} gallery={gallery} />
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
