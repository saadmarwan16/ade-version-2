import { ChevronDown } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export const AboutHero = async () => {
	const t = await getTranslations();

	return (
		<section className='relative h-[65vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 md:h-[90vh]'>
			{/* Background image with overlay */}
			<div className='absolute inset-0'>
				<Image
					src='https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
					alt='Background'
					fill
					className='object-cover'
					sizes='100vw'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95' />
			</div>

			<div className='relative z-10 flex h-full flex-col items-center justify-end px-4 pb-10 text-center sm:pb-12 md:pb-16 lg:pb-24'>
				<h1 className='mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
					{t('KnowMePage.title')}
				</h1>
				<p className='mx-auto mb-12 max-w-3xl text-xl text-indigo-100'>
					{t('KnowMePage.description')}
				</p>

				<Link
					href={`#${t('Shared.content')}`}
					className='animate-bounce text-white/80 transition-colors hover:text-white'
					aria-label='Scroll to content'
				>
					<ChevronDown className='h-10 w-10' />
				</Link>
			</div>
		</section>
	);
};
