export function LoadingSpinner() {
	return (
		<div className='flex min-h-[200px] items-center justify-center'>
			<div className='h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent'></div>
		</div>
	);
}
