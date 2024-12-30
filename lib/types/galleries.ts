import { z } from 'zod';
import { ImageSchema, MetaSchema } from './shared';

export const GallerySortSchema = z.enum([
	'createdAt',
	'createdAt:desc',
	'title',
	'title:desc',
]);

export const GallerySchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	slug: z.string(),
	thumbnail: ImageSchema,
	images: z.array(ImageSchema),
});

export const GalleriesSchema = z.object({
	data: z.array(GallerySchema),
	meta: MetaSchema,
});

export type TGallerySort = z.infer<typeof GallerySortSchema>;
export type TGallery = z.infer<typeof GallerySchema>;
export type TGalleries = z.infer<typeof GalleriesSchema>;
