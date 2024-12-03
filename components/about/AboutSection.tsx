import Image from 'next/image';

interface AboutSectionProps {
	title: string;
	content: string;
	image: string;
	imageAlt: string;
	reverse?: boolean;
}

export function AboutSection({
	title,
	content,
	image,
	imageAlt,
	reverse = false,
}: AboutSectionProps) {
	return (
		<div
			className={`flex flex-col gap-12 lg:items-center ${
				reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
			}`}
		>
			<div className='space-y-6 lg:w-1/2'>
				<h2 className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl'>
					{title}
				</h2>
				<p className='text-lg leading-relaxed text-gray-600'>{content}</p>
			</div>

			<div className='lg:w-1/2'>
				<div className='relative aspect-square overflow-hidden rounded-2xl shadow-xl'>
					<Image src={image} alt={imageAlt} fill className='object-cover' />
				</div>
			</div>
		</div>
	);
}
