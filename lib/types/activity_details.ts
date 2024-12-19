import { z } from 'zod';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ActivityCategorySchema, ImageSchema } from './shared';

export const ActivityDetailsBodySchema = z.custom<BlocksContent>((val) => val);

export const RelatedActivitiesSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	slug: z.string(),
	date: z.string(),
	thumbnail: z.object({
		id: z.number(),
		documentId: z.string(),
		url: z.string(),
	}),
});

export const ActivityDetailsDataSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	body: ActivityDetailsBodySchema,
	date: z.string(),
	thumbnail: ImageSchema,
	images: z.array(ImageSchema),
	activity_categories: z.array(ActivityCategorySchema),
	related: z.array(RelatedActivitiesSchema),
});

export const ActivityDetailsSchema = z.object({
	data: ActivityDetailsDataSchema,
});

export type TActivityDetailsBody = z.infer<typeof ActivityDetailsBodySchema>;
export type TRelatedActivities = z.infer<typeof RelatedActivitiesSchema>;
export type TActivityDetailsData = z.infer<typeof ActivityDetailsDataSchema>;
export type TActivityDetails = z.infer<typeof ActivityDetailsSchema>;
