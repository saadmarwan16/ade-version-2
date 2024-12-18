'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from './types';
import Image from 'next/image';
import { ProjectModal } from '@/components/projects/ProjectModal';

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const typeColors = {
		'Healthcare Technology':
			'text-indigo-700 bg-indigo-50 ring-1 ring-purple-600/10',
		'Global Health':
			'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
		'Data Security': 'bg-pink-50 text-pink-700 ring-1 ring-pink-600/10',
	};

	return (
		<>
			<div
				onClick={() => setIsModalOpen(true)}
				className='group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:border-indigo-100 hover:shadow-xl'
			>
				<div className='relative aspect-video overflow-hidden'>
					<div className='absolute inset-0 z-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
					<Image
						src={project.image}
						alt={project.title}
						width={800}
						height={450}
						className='h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105'
					/>
				</div>

				<div className='flex h-[calc(100%-aspect-video)] flex-col p-6'>
					<div className='mb-4'>
						<span
							className={`inline-block rounded-md px-3 py-1 text-sm font-medium ${
								typeColors[project.category as keyof typeof typeColors]
							}`}
						>
							{project.category}
						</span>
					</div>

					<h3 className='mb-3 line-clamp-2 text-xl font-bold text-gray-900'>
						{project.title}
					</h3>

					<p className='mb-6 line-clamp-3 flex-grow text-gray-600'>
						{project.description}
					</p>

					<button className='group mt-auto inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-700'>
						Learn more
						<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
					</button>
				</div>
			</div>

			<ProjectModal
				project={project}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
}
