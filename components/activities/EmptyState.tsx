import { FileX } from 'lucide-react';

interface EmptyStateProps {
	filter: string;
	onReset: () => void;
}

export function EmptyState({ filter, onReset }: EmptyStateProps) {
	return (
		<div className='flex flex-col items-center justify-center px-4 py-16'>
			<div className='mb-6 rounded-full bg-gray-50 p-6'>
				<FileX className='h-16 w-16 text-gray-400' />
			</div>
			<h3 className='mb-2 text-xl font-semibold text-gray-900'>
				No activities found
			</h3>
			<p className='mb-6 max-w-md text-center text-gray-600'>
				{filter === 'All'
					? 'There are no activities to display at the moment.'
					: `No activities found in ${filter} category.`}
			</p>
			<button
				onClick={onReset}
				className='inline-flex items-center rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-100 hover:text-indigo-700'
			>
				View all activities
			</button>
		</div>
	);
}
