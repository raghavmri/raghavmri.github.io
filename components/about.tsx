'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, BookOpen, Shield, Film } from 'lucide-react';

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const hobbies = [
		{
			icon: TrendingUp,
			title: 'Stock market analysis',
			description: 'Currently tracking 30+ stocks in my watchlist',
		},
		{
			icon: BookOpen,
			title: 'Learning more finance stuffs',
			description: 'Always expanding my knowledge with books and articles',
		},
		{
			icon: Shield,
			title: 'Cyber security',
			description: 'Fascinated by ethical hacking and system defense mechanisms',
		},
		{
			icon: Film,
			title: 'Watching movies',
			description: 'Big fan of gripping rom-com and action movies',
		},
	];

	return (
		<section id='about' className='py-20 md:py-24 relative'>
			<div className='container mx-auto px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-14 md:mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						About Me
					</h2>
					<div className='w-24 h-1 bg-white mx-auto mb-8'></div>
				</motion.div>

				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='space-y-6'
					>
						<div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
							<h3 className='text-2xl font-semibold text-white mb-4'>My Story</h3>
							<p className='text-white/80 leading-relaxed'>
								My love affair with blinking lights and circuits started so early,
								my first words were probably in binary. By the time 10th grade
								rolled around, I was diving headfirst into the chaotic world of
								programming and web development. (Yes, I definitely thought
								breaking a CSS layout meant the world was ending.)
							</p>
							<p className='text-white/80 leading-relaxed mt-4'>
								Naturally, by 11th grade, I hit my &apos;rebellious hacker&apos;
								phase. I swapped colorful web buttons for a dark terminal, put on
								an oversized hoodie, and ventured into the mysterious arts of
								cybersecurity. Fast forward a bit, and I somehow traded those
								hacker dreams to obsess over candle charts, diving deep into the
								terrifying yet thrilling rollercoaster of personal finance and the
								stock market! From debugging loops to analyzing bull markets, it
								has been a wild ride.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='space-y-4'
					>
						<h3 className='text-2xl font-semibold text-white mb-6'>
							Fun Facts & Hobbies
						</h3>
						{hobbies.map((hobby, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
								className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors'
							>
								<div className='flex items-start space-x-4'>
									<hobby.icon className='w-6 h-6 text-blue-400 mt-1' />
									<p className='text-sm leading-relaxed'>
										<span className='text-white/90 font-medium'>
											{hobby.title}
										</span>{' '}
										<span className='text-white/50 italic'>
											({hobby.description})
										</span>
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
