'use client';
import { useEffect, useState } from 'react';
import Hero from '@/components/hero';
import About from '@/components/about';
import TechStack from '@/components/tech-stack';
import Projects from '@/components/projects';
import Honors from '@/components/honors';
import Contact from '@/components/contact';
import Navigation from '@/components/navigation';
import { FloatingElements, ScrollProgress } from '@/components/enhanced-animations';
import LanguagesKnown from '@/components/languages';

export default function Portfolio() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='min-h-screen bg-black text-white'>
			<ScrollProgress />
			<FloatingElements />
			<Navigation />
			<main className='relative'>
				<Hero />
				<About />
				<TechStack />
				<Projects />
				<Honors />
				<LanguagesKnown />
				<Contact />
			</main>
		</div>
	);
}
