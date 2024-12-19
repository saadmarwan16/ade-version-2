import qs from 'qs';

export const metaQuery = (locale: string = 'en') =>
	qs.stringify(
		{
			fields: [
				'instagram',
				'linkedin',
				'email',
				'twitter',
				'facebook',
				'youtube',
				'number_of_activities',
				'number_of_projects',
				'phone',
				'whatsapp',
				'location',
			],
			populate: {
				logo: {
					fields: ['url'],
				},
			},
			locale: locale,
		},
		{ encodeValuesOnly: true }
	);
