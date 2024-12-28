import { env } from '@/env';

export const constructImageLink = (path: string) => {
	if (env.NEXT_PUBLIC_NODE_ENV === 'production') {
		return path;
	} else {
		return `${env.NEXT_PUBLIC_BACKEND_URL}${path}`;
	}
};
