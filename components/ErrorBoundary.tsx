'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect, FunctionComponent } from 'react';

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

export const ErrorBoundary: FunctionComponent<ErrorBoundaryProps> = ({
	children,
}: ErrorBoundaryProps) => {
	const [hasError, setHasError] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const t = useTranslations();

	useEffect(() => {
		function handleError(event: ErrorEvent) {
			event.preventDefault();
			setError(event.error);
			setHasError(true);
		}

		window.addEventListener('error', handleError);
		return () => window.removeEventListener('error', handleError);
	}, []);

	if (hasError) {
		return (
			<div className='flex min-h-screen items-center justify-center bg-gray-50'>
				<div className='text-center'>
					<h2 className='mb-4 text-2xl font-bold text-gray-900'>
						{t('ErrorPage.internal-error-message')}
					</h2>
					<button
						onClick={() => {
							setHasError(false);
							setError(null);
						}}
						className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700'
					>
						{t('ErrorPage.button')}
					</button>
					{process.env.NODE_ENV === 'development' && error && (
						<pre className='mt-4 max-w-xl overflow-auto rounded-lg bg-red-50 p-4 text-sm text-red-600'>
							{error.message}
						</pre>
					)}
				</div>
			</div>
		);
	}

	return <ErrorBoundaryInner>{children}</ErrorBoundaryInner>;
};

const ErrorBoundaryInner: FunctionComponent<ErrorBoundaryProps> = ({
	children,
}: ErrorBoundaryProps) => {
	const [hasError, setHasError] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const t = useTranslations();

	useEffect(() => {
		function handleError(event: ErrorEvent) {
			event.preventDefault();
			setError(event.error);
			setHasError(true);
		}

		window.addEventListener('error', handleError);
		return () => window.removeEventListener('error', handleError);
	}, []);

	if (hasError) {
		return (
			<div className='flex min-h-screen items-center justify-center bg-gray-50'>
				<div className='text-center'>
					<h2 className='mb-4 text-2xl font-bold text-gray-900'>
						{t('ErrorPage.component-error-message')}
					</h2>
					<button
						onClick={() => {
							setHasError(false);
							setError(null);
						}}
						className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700'
					>
						{t('ErrorPage.button')}
					</button>
					{process.env.NODE_ENV === 'development' && error && (
						<pre className='mt-4 max-w-xl overflow-auto rounded-lg bg-red-50 p-4 text-sm text-red-600'>
							{error.message}
						</pre>
					)}
				</div>
			</div>
		);
	}

	return <>{children}</>;
};
