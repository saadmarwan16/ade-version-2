import qs from 'qs';

interface ActivityProps {
	locale?: string;
	page?: number;
	sort?: string;
	search?: string;
	category?: string;
}

export const activitiesQuery = ({
	locale = 'en',
	page = 1,
	sort = 'date:desc',
	search,
	category = 'all',
}: ActivityProps) =>
	qs.stringify(
		{
			filters: {
				title: search
					? {
							$containsi: search,
						}
					: {},
				activity_categories:
					category === 'all'
						? {}
						: {
								title: {
									$eqi: category,
								},
							},
			},
			fields: ['title', 'slug', 'date'],
			sort: [sort],
			// sort: ['createdAt:desc', 'title:asc'],
			populate: {
				thumbnail: {
					fields: ['url'],
				},
				activity_categories: {
					fields: ['title', 'color'],
				},
			},
			pagination: {
				page: page,
				pageSize: 24,
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
