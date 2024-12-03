'use client';

import { useInView } from 'react-intersection-observer';
import { Section } from '../types';

interface AboutSectionProps {
	section: Section;
	onInView: () => void;
}

export function AboutSection({ section, onInView }: AboutSectionProps) {
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: false,
		onChange: (inView) => {
			if (inView) {
				onInView();
			}
		},
	});

	return (
		<div
			ref={ref}
			className={`transition-opacity duration-500 ${
				inView ? 'opacity-100' : 'opacity-50'
			}`}
		>
			<div>
				<h2 className='mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl'>
					{section.title}
				</h2>
				<p className='text-lg leading-relaxed text-gray-600'>
					{section.content}
				</p>
			</div>
		</div>
	);
}
