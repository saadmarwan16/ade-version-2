import { ActivityCard } from './ActivityCard';
import { activities } from './data';

export function ActivitiesList() {
	return (
		<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
			{activities.map((activity) => (
				<ActivityCard key={activity.id} activity={activity} />
			))}
		</div>
	);
}
