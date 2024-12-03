'use client';

import { useState, useEffect } from 'react';
import { ContentSection } from './sections/ContentSection';
import { ImageDisplay } from './sections/ImageDisplay';
import { sections } from './data';

export function AboutContent() {
	const [activeSection, setActiveSection] = useState(0);
	const [sectionStates, setSectionStates] = useState<boolean[]>(
		Array(sections.length).fill(false)
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
					{sections.map((section, index) => (
						<ContentSection
							key={section.title}
							section={section}
							onInView={(inView) => handleSectionInView(index, inView)}
						/>
					))}
				</div>

				{/* Image Column */}
				<div className='hidden lg:block'>
					<div className='sticky top-32'>
						<ImageDisplay section={sections[activeSection]} />
					</div>
				</div>
			</div>
		</div>
	);
}
