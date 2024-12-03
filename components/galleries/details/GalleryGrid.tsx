'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';

interface GalleryGridProps {
	images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<>
			<div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3'>
				{images.map((image, index) => (
					<button
						key={index}
						onClick={() => setSelectedImage(image)}
						className='group relative aspect-square overflow-hidden rounded-lg'
					>
						<div className='absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
						<Image
							src={image}
							alt={`Gallery image ${index + 1}`}
							fill
							className='transform object-cover transition-transform duration-300 group-hover:scale-105'
						/>
					</button>
				))}
			</div>

			<Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
				{selectedImage && (
					<div className='relative aspect-[3/2] w-full'>
						<Image
							src={selectedImage}
							alt='Gallery image'
							fill
							className='object-contain'
						/>
					</div>
				)}
			</Modal>
		</>
	);
}
