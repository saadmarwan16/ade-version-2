'use client';

import { useState, useEffect, FunctionComponent } from 'react';
import { ContentSection } from './sections/ContentSection';
import { ImageDisplay } from './sections/ImageDisplay';
import { TKnowMeDetails } from '@/lib/types/know_me';

interface AboutContentProps {
	details: TKnowMeDetails[];
}

export const AboutContent: FunctionComponent<AboutContentProps> = ({
	details,
}) => {
	const [activeSection, setActiveSection] = useState(0);
	const [sectionStates, setSectionStates] = useState<boolean[]>(
		Array(details.length).fill(false)
	);

	useEffect(() => {
		const newActiveSection = sectionStates.findIndex((isVisible) => isVisible);
		if (newActiveSection !== -1) {
			setActiveSection(newActiveSection);
		}
	}, [sectionStates]);

	const handleSectionInView = (index: number, inView: boolean) => {
		setSectionStates((prev) => {
			const newStates = [...prev];
			newStates[index] = inView;
			return newStates;
		});
	};

	return (
		<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='lg:grid lg:grid-cols-2 lg:gap-16'>
				{/* Content Column */}
				<div className='space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-16'>
					{details.map((detail, index) => (
						<ContentSection
							key={detail.title}
							detail={detail}
							onInView={(inView) => handleSectionInView(index, inView)}
						/>
					))}
				</div>

				{/* Image Column */}
				<div className='hidden lg:block'>
					<div className='sticky top-32'>
						<ImageDisplay
							title={details[activeSection].title}
							image={details[activeSection].image}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
