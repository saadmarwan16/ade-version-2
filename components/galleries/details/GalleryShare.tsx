import { Linkedin, Facebook, Twitter, Mail, Link } from 'lucide-react';

interface GalleryShareProps {
	variant?: 'default' | 'hero';
}

export function GalleryShare({ variant = 'default' }: GalleryShareProps) {
	const shareButtons = [
		{ icon: Linkedin, label: 'LinkedIn', color: 'text-[#0077b5]' },
		{ icon: Facebook, label: 'Facebook', color: 'text-[#1877f2]' },
		{ icon: Twitter, label: 'Twitter', color: 'text-[#1da1f2]' },
		{ icon: Mail, label: 'Email', color: 'text-gray-600' },
		{ icon: Link, label: 'Copy Link', color: 'text-indigo-600' },
	];

	if (variant === 'hero') {
		return (
			<div className='flex items-center gap-4'>
				{shareButtons.map(({ icon: Icon, label }) => (
					<button
						key={label}
						className='rounded-full p-2 transition-colors hover:bg-white/20'
						aria-label={`Share on ${label}`}
					>
						<Icon className='h-5 w-5 text-white' />
					</button>
				))}
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-3'>
			{shareButtons.map(({ icon: Icon, label, color }) => (
				<button
					key={label}
					className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50'
				>
					<Icon className={`h-5 w-5 ${color}`} />
					<span className='text-gray-700'>{label}</span>
				</button>
			))}
		</div>
	);
}
