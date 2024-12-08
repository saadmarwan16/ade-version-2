import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ContactHero() {
	return (
		<section className='relative h-[90vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
			<div className='absolute inset-0'>
				<Image
					src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80'
					alt='Contact background'
					className='h-full w-full object-cover'
          fill
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95' />
			</div>

			<div className='relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 pt-20 text-center sm:px-6 lg:px-8'>
				<h1 className='mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
					Let&apos;s Connect
				</h1>
				<p className='mx-auto mb-12 max-w-3xl text-xl text-indigo-100'>
					Have a question or want to collaborate? I&apos;d love to hear from you.
				</p>

				<Link
					href='#contact'
					className='animate-bounce text-white/80 transition-colors hover:text-white'
					aria-label='Scroll to content'
				>
					<ChevronDown className='h-10 w-10' />
				</Link>
			</div>
		</section>
	);
}
