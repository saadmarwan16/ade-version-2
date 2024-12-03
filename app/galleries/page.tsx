'use client';

import { useState } from 'react';
import { GalleryHero } from '@/components/galleries/GalleryHero';
import { GalleryGrid } from '@/components/galleries/GalleryGrid';
import { GallerySort } from '@/components/galleries/GallerySort';
import { Search } from 'lucide-react';

export default function GalleriesPage() {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<div className='min-h-screen'>
			<GalleryHero />

			<div className='bg-gradient-to-br from-gray-50 to-white py-12'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					{/* Search Section */}
					<div className='mb-8 flex gap-2 sm:gap-3 md:gap-4'>
						<div className='relative flex-grow'>
							<Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
							<input
								type='text'
								placeholder='Search galleries...'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className='w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200'
							/>
						</div>
						<GallerySort />
					</div>

					<GalleryGrid searchQuery={searchQuery} />
				</div>
			</div>
		</div>
	);
}
