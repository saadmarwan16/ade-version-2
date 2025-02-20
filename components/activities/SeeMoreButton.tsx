import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface SeeMoreButtonProps {
	onClick: () => void;
	loading: boolean;
	hasMore: boolean;
}

export const SeeMoreButton: FunctionComponent<SeeMoreButtonProps> = ({
	onClick,
	loading,
	hasMore,
}) => {
	const t = useTranslations();

	if (!hasMore) return null;

	return (
		<div className='mt-12 flex justify-center'>
			<button
				onClick={onClick}
				disabled={loading}
				className='group inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-6 py-3 text-indigo-600 transition-all hover:bg-indigo-100 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-50'
			>
				{loading ? (
					<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-current'></div>
				) : (
					<ChevronDown className='h-5 w-5 transition-transform group-hover:translate-y-0.5' />
				)}
				<span className='font-medium'>
					{t('ActivitiesPage.see-more-button')}
				</span>
			</button>
		</div>
	);
};
