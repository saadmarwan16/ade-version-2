import { Metadata } from 'next';

interface SEOProps {
	title: string;
	description: string;
	path: string;
	image?: string;
}

export const generateMetadata = ({
	title,
	description,
	path,
	image,
}: SEOProps): Metadata => {
	const url = `https://adebayoademon.com${path}`;
	const defaultImage = 'https://adebayoademon.com/og-image.jpg';

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			images: [{ url: image || defaultImage }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [image || defaultImage],
		},
		alternates: {
			canonical: url,
		},
	};
};
