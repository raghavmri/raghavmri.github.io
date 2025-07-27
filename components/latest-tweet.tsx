"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Twitter, Heart, MessageCircle, Repeat2 } from "lucide-react";
import Image from "next/image";

export default function LatestTweet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [tweet, setTweet] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Mock tweet data (replace with actual Twitter API integration)
  useEffect(() => {
    const mockTweet = {
      text: "Just backtested a new momentum strategy and the results are promising! 📈 The combination of RSI divergence and volume analysis is showing consistent alpha. Time to paper trade this for a month before going live. #Trading #FinTech #AlgoTrading",
      created_at: "2024-01-15T10:30:00Z",
      public_metrics: {
        like_count: 89,
        retweet_count: 23,
        reply_count: 15,
      },
      author: {
        name: "Raghav Mrituanjaya",
        username: "raghav_trader",
        profile_image_url: "/RaghavPic.JPG",
      },
    };

    setTimeout(() => {
      setTweet(mockTweet);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Tweet
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg">
            Fresh thoughts from my Twitter feed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {loading ? (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="animate-pulse">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded w-32"></div>
                    <div className="h-3 bg-white/20 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/20 rounded"></div>
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ) : tweet ? (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-start space-x-4">
                <Image
                  src={tweet.author.profile_image_url || "/placeholder.svg"}
                  alt={tweet.author.name}
                  width={40}
                  height={40}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-white">
                      {tweet.author.name}
                    </h3>
                    <span className="text-white/60 text-sm">
                      @{tweet.author.username}
                    </span>
                    <span className="text-white/40 text-sm">·</span>
                    <span className="text-white/60 text-sm">
                      {formatDate(tweet.created_at)}
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {tweet.text}
                  </p>

                  <div className="flex items-center space-x-6 text-white/60">
                    <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">
                        {tweet.public_metrics.reply_count}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-green-400 transition-colors cursor-pointer">
                      <Repeat2 className="w-4 h-4" />
                      <span className="text-sm">
                        {tweet.public_metrics.retweet_count}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">
                        {tweet.public_metrics.like_count}
                      </span>
                    </div>
                  </div>
                </div>
                <Twitter className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <Twitter className="w-12 h-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/60">Unable to load latest tweet</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
