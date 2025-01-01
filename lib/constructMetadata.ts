import { Metadata } from 'next';

interface constructMetadataProps {
	title: string;
	description?: string;
	keywords: string[];
	canonical: string;
	images?: string;
}

export const constructMetadata = ({
	title,
	description,
	keywords,
	canonical,
	images
}: constructMetadataProps): Metadata => {
	return {
		title: `${title} - Adébayo Ademon`,
		description: description,
		keywords: keywords,
		alternates: {
			canonical: canonical,
		},
		openGraph: {
			title: title,
			description: description,
			images: images,
			url: canonical,
			siteName: 'Adébayo Ademon',
			type: 'website',
		},
		twitter: {
			title: title,
			description: description,
			images: images,
			card: 'summary_large_image',
		},
	};
};
