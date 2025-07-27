"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Algorithmic Trading Platform",
      description:
        "A comprehensive trading platform with real-time market data, backtesting capabilities, and automated strategy execution. Features include risk management, portfolio optimization, and performance analytics.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "Python", "Alpha Vantage API"],
      github: "https://github.com",
      live: "https://example.com",
      color: "from-blue-500 to-cyan-600",
    },
    // {
    //   title: "Stock Market Analytics Dashboard",
    //   description:
    //     "Real-time stock market dashboard with advanced charting, technical indicators, and sentiment analysis. Includes portfolio tracking, watchlist management, and automated alerts for price movements.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tech: ["Next.js", "TypeScript", "TradingView", "WebSocket"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   color: "from-green-500 to-blue-600",
    // },
    // {
    //   title: "Portfolio Risk Management Tool",
    //   description:
    //     "Advanced portfolio management system with risk assessment, diversification analysis, and performance tracking. Features Monte Carlo simulations and Value at Risk calculations.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tech: ["React", "Python", "Pandas", "NumPy"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   color: "from-orange-500 to-blue-600",
    // },
    // {
    //   title: "Crypto Trading Bot",
    //   description:
    //     "Automated cryptocurrency trading bot with machine learning-based predictions, technical analysis, and risk management. Supports multiple exchanges and trading pairs.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tech: ["Python", "TensorFlow", "Binance API", "Redis"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   color: "from-purple-500 to-blue-600",
    // },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 flex items-center space-x-2 bg-transparent"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
