import { FunctionComponent } from 'react';
import { getTranslations } from 'next-intl/server';

export const HeroDescription: FunctionComponent = async () => {
	const t = await getTranslations();

	return (
		<div className='mb-8 space-y-4'>
			<p className='text-2xl font-medium text-indigo-200'>
				{t('HomePage.profession')}
			</p>
			<p className='max-w-2xl text-xl text-gray-300'>
				{t('HomePage.description')}
			</p>
		</div>
	);
};
