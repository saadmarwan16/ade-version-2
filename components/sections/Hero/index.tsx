import { memo } from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import Image from 'next/image';

function HeroComponent() {
	return (
		<section className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900'>
			{/* Background image with overlay */}
			<div className='absolute inset-0'>
				<Image
					src='https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
					alt='Background'
					className='h-full w-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95' />
			</div>

			<div className='relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8'>
				<HeroBackground />
				<HeroContent />
			</div>
		</section>
	);
}

export const Hero = memo(HeroComponent);
