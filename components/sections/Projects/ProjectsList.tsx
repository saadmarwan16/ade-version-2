import { TProject } from '@/lib/types/home_page';
import { ProjectCard } from './ProjectCard';
import { FunctionComponent } from 'react';

interface ProjectsListProps {
	projects: TProject[];
}

export const ProjectsList: FunctionComponent<ProjectsListProps> = ({
	projects,
}) => {
	return (
		<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};
