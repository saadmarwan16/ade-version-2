import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwiper } from 'swiper/react';

export function CarouselNavigation() {
	const swiper = useSwiper();

	return (
		<>
			<button
				onClick={() => swiper.slidePrev()}
				className='absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
				aria-label='Previous slide'
			>
				<ChevronLeft className='h-6 w-6' />
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className='absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
				aria-label='Next slide'
			>
				<ChevronRight className='h-6 w-6' />
			</button>
		</>
	);
}
