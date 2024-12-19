import qs from 'qs';

export const activityDetailsQuery = (locale: string = 'en') =>
	qs.stringify(
		{
            populate: {
              thumbnail: {
                fields: ['url']
              },
              images: {
                fields: ['url']
              },
              activity_categories: {
                fields: ['title', 'color']
              },
              related: {
                fields: ['title', 'slug', 'date'],
                populate: {
                  thumbnail: {
                    fields: ['url']
                  }
                }
              }
            },
            locale: locale,
            },
		{ encodeValuesOnly: true }
	);
