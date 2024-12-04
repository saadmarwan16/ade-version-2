import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
	href: string;
	icon: LucideIcon;
	hoverColor: string;
	x: number;
	y: number;
}

function SocialLinkComponent({ href, icon: Icon, x, y }: SocialLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='group absolute flex h-12 w-12 transform items-center justify-center rounded-full bg-white/10 text-white/60 backdrop-blur-sm transition-all duration-300 hover:rotate-12 hover:scale-125 hover:bg-white/20 hover:text-white'
			style={{
				transform: `translate(-50%, -50%) translate(${x + 175}px, ${y + 175}px)`,
			}}
		>
			<Icon className='h-6 w-6 transition-transform duration-300 group-hover:scale-110' />
		</a>
	);
}

export const SocialLink = memo(SocialLinkComponent);
