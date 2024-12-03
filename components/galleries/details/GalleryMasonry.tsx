'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import { ImageViewer } from './ImageViewer/ImageViewer';
import 'react-loading-skeleton/dist/skeleton.css';

interface GalleryMasonryProps {
	images: string[];
}

function LazyImage({ src, index }: { src: string; index: number }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '50px 0px',
	});

	return (
		<div ref={ref} className='relative w-full'>
			{!isLoaded && (
				<Skeleton className='absolute inset-0 h-full w-full rounded-lg' />
			)}
			{inView && (
				<Image
					src={src}
					alt={`Gallery image ${index + 1}`}
					width={800}
					height={600}
					className={`w-full transform rounded-lg transition-all duration-300 group-hover:scale-[1.02] ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
					onLoad={() => setIsLoaded(true)}
					priority={index < 4} // Prioritize loading first 4 images
					loading={index < 4 ? 'eager' : 'lazy'}
					sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
				/>
			)}
		</div>
	);
}

export function GalleryMasonry({ images }: GalleryMasonryProps) {
	const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
		null
	);
	const [columns, setColumns] = useState(3);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateColumns = () => {
			if (!containerRef.current) return;
			const width = containerRef.current.offsetWidth;
			if (width < 640) setColumns(1);
			else if (width < 1024) setColumns(2);
			else setColumns(3);
		};

		updateColumns();
		const debouncedResize = debounce(updateColumns, 100);
		window.addEventListener('resize', debouncedResize);
		return () => window.removeEventListener('resize', debouncedResize);
	}, []);

	const getColumnImages = (columnIndex: number) => {
		return images.filter((_, index) => index % columns === columnIndex);
	};

	return (
		<>
			<div ref={containerRef} className='p-4'>
				<div className='flex gap-4'>
					{Array.from({ length: columns }).map((_, columnIndex) => (
						<div key={columnIndex} className='flex-1 space-y-4'>
							{getColumnImages(columnIndex).map((image, index) => (
								<button
									key={index}
									onClick={() => setSelectedImageIndex(images.indexOf(image))}
									className='group relative w-full cursor-zoom-in'
								>
									<div className='absolute inset-0 z-10 rounded-lg bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
									<LazyImage src={image} index={index} />
								</button>
							))}
						</div>
					))}
				</div>
			</div>

			{selectedImageIndex !== null && (
				<ImageViewer
					images={images}
					initialIndex={selectedImageIndex}
					onClose={() => setSelectedImageIndex(null)}
				/>
			)}
		</>
	);
}

// Utility function for debouncing resize events
function debounce(fn: Function, ms: number) {
	let timer: NodeJS.Timeout;
	return (...args: any[]) => {
		clearTimeout(timer);
		// @ts-ignore
		timer = setTimeout(() => fn.apply(this, args), ms);
	};
}
