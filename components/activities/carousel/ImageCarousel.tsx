'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { CarouselSlide } from './CarouselSlide';
import { CarouselNavigation } from './CarouselNavigation';
import { CarouselPagination } from './CarouselPagination';

import 'swiper/css';

interface ImageCarouselProps {
	images: string[];
	title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='relative aspect-video bg-gray-900'>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				className='h-full'
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<CarouselSlide
							image={image}
							alt={`${title} - Image ${index + 1}`}
						/>
					</SwiperSlide>
				))}
				<CarouselNavigation />
				<CarouselPagination
					totalSlides={images.length}
					activeIndex={activeIndex}
				/>
			</Swiper>
		</div>
	);
}
