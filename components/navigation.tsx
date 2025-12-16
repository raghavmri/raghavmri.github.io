'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import StatusBar from './status-bar';

export default function Navigation() {
	const [activeSection, setActiveSection] = useState('hero');

	const navItems = [
		{ id: 'hero', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'tech', label: 'Tech' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' },
	];

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => document.getElementById(item.id));
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(navItems[i].id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 20,
					duration: 0.8,
				}}
				className='fixed top-8 left-1/2 -translate-x-1/2 z-50 w-auto'
			>
				<motion.div
					className='bg-black border border-white/20 rounded-full px-6 py-3 shadow-2xl'
					whileHover={{ scale: 1.02 }}
					transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				>
					<div className='flex items-center space-x-1'>
						{navItems.map((item, index) => (
							<motion.button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className='relative px-4 py-2 text-sm font-medium transition-colors rounded-full'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{activeSection === item.id && (
									<motion.div
										layoutId='activeSection'
										className='absolute inset-0 bg-white rounded-full'
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}
									/>
								)}
								<span
									className={`relative z-10 ${
										activeSection === item.id ? 'text-black' : 'text-white/70'
									}`}
								>
									{item.label}
								</span>
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Decorative glow effect */}
				<motion.div
					className='absolute inset-0 -z-10 rounded-full bg-white/5 blur-xl'
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
			</motion.nav>
			<StatusBar />
		</>
	);
}
