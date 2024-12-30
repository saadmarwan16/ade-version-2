'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { TActivityDetailsBody } from '@/lib/types/activity_details';

interface ActivityContentProps {
	body: TActivityDetailsBody;
}

export function ActivityContent({ body }: ActivityContentProps) {
	return (
		<div className='my-6 md:my-8 lg:my-10 lg:flex lg:justify-center'>
			<div className='w-full max-w-4xl'>
				<BlocksRenderer
					content={body}
					blocks={{
						paragraph: ({ children }) => (
							<p className='text-justify text-base md:text-lg lg:text-xl xl:text-2xl'>
								{children}
							</p>
						),
						heading: ({ children, level }) => {
							switch (level) {
								case 1:
									return (
										<h1 className='text-4xl font-medium md:text-5xl lg:text-6xl'>
											{children}
										</h1>
									);
								case 2:
									return (
										<h2 className='text-3xl font-medium md:text-4xl lg:text-5xl'>
											{children}
										</h2>
									);
								case 3:
									return (
										<h3 className='text-2xl font-medium md:text-3xl lg:text-4xl'>
											{children}
										</h3>
									);
								case 4:
									return (
										<h4 className='text-xl font-medium md:text-2xl lg:text-3xl'>
											{children}
										</h4>
									);
								case 5:
									return (
										<h5 className='text-lg font-medium md:text-xl lg:text-2xl'>
											{children}
										</h5>
									);
								case 6:
									return (
										<h6 className='text-base font-medium md:text-lg lg:text-xl'>
											{children}
										</h6>
									);
								default:
									return (
										<p className='text-base md:text-lg lg:text-xl xl:text-2xl'>
											{children}
										</p>
									);
							}
						},
						link: ({ children, url }) => (
							<a href={url} target='_blank' className='text-blue-700 underline'>
								{children}
							</a>
						),
						list: ({ children, format }) => {
							if (format === 'ordered') {
								return (
									<ol className='revert-tailwind text-base md:text-lg lg:text-xl'>
										{children}
									</ol>
								);
							} else {
								return (
									<ul className='revert-tailwind text-base md:text-lg lg:text-xl'>
										{children}
									</ul>
								);
							}
						},
					}}
				/>
			</div>
		</div>
	);
}
