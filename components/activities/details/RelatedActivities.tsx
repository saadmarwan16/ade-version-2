import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { FunctionComponent } from 'react';
import { Link, Locale } from '@/i18n/routing';
import { TRelatedActivities } from '@/lib/types/activity_details';
import { constructImageLink } from '@/lib/contructImageLink';
import dayjs from 'dayjs';

interface RelatedActivitiesProps {
	locale: Locale;
	activities: TRelatedActivities[];
}

export const RelatedActivities: FunctionComponent<RelatedActivitiesProps> = ({
	locale,
	activities,
}) => {
	return (
		<div className='space-y-4'>
			{activities.map((activity) => (
				<Link
					key={activity.documentId}
					href={{
						pathname: '/activities/[slug]',
						params: {
							slug: activity.slug,
						},
					}}
					className='group block'
				>
					<div className='flex gap-4'>
						<div className='relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg'>
							<Image
								src={constructImageLink(activity.thumbnail.url)}
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
								{dayjs(activity.date).locale(locale).format('MMMM DD, YYYY')}
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};
