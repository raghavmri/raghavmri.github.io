import { useEffect, useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Cloud,
  Sun,
  CloudRain,
  Thermometer,
} from "lucide-react";

export default function Hero() {
  const [greeting, setGreeting] = useState("");
  const [timeStatus, setTimeStatus] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const getTimeStatus = () => {
    const now = new Date();
    const istTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    const hour = istTime.getHours();
    const minute = istTime.getMinutes();

    const timeEmojis = {
      sleeping: ["😴", "💤", "🌙", "🛏️"],
      working: ["💻", "🔥", "⚡", "🚀"],
      coffee: ["☕", "🫖", "☕", "🍵"],
      food: ["🍽️", "🥘", "🍚", "🫓"],
      evening: ["🌅", "🌇", "✨", "🎯"],
    };

    const randomEmoji = (category) =>
      timeEmojis[category][
        Math.floor(Math.random() * timeEmojis[category].length)
      ];

    if (hour >= 22 || hour < 7) {
      const sleepMessages = [
        `${randomEmoji(
          "sleeping"
        )} Raghav is probably dreaming about debugging code (or counting sheep in Python)`,
        `${randomEmoji("sleeping")} It's ${
          hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
        }:${minute.toString().padStart(2, "0")} ${
          hour >= 12 ? "AM" : "PM"
        } - Raghav might be having nightmares about merge conflicts`,
        `${randomEmoji(
          "sleeping"
        )} Shh! Raghav is likely sleeping... or coding in the dark like a true night owl`,
        `${randomEmoji(
          "sleeping"
        )} Late night vibes - Raghav is either sleeping or fixing "just one more bug"`,
        `${randomEmoji(
          "sleeping"
        )} Sweet dreams, Raghav! Hope you're not sleep-coding again`,
      ];
      return sleepMessages[Math.floor(Math.random() * sleepMessages.length)];
    }

    if (hour >= 7 && hour < 10) {
      const morningMessages = [
        `${randomEmoji(
          "coffee"
        )} Good morning! Raghav is probably on his 2nd cup of coffee already`,
        `${randomEmoji(
          "coffee"
        )} Rise and grind! Raghav might be debugging his morning routine`,
        `${randomEmoji(
          "coffee"
        )} Early bird gets the bug fixes! Raghav is likely caffeinated and ready`,
        `${randomEmoji(
          "coffee"
        )} Morning energy loading... Raghav.exe starting up with coffee.dll`,
      ];
      return morningMessages[
        Math.floor(Math.random() * morningMessages.length)
      ];
    }

    if (hour >= 10 && hour < 13) {
      const workMessages = [
        `${randomEmoji(
          "working"
        )} Peak productivity hours! Raghav is in the coding zone`,
        `${randomEmoji(
          "working"
        )} Morning hustle mode - Raghav is probably crushing some data analysis`,
        `${randomEmoji(
          "working"
        )} Focus time! Raghav might be turning coffee into code`,
        `${randomEmoji(
          "working"
        )} Work mode activated - Raghav is making spreadsheets cry tears of joy`,
      ];
      return workMessages[Math.floor(Math.random() * workMessages.length)];
    }

    if (hour >= 13 && hour < 15) {
      const lunchMessages = [
        `${randomEmoji(
          "food"
        )} Lunch break! Raghav is probably refueling with some delicious South Indian food`,
        `${randomEmoji(
          "food"
        )} Midday munchies - Raghav might be having dosa or his favorite meal`,
        `${randomEmoji(
          "food"
        )} Food.exe running - Raghav is taking a well-deserved lunch break`,
        `${randomEmoji(
          "food"
        )} Nutrition loading... Raghav is probably enjoying some home-cooked goodness`,
      ];
      return lunchMessages[Math.floor(Math.random() * lunchMessages.length)];
    }

    if (hour >= 15 && hour < 18) {
      const afternoonMessages = [
        `${randomEmoji(
          "working"
        )} Afternoon grind! Raghav is back to conquering data and spreadsheets`,
        `${randomEmoji(
          "working"
        )} Post-lunch productivity - Raghav might be in deep analysis mode`,
        `${randomEmoji(
          "coffee"
        )} Tea time thoughts - Raghav is probably solving complex problems`,
        `${randomEmoji(
          "working"
        )} Afternoon flow state - Raghav is making numbers dance`,
      ];
      return afternoonMessages[
        Math.floor(Math.random() * afternoonMessages.length)
      ];
    }

    if (hour >= 18 && hour < 22) {
      const eveningMessages = [
        `${randomEmoji(
          "evening"
        )} Evening wind-down - Raghav might be reflecting on the day's achievements`,
        `${randomEmoji(
          "evening"
        )} Golden hour vibes! Raghav is probably planning tomorrow's tasks`,
        `${randomEmoji(
          "evening"
        )} Sunset coding - Raghav might still be tweaking that one function`,
        `${randomEmoji(
          "evening"
        )} Evening energy - Raghav is either relaxing or having another eureka moment`,
      ];
      return eveningMessages[
        Math.floor(Math.random() * eveningMessages.length)
      ];
    }

    return `${randomEmoji(
      "working"
    )} Raghav is probably doing something awesome right now!`;
  };

  const getWeatherMessage = (weatherData) => {
    if (!weatherData)
      return {
        message: "Loading weather magic... 🌟",
        icon: <Sparkles className="w-5 h-5" />,
      };

    const temp = Math.round(weatherData.temperature);
    const humidity = weatherData.humidity;
    const weatherCode = weatherData.weathercode;

    // WMO Weather interpretation codes
    const getWeatherCondition = (code) => {
      if (code === 0) return "clear";
      if (code >= 1 && code <= 3) return "clouds";
      if (code >= 45 && code <= 48) return "mist";
      if (code >= 51 && code <= 67) return "rain";
      if (code >= 80 && code <= 82) return "rain";
      if (code >= 95 && code <= 99) return "thunderstorm";
      if (code >= 71 && code <= 86) return "snow";
      return "clear";
    };

    const condition = getWeatherCondition(weatherCode);

    const messages = {
      clear: {
        message: `It's a beautiful ${temp}°C in Chennai! Raghav is probably coding under the clear skies ☀️`,
        icon: <Sun className="w-5 h-5 text-yellow-500" />,
      },
      clouds: {
        message: `Partly cloudy at ${temp}°C in Chennai - perfect coding weather! Raghav might be sipping chai by the window ☁️`,
        icon: <Cloud className="w-5 h-5 text-gray-400" />,
      },
      rain: {
        message: `It's raining in Chennai and probably Raghav is searching for an umbrella! ☔ (${temp}°C)`,
        icon: <CloudRain className="w-5 h-5 text-blue-500" />,
      },
      thunderstorm: {
        message: `Thunderstorms in Chennai! Raghav might be debugging code while lightning debugs the sky ⚡ (${temp}°C)`,
        icon: <CloudRain className="w-5 h-5 text-purple-500" />,
      },
      snow: {
        message: `Wait... snow in Chennai?! Raghav must be dreaming of cooler places 🌨️ (Actually ${temp}°C)`,
        icon: <Cloud className="w-5 h-5 text-blue-300" />,
      },
      mist: {
        message: `Misty ${temp}°C in Chennai - Raghav's coding vision is as clear as the weather isn't! 🌫️`,
        icon: <Cloud className="w-5 h-5 text-gray-300" />,
      },
    };

    // Special conditions based on temperature and humidity
    if (temp > 35) {
      return {
        message: `Scorching ${temp}°C in Chennai! Raghav is definitely coding from an air-conditioned room 🔥`,
        icon: <Thermometer className="w-5 h-5 text-red-500" />,
      };
    }

    if (humidity > 80) {
      return {
        message: `${temp}°C and ${humidity}% humidity in Chennai - Raghav's laptop might need a towel! 💧`,
        icon: <Cloud className="w-5 h-5 text-blue-400" />,
      };
    }

    return messages[condition] || messages.clear;
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning 🌅");
    } else if (hour < 17) {
      setGreeting("Good afternoon ☀️");
    } else {
      setGreeting("Good evening 🌙");
    }

    // Set time-based status
    setTimeStatus(getTimeStatus());

    // Fetch weather from Open-Meteo API (free, no API key needed!)
    const fetchWeather = async () => {
      try {
        // Chennai coordinates: 13.0827°N 80.2707°E
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia%2FKolkata"
        );
        const data = await response.json();

        if (data.current) {
          setWeather({
            temperature: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            weathercode: data.current.weather_code,
          });
        }
      } catch (error) {
        console.error("Weather fetch failed:", error);
        // Fallback data if API fails
        setWeather({
          temperature: 30,
          humidity: 82,
          weathercode: 2, // Partly cloudy
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const weatherInfo = getWeatherMessage(weather);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e3a8a 50%, #1e3a8a 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floating ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Time Status Widget with increased padding */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-6">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-6 py-3 text-white/90 border border-purple-400/30">
              <span className="text-sm">{timeStatus}</span>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 border border-white/20">
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-sm">Getting Chennai weather...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {weatherInfo.icon}
                  <span className="text-sm">{weatherInfo.message}</span>
                </div>
              )}
            </div>
          </div>

          <div className="inline-block animate-bounce">
            <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          </div>

          <div className="inline-block text-6xl mb-4 animate-pulse">👋</div>

          {/* Greeting */}
          <p className="text-lg text-white/60 animate-fade-in">{greeting}</p>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            Raghav
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mrituanjaya
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto animate-fade-in">
            Data Analyst & Finance Enthusiast
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={scrollToAbout}
            >
              Explore My Work
            </button>
            <button
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </button>
          </div>

          {/* Moved ChevronDown here, below the buttons */}
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
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
