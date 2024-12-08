import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
	{
		icon: Linkedin,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/adebayoademon',
		color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
	},
	{
		icon: Twitter,
		label: 'Twitter',
		href: 'https://twitter.com/adebayoademon',
		color: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]',
	},
	{
		icon: Instagram,
		label: 'Instagram',
		href: 'https://instagram.com/adebayoademon',
		color: 'hover:bg-[#E4405F] hover:border-[#E4405F]',
	},
	{
		icon: Facebook,
		label: 'Facebook',
		href: 'https://facebook.com/adebayoademon',
		color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
	},
];

export function SocialLinks() {
	return (
		<div className='space-y-8'>
			<div>
				<h2 className='mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent'>
					Connect With Me
				</h2>
				<p className='text-lg text-gray-600'>
					Follow me on social media to stay updated with my latest projects and
					activities.
				</p>
			</div>

			<div className='flex flex-wrap gap-4 sm:grid sm:grid-cols-2'>
				{socialLinks.map(({ icon: Icon, label, href, color }) => (
					<a
						key={label}
						href={href}
						target='_blank'
						rel='noopener noreferrer'
						className={`group flex grow items-center gap-4 rounded-xl border-2 border-gray-100 p-4 transition-all duration-300 hover:text-white ${color}`}
						aria-label={`Visit my ${label} profile`}
					>
						<div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-white/10'>
							<Icon className='h-6 w-6 transition-colors group-hover:text-white' />
						</div>
						<div>
							<div className='text-sm font-medium text-gray-500 group-hover:text-white/80'>
								Follow on
							</div>
							<div className='text-lg font-medium group-hover:text-white'>
								{label}
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
