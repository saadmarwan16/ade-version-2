import { TProject } from '@/lib/types/home_page';
import { ProjectsList } from './ProjectsList';
import { getTranslations } from 'next-intl/server';
import { FunctionComponent } from 'react';

interface ProjectsProps {
	projects: TProject[];
}

export const Projects: FunctionComponent<ProjectsProps> = async ({projects}) => {
	const t = await getTranslations();

	return (
		<section
			className='sm:py-18 bg-gray-200 py-16 md:py-20 lg:py-24'
			id={t('Shared.projects')}
		>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mb-16'>
					<h2 className='mb-2 inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:mb-3'>
						{t('HomePage.featured-projects-title')}
					</h2>
					<p className='max-w-2xl text-lg text-gray-600'>
						{t('HomePage.featured-projects-description')}
					</p>
				</div>
				<ProjectsList projects={projects} />
			</div>
		</section>
	);
};
