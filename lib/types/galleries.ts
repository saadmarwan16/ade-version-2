import { z } from 'zod';
import { ImageSchema, MetaSchema } from './shared';

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

export type TGallery = z.infer<typeof GallerySchema>;
export type TGalleries = z.infer<typeof GalleriesSchema>;
