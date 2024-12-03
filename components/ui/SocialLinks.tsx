import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

interface SocialLink {
	id: string;
	icon: React.ElementType;
	href: string;
	hoverColor: string;
}

const socialLinks: SocialLink[] = [
	{
		id: 'instagram',
		icon: Instagram,
		href: 'https://instagram.com',
		hoverColor: 'hover:text-indigo-600',
	},
	{
		id: 'youtube',
		icon: Youtube,
		href: 'https://youtube.com',
		hoverColor: 'hover:text-red-600',
	},
	{
		id: 'linkedin',
		icon: Linkedin,
		href: 'https://linkedin.com',
		hoverColor: 'hover:text-blue-600',
	},
	{
		id: 'mail',
		icon: Mail,
		href: 'mailto:info@adebayoademon.com',
		hoverColor: 'hover:text-purple-600',
	},
];

export function SocialLinks({ className = '' }: { className?: string }) {
	return (
		<div className={`flex items-center gap-8 ${className}`}>
			{socialLinks.map(({ id, icon: Icon, href, hoverColor }) => (
				<a
					key={id}
					href={href}
					target='_blank'
					className={`text-gray-400 ${hoverColor} transform transition-all hover:scale-110`}
				>
					<Icon className='h-7 w-7 md:h-8 md:w-8' />
				</a>
			))}
		</div>
	);
}
