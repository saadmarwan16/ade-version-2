import Image from 'next/image';

interface AvatarProps {
	className?: string;
	size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ className = '', size = 'md' }: AvatarProps) {
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
				src='/profile.jpeg'
				alt='Adébayo Ademon'
				width={64}
				height={64}
				className='h-full w-full object-cover'
			/>
		</div>
	);
}
