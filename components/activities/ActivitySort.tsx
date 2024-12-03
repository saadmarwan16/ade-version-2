'use client';

import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

export function ActivitySort() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='relative'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 transition-all hover:bg-gray-50'
			>
				<ArrowUpDown className='h-5 w-5' />
				<span className='hidden sm:inline'>Sort by</span>
			</button>

			{isOpen && (
				<div className='absolute right-0 z-30 mt-2 w-48 rounded-xl border border-gray-100 bg-white py-2 shadow-lg'>
					<button className='w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50'>
						Latest first
					</button>
					<button className='w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50'>
						Oldest first
					</button>
					<button className='w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50'>
						A-Z
					</button>
					<button className='w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50'>
						Z-A
					</button>
				</div>
			)}
		</div>
	);
}
