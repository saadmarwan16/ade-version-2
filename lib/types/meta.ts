import { z } from 'zod';
import { ImageSchema } from './shared';

export const MetaDataSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	instagram: z.string(),
	linkedin: z.string(),
	email: z.string(),
	twitter: z.string(),
	facebook: z.string(),
	youtube: z.string(),
	number_of_activities: z.number(),
	number_of_projects: z.number(),
	phone: z.string(),
	whatsapp: z.string(),
	location: z.string(),
	logo: ImageSchema,
});

export const MetaSchema = z.object({
	data: MetaDataSchema,
});

export type TMetaData = z.infer<typeof MetaDataSchema>;
export type TMeta = z.infer<typeof MetaSchema>;
