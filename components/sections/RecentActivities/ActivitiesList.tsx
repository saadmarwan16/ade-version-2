import { THomePageActivity } from '@/lib/types/home_page';
import { ActivityCard } from './ActivityCard';
import { FunctionComponent } from 'react';
import { Locale } from '@/i18n/routing';

interface ActivityListProps {
	locale: Locale;
	activities: THomePageActivity[];
}

export const ActivitiesList: FunctionComponent<ActivityListProps> = ({
	locale,
	activities,
}) => {
	return (
		<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
			{activities.map((activity) => (
				<ActivityCard key={activity.documentId} locale={locale} activity={activity} />
			))}
		</div>
	);
};
