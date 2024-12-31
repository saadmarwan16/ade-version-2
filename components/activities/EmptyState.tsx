import { Locale, useRouter } from '@/i18n/routing';
import { constructNewActivityQuery } from '@/utils/constructNewActivityQuery';
import { FileX } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface EmptyStateProps {
	locale: Locale;
	searchParams: {
		query?: string;
		sort?: string;
		category?: string;
	};
}

const constructCategoryMessage = (locale: Locale, category: string) => {
	if (locale === 'en') return `No activities found in ${category} category.`;
	if (locale === 'fr')
		return `Aucune activité trouvée dans la catégorie ${category}.`;
	if (locale === 'tr') return `${category} kategoride etkinlik bulunamadı.`;

	return `No activities found in ${category} category.`;
};

export const EmptyState: FunctionComponent<EmptyStateProps> = ({
	locale,
	searchParams: { query, sort, category = 'All' },
}) => {
	const t = useTranslations();
	const router = useRouter();

	return (
		<div className='flex flex-col items-center justify-center px-4 py-16'>
			<div className='mb-6 rounded-full bg-gray-50 p-6'>
				<FileX className='h-16 w-16 text-gray-400' />
			</div>
			<h3 className='mb-2 text-xl font-semibold text-gray-900'>
				{t('EmptyActivitiesList.title')}
			</h3>
			<p className='mb-6 max-w-md text-center text-gray-600'>
				{category === 'All'
					? t('EmptyActivitiesList.title')
					: constructCategoryMessage(locale, category)}
			</p>
			{category !== 'All' && (
				<button
					className='group flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-medium text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl'
					onClick={() =>
						router.push(
							{
								pathname: '/activities',
								query: constructNewActivityQuery(query, undefined, sort),
							},
							{
								scroll: false,
							}
						)
					}
				>
					{t('EmptyActivitiesList.button')}
				</button>
			)}
		</div>
	);
};
