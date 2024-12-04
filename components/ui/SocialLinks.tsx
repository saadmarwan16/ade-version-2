import { socialLinks } from '@/utils/constants/socialLinks';

export function SocialLinks({ className = '' }: { className?: string }) {
	return (
		<div className={`flex flex-wrap items-center gap-6 md:gap-8 ${className}`}>
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
