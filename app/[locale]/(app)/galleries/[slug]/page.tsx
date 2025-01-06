import { GalleryMasonry } from '@/components/galleries/details/GalleryMasonry';
import { env } from '@/env';
import { getPathname, Locale } from '@/i18n/routing';
import { constructImageLink } from '@/lib/contructImageLink';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { GalleriesSchema } from '@/lib/types/galleries';
import { galleriesQuery } from '@/lib/quiries/galleries';
import { galleryDetailsQuery } from '@/lib/quiries/gallery_details';
import { GalleryDetailsSchema } from '@/lib/types/gallery_details';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/constructMetadata';
import { setRequestLocale } from 'next-intl/server';

interface GalleryDetailsPageProps {
	params: {
		locale: Locale;
		slug: string;
	}
}

export const generateMetadata = async ({
	params: { locale, slug },
}: GalleryDetailsPageProps): Promise<Metadata> => {
	const { data: gallery } = await fetchWithZod(
		GalleryDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries/${slug}?${galleryDetailsQuery(locale)}`
	);
	const keywords = gallery.title.split(' ').map((word) => word.toLowerCase());

	return constructMetadata({
		title: gallery.title,
		keywords: ['ademon', 'adebayo', 'amedee', ...keywords],
		canonical: `${env.NEXT_PUBLIC_BASE_URL}/${locale}${getPathname({
			href: '/galleries',
			locale: locale,
		})}/${slug}`,
		images: constructImageLink(gallery.thumbnail.url),
	});
};

export const generateStaticParams = async ({
	params: { locale },
}: GalleryDetailsPageProps) => {
	setRequestLocale(locale);
	const { data: galleries } = await fetchWithZod(
		GalleriesSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries?${galleriesQuery({
			locale: locale,
		})}`
	);

	return galleries.map((gallery) => ({ slug: gallery.slug, locale }));
};

const GalleryShare = dynamic(
	() => import('../../../../../components/galleries/details/GalleryShare'),
	{ ssr: false }
);

const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = async ({
	params: { locale, slug },
}) => {
	const { data: gallery } = await fetchWithZod(
		GalleryDetailsSchema,
		`${env.NEXT_PUBLIC_API_URL}/galleries/${slug}?${galleryDetailsQuery(locale)}`
	);

	return (
		<div className='min-h-screen overflow-x-hidden bg-gray-50'>
			{/* Hero Section */}
			<div className='relative h-[60vh] bg-gray-900'>
				<Image
					src={constructImageLink(gallery.thumbnail.url)}
					alt={`Thumnail of ${gallery.title}`}
					className='h-full w-full object-cover opacity-50'
					fill
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent' />

				<div className='absolute inset-0 flex items-end pb-12'>
					<div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='flex flex-col items-center text-center'>
							<h1 className='mb-8 text-3xl font-medium text-white sm:text-4xl sm:font-semibold md:text-5xl md:font-bold'>
								{gallery.title}
							</h1>
							<div className='rounded-xl bg-white/10 p-4 backdrop-blur-sm'>
								<GalleryShare locale={locale} slug={slug} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
				<div className='overflow-hidden rounded-xl bg-white shadow-sm'>
					<GalleryMasonry images={gallery.images} />
				</div>
			</div>
		</div>
	);
};

export const revalidate = 60;
export const dynamicParams = true;

export default GalleryDetailsPage;
