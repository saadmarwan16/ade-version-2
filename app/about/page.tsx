'use client';

import { AboutHero } from '@/components/about/AboutHero';
import { AboutContent } from '@/components/about/AboutContent';

export default function AboutPage() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
			<AboutHero />
			<div id='content' className='py-12 sm:py-16 md:py-20 lg:py-24'>
				<AboutContent />
			</div>
		</main>
	);
}
