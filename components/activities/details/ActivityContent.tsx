import { Activity } from '../types';

interface ActivityContentProps {
	activity: Activity;
}

export function ActivityContent({ activity }: ActivityContentProps) {
	return (
		<div className='prose prose-lg max-w-none'>
			{activity.content && (
				<div
					dangerouslySetInnerHTML={{ __html: activity.content }}
					className='mb-12'
				/>
			)}

			{/* Objectives Section */}
			{activity.objectives && (
				<div className='mb-12'>
					<h2 className='mb-6 text-2xl font-semibold text-gray-900'>
						Key Objectives
					</h2>
					<ul className='space-y-4'>
						{activity.objectives.map((objective, index) => (
							<li key={index} className='flex items-start gap-4'>
								<span className='flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-medium text-indigo-600'>
									{index + 1}
								</span>
								<span className='text-gray-700'>{objective}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Outcomes Section */}
			{activity.outcomes && (
				<div>
					<h2 className='mb-6 text-2xl font-semibold text-gray-900'>
						Key Outcomes
					</h2>
					<ul className='space-y-4'>
						{activity.outcomes.map((outcome, index) => (
							<li key={index} className='flex items-start gap-4'>
								<span className='flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-medium text-emerald-600'>
									✓
								</span>
								<span className='text-gray-700'>{outcome}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
