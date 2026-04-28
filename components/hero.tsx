'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Cloud, Sun, CloudRain, Thermometer } from 'lucide-react';

export default function Hero() {
	const fullname = 'Raghav';
	const subtitleText = 'Aspiring Data Scientist & Quantitative Analyst';

	const [greeting, setGreeting] = useState('');
	const [timeStatus, setTimeStatus] = useState('');
	const [weather, setWeather] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [typedSubtitle, setTypedSubtitle] = useState('');

	const getTimeStatus = () => {
		const now = new Date();
		const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
		const hour = istTime.getHours();

		const timeEmojis = {
			sleeping: ['😴', '💤', '🌙', '🛏️'],
			working: ['💻', '🔥', '⚡', '🚀'],
			coffee: ['☕', '🫖', '🍵', '🥐'],
			food: ['🍽️', '🥘', '🍚', '🫓'],
			evening: ['🌅', '🌇', '✨', '🎯'],
		};

		const randomEmoji = (category) =>
			timeEmojis[category][Math.floor(Math.random() * timeEmojis[category].length)];

		if (hour >= 22 || hour < 7) {
			return `${randomEmoji(
				'sleeping',
			)} ${fullname} is likely sleep-coding or dreaming of semicolons`;
		}
		if (hour >= 7 && hour < 10) {
			return `${randomEmoji(
				'coffee',
			)} Morning fuel detected — ${fullname} is booting up with caffeine`;
		}
		if (hour >= 10 && hour < 13) {
			return `${randomEmoji(
				'working',
			)} Focus mode: ON. ${fullname} is grinding through code`;
		}
		if (hour >= 13 && hour < 15) {
			return `${randomEmoji(
				'food',
			)} It's lunch o'clock! ${fullname} is probably devouring something delicious`;
		}
		if (hour >= 15 && hour < 18) {
			return `${randomEmoji(
				'working',
			)} Afternoon hustle — ${fullname} is not slowing down`;
		}
		if (hour >= 18 && hour < 22) {
			return `${randomEmoji(
				'evening',
			)} Golden hour coding – ${fullname} might be fixing bugs or making dinner`;
		}
		return `${randomEmoji(
			'working',
		)} ${fullname} is probably doing something awesome right now!`;
	};

	const getWeatherMessage = (weatherData) => {
		if (!weatherData)
			return {
				message: 'Loading weather magic... 🌟',
				icon: <Sparkles className='w-5 h-5' />,
			};

		const temp = Math.round(weatherData.temperature);
		const humidity = weatherData.humidity;
		const code = weatherData.weathercode;

		const condition =
			code === 0
				? 'clear'
				: code <= 3
					? 'clouds'
					: code >= 45 && code <= 48
						? 'mist'
						: code >= 51 && code <= 67
							? 'rain'
							: code >= 71 && code <= 86
								? 'snow'
								: code >= 95 && code <= 99
									? 'thunderstorm'
									: 'clear';

		const messages = {
			clear: {
				message: `It's a lovely ${temp}°C in Chennai! ${fullname} is probably coding under the clear skies ☀️`,
				icon: <Sun className='w-5 h-5 text-yellow-400' />,
			},
			clouds: {
				message: `Partly cloudy ${temp}°C in Chennai. Perfect for sipping chai & fixing bugs ☁️`,
				icon: <Cloud className='w-5 h-5 text-gray-300' />,
			},
			rain: {
				message: `Rainy ${temp}°C in Chennai. ${fullname} might be debugging with an umbrella ☔`,
				icon: <CloudRain className='w-5 h-5 text-blue-400' />,
			},
			thunderstorm: {
				message: `Thunder and lightning outside! Inside, ${fullname} is wrestling bugs ⚡`,
				icon: <CloudRain className='w-5 h-5 text-purple-500' />,
			},
			snow: {
				message: `Snow in Chennai? ${fullname} must be dreaming 💭 (${temp}°C)`,
				icon: <Cloud className='w-5 h-5 text-blue-200' />,
			},
			mist: {
				message: `Misty ${temp}°C in Chennai. ${fullname}'s logic is clearer than the air 🌫️`,
				icon: <Cloud className='w-5 h-5 text-gray-400' />,
			},
		};

		if (temp > 35) {
			return {
				message: `🔥 ${temp}°C in Chennai! ${fullname} is definitely coding from an AC cave`,
				icon: <Thermometer className='w-5 h-5 text-red-500' />,
			};
		}
		if (humidity > 80) {
			return {
				message: `${temp}°C & ${humidity}% humidity – ${fullname}'s laptop might need a towel 💧`,
				icon: <Cloud className='w-5 h-5 text-blue-300' />,
			};
		}

		return messages[condition] || messages.clear;
	};

	const getUserTimeMessage = () => {
		const now = new Date();
		const hour = now.getHours();
		const minute = now.getMinutes().toString().padStart(2, '0');

		if (hour >= 0 && hour < 5)
			return `🦇 It's ${hour}:${minute} – You're a Batman, stalking ${fullname}'s site at night!`;
		if (hour >= 5 && hour < 8)
			return `🌄 It's ${hour}:${minute} – Up early? You might just outwork ${fullname}`;
		if (hour >= 8 && hour < 12)
			return `☕ It's ${hour}:${minute} – Caffeine and curiosity brought you here?`;
		if (hour >= 12 && hour < 17)
			return `🌞 ${hour}:${minute} – Afternoon scroll through ${fullname}'s digital den`;
		if (hour >= 17 && hour < 22)
			return `🌆 ${hour}:${minute} – Evening vibes & good decisions visiting this page`;
		return `🌙 ${hour}:${minute} – Night owl detected! Thanks for dropping by 🦉`;
	};

	useEffect(() => {
		const hour = new Date().getHours();
		setGreeting(
			hour < 12
				? 'Good morning 🌅'
				: hour < 17
					? 'Good afternoon ☀️'
					: 'Good evening 🌙',
		);

		setTimeStatus(getTimeStatus());

		let currentIndex = 0;
		setTypedSubtitle('');
		const typingInterval = window.setInterval(() => {
			currentIndex += 1;
			setTypedSubtitle(subtitleText.slice(0, currentIndex));

			if (currentIndex >= subtitleText.length) {
				window.clearInterval(typingInterval);
			}
		}, 45);

		const fetchWeather = async () => {
			try {
				const res = await fetch(
					'https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia%2FKolkata',
				);
				const data = await res.json();
				if (data.current) {
					setWeather({
						temperature: data.current.temperature_2m,
						humidity: data.current.relative_humidity_2m,
						weathercode: data.current.weather_code,
					});
				}
			} catch {
				setWeather({ temperature: 30, humidity: 82, weathercode: 2 });
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();

		return () => {
			window.clearInterval(typingInterval);
		};
	}, []);

	const scrollToAbout = () => {
		document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
	};

	const weatherInfo = getWeatherMessage(weather);

	return (
		<section
			id='hero'
			className='min-h-screen relative overflow-hidden pt-28 pb-16'
		>
			<div className='absolute inset-0'>
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className='absolute w-2 h-2 bg-white/20 rounded-full'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animation: `floating ${5 + Math.random() * 5}s linear infinite`,
							animationDelay: `${i * 0.1}s`,
						}}
					/>
				))}
			</div>

			<div className='container mx-auto px-6 text-center relative z-10'>
				<div className='space-y-6'>
					{/* Combined Widget */}
					<div>
						<div className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 text-white/90 border border-white/20 text-sm'>
							{loading ? (
								<>
									<div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
									<span>Loading weather & vibes...</span>
								</>
							) : (
								<>
									{weatherInfo.icon}
									<span>
										{timeStatus} Also, {weatherInfo.message}
									</span>
								</>
							)}
						</div>
					</div>

					{/* Visitor Time Widget */}
					<div>
						<div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 border border-white/20 text-sm'>
							🕒 {getUserTimeMessage()}
						</div>
					</div>

					<div className='inline-block animate-bounce'>
						<Sparkles className='w-12 h-12 text-white mx-auto mb-4' />
					</div>

					<div className='inline-block text-6xl mb-4 animate-pulse'>👋</div>

					<p className='text-lg text-white/60 animate-fade-in'>{greeting}</p>

					<h1 className='text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in'>
						{fullname}
						<br />
						<span className='text-white/80'>Mrituanjaya</span>
					</h1>

					<p className='text-xl md:text-2xl text-white/80 max-w-2xl mx-auto animate-fade-in'>
						{typedSubtitle}
						<span className='ml-1 inline-block animate-pulse'>|</span>
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
						<button
							className='bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg'
							onClick={scrollToAbout}
						>
							Explore My Work
						</button>
						<button
							className='border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent transition-all duration-300 hover:scale-105'
							onClick={() =>
								document
									.getElementById('contact')
									?.scrollIntoView({ behavior: 'smooth' })
							}
						>
							Get In Touch
						</button>
					</div>

					<div className='mt-12 animate-bounce'>
						<ChevronDown className='w-8 h-8 text-white/60 mx-auto' />
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				@keyframes floating {
					0% {
						transform: translate(0, 0);
					}
					25% {
						transform: translate(10px, 10px);
					}
					50% {
						transform: translate(-10px, 10px);
					}
					75% {
						transform: translate(-10px, -10px);
					}
					100% {
						transform: translate(0, 0);
					}
				}
				.animate-fade-in {
					animation: fade-in 0.8s ease-out forwards;
				}
			`}</style>
		</section>
	);
}
