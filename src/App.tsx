import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import GreetingEnvelope from "./components/GreetingEnvelope";
import MapOfHearts from "./components/MapOfHearts";
import EidLambBlessing from "./components/EidLambBlessing";
import Countdown from "./components/Countdown";
import MessageSection from "./components/MessageSection";
import Gallery from "./components/Gallery";
import AudioSection from "./components/AudioSection";
import InteractiveSurprise from "./components/InteractiveSurprise";
import MazeGame from "./components/MazeGame";
import LuxuryGallery from "./components/LuxuryGallery";
import Footer from "./components/Footer";
import NotificationToasts from "./components/NotificationToasts";
import PasscodeScreen from "./components/PasscodeScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem("app_unlocked") === "true";
  });
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("✅ App loaded successfully");
  }, []);

  const handleScrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUnlock = () => {
    sessionStorage.setItem("app_unlocked", "true");
    setIsUnlocked(true);
  };

  return (
    <div className="relative overflow-x-hidden bg-[#170410] text-[#fff0f5] scroll-smooth font-sans min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader-screen" onComplete={() => setIsLoading(false)} />
        ) : !isUnlocked ? (
          <PasscodeScreen onUnlock={handleUnlock} />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Background Sound Notifications Loop */}
            <NotificationToasts />

            {/* Background Ambient Glowing circles for Frosted Glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#e27d97] opacity-15 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] bg-[#7a1835] opacity-25 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Section 1 & 2: Main Hero with stars background */}
            <Hero onScrollNext={handleScrollToContent} />

            {/* Main scroll-target wrapper */}
            <div ref={mainContentRef} className="relative z-10 w-full flex flex-col gap-12 bg-radial-at-t from-[#7a1835]/25 via-[#170410] to-[#0f010a]">
              {/* Stars Overlay across the main scroll content */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,125,151,0.06)_0,transparent_75%)] pointer-events-none" />

              {/* Section 3: Luxury envelope open msg */}
              <GreetingEnvelope />

              {/* Section 4: Map of Hearts connecting Cairo & Giza */}
              <MapOfHearts />

              {/* Section 5: Eid Lamb Slaughter Ceremony with Custom Eidia & Gilded Text */}
              <EidLambBlessing />

              {/* Section 6: Countdown timer to Eid al-Adha */}
              <Countdown />

              {/* Section 7: Warm spiritual greetings of silatrahim */}
              <MessageSection />

              {/* Section 8: Polaroid Polaroid cards gallery with sweet hover */}
              <Gallery />

              {/* Section 9: Highly optimized Video Frame & custom audio player */}
              <AudioSection />

              {/* Section 10: Surprising glowing confetti launcher */}
              <InteractiveSurprise />

              {/* Section 11: Maze game of love */}
              <MazeGame />

              {/* Section 12: Luxury romantic gallery */}
              <LuxuryGallery />

              {/* Section 13: Ultimate Grand Footer with final wishes */}
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
