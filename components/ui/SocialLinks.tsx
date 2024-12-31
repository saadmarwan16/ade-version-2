import { FunctionComponent } from 'react';
import {
	Instagram,
	Linkedin,
	Youtube,
	Mail,
	Facebook,
	Twitter,
} from 'lucide-react';

interface SocialLinkProps {
	instagram: string;
	youtube: string;
	linkedin: string;
	email: string;
	x: string;
	facebook: string;
	className?: string;
}

export const SocialLinks: FunctionComponent<SocialLinkProps> = ({
	className = '',
	instagram,
	youtube,
	linkedin,
	email,
	x,
	facebook,
}) => {
	return (
		<div className={`flex flex-wrap items-center gap-6 md:gap-8 ${className}`}>
			<a
				key='instagram'
				href={instagram}
				target='_blank'
				className={`transform text-gray-400 transition-all hover:scale-110 hover:text-[#e1306c]`}
			>
				<Instagram className='h-7 w-7 md:h-8 md:w-8' />
			</a>
			<a
				key='youtube'
				href={youtube}
				target='_blank'
				className={`transform text-gray-400 transition-all hover:scale-110 hover:text-[#ff0000]`}
			>
				<Youtube className='h-7 w-7 md:h-8 md:w-8' />
			</a>
			<a
				key='linkedin'
				href={linkedin}
				target='_blank'
				className={`transform text-gray-400 transition-all hover:scale-110 hover:text-[#0077b5]`}
			>
				<Linkedin className='h-7 w-7 md:h-8 md:w-8' />
			</a>
			<a
				key='mail'
				href={`mailto:${email}`}
				target='_blank'
				className={`transform text-gray-400 transition-all hover:scale-110 hover:text-purple-600`}
			>
				<Mail className='h-7 w-7 md:h-8 md:w-8' />
			</a>
			<a
				key='x'
				href={x}
				target='_blank'
				className={`transform text-gray-400 transition-all hover:scale-110 hover:text-gray-800`}
			>
				<Twitter className='h-7 w-7 md:h-8 md:w-8' />
			</a>
			<a
				key='facebook'
				href={facebook}
				target='_blank'
				className={`transform text-gray-400 transition-all hover:scale-110 hover:text-[#1877f2]`}
			>
				<Facebook className='h-7 w-7 md:h-8 md:w-8' />
			</a>
		</div>
	);
};
