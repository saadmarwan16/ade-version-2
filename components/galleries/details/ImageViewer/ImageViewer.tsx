'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import { ViewerControls } from './ViewerControls';
import { ViewerThumbnails } from './ViewerThumbnails';
import { ViewerProgress } from './ViewerProgress';
import { useFullscreen } from './useFullscreen';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'react-medium-image-zoom/dist/styles.css';
import Image from 'next/image';

interface ImageViewerProps {
	images: string[];
	initialIndex?: number;
	onClose: () => void;
}

export function ImageViewer({
	images,
	initialIndex = 0,
	onClose,
}: ImageViewerProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [isPlaying, setIsPlaying] = useState(false);
	const { isFullscreen, toggleFullscreen } = useFullscreen();
	const swiperRef = useRef<any>(null);

	const handleSlideChange = useCallback((swiper: any) => {
		setCurrentIndex(swiper.realIndex);
	}, []);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowLeft') swiperRef.current?.slidePrev();
			if (e.key === 'ArrowRight') swiperRef.current?.slideNext();
		},
		[onClose]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'auto';
		};
	}, [handleKeyDown]);

	return (
		<div className='fixed inset-0 z-50 overflow-hidden bg-black'>
			<div className='relative flex h-full flex-col'>
				{/* Main Image Carousel */}
				<div className='relative flex-grow'>
					<Swiper
						modules={[Navigation, Pagination, Autoplay, Virtual]}
						spaceBetween={0}
						slidesPerView={1}
						initialSlide={initialIndex}
						loop={true}
						virtual
						navigation={{
							prevEl: '.swiper-button-prev',
							nextEl: '.swiper-button-next',
						}}
						autoplay={
							isPlaying ? { delay: 3000, disableOnInteraction: false } : false
						}
						onSlideChange={handleSlideChange}
						onSwiper={(swiper) => (swiperRef.current = swiper)}
						className='h-full select-none'
					>
						{images.map((image, index) => (
							<SwiperSlide
								key={index}
								virtualIndex={index}
								className='flex items-center justify-center p-4 sm:p-8'
							>
								<div className='relative flex h-full w-full items-center justify-center'>
									<Zoom>
										<Image
											src={image}
											alt={`Gallery image ${index + 1}`}
											className='h-auto max-h-[calc(100vh-180px)] w-auto max-w-full object-contain'
											loading={
												Math.abs(index - currentIndex) <= 2 ? 'eager' : 'lazy'
											}
										/>
									</Zoom>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Navigation Buttons */}
					<button
						className='swiper-button-prev absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20 sm:flex'
						aria-label='Previous slide'
					>
						<ChevronLeft className='h-6 w-6 text-white' />
					</button>
					<button
						className='swiper-button-next absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20 sm:flex'
						aria-label='Next slide'
					>
						<ChevronRight className='h-6 w-6 text-white' />
					</button>
				</div>

				{/* Controls */}
				<div className='absolute right-4 top-4 z-30'>
					<ViewerControls
						isPlaying={isPlaying}
						isFullscreen={isFullscreen}
						onPlayToggle={() => setIsPlaying(!isPlaying)}
						onFullscreenToggle={toggleFullscreen}
						onClose={onClose}
					/>
				</div>

				{/* Progress */}
				<div className='absolute bottom-24 left-1/2 z-30 -translate-x-1/2'>
					<ViewerProgress current={currentIndex + 1} total={images.length} />
				</div>

				{/* Thumbnails */}
				<div className='h-20 bg-black/50 backdrop-blur-sm'>
					<ViewerThumbnails
						images={images}
						currentIndex={currentIndex}
						onSelect={(index) => swiperRef.current?.slideTo(index)}
					/>
				</div>
			</div>
		</div>
	);
}
