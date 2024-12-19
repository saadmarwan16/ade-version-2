import { z } from 'zod';
import { ImageSchema } from './shared';

export const KnowMeDetailsSchema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string(),
	image: ImageSchema,
});

export const KnowMeDataSchema = z.object({
	id: z.number(),
	documentId: z.string(),
	details: z.array(KnowMeDetailsSchema),
});

export const KnowMeSchema = z.object({
	data: KnowMeDataSchema,
});

export type TKnowMeDetails = z.infer<typeof KnowMeDetailsSchema>;
export type TKnowMeData = z.infer<typeof KnowMeDataSchema>;
export type TKnowMe = z.infer<typeof KnowMeSchema>;
