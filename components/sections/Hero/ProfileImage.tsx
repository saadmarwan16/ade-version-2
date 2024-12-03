import { memo } from 'react';
import Image from 'next/image';

function ProfileImageComponent() {
	return (
		<div className='relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/10'>
			<Image
				src='/profile.jpeg'
				alt='Professional portrait'
				fill
				sizes='(max-width: 768px) 100vw, 192px'
				className='object-cover'
				priority
			/>
		</div>
	);
}

export const ProfileImage = memo(ProfileImageComponent);
