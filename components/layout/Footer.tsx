import Link from 'next/link';
import { Avatar } from '../ui/Avatar';
import { SocialLinks } from '../ui/SocialLinks';
import { getTranslations } from 'next-intl/server';
import { TMetaData } from '@/lib/types/meta';
import { FunctionComponent } from 'react';

interface FooterProps {
	meta: TMetaData;
}

export const Footer: FunctionComponent<FooterProps> = async ({ meta }) => {
	const t = await getTranslations();

	return (
		<footer className='border-t border-gray-100 bg-gray-100/80'>
			<div className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
				<div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
					<Link
						href='/'
						className='flex cursor-pointer items-center gap-3 transition hover:scale-105'
					>
						<Avatar size='lg' logo={meta.logo.url} />
						<span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent lg:text-3xl'>
							ADEBAYO
						</span>
					</Link>

					<SocialLinks
						className='text-lg'
						email={meta.email}
						facebook={meta.facebook}
						instagram={meta.instagram}
						linkedin={meta.linkedin}
						x={meta.twitter}
						youtube={meta.youtube}
					/>
				</div>

				<div className='mt-8 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-8 sm:flex-row sm:gap-6'>
					<p className='text-base text-gray-600 md:text-lg'>
						© 2024 ADE | {t('Shared.rights')}
					</p>
					<div className='flex gap-8'>
						<a
							key={meta.email}
							href={`mailto:${meta.email}`}
							className='text-lg font-semibold text-gray-600 transition-colors hover:text-indigo-600 md:text-xl'
						>
							{meta.email}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
