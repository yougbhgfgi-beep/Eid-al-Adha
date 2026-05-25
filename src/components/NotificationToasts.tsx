import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Heart } from "lucide-react";

const MESSAGES = [
  "كل عام وأنت حب حياتي وحبيب قلبي الغالي! ❤️",
  "بَصْمَة تدعو الله أن يحفظك لها دائماً وأبداً سنداً وتاجاً 👑💞",
  "عيد أضحى مبارك يا حبيب الروح وعطر ذكرياتنا الوردية 🌸",
  "فرحة عيدي لا تكتمل إلا بقربك ونبضات حبنا الدافئة 💍🧸"
];

export default function NotificationToasts() {
  const [activeToast, setActiveToast] = useState<{ id: string; text: string } | null>(null);

  useEffect(() => {
    let index = 0;
    
    // Shows the first toast after a 6-second delay
    const initialDelay = setTimeout(() => {
      setActiveToast({ id: String(Date.now()), text: MESSAGES[index] });
    }, 6000);

    // Loop interval which updates toast message every 14 seconds
    const interval = setInterval(() => {
      index = (index + 1) % MESSAGES.length;
      setActiveToast({ id: String(Date.now()), text: MESSAGES[index] });
    }, 14000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm w-full px-4 md:px-0">
      <AnimatePresence>
        {activeToast && (
          <motion.div
            key={activeToast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="w-full relative overflow-hidden"
          >
            {/* Glowing Backdrop Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-300/10 rounded-2xl filter blur-sm" />

            {/* Notification Pane */}
            <div className="relative glass-card bg-[#240619]/95 border border-[#ffb7c5]/30 rounded-2xl p-4.5 shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex items-start gap-4 text-right">
              {/* Gold Bells Emblem */}
              <div className="w-10 h-10 rounded-xl bg-pink-400/10 border border-[#ffb7c5]/30 flex items-center justify-center text-[#ffb7c5] flex-shrink-0 relative overflow-hidden">
                <Heart className="w-5 h-5 animate-bounce text-[#e27d97] fill-[#e27d97]" />
                <motion.div
                  className="absolute inset-0 bg-pink-400/20"
                  animate={{ transform: ["translateX(-100%)", "translateX(100%)"] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                />
              </div>

              {/* Message Context */}
              <div className="flex-1 min-w-0 pr-1">
                <span className="block text-[10px] text-[#ffb7c5] font-black uppercase tracking-widest font-tajawal mb-0.5">
                  هَمْسة مِن بَصْمَة 💞
                </span>
                <p className="text-sm font-semibold text-white leading-relaxed font-sans">
                  {activeToast.text}
                </p>
              </div>

              {/* Manual Close Button */}
              <button
                onClick={() => setActiveToast(null)}
                className="text-pink-200/40 hover:text-[#ffb7c5] rounded-lg p-1 transition-colors flex-shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
