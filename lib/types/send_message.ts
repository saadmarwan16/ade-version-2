import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const SendMessageSchema = zfd.formData({
	name: zfd.text(
		z
			.string({
				required_error: 'ContactPage.name-required-error',
			})
			.min(2, 'ContactPage.name-min-error')
			.max(250, 'ContactPage.name-max-error')
	),
	email: zfd.text(
		z
			.string({
				required_error: 'ContactPage.email-required-error',
			})
			.email('ContactPage.email-format-error')
	),
	subject: zfd.text(
		z
			.string({
				required_error: 'ContactPage.subject-required-error',
			})
			.min(2, 'ContactPage.subject-min-error')
			.max(400, 'ContactPage.subject-max-error')
	),
	content: zfd.text(
		z
			.string({
				required_error: 'ContactPage.message-required-error',
			})
			.min(16, 'ContactPage.message-min-error')
	),
});
