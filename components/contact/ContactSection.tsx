'use client';

import { FunctionComponent, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { sendMessage } from '@/app/[locale]/(app)/contact/actions';
import toast from 'react-hot-toast';

export const ContactSection: FunctionComponent = () => {
	const ref = useRef<HTMLFormElement>(null);
	const { execute, isExecuting, result } = useAction(sendMessage);
	const t = useTranslations();

	useEffect(() => {
		console.log('Result:', result)
		const { data, serverError } = result;
		if (serverError) toast.error(serverError);
		else if (data === 'Message sent successfully') {
			ref.current?.reset();
			toast.success(t('ContactPage.message-send-success'));
		}
	}, [result, t]);

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
					<form ref={ref} action={execute} className='space-y-6'>
						<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
							<input
								type='text'
								name='name'
								placeholder={t('ContactPage.name')}
								className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
								required
							/>
							<input
								type='email'
								name='email'
								placeholder={t('ContactPage.email')}
								className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
								required
							/>
						</div>

						<input
							type='text'
							name='subject'
							placeholder={t('ContactPage.subject')}
							className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							required
						/>

						<textarea
							name='content'
							placeholder={t('ContactPage.message')}
							rows={6}
							className='w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							required
						/>

						<div className='text-center'>
							<button
								type='submit'
								className={`inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-medium text-indigo-600 transition-colors hover:bg-indigo-50 ${isExecuting && 'cursor-not-allowed opacity-50'}`}
								disabled={isExecuting}
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
