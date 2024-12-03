interface FilterProps {
	activeFilter: string;
	onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Personal', 'Social', 'Political', 'Professional'];

export function ActivityFilters({ activeFilter, onFilterChange }: FilterProps) {
	return (
		<div className='mb-8 flex flex-wrap gap-3'>
			{filters.map((filter) => (
				<button
					key={filter}
					onClick={() => onFilterChange(filter)}
					className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
						activeFilter === filter
							? 'bg-indigo-600 text-white shadow-md'
							: 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
					}`}
				>
					{filter}
				</button>
			))}
		</div>
	);
}
