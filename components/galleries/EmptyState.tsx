import { FileX } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

export const EmptyState: FunctionComponent = () => {
	const t = useTranslations();
	
	return (
		<div className='flex flex-col items-center justify-center px-4 py-16'>
			<div className='mb-2 rounded-full bg-gray-50 p-6 sm:mb-3 md:mb-4'>
				<FileX className='h-16 w-16 text-gray-400' />
			</div>
			<h3 className='mb-2 text-xl font-semibold text-gray-900'>
				{t('EmptyGalleriesList.title')}
			</h3>
		</div>
	);
};
