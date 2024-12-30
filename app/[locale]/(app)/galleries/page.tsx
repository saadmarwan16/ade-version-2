import { FunctionComponent } from 'react';
import { GalleryHero } from '@/components/galleries/GalleryHero';
import { GalleryGrid } from '@/components/galleries/GalleryGrid';
import { GallerySort } from '@/components/galleries/GallerySort';
import { GallerySearch } from '@/components/galleries/GallerySearch';
import { Locale } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

interface GalleryPageProps {
	params: {
		locale: Locale;
	};
	searchParams: {
		query?: string;
		sort?: string;
	};
}

const GalleriesPage: FunctionComponent<GalleryPageProps> = async ({
	params: { locale },
	searchParams,
}) => {
	const t = await getTranslations();
	console.log('Search Params:', searchParams);

	return (
		<div className='min-h-screen'>
			<GalleryHero />

			<div
				id={t('Shared.content')}
				className='bg-gradient-to-br from-gray-50 to-white py-12'
			>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='mb-8 flex gap-2 sm:gap-3 md:gap-4'>
						<GallerySearch searchParams={searchParams} />
						<GallerySort searchParams={searchParams} />
					</div>

					<GalleryGrid
						locale={locale}
						query={searchParams.query}
						sort={searchParams.sort}
					/>
				</div>
			</div>
		</div>
	);
};

export default GalleriesPage;
