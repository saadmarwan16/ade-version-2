import { FunctionComponent } from 'react';
import { GalleryHero } from '@/components/galleries/GalleryHero';
import { GalleryGrid } from '@/components/galleries/GalleryGrid';
import { GallerySort } from '@/components/galleries/GallerySort';
import { GallerySearch } from '@/components/galleries/GallerySearch';
import { getPathname, Locale } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/constructMetadata';
import { env } from '@/env';

interface GalleryPageProps {
	params: {
		locale: Locale;
	};
	searchParams: {
		query?: string;
		sort?: string;
	};
}

export const generateMetadata = async ({
	params: { locale },
}: GalleryPageProps): Promise<Metadata> => {
	const t = await getTranslations();
	const title =
		t('GalleriesPage.title-prefix') + ' ' + t('GalleriesPage.title-suffix');
	const keywords = title
		.split(' ')
		.filter((word) => word !== '&')
		.map((word) => word.toLowerCase());

	return constructMetadata({
		title: title,
		description: t('HomePage.description'),
		keywords: ['ademon', 'adebayo', 'amedee', ...keywords],
		canonical: `${env.NEXT_PUBLIC_BASE_URL}/${locale}${getPathname({
			href: '/galleries',
			locale: locale,
		})}`,
	});
};

const GalleriesPage: FunctionComponent<GalleryPageProps> = async ({
	params: { locale },
	searchParams,
}) => {
	const t = await getTranslations();

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
