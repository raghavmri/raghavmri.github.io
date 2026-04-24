'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
	Timeline,
	TimelineItem,
	TimelineHeader,
	TimelineTime,
	TimelineTitle,
	TimelineDescription,
} from '@/components/ui/timeline';

export default function Honors() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const honors = [
		{
			title: 'Bug Bounty Reward - Open Redirection',
			organization: 'FYERS Securities Pvt. Ltd.',
			date: 'Nov 2024',
			year: '2024',
		},
		{
			title: "2nd Prize, Reverse Coding (Prodigy '22)",
			organization: 'ACM-CEG, Anna University',
			date: 'Nov 2022',
			year: '2022',
		},
		{
			title: '2nd Position, Levels With Images (Prodigy)',
			organization: 'ACM-CEG, Anna University',
			date: 'Jan 2022',
			year: '2022',
		},
		{
			title: 'Bug Bounty Reward - XSS',
			organization: 'BunnyWay d.o.o.',
			date: 'Oct 2020',
			year: '2020',
		},
	];

	// Sort honors by date (most recent first)
	const sortedHonors = [...honors].sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	return (
		<section id='honors' className='py-20 relative' ref={ref}>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Honors & Awards
					</h2>
					<div className='w-24 h-1 bg-white mx-auto mb-8'></div>
					<p className='text-white/80 text-lg max-w-2xl mx-auto'>
						Recognition for achievements in security, coding competitions, and bug
						bounties
					</p>
				</motion.div>

				{/* Timeline Container */}
				<div className='max-w-3xl mx-auto'>
					<Timeline>
						{sortedHonors.map((honor, index) => (
							<motion.div
								key={honor.title}
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{
									duration: 0.6,
									delay: index * 0.2,
									type: 'spring',
									stiffness: 100,
								}}
							>
								<TimelineItem>
									<TimelineHeader
										className={
											index === sortedHonors.length - 1 ? 'before:hidden' : ''
										}
									>
										<TimelineTime className='bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg pointer-events-none hover:bg-white/20 transition-colors'>
											{honor.date}
										</TimelineTime>
										<TimelineTitle className='text-white/90'>
											{honor.title}
										</TimelineTitle>
									</TimelineHeader>
									<TimelineDescription className='text-white/60'>
										{honor.organization}
									</TimelineDescription>
								</TimelineItem>
							</motion.div>
						))}
					</Timeline>
				</div>
			</div>
		</section>
	);
}
