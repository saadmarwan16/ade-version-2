import { memo } from 'react';
import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { ProfileImage } from './ProfileImage';

const socialLinks = [
	{
		id: 'instagram',
		icon: Instagram,
		href: 'https://instagram.com',
		position: 'top-0 left-1/2 -translate-x-1/2',
	},
	{
		id: 'youtube',
		icon: Youtube,
		href: 'https://youtube.com',
		position: 'top-1/2 right-0 -translate-y-1/2',
	},
	{
		id: 'linkedin',
		icon: Linkedin,
		href: 'https://linkedin.com',
		position: 'bottom-0 left-1/2 -translate-x-1/2',
	},
	{
		id: 'mail',
		icon: Mail,
		href: 'mailto:info@adebayoademon.com',
		position: 'top-1/2 left-0 -translate-y-1/2',
	},
];

function ProfileSectionComponent() {
	return (
		<div className='relative hidden items-center justify-center lg:flex'>
			<div className='relative flex h-[300px] w-[300px] items-center justify-center'>
				{socialLinks.map((link) => (
					<SocialLink key={link.id} {...link} />
				))}
				<ProfileImage />
			</div>
		</div>
	);
}

export const ProfileSection = memo(ProfileSectionComponent);
