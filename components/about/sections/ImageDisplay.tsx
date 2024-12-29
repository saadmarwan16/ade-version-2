'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { TImage } from '@/lib/types/shared';
import { FunctionComponent } from 'react';
import { constructImageLink } from '@/lib/contructImageLink';

interface ImageDisplayProps {
	title: string;
	image: TImage;
}

export const ImageDisplay: FunctionComponent<ImageDisplayProps> = ({
	title,
	image,
}) => {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={image.documentId}
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ duration: 0.4 }}
				className='relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl'
			>
				<Image
					src={constructImageLink(image.url)}
					alt={`Image of ${title}`}
					fill
					className='object-cover'
					sizes='(max-width: 1280px) 100vw, 50vw'
					priority
				/>
			</motion.div>
		</AnimatePresence>
	);
};
