import { z } from 'zod';
import { ActivityCategorySchema, ImageSchema } from './shared';

export const PartnerSchema = z.object({
	id: z.number(),
	company: z.string(),
	link: z.string(),
	logo: ImageSchema,
});

export const ProjectSchema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string(),
	link: z.string().nullable(),
	project_types: z.array(ActivityCategorySchema),
	image: ImageSchema,
});

export const HomePageActivitySchema = z.object({
	id: z.number(),
	documentId: z.string(),
	title: z.string(),
	slug: z.string(),
	date: z.string(),
	thumbnail: ImageSchema,
	activity_categories: z.array(ActivityCategorySchema),
});

export const HomePageDataSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	partners: z.array(PartnerSchema),
	projects: z.array(ProjectSchema),
	activities: z.array(HomePageActivitySchema),
	avatar: ImageSchema,
});

export const HomePageSchema = z.object({
	data: HomePageDataSchema,
});

export type TPartner = z.infer<typeof PartnerSchema>;
export type TProject = z.infer<typeof ProjectSchema>;
export type THomePageActivity = z.infer<typeof HomePageActivitySchema>;
export type THomePageData = z.infer<typeof HomePageDataSchema>;
export type THomePage = z.infer<typeof HomePageSchema>;
