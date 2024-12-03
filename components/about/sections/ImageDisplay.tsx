'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';

interface ImageDisplayProps {
	section: Section;
}

export function ImageDisplay({ section }: ImageDisplayProps) {
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={section.title}
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ duration: 0.4 }}
				className='relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl'
			>
				<Image
					src={section.image}
					alt={section.imageAlt}
					fill
					className='object-cover'
					sizes='(max-width: 1280px) 100vw, 50vw'
					priority
				/>
			</motion.div>
		</AnimatePresence>
	);
}
