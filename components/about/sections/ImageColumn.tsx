'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { sections } from '../data';

interface ImageColumnProps {
	activeSection: number;
}

export function ImageColumn({ activeSection }: ImageColumnProps) {
	return (
		<>
			{/* Desktop Image Column */}
			<div className='hidden lg:block'>
				<div className='sticky top-32'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeSection}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className='relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl'
						>
							<Image
								src={sections[activeSection].image}
								alt={sections[activeSection].imageAlt}
								fill
								className='object-cover'
								sizes='(max-width: 1280px) 100vw, 50vw'
								priority
							/>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* Mobile Image Column */}
			<div className='mt-12 lg:hidden'>
				<div className='relative h-[300px] overflow-hidden rounded-2xl shadow-xl'>
					<Image
						src={sections[activeSection].image}
						alt={sections[activeSection].imageAlt}
						fill
						className='object-cover'
						sizes='100vw'
						priority
					/>
				</div>
			</div>
		</>
	);
}
