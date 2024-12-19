import { z } from 'zod';
import { ActivityCategorySchema, ImageSchema, MetaSchema } from './shared';

export const ActivitySchema = z.object({
	date: z.string(),
	title: z.string(),
	id: z.number(),
	documentId: z.string(),
	slug: z.string(),
	thumbnail: ImageSchema,
	activity_categories: z.array(ActivityCategorySchema),
});

export const ActivitiesSchema = z.object({
	data: z.array(ActivitySchema),
	meta: MetaSchema,
});

export type TActivity = z.infer<typeof ActivitySchema>;
export type TActivities = z.infer<typeof ActivitiesSchema>;
