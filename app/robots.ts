import { env } from '@/env';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '*',
		},
		sitemap: `${env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
	};
}