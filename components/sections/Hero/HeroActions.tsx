import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const HeroActions = async () => {
	const t = await getTranslations();

	return (
		<div className='mb-8 flex flex-wrap gap-6 lg:mb-0'>
			<Button variant='primary' href='/know-me'>
				{t('HomePage.learn-more-button')}
				<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
			</Button>
			<Link
				href={`#${t('Shared.projects')}`}
				className='flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 font-medium text-white transition-all hover:bg-white/10'
			>
				{t('HomePage.view-projects-button')}
			</Link>
		</div>
	);
};
