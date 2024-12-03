import Image from 'next/image';

interface CarouselSlideProps {
	image: string;
	alt: string;
}

export function CarouselSlide({ image, alt }: CarouselSlideProps) {
	return (
		<div className='relative h-full w-full'>
			<div className='absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent' />
			<Image src={image} alt={alt} fill className='object-cover' priority />
		</div>
	);
}
