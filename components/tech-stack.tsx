"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    { name: "JavaScript", color: "bg-yellow-500", icon: "🟨" },
    { name: "TypeScript", color: "bg-blue-600", icon: "🔷" },
    { name: "React", color: "bg-cyan-500", icon: "⚛️" },
    { name: "Next.js", color: "bg-black", icon: "▲" },
    { name: "Node.js", color: "bg-green-600", icon: "🟢" },
    { name: "Python", color: "bg-blue-500", icon: "🐍" },
    { name: "Pandas", color: "bg-purple-600", icon: "🐼" },
    { name: "NumPy", color: "bg-blue-700", icon: "🔢" },
    { name: "TradingView", color: "bg-blue-500", icon: "📈" },
    { name: "Alpha Vantage", color: "bg-green-500", icon: "💹" },
    { name: "PostgreSQL", color: "bg-blue-700", icon: "🐘" },
    { name: "Docker", color: "bg-blue-600", icon: "🐳" },
  ]

  return (
    <section id="tech" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Technologies I use for development and financial analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <h3 className="text-white font-medium text-sm">{tech.name}</h3>
              <div
                className={`w-full h-1 ${tech.color} rounded-full mt-2 opacity-70 group-hover:opacity-100 transition-opacity`}
              ></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">Always learning and exploring new technologies! 🚀</p>
        </motion.div>
      </div>
    </section>
  )
}
