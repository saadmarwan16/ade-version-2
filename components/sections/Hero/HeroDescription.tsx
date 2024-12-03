import { memo } from 'react';

function HeroDescriptionComponent() {
	return (
		<div className='mb-8 space-y-4'>
			<p className='text-2xl font-medium text-indigo-200'>
				Biomedical Engineer & International Relations Expert
			</p>
			<p className='max-w-2xl text-xl text-gray-300'>
				Bridging the gap between healthcare innovation and global collaboration
			</p>
		</div>
	);
}

export const HeroDescription = memo(HeroDescriptionComponent);
