import { useSwiper } from 'swiper/react';

interface CarouselPaginationProps {
	totalSlides: number;
	activeIndex: number;
}

export function CarouselPagination({
	totalSlides,
	activeIndex,
}: CarouselPaginationProps) {
	const swiper = useSwiper();

	return (
		<div className='absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2'>
			{Array.from({ length: totalSlides }).map((_, index) => (
				<button
					key={index}
					onClick={() => swiper.slideTo(index)}
					className={`h-2 w-2 rounded-full transition-all ${
						activeIndex === index
							? 'w-6 bg-white'
							: 'bg-white/50 hover:bg-white/75'
					}`}
					aria-label={`Go to slide ${index + 1}`}
				/>
			))}
		</div>
	);
}
