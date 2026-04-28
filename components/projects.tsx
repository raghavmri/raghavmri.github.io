'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const projects = [
		{
			title: 'CCTV Event Clip Extraction Pipeline',
			year: '2026',
			description: [
				'Engineered a production-ready computer vision pipeline utilizing OpenCV (MOG2) for motion filtering and YOLOv8 with ByteTrack to detect, track, and extract meaningful activity from long surveillance footage.',
				'Developed a full-stack Flask web application featuring real-time processing analytics and dynamic clip playback, integrating FFmpeg (H.265/H.264) to optimize video compression and reduce storage requirements.',
			],
			tech: [
				'Python',
				'OpenCV',
				'YOLOv8',
				'ByteTrack',
				'Flask',
				'FFmpeg',
				'Computer Vision',
			],
			github: 'https://github.com',
			live: 'https://example.com',
			color: 'from-blue-500 to-cyan-600',
		},
		{
			title: 'Secure LLM Conversation Pipeline',
			year: '2026',
			description: [
				'Engineered a privacy-preserving LLM workflow demo that combines role-based prompt controls, encrypted payloads, and blockchain audit anchoring.',
			],
			tech: ['LLM', 'Cryptography', 'Blockchain', 'Privacy', 'Security'],
			github: 'https://github.com',
			live: 'https://example.com',
			color: 'from-purple-500 to-pink-600',
		},
	];

	const handleProjectClick = (project) => {
		// You can customize this behavior - open live demo, github, or both
		if (project.live) {
			window.open(project.live, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<section id='projects' className='py-20 md:py-24 relative'>
			<div className='container mx-auto px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-14 md:mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Featured Projects
					</h2>
					<div className='w-24 h-1 bg-white mx-auto mb-8'></div>
					<p className='text-white/80 text-lg max-w-2xl mx-auto'>
						A showcase of my recent work and creative solutions
					</p>
				</motion.div>

				<div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className='group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl'
							onClick={() => handleProjectClick(project)}
						>
							{/* Gradient overlay for visual appeal */}
							<div
								className={`absolute inset-0 bg-white opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`}
							></div>

							<div className='p-8 relative z-10'>
								<div className='flex justify-between items-start mb-4'>
									<h3 className='text-2xl font-semibold text-white group-hover:text-white transition-colors flex-1'>
										{project.title}
									</h3>
									<span className='text-sm font-medium text-white/60 ml-4 whitespace-nowrap'>
										{project.year}
									</span>
								</div>

								{Array.isArray(project.description) ? (
									<ul className='text-white/70 text-base mb-6 leading-relaxed space-y-3'>
										{project.description.map((item, idx) => (
											<li key={idx} className='flex gap-3'>
												<span className='text-white/40 shrink-0 mt-1'>•</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								) : (
									<p className='text-white/70 text-base mb-6 leading-relaxed'>
										{project.description}
									</p>
								)}

								<div className='flex flex-wrap gap-2'>
									{project.tech.map((tech) => (
										<span
											key={tech}
											className='px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all'
										>
											{tech}
										</span>
									))}
								</div>

								{/* Click indicator */}
								<div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity'>
									<div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
