import { motion } from "motion/react";
import { Sparkles, ArrowDown } from "lucide-react";

interface HeroProps {
  onScrollNext: () => void;
}

export default function Hero({ onScrollNext }: HeroProps) {
  // Use the beautifully generated romantic background
  const bgImage = "assets/images/eid_romantic_bg_1779728906976.png";

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden py-12 px-4 selection:bg-[#ffb7c5]/35">
      {/* Background Image Layer with Zoom/Ease Entrance */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${bgImage}")` }}
      />

      {/* Radial Dark overlay with a touch of deep romantic blush */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#170410]/75 to-[#0b0006] pointer-events-none" />

      {/* Floating hearts and stars particle overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-sm font-sans"
            style={{
              top: Math.random() * 85 + 5 + "%",
              left: Math.random() * 90 + 5 + "%",
            }}
            animate={{
              opacity: [0.15, 0.85, 0.15],
              scale: [0.8, 1.3, 0.8],
              y: [0, Math.random() * -45 - 15, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "✨" : "💖"}
          </motion.div>
        ))}
        
        {/* Animated Hanging Lantern on the left with a rose ribbon */}
        <motion.div 
          className="absolute left-[8%] top-0 hidden md:block w-16"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-36 bg-[#ffb7c5]/60 mx-auto" />
          <div className="w-10 h-10 rounded-full border border-[#ffb7c5]/40 bg-pink-500/10 flex items-center justify-center shadow-[0_0_12px_rgba(255,182,193,0.4)] mx-auto">
            <span className="text-pink-300 text-xs">💝</span>
          </div>
        </motion.div>

        {/* Animated Hanging Lantern on the right */}
        <motion.div 
          className="absolute right-[8%] top-0 hidden md:block w-16"
          animate={{ rotate: [2, -2, 2] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-48 bg-[#ffb7c5]/60 mx-auto" />
          <div className="w-10 h-10 rounded-full border border-[#ffb7c5]/40 bg-pink-500/10 flex items-center justify-center shadow-[0_0_12px_rgba(255,182,193,0.4)] mx-auto">
            <span className="text-pink-300 text-xs text-center leading-none">✨</span>
          </div>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Center Cinematic Typography & Greetings */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center items-center">
        {/* Sparkle emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 px-5 py-2 rounded-full border border-[#ffb7c5]/30 bg-white/5 backdrop-blur-md flex items-center gap-2"
        >
          <span className="text-[#ffb7c5] text-xs">💖</span>
          <span className="text-[#ffe4e1] font-bold tracking-widest text-xs md:text-sm font-tajawal">
            إِلَىٰ حَبِيبِ عُمْرِي وَنَبْضِ قَلْبِي
          </span>
          <span className="text-[#ffb7c5] text-xs">💖</span>
        </motion.div>

        {/* Magnificent Main Title with Gold/Pink Glow & Entry Effect */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl font-black text-center tracking-tight leading-none mb-6 font-sans text-white filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          <span className="block mt-2 bg-gradient-to-r from-pink-200 via-pink-400 to-[#e27d97] bg-clip-text text-transparent filter drop-shadow-[0_4px_15px_rgba(226,125,151,0.5)]">
            عِيدُنَا مَعاً أَجْمَل ❤️
          </span>
        </motion.h1>

        {/* Elegant Subtitle with line dividers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          className="flex flex-col items-center gap-2 max-w-2xl mx-auto mb-8 px-4"
        >
          <p className="text-pink-100 text-lg md:text-2xl font-bold leading-relaxed font-tajawal text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            بكل نبضة حب وأصدق دقة قلب، حبيبتك "بصْمة" تهنئك بقدوم العيد السعيد يا كل أعيادي.
          </p>
        </motion.div>

        {/* Quick Decorative Element: Arabian arch subtle shape */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-[#ffb7c5] opacity-80 flex gap-2 justify-center"
        >
          <span className="text-xl">♥</span>
          <span className="text-xl">🧸</span>
          <span className="text-xl">♥</span>
        </motion.div>
      </div>

      {/* Scroll Down Hint Button */}
      <motion.button
        id="scroll-to-celebrate"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        onClick={onScrollNext}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer outline-none group text-[#ffb7c5] hover:text-white"
      >
        <span className="text-xs tracking-wider opacity-95 font-bold uppercase font-tajawal">
          افتح صندوق مفاجأة حبيبتك
        </span>
        <div className="p-3.5 rounded-full border border-pink-500/20 bg-[#401025]/50 backdrop-blur-md group-hover:border-[#ffb7c5]/50 group-hover:bg-[#401025]/80 transition-all duration-300 shadow-[0_0_15px_rgba(226,125,151,0.2)]">
          <ArrowDown className="w-5 h-5 text-[#ffb7c5] group-hover:translate-y-0.5 transition-transform duration-300" />
        </div>
      </motion.button>
    </section>
  );
}
