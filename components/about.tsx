'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, TrendingUp, BarChart3, BookOpen } from 'lucide-react';

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const hobbies = [
		{
			icon: TrendingUp,
			text: 'Stock market analysis (Currently tracking 200+ stocks in my watchlist)',
		},
		{
			icon: BarChart3,
			text: 'Trading strategies (Developed 5 profitable algorithmic trading bots)',
		},
		{
			icon: Coffee,
			text: 'Coffee & Charts (Best trading decisions happen at 6 AM with fresh coffee)',
		},
		{
			icon: BookOpen,
			text: 'Financial literature (Read 47 finance books this year, Warren Buffett is my hero)',
		},
	];

	return (
		<section id='about' className='py-20 relative'>
			<div className='container mx-auto px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
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
								I&apos;m a passionate full-stack developer with a deep fascination
								for financial markets. I combine my technical expertise with
								financial analysis to create innovative solutions for trading,
								portfolio management, and market research. When I&apos;m not
								coding, you&apos;ll find me analyzing market trends, backtesting
								trading strategies, or diving deep into financial data.
							</p>
							<p className='text-white/80 leading-relaxed mt-4'>
								My unique blend of programming skills and financial knowledge
								allows me to build sophisticated trading tools, automated analysis
								systems, and data visualization platforms that help make sense of
								complex market movements.
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
									<hobby.icon className='w-6 h-6 text-blue-400 mt-1 flex-shrink-0' />
									<p className='text-white/80 text-sm'>{hobby.text}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
