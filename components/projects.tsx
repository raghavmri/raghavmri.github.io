'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Globe, Layers } from 'lucide-react';

interface Project {
	title: string;
	year: string;
	description: string[];
	tech: string[];
	github?: string;
	live?: string;
	tagStyle: string;
}

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const [activeCategory, setActiveCategory] = useState<'all' | 'projects' | 'websites'>('all');

	const researchProjects: Project[] = [
		{
			title: 'Autonomous Dynamic Route Engine',
			year: '2026',
			description: [
				'Dynamic routing engine solving real-time disruption replanning (VRPTW) in <5ms using pyvroom (C++ VROOM) heuristic local search.',
				'Interactive Streamlit simulation with live spatial vehicle interpolation and real-time fleet telemetry.',
			],
			tech: ['Python', 'C++', 'VRPTW', 'pyvroom', 'Streamlit', 'Plotly'],
			github: 'https://github.com/ByteForceDev/NEXAI-2026-Hackathon',
			live: 'https://byteforcedev-nexai2026.streamlit.app/',
			tagStyle:
				'bg-emerald-500/10 text-emerald-300/90 border-emerald-500/20 hover:border-emerald-500/40',
		},
		{
			title: 'CCTV Event Clip Extraction Pipeline',
			year: '2026',
			description: [
				'Computer vision pipeline using OpenCV (MOG2) and YOLOv8 + ByteTrack to detect, track, and extract key activity clips.',
				'Full-stack Flask application with FFmpeg (H.265/H.264) compression and dynamic clip playback.',
			],
			tech: ['Python', 'OpenCV', 'YOLOv8', 'ByteTrack', 'Flask', 'FFmpeg'],
			github: 'https://github.com/ByteForceDev/ML-Based-CCTV-Video-Compression',
			live: 'https://github.com/ByteForceDev/ML-Based-CCTV-Video-Compression',
			tagStyle:
				'bg-cyan-500/10 text-cyan-300/90 border-cyan-500/20 hover:border-cyan-500/40',
		},
		{
			title: 'Secure LLM Conversation Pipeline',
			year: '2026',
			description: [
				'Privacy-preserving LLM workflow demo combining role-based prompt controls, encrypted payloads, and blockchain audit anchoring.',
			],
			tech: ['LLM', 'Cryptography', 'Blockchain', 'Privacy', 'Security'],
			github: 'https://github.com',
			live: 'https://example.com',
			tagStyle:
				'bg-purple-500/10 text-purple-300/90 border-purple-500/20 hover:border-purple-500/40',
		},
	];

	const personalWebsites: Project[] = [
		{
			title: 'WebShelf',
			year: '2026',
			description: [
				'A modern digital bookshelf and curated resource hub for discovering, organizing, and managing web bookmarks and reading lists.',
			],
			tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
			github: 'https://github.com/raghavmri',
			live: 'https://webshelf.raghavmri.dev/',
			tagStyle:
				'bg-amber-500/10 text-amber-300/90 border-amber-500/20 hover:border-amber-500/40',
		},
	];

	const handleProjectClick = (project: Project) => {
		if (project.live) {
			window.open(project.live, '_blank', 'noopener,noreferrer');
		} else if (project.github) {
			window.open(project.github, '_blank', 'noopener,noreferrer');
		}
	};

	const renderCard = (project: Project, index: number) => (
		<motion.div
			key={project.title}
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className='group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between'
			onClick={() => handleProjectClick(project)}
		>
			<div className='p-8 relative z-10 flex flex-col flex-grow justify-between'>
				<div>
					<div className='flex justify-between items-start mb-4'>
						<h3 className='text-2xl font-semibold text-white group-hover:text-white transition-colors flex-1'>
							{project.title}
						</h3>
						<span className='text-sm font-medium text-white/60 ml-4 whitespace-nowrap'>
							{project.year}
						</span>
					</div>

					{Array.isArray(project.description) ? (
						<ul className='text-white/75 text-sm md:text-[15px] mb-6 leading-relaxed space-y-2.5'>
							{project.description.map((item, idx) => (
								<li key={idx} className='flex gap-2.5 items-start'>
									<span className='text-white/40 shrink-0 text-base leading-none mt-1'>
										•
									</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					) : (
						<p className='text-white/75 text-sm md:text-[15px] mb-6 leading-relaxed'>
							{project.description}
						</p>
					)}
				</div>

				<div>
					<div className='flex flex-wrap gap-2 pt-2'>
						{project.tech.map((tech) => (
							<span
								key={tech}
								className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full border transition-all duration-200 backdrop-blur-sm ${project.tagStyle}`}
							>
								{tech}
							</span>
						))}
					</div>

					{project.github && (
						<div className='flex items-center gap-3 mt-6 pt-4 border-t border-white/10'>
							<a
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'
								onClick={(e) => e.stopPropagation()}
								className='inline-flex items-center gap-1.5 text-xs md:text-sm text-white/80 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10'
							>
								<Github className='w-4 h-4' />
								<span>Code</span>
							</a>
						</div>
					)}
				</div>

				{/* Click indicator */}
				<div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity'>
					<div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
				</div>
			</div>
		</motion.div>
	);

	return (
		<section id='projects' className='py-20 md:py-24 relative'>
			<div className='container mx-auto px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-10'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Featured Projects
					</h2>
					<div className='w-24 h-1 bg-white mx-auto mb-8'></div>
					<p className='text-white/80 text-lg max-w-2xl mx-auto'>
						A showcase of my recent work, research pipelines, and web applications
					</p>
				</motion.div>

				{/* Category Switcher Tabs */}
				<div className='flex justify-center items-center gap-2 mb-12'>
					{[
						{ id: 'all', label: 'All' },
						{ id: 'projects', label: 'Projects' },
						{ id: 'websites', label: 'Websites' },
					].map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveCategory(tab.id as any)}
							className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
								activeCategory === tab.id
									? 'bg-white text-black font-semibold shadow-md'
									: 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Projects Subsection */}
				{(activeCategory === 'all' || activeCategory === 'projects') && (
					<div className={activeCategory === 'all' ? 'mb-16' : ''}>
						{activeCategory === 'all' && (
							<div className='flex items-center gap-2.5 mb-6 pb-2 border-b border-white/10'>
								<Layers className='w-5 h-5 text-white/70' />
								<h3 className='text-2xl font-semibold text-white'>Research & Engineering Projects</h3>
							</div>
						)}
						<div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
							{researchProjects.map((project, index) => renderCard(project, index))}
						</div>
					</div>
				)}

				{/* Websites Subsection */}
				{(activeCategory === 'all' || activeCategory === 'websites') && (
					<div>
						{activeCategory === 'all' && (
							<div className='flex items-center gap-2.5 mb-6 pb-2 border-b border-white/10'>
								<Globe className='w-5 h-5 text-white/70' />
								<h3 className='text-2xl font-semibold text-white'>Websites</h3>
							</div>
						)}
						<div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
							{personalWebsites.map((project, index) => renderCard(project, index))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
