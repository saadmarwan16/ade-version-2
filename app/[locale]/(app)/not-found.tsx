import { Button } from '@/components/ui/Button';
import { getTranslations } from 'next-intl/server';
import { FunctionComponent } from 'react';

export const NotFound: FunctionComponent = async () => {
	const t = await getTranslations('NotFoundPage');

	return (
		<div className='mx-auto flex h-[calc(100vh-200px)] max-w-[1280] flex-col items-center justify-center gap-4'>
			<h2 className='text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>
				{t('not-found')}
			</h2>
			<p className='text-xl font-medium text-gray-500 sm:text-2xl md:text-3xl'>
				{t('no-resource')}
			</p>
			<Button href='/'>{t('home')}</Button>
		</div>
	);
};

export default NotFound;
