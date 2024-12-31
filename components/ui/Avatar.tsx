import { constructImageLink } from '@/lib/contructImageLink';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface AvatarProps {
	logo: string;
	className?: string;
	size?: 'sm' | 'md' | 'lg';
}

export const Avatar: FunctionComponent<AvatarProps> = ({
	logo,
	className = '',
	size = 'md',
}) => {
	const sizes = {
		sm: 'w-10 h-10',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
	};

	return (
		<div
			className={`relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white ${sizes[size]} ${className}`}
		>
			<Image
				src={constructImageLink(logo)}
				alt='Adébayo Ademon'
				width={64}
				height={64}
				className='h-full w-full object-cover'
			/>
		</div>
	);
};
