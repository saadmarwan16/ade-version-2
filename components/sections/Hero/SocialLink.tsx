import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
	href: string;
	icon: LucideIcon;
	position: string;
}

function SocialLinkComponent({ href, icon: Icon, position }: SocialLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			className={`absolute ${position} flex h-12 w-12 transform items-center justify-center rounded-full bg-white/10 text-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-white`}
		>
			<Icon className='h-6 w-6' />
		</a>
	);
}

export const SocialLink = memo(SocialLinkComponent);
