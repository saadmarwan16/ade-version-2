import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export const GalleryHero: FunctionComponent = () => {
	const t = useTranslations();

	return (
		<div className='relative min-h-[75vh] bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 lg:h-[90vh]'>
			{/* Background image with overlay */}
			<div className='absolute inset-0'>
				<Image
					src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
					alt='Gallery background'
					className='h-full w-full object-cover'
					fill
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95' />
			</div>

			<div className='relative z-10 flex h-full flex-col items-center justify-center px-4 pt-[10rem] text-center'>
				<h1 className='mb-6 text-5xl font-bold text-white md:text-7xl'>
					{t('GalleriesPage.title-prefix')}
					<br />
					<span className='bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text text-transparent'>
						{t('GalleriesPage.title-suffix')}
					</span>
				</h1>

				<p className='mb-12 max-w-2xl text-xl text-gray-300'>
					{t('GalleriesPage.description')}
				</p>

				<Link
					className='animate-bounce text-white/80 transition-colors hover:text-white'
					aria-label='Scroll to content'
					href={`#${t('Shared.content')}`}
				>
					<ChevronDown className='h-10 w-10' />
				</Link>
			</div>
		</div>
	);
};
