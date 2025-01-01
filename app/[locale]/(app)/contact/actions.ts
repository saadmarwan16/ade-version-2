'use server';

import { env } from '@/env';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { actionClient } from '@/lib/safeAction';
import { SendMessageSchema } from '@/lib/types/send_message';
import { z } from 'zod';

export const sendMessage = actionClient
	.schema(SendMessageSchema)
	.action(async ({ parsedInput }) => {
		await fetchWithZod(z.object({}), `${env.NEXT_PUBLIC_API_URL}/messages`, {
			method: 'POST',
			body: JSON.stringify({ data: parsedInput }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return 'Message sent successfully';
	});
