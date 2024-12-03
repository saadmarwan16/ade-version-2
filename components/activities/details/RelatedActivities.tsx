import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { activities } from '../data';

interface RelatedActivitiesProps {
	currentId: number;
	category: string;
}

export function RelatedActivities({
	currentId,
	category,
}: RelatedActivitiesProps) {
	const relatedActivities = activities
		.filter(
			(activity) => activity.category === category && activity.id !== currentId
		)
		.slice(0, 3);

	return (
		<div className='space-y-4'>
			{relatedActivities.map((activity) => (
				<Link
					key={activity.id}
					href={`/activities/${activity.id}`}
					className='group block'
				>
					<div className='flex gap-4'>
						<div className='relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg'>
							<Image
								src={activity.image}
								alt={activity.title}
								fill
								className='object-cover transition-transform duration-300 group-hover:scale-110'
							/>
						</div>
						<div>
							<h4 className='line-clamp-2 font-medium text-gray-900 transition-colors group-hover:text-indigo-600'>
								{activity.title}
							</h4>
							<div className='mt-2 flex items-center text-sm text-gray-500'>
								<Calendar className='mr-1 h-4 w-4' />
								{activity.date}
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
