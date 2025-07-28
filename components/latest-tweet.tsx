"use client";

import { Tweet } from "react-tweet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";

const tweets = [
  "1865637106980458832",
  "1942604150556241973",
  "1751606839937204371",
];

export default function TopTweets() {
  const [open, setOpen] = useState(false);

  return (
    <section className="p-6 bg-[#1e3a8a] text-white rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🔥 Top Tweets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tweets.slice(0, 2).map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <Tweet id={id} />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 mt-6 text-sm font-medium text-white hover:text-blue-300 transition"
      >
        <Eye className="w-4 h-4" />
        See More Tweets
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-5xl h-[85vh] max-h-[85vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-semibold mb-6 text-[#1e3a8a]">
                📋 All Top Tweets
              </h3>
              <div className="space-y-10">
                {tweets.map((id, index) => (
                  <div key={id}>
                    <div className="text-[#1e3a8a] font-semibold mb-2">
                      #{index + 1}
                    </div>
                    <Tweet id={id} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
