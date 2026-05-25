import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Gift, Smile } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
  shape: "circle" | "star" | "moon" | "strip";
  delay: number;
}

export default function InteractiveSurprise() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Spark beautiful customized Pink, Rose & Gold Hearts Celebration
  const triggerCelebration = () => {
    setShowModal(true);
    
    const colors = ["#ffb7c5", "#e27d97", "#ff4d6d", "#ff758f", "#ff85a1", "#ffffff"];
    const shapes: ("circle" | "star" | "moon" | "strip")[] = ["circle", "star", "moon", "strip"];
    
    const newParticles: Particle[] = Array.from({ length: 80 }).map((_, i) => {
      return {
        id: Date.now() + i,
        x: Math.random() * 100, // percentage from left
        y: Math.random() * -45 - 10, // percentage above viewport
        rotate: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        delay: Math.random() * 0.8
      };
    });

    setParticles(newParticles);

    // Clear particle list after 7 seconds to keep DOM light and performant
    setTimeout(() => {
      setParticles([]);
    }, 7000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center relative select-none" id="interactive-surprise">
      {/* Absolute Confetti Spawn Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        <AnimatePresence>
          {particles.map((p) => {
            const shapeSymbol = () => {
              if (p.shape === "moon") return "💖";
              if (p.shape === "star") return "🎈";
              if (p.shape === "strip") return "✨";
              return "🧸";
            };

            return (
              <motion.div
                key={p.id}
                initial={{ 
                  left: `${p.x}%`, 
                  top: "-50px", 
                  opacity: 0,
                  rotate: 0,
                  scale: 0.6 
                }}
                animate={{ 
                  top: "120%", 
                  opacity: [0, 1, 1, 0],
                  rotate: p.rotate + 720,
                  scale: [0.6, 1.1, 0.9, 0.7]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: Math.random() * 3 + 2.5, 
                  delay: p.delay,
                  ease: "easeOut"
                }}
                className="absolute text-lg select-none"
                style={{ color: p.color }}
              >
                {shapeSymbol()}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card bg-gradient-to-t from-[#260517] via-[#240619]/90 to-[#170410] border border-[#ffb7c5]/30 rounded-3xl p-10 md:p-14 shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col items-center justify-center max-w-2xl mx-auto"
      >
        {/* Ring animations in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#ffb7c5]/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="w-16 h-16 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/30 flex items-center justify-center text-[#ffb7c5] mb-6 shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]">
          <Gift className="w-8 h-8 text-[#ffb7c5] animate-pulse" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-sans">
          مُفَاجَأَةُ الْعِيدِ وَهَدِيَّةُ بَصْمَة 🎁💖
        </h3>
        <p className="text-sm text-pink-200/80 max-w-md mx-auto mb-8 font-tajawal leading-relaxed font-bold">
          انقر فوق الزر الوردي اللطيف أدناه لتبعث لمسات نبضات العيد والقلوب الرفرافة في أرجاء المكان تعبيراً عن حبها اللا نهائي لك!
        </p>

        {/* The Glistening Golden Trigger Button */}
        <motion.button
          onClick={triggerCelebration}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e27d97] via-[#ffb7c5] to-[#e27d97] border border-white/20 shadow-[0_6px_25px_rgba(226,125,151,0.45)] hover:shadow-[0_8px_30px_rgba(226,125,151,0.6)] text-black font-sans text-lg font-black tracking-wide transition-all cursor-pointer group shine-effect outline-none"
        >
          <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700 text-black" />
          <span>افتحي صندوق مفاجآت الحب يا حبيبي 🥰🎁</span>
        </motion.button>
      </motion.div>

      {/* Surprising Message Modal Card */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 select-none">
            {/* Dark glass backdrop layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Content box popup */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 70 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative w-full max-w-lg glass-card bg-[#240619]/95 border-2 border-[#ffb7c5] rounded-3xl p-8 md:p-10 text-center shadow-[0_24px_50px_rgba(0,0,0,0.8)] z-10"
            >
              <div className="absolute top-4 left-4 text-[#ffb7c5]/30 text-xl font-mono">💖</div>
              
              {/* Smiling heart icon */}
              <div className="w-16 h-16 rounded-full bg-pink-400/10 border border-[#ffb7c5]/40 flex items-center justify-center text-[#ffb7c5] mx-auto mb-6">
                <Smile className="w-9 h-9 text-[#ffb7c5]" />
              </div>

              {/* Message Header */}
              <span className="text-[#ffb7c5] font-black tracking-widest text-xs uppercase font-tajawal mb-1 block">
                مُهْدَاةٌ لِقَلْبِكَ الطَّاهِرِ مِن مَحْبُوبَتِك
              </span>
              <h4 className="text-2xl font-black text-white font-sans tracking-wide leading-tight mb-4">
                رسالة عهد من قلب حبيبتك بَصْمَة 🔐🥀
              </h4>

              {/* Heart Warming custom message */}
              <p className="text-pink-50 font-sans text-base sm:text-lg leading-relaxed mb-8 border-y border-[#ffb7c5]/15 py-5 font-bold">
                "حبيبي وسند عمري.. أعدك في هذا العيد المبارك أن أظل بصمتك الوفية المخلصة، التي تنبض بحبك وتصون عهدك وتدعمك في كل خطواتك. كل عام وأنت لي كل الحياة، وأسأل الله أن يديم وجودك تاجاً فوق رأسي."
              </p>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black font-black font-sans text-sm transition-all shadow-[0_5px_15px_rgba(226,125,151,0.3)] cursor-pointer outline-none"
              >
                آمين، أحبكِ يا أغلى ما أملك 💍❤️
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
