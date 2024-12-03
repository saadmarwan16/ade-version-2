import { ImageProps } from 'next/image';

export const getImageProps = (
	src: string,
	alt: string,
	options?: Partial<ImageProps>
): ImageProps => {
	const defaultProps: ImageProps = {
		src,
		alt,
		quality: 90,
		loading: 'lazy',
		sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		...options,
	};

	return defaultProps;
};

export const getOptimizedImageUrl = (url: string, width = 800): string => {
	if (!url) return '';

	// Add quality and format parameters for Unsplash images
	if (url.includes('unsplash.com')) {
		const separator = url.includes('?') ? '&' : '?';
		return `${url}${separator}w=${width}&q=80&fm=webp`;
	}

	return url;
};
