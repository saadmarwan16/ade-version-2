'use client';

import { ErrorBoundary } from '@/components/ErrorBoundary';

interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return <ErrorBoundary>{children}</ErrorBoundary>;
}
