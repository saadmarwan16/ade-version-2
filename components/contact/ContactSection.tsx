'use client';

import { FunctionComponent, useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const ContactSection: FunctionComponent = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const t = useTranslations();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log(formData);
	};

	return (
		<section
			id='contact'
			className='bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-24'
		>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mb-16 text-center'>
					<h2 className='mb-4 text-4xl font-bold text-white'>
						{t('ContactPage.reach-out-title')}
					</h2>
					<p className='mx-auto max-w-2xl text-xl text-indigo-200'>
						{t('ContactPage.reach-out-description')}
					</p>
				</div>

				<div className='mx-auto max-w-3xl'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
							<input
								type='text'
								placeholder={t('ContactPage.name')}
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
								required
							/>
							<input
								type='email'
								placeholder={t('ContactPage.email')}
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
								required
							/>
						</div>

						<input
							type='text'
							placeholder={t('ContactPage.subject')}
							value={formData.subject}
							onChange={(e) =>
								setFormData({ ...formData, subject: e.target.value })
							}
							className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							required
						/>

						<textarea
							placeholder={t('ContactPage.message')}
							value={formData.message}
							onChange={(e) =>
								setFormData({ ...formData, message: e.target.value })
							}
							rows={6}
							className='w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							required
						/>

						<div className='text-center'>
							<button
								type='submit'
								className='inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-medium text-indigo-600 transition-colors hover:bg-indigo-50'
							>
								{t('ContactPage.send-message-button')}
								<Send className='h-5 w-5' />
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
