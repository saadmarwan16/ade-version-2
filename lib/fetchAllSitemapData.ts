import { fetchWithZod } from './fetchWithZod';
import { sitemapQuery } from './quiries/sitemap';
import { SitemapSchema, TSitemapData } from './types/sitemap';

const fetchPage = async (endpoint: string) => {
	try {
		const response = await fetchWithZod(SitemapSchema, endpoint);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const fetchAllSitemapData = async (baseUrl: string, locale: string) => {
	let allData: TSitemapData = [];
	let currentPage = 1;
	let hasNextPage = true;
	const endpoint = `${baseUrl}?${sitemapQuery(locale, currentPage)}`;

	while (hasNextPage) {
		const response = await fetchPage(endpoint);

		if (!response) {
			break;
		}

		allData = [...allData, ...response.data];

		hasNextPage = currentPage < response.meta.pagination.pageCount;
		currentPage++;
	}

	return allData;
};
