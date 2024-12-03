'use client';

import { useInView } from 'react-intersection-observer';
import { Section } from '../types';

interface ContentSectionProps {
	section: Section;
	onInView: (inView: boolean) => void;
}

export function ContentSection({ section, onInView }: ContentSectionProps) {
	const { ref } = useInView({
		threshold: 0.5,
		onChange: (inView) => onInView(inView),
	});

	return (
		<div
			ref={ref}
			className='flex items-center py-2 md:py-4 lg:min-h-[400px] lg:py-8'
		>
			<div>
				<h2 className='mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl lg:mb-6'>
					{section.title}
				</h2>
				<p className='text-lg leading-relaxed text-gray-600'>
					{section.content}
				</p>
			</div>
		</div>
	);
}
