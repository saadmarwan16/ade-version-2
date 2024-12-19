import { z } from 'zod';

export const ImageWithDimensionsSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	url: z.string(),
	width: z.number(),
	height: z.number(),
});

export const GalleryDetailsDataSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	images: z.array(ImageWithDimensionsSchema),
});

export const GalleryDetailsSchema = z.object({
	data: GalleryDetailsDataSchema,
});

export type TImageWithDimensions = z.infer<typeof ImageWithDimensionsSchema>;
export type TGalleryDetailsData = z.infer<typeof GalleryDetailsDataSchema>;
export type TGalleryDetails = z.infer<typeof GalleryDetailsSchema>;
