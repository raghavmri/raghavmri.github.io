'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function TechStack() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const programmingLanguages = [
		{
			name: 'JavaScript',
			color: 'bg-yellow-500',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		},
		{
			name: 'TypeScript',
			color: 'bg-blue-600',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		},
		{
			name: 'Python',
			color: 'bg-blue-500',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		},
		{
			name: 'Java',
			color: 'bg-red-500',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
		},
		{
			name: 'C',
			color: 'bg-blue-800',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
		},
		{
			name: 'R',
			color: 'bg-blue-600',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
			learning: 'Learning',
		},
		{
			name: 'HTML5',
			color: 'bg-orange-500',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
		},
		{
			name: 'CSS3',
			color: 'bg-blue-400',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		},
		{
			name: 'SQL',
			color: 'bg-gray-500',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
		},
		{
			name: 'Bash',
			color: 'bg-gray-700',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
		},
	];

	const frameworksAndTools = [
		{
			name: 'React',
			color: 'bg-cyan-500',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		},
		{
			name: 'Next.js',
			color: 'bg-black',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		},
		{
			name: 'Node.js',
			color: 'bg-green-600',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		},
		{
			name: 'Pandas',
			color: 'bg-purple-600',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
			learning: 'Learning',
		},
		{
			name: 'NumPy',
			color: 'bg-blue-700',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
			learning: 'Learning',
		},
		{
			name: 'PostgreSQL',
			color: 'bg-blue-700',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
		},
		{
			name: 'Docker',
			color: 'bg-blue-600',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
		},
		{
			name: 'Git',
			color: 'bg-red-500',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
		},
	];

	const TechCard = ({ tech, index, delay = 0 }) => (
		<motion.div
			key={tech.name}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={isInView ? { opacity: 1, scale: 1 } : {}}
			transition={{ duration: 0.6, delay: index * 0.1 + delay }}
			whileHover={{ scale: 1.05, y: -5 }}
			className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group relative'
		>
			{/* Learning Badge */}
			{tech.learning && (
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.5, delay: index * 0.1 + delay + 0.3 }}
					className='absolute -top-2 -right-2 z-10'
				>
					<div
						className={`px-3 py-1 rounded-full text-xs font-medium bg-white text-black border border-black/10`}
					>
						{tech.learning === 'Learning' ? '🌱 Learning' : '✨ New'}
					</div>
				</motion.div>
			)}

			<div className='mb-4 group-hover:scale-110 transition-transform duration-300'>
				<div className='w-12 h-12 mx-auto relative'>
					<Image
						src={tech.icon}
						alt={tech.name}
						width={48}
						height={48}
						className='filter brightness-110'
						priority={index < 6}
						unoptimized
						onError={(e) => {
							(e.target as any).style.display = 'none';
							(e.target as any).parentNode.nextSibling.style.display = 'block';
						}}
					/>
				</div>
				<div className='text-3xl hidden mx-auto w-12 h-12 items-center justify-center'>
					{tech.name.charAt(0)}
				</div>
			</div>
			<h3 className='text-white font-medium text-sm mb-2'>{tech.name}</h3>
			<div
				className={`w-full h-1 bg-white/50 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
			></div>
		</motion.div>
	);

	return (
		<section id='tech' className='py-20 md:py-24 relative'>
			<div className='container mx-auto px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-14 md:mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Tech Stack
					</h2>
					<div className='w-24 h-1 bg-white mx-auto mb-8'></div>
					<p className='text-white/80 text-lg max-w-2xl mx-auto'>
						Technologies I use for development and financial analysis
					</p>
				</motion.div>

				{/* Programming Languages Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.3 }}
					className='mb-16'
				>
					<h3 className='text-2xl md:text-3xl font-bold text-white mb-8 text-center'>
						Programming Languages
					</h3>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
						{programmingLanguages.map((tech, index) => (
							<TechCard key={tech.name} tech={tech} index={index} delay={0.4} />
						))}
					</div>
				</motion.div>

				{/* Frameworks & Tools Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='mb-12'
				>
					<h3 className='text-2xl md:text-3xl font-bold text-white mb-8 text-center'>
						Frameworks & Tools
					</h3>
					<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
						{frameworksAndTools.map((tech, index) => (
							<TechCard key={tech.name} tech={tech} index={index} delay={0.8} />
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 1.4 }}
					className='text-center'
				>
					<p className='text-white/60 text-sm'>
						Always learning and exploring new technologies! 🚀
					</p>
				</motion.div>
			</div>
		</section>
	);
}
