import { memo } from 'react';

function HeroTitleComponent() {
	return (
		<h1 className='relative mb-8 text-6xl font-bold !leading-tight md:text-7xl'>
			<span className='text-white'>I am</span>
			<br />
			<span className='bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent'>
				Adébayo
			</span>
			<br />
			<span className='bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent'>
				Ademon
			</span>
		</h1>
	);
}

export const HeroTitle = memo(HeroTitleComponent);
