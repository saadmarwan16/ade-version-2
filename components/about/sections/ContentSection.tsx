'use client';

import { useInView } from 'react-intersection-observer';
import { TKnowMeDetails } from '@/lib/types/know_me';
import { FunctionComponent } from 'react';

interface ContentSectionProps {
	detail: TKnowMeDetails;
	onInView: (inView: boolean) => void;
}

export const ContentSection: FunctionComponent<ContentSectionProps> = ({
	detail,
	onInView,
}) => {
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
					{detail.title}
				</h2>
				<p className='text-lg leading-relaxed text-gray-600'>
					{detail.description}
				</p>
			</div>
		</div>
	);
};
