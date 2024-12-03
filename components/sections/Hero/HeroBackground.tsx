export function HeroBackground() {
	return (
		<div className='absolute inset-0 -z-10 overflow-hidden'>
			<div className='absolute -right-20 -top-20 h-64 w-64 animate-blob rounded-full bg-indigo-400 opacity-20 mix-blend-multiply blur-xl filter' />
			<div className='animation-delay-2000 absolute -bottom-20 -left-20 h-64 w-64 animate-blob rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter' />
			<div className='animation-delay-4000 absolute left-20 top-20 h-64 w-64 animate-blob rounded-full bg-pink-400 opacity-20 mix-blend-multiply blur-xl filter' />
		</div>
	);
}
