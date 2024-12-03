'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface ScrollSectionProps {
	title: string;
	content: string;
	image: string;
	imageAlt: string;
	index: number;
}

export function ScrollSection({
	title,
	content,
	image,
	imageAlt,
	index,
}: ScrollSectionProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: '-100px' });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.6, delay: 0.2 }}
			className='flex min-h-screen items-center py-24'
		>
			<div
				className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
					index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
				}`}
			>
				<div className='space-y-6'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl'
					>
						{title}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='text-lg leading-relaxed text-gray-600'
					>
						{content}
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={
						isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
					}
					transition={{ duration: 0.6, delay: 0.5 }}
					className='relative aspect-square overflow-hidden rounded-2xl shadow-xl'
				>
					<Image
						src={image}
						alt={imageAlt}
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, 50vw'
						priority={index === 0}
					/>
				</motion.div>
			</div>
		</motion.div>
	);
}
