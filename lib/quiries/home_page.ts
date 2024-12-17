import qs from 'qs';

export const homePageQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			fields: ['locale'],
			populate: {
				partners: {
					populate: {
						logo: {
							fields: ['url'],
						},
					},
				},
				projects: {
					populate: {
						project_types: {
							fields: ['title', 'color'],
						},
						image: {
							fields: ['url'],
						},
					},
				},
				activities: {
					fields: ['title', 'slug', 'date'],
					populate: {
						thumbnail: {
							fields: ['url'],
						},
						activity_categories: {
							fields: ['title', 'color'],
						},
					},
				},
				avatar: {
					fields: ['url'],
				},
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
