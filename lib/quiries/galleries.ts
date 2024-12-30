import { Locale } from '@/i18n/routing';
import qs from 'qs';
import { GallerySortSchema } from '../types/galleries';

interface GalleryProps {
	locale?: Locale;
	page?: number;
	sort?: string;
	search?: string;
}

export const galleriesQuery = ({
	locale = 'en',
	page = 1,
	sort = 'createdAt:desc',
	search,
}: GalleryProps) => {
	const parsedSort = GallerySortSchema.safeParse(sort);

	return qs.stringify(
		{
			filters: search
				? {
						title: {
							$containsi: search,
						},
					}
				: undefined,
			sort: parsedSort.success ? [parsedSort.data] : undefined,
			populate: {
				thumbnail: {
					fields: ['url'],
				},
				images: {
					fields: ['url'],
				},
			},
			pagination: {
				page: page,
				pageSize: 24,
			},
			fields: ['title', 'slug'],
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
};
