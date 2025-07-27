"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Algorithmic Trading Platform",
      description:
        "A comprehensive trading platform with real-time market data, backtesting capabilities, and automated strategy execution. Features include risk management, portfolio optimization, and performance analytics.",
      tech: ["React", "Node.js", "Python", "Alpha Vantage API"],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Stock Market Analytics Dashboard",
      description:
        "Real-time stock market dashboard with advanced charting, technical indicators, and sentiment analysis. Includes portfolio tracking, watchlist management, and automated alerts for price movements.",
      tech: ["Next.js", "TypeScript", "TradingView", "WebSocket"],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-green-500 to-blue-600",
    },
    {
      title: "Portfolio Risk Management Tool",
      description:
        "Advanced portfolio management system with risk assessment, diversification analysis, and performance tracking. Features Monte Carlo simulations and Value at Risk calculations.",
      tech: ["React", "Python", "Pandas", "NumPy"],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-orange-500 to-blue-600",
    },
    {
      title: "Crypto Trading Bot",
      description:
        "Automated cryptocurrency trading bot with machine learning-based predictions, technical analysis, and risk management. Supports multiple exchanges and trading pairs.",
      tech: ["Python", "TensorFlow", "Binance API", "Redis"],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-purple-500 to-blue-600",
    },
  ];

  const handleProjectClick = (project) => {
    // You can customize this behavior - open live demo, github, or both
    if (project.live) {
      window.open(project.live, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="py-20 relative bg-[#1e3a8a]" // Added consistent background color
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => handleProjectClick(project)}
            >
              {/* Gradient overlay for visual appeal */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`}
              ></div>

              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
