import { Spotify } from "react-spotify-embed";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function SpotifyListening() {
  const playlists = [
    {
      title: "Coding Concentration",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX9sIqqvKsjG8",
      description: "For when the bugs won't debug themselves",
      mood: "Focus",
    },
    {
      title: "Indie Chill Vibes",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX2Nc3B70tvx0",
      description: "Pretending to be cooler than I actually am",
      mood: "Chill",
    },
    {
      title: "Throwback Jams",
      url: "https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l",
      description: "Reliving my questionable music taste from 2012",
      mood: "Nostalgic",
    },
    {
      title: "Movie Soundtracks",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX6GwdWRQMQpq",
      description: "Because life needs a dramatic soundtrack",
      mood: "Epic",
    },
    {
      title: "Coffee House Jazz",
      url: "https://open.spotify.com/playlist/37i9dQZF1DWVqfgj8NZEp1",
      description: "Pretending I'm in a Parisian café",
      mood: "Sophisticated",
    },
    {
      title: "Workout Energy",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP",
      description: "For the 5 minutes I actually exercise",
      mood: "Energetic",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#1DB954] to-[#191414] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              He May Be Listening To...
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Or more accurately, what Spotify thinks I should be listening to
              based on my questionable choices
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {playlists.map((playlist, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex flex-col gap-4"
            >
              <div className="relative">
                <Spotify wide link={playlist.url} />
                <div className="absolute -top-3 -right-2">
                  <Badge variant="outline" className="bg-white text-[#1DB954]">
                    {playlist.mood} Mode
                  </Badge>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold">{playlist.title}</h3>
                <p className="text-sm text-gray-300">{playlist.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-300 text-sm"
        >
          <p>Disclaimer: My "On Repeat" playlist is 90% the same 3 songs</p>
        </motion.div>
      </div>
    </section>
  );
}
