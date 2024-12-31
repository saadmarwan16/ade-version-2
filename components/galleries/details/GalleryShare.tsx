'use client';

import { env } from '@/env';
import { getPathname, Locale } from '@/i18n/routing';
import copy from 'copy-to-clipboard';
import { Linkedin, Facebook, Twitter, Mail, Link } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';
import toast from 'react-hot-toast';
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share';

interface GalleryShareProps {
	locale: Locale;
	slug: string;
}

const GalleryShare: FunctionComponent<GalleryShareProps> = ({
	locale,
	slug,
}) => {
	const t = useTranslations();
	const pathname = getPathname({
		locale: locale as 'en' | 'fr' | 'tr',
		href: {
			pathname: '/galleries/[slug]',
			params: { slug: slug },
		},
	});
	const url = `${env.NEXT_PUBLIC_BASE_URL}/${locale}${pathname}`;

	return (
		<div className='flex items-center gap-4'>
			<LinkedinShareButton url={url}>
				<button
					key='LinkedIn'
					className='rounded-full p-2 transition-colors hover:bg-white/20'
					aria-label={`Share on LinkedIn`}
				>
					<Linkedin className='h-5 w-5 text-white' />
				</button>
			</LinkedinShareButton>
			<FacebookShareButton url={url}>
				<button
					key='Facebook'
					className='rounded-full p-2 transition-colors hover:bg-white/20'
					aria-label={`Share on Facebook`}
				>
					<Facebook className='h-5 w-5 text-white' />
				</button>
			</FacebookShareButton>
			<TwitterShareButton url={url}>
				<button
					key='Twitter'
					className='rounded-full p-2 transition-colors hover:bg-white/20'
					aria-label={`Share on Twitter`}
				>
					<Twitter className='h-5 w-5 text-white' />
				</button>
			</TwitterShareButton>
			<EmailShareButton url={url}>
				<button
					key='Email'
					className='rounded-full p-2 transition-colors hover:bg-white/20'
					aria-label={`Share on Email`}
				>
					<Mail className='h-5 w-5 text-white' />
				</button>
			</EmailShareButton>
			<button
				key='Link'
				className='rounded-full p-2 transition-colors hover:bg-white/20'
				aria-label={`Copy link`}
				onClick={() => {
					copy(url);
					toast.success(t('Shared.copied-to-clipboard'));
				}}
			>
				<Link className='h-5 w-5 text-white' />
			</button>
		</div>
	);
};

export default GalleryShare;
