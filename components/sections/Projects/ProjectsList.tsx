import { ProjectCard } from './ProjectCard';
import { projects } from './data';

export function ProjectsList() {
	return (
		<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}
