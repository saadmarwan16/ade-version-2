import qs from 'qs';

export const sitemapQuery = (locale: string = 'en', page: number = 1) =>
	qs.stringify(
		{
			fields: ['slug'],
			pagination: {
				pageSize: 500,
				page: page,
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
