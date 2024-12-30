import qs from 'qs';

export const galleryDetailsQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			populate: {
				images: {
					fields: ['url', 'width', 'height'],
				},
				thumbnail: {
					fields: ['url'],
				},
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
