import { galleries } from '@/components/galleries/data';
import { GalleryMasonry } from '@/components/galleries/details/GalleryMasonry';
import { GalleryShare } from '@/components/galleries/details/GalleryShare';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface GalleryDetailsPageProps {
	params: {
		id: string;
	};
}

export const generateStaticParams = () => {
	return galleries.map((gallery) => ({ id: gallery.id.toString() }));
};

const GalleryDetailsPage: FunctionComponent<GalleryDetailsPageProps> = async ({
	params: { id },
}) => {
	const t = await getTranslations();
	const gallery = galleries.find((g) => g.id === Number(id));

	if (!gallery) {
		return (
			<div className='flex min-h-screen items-center justify-center'>
				<p className='text-gray-600'>{t('NotFoundPage.not-found')}</p>
			</div>
		);
	}

	return (
		<div className='min-h-screen overflow-x-hidden bg-gray-50'>
			{/* Hero Section */}
			<div className='relative h-[60vh] bg-gray-900'>
				<Image
					src={gallery.coverImage}
					alt={gallery.title}
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
								<GalleryShare variant='hero' />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
				<div className='overflow-hidden rounded-xl bg-white shadow-sm'>
					<GalleryMasonry images={gallery.images || []} />
				</div>
			</div>
		</div>
	);
};

export default GalleryDetailsPage;
