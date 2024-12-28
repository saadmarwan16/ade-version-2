import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { TProject } from '@/lib/types/home_page';
import { constructImageLink } from '@/lib/contructImageLink';

interface ProjectModalProps {
	project: TProject;
	isOpen: boolean;
	onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
	const typeColors = {
		'Healthcare Technology':
			'text-indigo-700 bg-indigo-50 ring-1 ring-purple-600/10',
		'Global Health':
			'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
		'Data Security': 'bg-pink-50 text-pink-700 ring-1 ring-pink-600/10',
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className='space-y-8'>
				{/* Hero Image */}
				<div className='relative mt-14 aspect-video overflow-hidden rounded-xl'>
					<Image
						src={constructImageLink(project.image.url)}
						alt={project.title}
						fill
						className='object-cover'
					/>
				</div>

				{/* Content */}
				<div className='space-y-6'>
					<div>
						<div className='mb-4 flex items-center gap-3'>
							{project.project_types.map((project_type) => (
								<span
									className={`rounded-md px-3 py-1 text-sm font-medium ${
										typeColors[project_type.color as keyof typeof typeColors]
									}`}
								>
									{project_type.title}
								</span>
							))}
						</div>
						<h3 className='mb-4 text-2xl font-bold text-gray-900'>
							{project.title}
						</h3>
						<div className='prose prose-gray max-w-none'>
							<p className='leading-relaxed text-gray-600'>
								{project.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
