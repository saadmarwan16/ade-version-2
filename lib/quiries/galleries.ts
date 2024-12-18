import qs from 'qs';

interface GalleryProps {
	locale?: string;
	page?: number;
	sort?: string;
	search?: string;
}

export const galleriesQuery = ({
	locale = 'en',
	page = 1,
	sort = 'createdAt:desc',
	search,
}: GalleryProps) =>
	qs.stringify(
		{
			filters: search
				? {
						title: {
							$containsi: search,
						},
					}
				: undefined,
			sort: [sort],
			// sort: ['createdAt:desc', 'title:asc'],
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
			fields: ['title', 'slug', 'locale'],
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
