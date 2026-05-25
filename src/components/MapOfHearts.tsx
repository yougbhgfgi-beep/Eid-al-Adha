import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Heart, Star, BrainCircuit } from "lucide-react";

export default function MapOfHearts() {
  const [pulseSpeed, setPulseSpeed] = useState(1);
  const [syncedBeats, setSyncedBeats] = useState(1447);

  useEffect(() => {
    // Keep increasing beats dynamically representing shared heartbeats
    const interval = setInterval(() => {
      setSyncedBeats((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center select-none" id="map-of-hearts-section">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-[#ffb7c5] text-sm font-tajawal">
          <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
          <span>خريطة العِشق وجغرافية الوفاء</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-[#ffb7c5] bg-clip-text text-transparent font-sans">
          نبضٌ متّصل بين العقل والقلب 🗺️❤️
        </h3>
        <p className="text-pink-200/60 mt-2 max-w-xl mx-auto font-tajawal text-base">
          تأمل الرابط الأزلي المضيء الذي يجمع روحينا معًا.. حيثما كنت وحيثما حللت، يظل قلبي وعقلي معقودين بك
        </p>
      </motion.div>

      {/* Map Board */}
      <div className="relative overflow-hidden glass-card bg-[#1c0211]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-[0_24px_50px_rgba(0,0,0,0.6)] flex flex-col items-center">
        {/* Decorative corner carvings */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-pink-400/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-pink-400/20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-pink-400/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-pink-400/20 pointer-events-none" />

        {/* Cairo vs Giza Interactive Arena */}
        <div className="relative w-full max-w-3xl min-h-[460px] flex flex-col justify-between items-center bg-black/40 rounded-2xl border border-white/5 p-6 md:p-10 md:py-16 overflow-hidden">
          {/* Subtle starry background inside the map box */}
          <div className="absolute inset-0 bg-[#16020c]/60 pointer-events-none opacity-40" />

          {/* Cairo Node (Top North) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-full max-w-md bg-gradient-to-l from-pink-900/40 to-[#240619]/90 border border-pink-400/30 p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-4 text-right cursor-pointer group"
          >
            {/* Pulsative Brain Indicator representing Cairo */}
            <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-pink-500/10 border border-pink-200/35 flex items-center justify-center text-[#ffb7c5] shadow-[0_0_20px_rgba(239,71,111,0.25)]">
              <BrainCircuit className="w-8 h-8 text-pink-300 animate-pulse" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full border-2 border-pink-400"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between sm:justify-start gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ffb7c5] font-black font-tajawal">مستقبلنا المشترك</span>
                <span className="text-xl">🧠📍</span>
              </div>
              <h4 className="text-white text-xl font-extrabold font-sans">
                محافظة القاهرة
              </h4>
              <p className="text-pink-100 text-sm leading-relaxed mt-1 font-tajawal font-medium">
                "محافظة فيها عقلك ومستقبلك.. نخطط فيها لأحلام حياتنا القادمة معاً بخطوات ثابتة وثقة في فضل الله."
              </p>
            </div>
          </motion.div>

          {/* Glowing Connecting Pulse Wire representing their spiritual bridge */}
          <div className="relative w-2 bg-gradient-to-b from-[#ffb7c5] via-pink-500 to-[#e27d97] h-28 md:h-36 flex items-center justify-center my-4 md:my-0">
            {/* Moving love sparks traveling along the axis */}
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: pulseSpeed, ease: "linear" }}
              className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#ffb7c5] flex items-center justify-center"
            >
              <Heart className="w-2.5 h-2.5 text-pink-600 fill-current" />
            </motion.div>
            
            {/* Additional sparkle lines radiating ambient love */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb7c5]/30 to-transparent blur-md" />
          </div>

          {/* Giza Node (Bottom South) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-full max-w-md bg-gradient-to-l from-red-950/40 to-[#240619]/90 border border-pink-400/30 p-5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-4 text-right cursor-pointer group"
          >
            {/* Pulsative Heart Indicator representing Giza */}
            <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-red-500/10 border border-pink-200/35 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,71,111,0.25)]">
              <Heart className="w-8 h-8 text-pink-300 fill-current animate-bounce" />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute inset-0 rounded-full border-2 border-pink-400"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between sm:justify-start gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-widest text-[#ffb7c5] font-black font-tajawal font-bold">ملجأ الروح والأهل</span>
                <span className="text-xl">❤️</span>
              </div>
              <h4 className="text-white text-xl font-extrabold font-sans">
                محافظة الجيزة
              </h4>
              <p className="text-pink-100 text-sm leading-relaxed mt-1 font-tajawal font-medium">
                "ومحافظة فيها قلبك وأهلك.. ينبوع الدفء والأمان، ومستقر الحب الصادق الطاهر الذي نبت بين ضلوعي."
              </p>
            </div>
          </motion.div>
        </div>

        <p className="text-xs text-pink-200/40 text-center font-tajawal font-bold mt-6 leading-relaxed">
          حتى وإن كنا في محافظتين، عقلنا واحد، مستقبلنا واحد، وقلبنا يتشارك نفس النبضات الوردية للأبد
        </p>
      </div>
    </div>
  );
}
