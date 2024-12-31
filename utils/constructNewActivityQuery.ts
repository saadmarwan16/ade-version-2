export const constructNewActivityQuery = (query?: string, category?: string, sort?: string) => {
	let newQuery = {};
	if (!!query) {
		newQuery = {
            ...newQuery,
			query: query,
		};
	}
	if (!!category) {
		newQuery = {
			...newQuery,
			category: category,
		};
	}
	if (!!sort) {
		newQuery = {
			...newQuery,
			sort: sort,
		};
	}

    return newQuery;
};
