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

export const getSocialLinks = ({
	instagram,
	youtube,
	linkedin,
	email,
	x,
	facebook,
}: {
	instagram: string;
	youtube: string;
	linkedin: string;
	email: string;
	x: string;
	facebook: string;
}) => {
	return [
		{
			id: 'instagram',
			icon: Instagram,
			href: instagram,
			hoverColor: 'hover:text-[#e1306c]',
		},
		{
			id: 'youtube',
			icon: Youtube,
			href: youtube,
			hoverColor: 'hover:text-[#ff0000]',
		},
		{
			id: 'linkedin',
			icon: Linkedin,
			href: linkedin,
			hoverColor: 'hover:text-[#0077b5]',
		},
		{
			id: 'mail',
			icon: Mail,
			href: `mailto:${email}`,
			hoverColor: 'hover:text-purple-600',
		},
		{
			id: 'x',
			icon: Twitter,
			href: x,
			hoverColor: 'hover:text-gray-800',
		},
		{
			id: 'facebook',
			icon: Facebook,
			href: facebook,
			hoverColor: 'hover:text-[#1877f2]',
		},
	];
};
export const getContactSocialLinks = ({
	instagram,
	linkedin,
	twitter,
	facebook,
}: {
	instagram: string;
	linkedin: string;
	twitter: string;
	facebook: string;
}) => {
	return [
		{
			icon: Linkedin,
			label: 'LinkedIn',
			href: linkedin,
			color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
		},
		{
			icon: Twitter,
			label: 'Twitter',
			href: twitter,
			color: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]',
		},
		{
			icon: Instagram,
			label: 'Instagram',
			href: instagram,
			color: 'hover:bg-[#E4405F] hover:border-[#E4405F]',
		},
		{
			icon: Facebook,
			label: 'Facebook',
			href: facebook,
			color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
		},
	];
};

// export const socialLinks: SocialLink[] = [
// 	{
// 		id: 'instagram',
// 		icon: Instagram,
// 		href: 'https://instagram.com/adebayoademon',
// 		hoverColor: 'hover:text-[#e1306c]',
// 	},
// 	{
// 		id: 'youtube',
// 		icon: Youtube,
// 		href: 'https://youtube.com/@adebayoademon',
// 		hoverColor: 'hover:text-[#ff0000]',
// 	},
// 	{
// 		id: 'linkedin',
// 		icon: Linkedin,
// 		href: 'https://linkedin.com/in/adebayoademon',
// 		hoverColor: 'hover:text-[#0077b5]',
// 	},
// 	{
// 		id: 'mail',
// 		icon: Mail,
// 		href: 'mailto:info@adebayoademon.com',
// 		hoverColor: 'hover:text-purple-600',
// 	},
// 	{
// 		id: 'x',
// 		icon: Twitter,
// 		href: 'https://x.com/adebayoademon',
// 		hoverColor: 'hover:text-gray-800',
// 	},
// 	{
// 		id: 'facebook',
// 		icon: Facebook,
// 		href: 'https://facebook.com/adebayoademon',
// 		hoverColor: 'hover:text-[#1877f2]',
// 	},
// ];
