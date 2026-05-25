import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface LoaderProps {
  key?: string;
  onComplete: () => void;
}

const MESSAGES = [
  "💝 جارِ تجهيز مفاجأة العيد من بصمة...",
  "✨ نجمع لك أصدق نبضات الحب والتهاني...",
  "عيد أضحى مبارك يا حبيب قلبي ❤️",
  "🌹 ننسج أرقى اللحظات الرومانسية..."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 35); // Takes about 3.5 seconds to reach 100

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Switch loading message
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 1100);

    return () => clearInterval(msgInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#170410] text-white select-none">
      {/* Background Decorative Sparkles */}
      <div className="absolute inset-0 bg-radial-at-c from-[#7a1835]/40 via-[#170410] to-[#0a0006] opacity-90" />
      
      {/* Sparkly grid effect with pink opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(226,125,151,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(226,125,151,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative z-10 flex flex-col items-center max-w-md px-6 text-center"
      >
        {/* Animated Heart / Moon combination */}
        <div className="relative mb-10 w-36 h-36 flex items-center justify-center">
          {/* Pulsing Outer Shimmer Glow */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-radial-gradient from-[#ffb7c5]/35 to-transparent blur-[32px]"
          />

          {/* Glowing Romantic Heart and Crescent */}
          <motion.div
            className="text-6xl filter drop-shadow-[0_4px_15px_rgba(226,125,151,0.8)] flex items-center justify-center"
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
              y: [0, -4, 4, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
          >
            ❤️
          </motion.div>

          {/* Floating sparkling star */}
          <motion.div
            animate={{ scale: [0.7, 1.3, 0.7], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="absolute top-4 right-4 text-[#ffb7c5]"
          >
            <Sparkles className="w-6 h-6 animate-pulse" />
          </motion.div>
        </div>

        {/* Brand Name Title */}
        <h2 className="mb-4 text-2xl font-black tracking-widest text-[#ffb7c5] font-sans select-none">
          بَصْمَة الحُبّ 💝
        </h2>

        {/* Dynamic loading messages */}
        <div className="h-10 mb-8 overflow-hidden relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute text-pink-100 font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              {MESSAGES[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Sleek Golden-Pink Loading Bar */}
        <div className="w-64 h-1.5 bg-[#401025] rounded-full overflow-hidden border border-[#ffb7c5]/25 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#e27d97] via-[#ffb7c5] to-[#ffe4e1]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Progress percent display */}
        <span className="text-[#ffb7c5] font-mono font-bold text-sm mt-3 inline-block">
          {progress}%
        </span>
      </motion.div>
    </div>
  );
}
