import { z } from 'zod';

export const ImageSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	url: z.string(),
});

export const ActivityCategorySchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	color: z.string(),
});

export const PaginationSchema = z.object({
	page: z.number(),
	pageSize: z.number(),
	pageCount: z.number(),
	total: z.number(),
});

export const MetaSchema = z.object({
	pagination: PaginationSchema,
});

export type TImage = z.infer<typeof ImageSchema>;
export type TActivityCategory = z.infer<typeof ActivityCategorySchema>;
export type TPagination = z.infer<typeof PaginationSchema>;
export type TMeta = z.infer<typeof MetaSchema>;
