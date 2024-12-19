import qs from 'qs';

export const knowMePageQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			fields: ['id'],
			populate: {
				details: {
					populate: {
						image: {
							fields: ['url'],
						},
					},
				},
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
