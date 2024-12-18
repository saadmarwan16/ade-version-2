import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Gallery } from './types';
import Link from 'next/link';

interface GalleryCardProps {
	gallery: Gallery;
}

export function GalleryCard({ gallery }: GalleryCardProps) {
	return (
		<Link href={`/galleries/${gallery.id}`} className='block h-full'>
			<div className='group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl'>
				<div className='relative aspect-[4/3] overflow-hidden'>
					<div className='absolute inset-0 z-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
					<Image
						src={gallery.coverImage}
						alt={gallery.title}
						fill
						className='transform object-cover transition-transform duration-500 group-hover:scale-105'
					/>
					<div className='absolute right-4 top-4 z-20'>
						<span className='rounded-md bg-black/50 px-2 py-1 text-sm text-white backdrop-blur-sm'>
							{gallery.imageCount} Photos
						</span>
					</div>
				</div>

				<div className='flex flex-grow flex-col p-6'>
					<h3 className='mb-4 line-clamp-2 text-xl font-semibold text-gray-900'>
						{gallery.title}
					</h3>

					<div className='mt-auto'>
						<span className='inline-flex items-center gap-2 font-medium text-indigo-600 group-hover:text-indigo-700'>
							View gallery
							<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
