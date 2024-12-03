import Image from 'next/image';

interface ViewerThumbnailsProps {
	images: string[];
	currentIndex: number;
	onSelect: (index: number) => void;
}

export function ViewerThumbnails({
	images,
	currentIndex,
	onSelect,
}: ViewerThumbnailsProps) {
	return (
		<div className='scrollbar-hide flex h-full items-center gap-2 overflow-x-auto px-4'>
			{images.map((image, index) => (
				<button
					key={index}
					onClick={() => onSelect(index)}
					className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all ${
						currentIndex === index
							? 'ring-2 ring-white ring-offset-2 ring-offset-black'
							: 'opacity-50 hover:opacity-75'
					}`}
				>
					<Image
						src={image}
						alt={`Thumbnail ${index + 1}`}
						fill
						className='object-cover'
					/>
				</button>
			))}
		</div>
	);
}
