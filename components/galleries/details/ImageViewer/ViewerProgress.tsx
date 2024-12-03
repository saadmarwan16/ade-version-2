interface ViewerProgressProps {
	current: number;
	total: number;
}

export function ViewerProgress({ current, total }: ViewerProgressProps) {
	return (
		<div className='rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm'>
			{current} / {total}
		</div>
	);
}
