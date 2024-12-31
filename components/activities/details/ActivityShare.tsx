'use client';

import { env } from '@/env';
import { getPathname, Locale } from '@/i18n/routing';
import { Linkedin, Facebook, Twitter, Mail, Link } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';

interface ActivityShareProps {
	locale: Locale;
	slug: string;
}

const ActivityShare: FunctionComponent<ActivityShareProps> = ({
	locale,
	slug,
}) => {
	const t = useTranslations();
	const pathname = getPathname({
		locale: locale as 'en' | 'fr' | 'tr',
		href: {
			pathname: '/activities/[slug]',
			params: { slug: slug },
		},
	});
	const url = `${env.NEXT_PUBLIC_BASE_URL}/${locale}${pathname}`;

	return (
		<div className='flex flex-col gap-3'>
			<LinkedinShareButton url={url}>
				<button
					key='Linkedin'
					className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50'
				>
					<Linkedin className={`h-5 w-5 text-[#0077b5]`} />
					<span className='text-gray-700'>Linkedin</span>
				</button>
			</LinkedinShareButton>
			<FacebookShareButton url={url}>
				<button
					key='Facebook'
					className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50'
				>
					<Facebook className={`h-5 w-5 text-[#1877f2]`} />
					<span className='text-gray-700'>Facebook</span>
				</button>
			</FacebookShareButton>
			<TwitterShareButton url={url}>
				<button
					key='Twitter'
					className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50'
				>
					<Twitter className={`h-5 w-5 text-[#1da1f2]`} />
					<span className='text-gray-700'>Twitter</span>
				</button>
			</TwitterShareButton>
			<EmailShareButton url={url}>
				<button
					key='Email'
					className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50'
				>
					<Mail className={`h-5 w-5 text-gray-600`} />
					<span className='text-gray-700'>
						{t('ActivityDetailsPage.email')}
					</span>
				</button>
			</EmailShareButton>
			<button
				key='Copy Link'
				className='flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50'
				onClick={() => {
					copy(url);
					toast.success(t('Shared.copied-to-clipboard'));
				}}
			>
				<Link className={`h-5 w-5 text-indigo-600`} />
				<span className='text-gray-700'>
					{t('ActivityDetailsPage.copy-link')}
				</span>
			</button>
		</div>
	);
};

export default ActivityShare;
