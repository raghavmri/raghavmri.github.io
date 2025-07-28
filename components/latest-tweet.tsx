"use client";

import { Tweet } from "react-tweet";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, Sparkles, Twitter, ChevronDown } from "lucide-react";

const tweets = [
  "1865637106980458832",
  "1897619305656975737",
  "1942604150556241973",
  "1751606839937204371",
];

export default function TopTweets() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <section className="my-6 p-6 bg-[#1e3a8a] text-white rounded-xl shadow-lg max-w-6xl mx-auto">
      <div className="flex items-center justify-between m-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Twitter className="w-6 h-6" />
          Top Tweets
        </h2>
        <div className="flex items-center gap-2 text-blue-200">
          <Sparkles className="w-4 h-4" />
          <span>Trending now</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tweets.slice(0, 2).map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm"
          >
            <Tweet id={id} />
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full mx-auto transition-all border border-white/20"
      >
        <Eye className="w-5 h-5" />
        <span>View All Tweets</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-3xl p-8 w-full max-w-4xl h-[90vh] max-h-[90vh] overflow-y-auto relative shadow-2xl border border-white/10"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Custom scrollbar styling */}
              <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: rgba(255, 255, 255, 0.3);
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.5);
                }
              `}</style>

              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8 pt-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center justify-center bg-white/10 p-3 rounded-full mb-4"
                >
                  <Twitter className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Featured Tweets</h3>
                <p className="text-blue-100 max-w-md mx-auto">
                  Check out the most engaging tweets from our community
                </p>
              </div>

              <div className="space-y-8 pb-8 custom-scrollbar">
                {tweets.map((id, index) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm border border-white/5 pt-6 pb-6"
                  >
                    <div className="flex items-center gap-2 px-6 pb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 font-bold">
                        {index + 1}
                      </div>
                      <div className="text-sm font-medium">
                        {index === 0
                          ? "Most Popular"
                          : index === 1
                          ? "Trending Now"
                          : "Top Engagement"}
                      </div>
                    </div>
                    <div className="px-4">
                      <Tweet id={id} />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-4 text-center text-blue-100 text-sm pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>Scroll to view more tweets</p>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="inline-block mt-2"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
