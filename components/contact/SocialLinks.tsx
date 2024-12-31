import { getContactSocialLinks } from '@/utils/constants/socialLinks';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface SocialLinksProps {
	instagram: string;
	linkedin: string;
	twitter: string;
	facebook: string;
}

export const SocialLinks: FunctionComponent<SocialLinksProps> = ({
	instagram,
	linkedin,
	twitter,
	facebook,
}) => {
	const t = useTranslations();
	const socialLinks = getContactSocialLinks({
		instagram,
		linkedin,
		twitter,
		facebook,
	});

	return (
		<div className='space-y-8'>
			<div>
				<h2 className='mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent'>
					{t('ContactPage.connect-title')}
				</h2>
				<p className='text-lg text-gray-600'>
					{t('ContactPage.connect-description')}
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
								{t('ContactPage.connect-follow-on')}
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
};
