import { Play, Pause, Maximize, Minimize, X } from 'lucide-react';

interface ViewerControlsProps {
	isPlaying: boolean;
	isFullscreen: boolean;
	onPlayToggle: () => void;
	onFullscreenToggle: () => void;
	onClose: () => void;
}

export function ViewerControls({
	isPlaying,
	isFullscreen,
	onPlayToggle,
	onFullscreenToggle,
	onClose,
}: ViewerControlsProps) {
	return (
		<div className='flex items-center gap-2'>
			<button
				onClick={onPlayToggle}
				className='rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20'
				aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
			>
				{isPlaying ? (
					<Pause className='h-5 w-5 text-white' />
				) : (
					<Play className='h-5 w-5 text-white' />
				)}
			</button>

			<button
				onClick={onFullscreenToggle}
				className='rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20'
				aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
			>
				{isFullscreen ? (
					<Minimize className='h-5 w-5 text-white' />
				) : (
					<Maximize className='h-5 w-5 text-white' />
				)}
			</button>

			<button
				onClick={onClose}
				className='rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20'
				aria-label='Close viewer'
			>
				<X className='h-5 w-5 text-white' />
			</button>
		</div>
	);
}
