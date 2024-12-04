import {
	Instagram,
	Linkedin,
	Youtube,
	Mail,
	Facebook,
	Twitter,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
	id: string;
	icon: LucideIcon;
	href: string;
	hoverColor: string;
}

export const socialLinks: SocialLink[] = [
	{
		id: 'instagram',
		icon: Instagram,
		href: 'https://instagram.com/adebayoademon',
		hoverColor: 'hover:text-[#e1306c]',
	},
	{
		id: 'youtube',
		icon: Youtube,
		href: 'https://youtube.com/@adebayoademon',
		hoverColor: 'hover:text-[#ff0000]',
	},
	{
		id: 'linkedin',
		icon: Linkedin,
		href: 'https://linkedin.com/in/adebayoademon',
		hoverColor: 'hover:text-[#0077b5]',
	},
	{
		id: 'mail',
		icon: Mail,
		href: 'mailto:info@adebayoademon.com',
		hoverColor: 'hover:text-purple-600',
	},
	{
		id: 'x',
		icon: Twitter,
		href: 'https://x.com/adebayoademon',
		hoverColor: 'hover:text-gray-800',
	},
	{
		id: 'facebook',
		icon: Facebook,
		href: 'https://facebook.com/adebayoademon',
		hoverColor: 'hover:text-[#1877f2]',
	},
];
