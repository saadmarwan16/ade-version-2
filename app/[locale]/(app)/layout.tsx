import { Locale } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { FunctionComponent, PropsWithChildren } from 'react';

interface AppLayoutProps extends PropsWithChildren {
	params: {
		locale: Locale;
	};
}

const AppLayout: FunctionComponent<AppLayoutProps> = ({
	children,
	params: { locale },
}) => {
	setRequestLocale(locale);
	
	return children;
};

export default AppLayout;
