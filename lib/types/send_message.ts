import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const SendMessageSchema = zfd.formData({
	name: zfd.text(
		z
			.string({
				required_error: 'Name is required',
			})
			.min(2, 'Name must be at least 2 characters long')
			.max(250, 'Name must be at most 250 characters long')
	),
	email: zfd.text(
		z
			.string({
				required_error: 'Email is required',
			})
			.email('Invalid email')
	),
	subject: zfd.text(
		z
			.string({
				required_error: 'Subject is required',
			})
			.min(2, 'Subject must be at least 2 characters long')
			.max(400, 'Subject must be at most 400 characters long')
	),
	content: zfd.text(
		z
			.string({
				required_error: 'Message is required',
			})
			.min(16, 'Message must be at least 16 characters long')
	),
});
