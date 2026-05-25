import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showEnding, setShowEnding] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-gradient-to-t from-[#12010b] via-[#240619] to-[#170410] border-t border-[#ffb7c5]/15 pt-16 pb-8 px-4 select-none">
      
      {/* Decorative stars / lanterns background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#ffb7c5]/5 rounded-full blur-3xl p-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Emblem */}
        <div className="w-12 h-12 rounded-full border border-[#ffb7c5]/25 bg-[#ffb7c5]/5 flex items-center justify-center text-[#ffb7c5] mb-6 shadow-[0_0_15px_rgba(226,125,151,0.2)]">
          <Heart className="w-6 h-6 text-[#ffb7c5] fill-[#ffb7c5] animate-pulse" />
        </div>

        {/* Finale Segment Description */}
        <h4 className="text-xl md:text-2xl font-extrabold text-[#ffe4e1] mb-2 font-sans">
          تَقَبَّلَ اللَّهُ طَاعَاتِكُمْ وَأَدَامَ عِشْقَنَا هَنِيئاً ❤️
        </h4>
        <p className="text-xs text-pink-200/50 font-tajawal max-w-sm mx-auto mb-8 font-bold leading-relaxed">
          بكل غنج ورقة وبناتية مفرطة، صممت هذه المساحة الفخمة لتكون هدية معطرة من نبض حبيبتك بَصْمَة 🔐🌸
        </p>

        {/* Footer Button: "اضغط هنا 🌙" */}
        <div className="mb-12">
          <motion.button
            id="footer-secret-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              setShowEnding(true);
              setIsScrolling(true);
              setResetKey(prev => prev + 1);
            }}
            className="px-8 py-3.5 rounded-full bg-[#3d0822] hover:bg-[#ffb7c5] text-[#ffb7c5] hover:text-black border border-[#ffb7c5]/30 hover:border-[#ffb7c5] shadow-[0_4px_15px_rgba(0,0,0,0.4)] font-tajawal text-sm font-black tracking-wider transition-all cursor-pointer outline-none"
          >
            اضغط هنا لمشاهدة الفيلم التعريفي لقصة عشقنا 🎬💖
          </motion.button>

          {/* Majestic, Grand Immersion Finale Secret Overlay (Movie Credits style) */}
          <AnimatePresence>
            {showEnding && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden select-none">
                {/* Blur Backdrop layer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowEnding(false)}
                  className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
                />

                {/* Sparkling Firefly/Particles shower */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        opacity: 0, 
                        y: "110%", 
                        x: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.5 + 0.5
                      }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        y: "-10%"
                      }}
                      transition={{ 
                        duration: Math.random() * 8 + 6, 
                        repeat: Infinity,
                        delay: Math.random() * 4,
                        ease: "easeOut"
                      }}
                      className="absolute text-[#ffb7c5] text-xl"
                    >
                      {["💖", "✨", "🌸", "🎈", "💎"][Math.floor(Math.random() * 5)]}
                    </motion.div>
                  ))}
                </div>

                {/* Grand Cinematic Credits Container */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.85, opacity: 0, y: 30 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="relative w-full max-w-4xl h-[90vh] bg-gradient-to-b from-[#1a0110] via-[#050003] to-[#010001] border-2 border-[#ffb7c5] rounded-3xl p-6 md:p-10 text-center shadow-[0_24px_80px_rgba(226,125,151,0.6)] z-20 overflow-hidden flex flex-col justify-between"
                >
                  {/* Fine Gold Corner Highlights */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#ffb7c5]/35 pointer-events-none" />
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#ffb7c5]/35 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#ffb7c5]/35 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#ffb7c5]/35 pointer-events-none" />

                  {/* Top Control Bar */}
                  <div className="relative z-30 flex items-center justify-between p-2 pb-4 border-b border-[#ffb7c5]/15">
                    <button
                      onClick={() => setShowEnding(false)}
                      className="px-5 py-2.5 rounded-full bg-red-950/40 hover:bg-red-600 border border-red-500/35 text-red-200 hover:text-white font-tajawal text-xs font-black tracking-wide cursor-pointer transition-all flex items-center gap-1.5 shadow-md outline-none active:scale-95"
                    >
                      <span>رجوع للمعايدة 🚪🔙</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsScrolling(!isScrolling)}
                        className="px-4 py-2 rounded-full bg-[#ffb7c5]/10 hover:bg-[#ffb7c5]/25 border border-[#ffb7c5]/30 text-[#ffb7c5] font-tajawal text-[11px] font-bold cursor-pointer transition-all flex items-center gap-1 outline-none"
                      >
                        {isScrolling ? "⏸️ إيقاف مؤقت" : "▶️ تشغيل الحركة"}
                      </button>
                      <button
                        onClick={() => setResetKey(prev => prev + 1)}
                        className="px-4 py-2 rounded-full bg-[#ffb7c5]/10 hover:bg-[#ffb7c5]/25 border border-[#ffb7c5]/30 text-[#ffb7c5] font-tajawal text-[11px] font-bold cursor-pointer transition-all outline-none"
                      >
                        🔄 إعادة الفيلم
                      </button>
                    </div>
                  </div>

                  {/* Film Credits Main Window */}
                  <div className="relative flex-1 w-full overflow-hidden flex flex-col items-center justify-center my-4">
                    {/* Shadow Masks */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#1a0110] to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#010001] to-transparent z-10 pointer-events-none" />

                    <div className="relative w-full max-w-2xl h-full overflow-hidden flex items-center justify-center">
                      <motion.div
                        key={resetKey}
                        initial={{ y: "100%" }}
                        animate={isScrolling ? { y: "-105%" } : {}}
                        transition={{
                          duration: 38,
                          ease: "linear",
                          repeat: Infinity
                        }}
                        className="absolute w-full text-center flex flex-col items-center gap-10 font-sans py-12"
                      >
                        {/* Title and Intro */}
                        <div className="flex flex-col items-center">
                          <span className="text-yellow-400 font-extrabold text-[10px] tracking-widest font-tajawal opacity-80 uppercase mb-2">
                            بالمشاركة مع رقة ودلال قلبي
                          </span>
                          <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-yellow-300 via-pink-200 to-[#ffb7c5] bg-clip-text text-transparent leading-tight text-center">
                            رِوَايَةُ الْعِشْقِ الْأَبَدِيِّ 🎬💖
                          </h2>
                          <p className="text-[#ffb7c5]/40 text-[9px] font-mono mt-1">SERIES ID: BASMA-LOVE-2026</p>
                        </div>

                        {/* Credits Row Grid */}
                        <div className="flex flex-col gap-5 w-full max-w-lg mt-4">
                          {[
                            { title: "إنتاج وإخراج العشق", value: "الحبيبة الغنجة والوفية بَصْمَة 👰‍♀️💞" },
                            { title: "البطولة والمستقبل وحبيب العمر", value: "حبيب قلبي وسندي الغالي 👑❤️" },
                            { title: "السيناريو والحوار اليومي", value: "الوعود الوردية والضحكات الباسمة والتفاهم الأبدي 🥰🌹" },
                            { title: "موسيقى تصويرية وألحان الروح", value: "نبضات قلوبنا المشتركة وعطر السنين الرائعة 🎵🎻" },
                            { title: "مدير التصميم الفني والدلال المفرط", value: "رقة وبناتية مفرطة وخالص الهيام والجاذبية ✨🌻" },
                            { title: "موقع التصوير وغرفة الأحلام", value: "محافظات القاهرة والجيزة المباركة العظيمة 🗺️📍" }
                          ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                              <span className="text-[#ffb7c5]/55 text-[11px] font-tajawal tracking-wider uppercase">{item.title}</span>
                              <span className="text-[#ffe4e1] text-base sm:text-lg font-black mt-0.5">{item.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Beautiful Intermission Icon */}
                        <div className="flex items-center gap-3 py-2 w-1/2 justify-center">
                          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffb7c5]/25 to-transparent" />
                          <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
                          <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-[#ffb7c5]/25 to-transparent" />
                        </div>

                        {/* Heartfelt Romantic Letter */}
                        <div className="max-w-xl mx-auto px-4">
                          <span className="text-yellow-300 font-extrabold text-xs font-tajawal block mb-3">رسالة بَصْمَة الختامية:</span>
                          <p className="text-pink-50 text-base sm:text-xl font-black leading-loose text-right tracking-wide shadow-sm font-sans">
                            "أمنيتي الصادقة في هذا العيد المبارك وفي كل الأعياد القادمة، أن تظل يدك الدافئة قابضةً على يدي، وأن يديم الله ضحكاتنا وسعادتنا المشتركة إلى نهاية العمر. أنت ليس فقط حبيب عمري.. بل أنت سندي، وعيدي، وبصمتي الدافئة الباقية لك وبك للأبد يا أحنّ وأغلى الناس."
                          </p>
                        </div>

                        {/* Signatures Frame */}
                        <div className="flex flex-col items-center mt-3">
                          <span className="text-[10px] text-pink-200/50 font-tajawal">مكتوبة بدمع العيون ونبض الوفاء المخلص</span>
                          <span className="text-white text-base font-extrabold mt-1.5 px-5 py-1.5 rounded-full bg-pink-500/10 border border-[#ffb7c5]/30">
                            حبيبتك وصاحبتك للأبد: بَصْمَة 💍🔐
                          </span>
                        </div>

                        {/* Ending Slide */}
                        <div className="mt-6 flex flex-col items-center">
                          <span className="text-3xl">🎬</span>
                          <span className="text-yellow-400 font-black tracking-[0.2em] font-sans text-xl uppercase mt-1">النهاية</span>
                          <p className="text-[#ffb7c5]/40 text-[9px] font-tajawal mt-0.5 font-bold">حكاية غرام أزلية لا تعرف خطوط النهاية ولا تفصلها مسافات ♾️💞</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Cinematic Bottom Action Return Bar */}
                  <div className="relative z-30 pt-3 border-t border-[#ffb7c5]/15 flex justify-center items-center">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setShowEnding(false)}
                      className="px-12 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-pink-500 to-red-600 text-white font-sans font-black text-xs tracking-wide shadow-[0_4px_20px_rgba(226,125,151,0.35)] cursor-pointer outline-none w-full sm:w-auto active:scale-95"
                    >
                      آمين يا رب، العودة لصفحة المعايدة الكريمة 🚪💝
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Footer Utilities */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffb7c5]/15 to-transparent mb-8" />

        <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-between px-4">
          
          {/* Copyright description strictly literal */}
          <div className="text-pink-200/40 text-xs text-right font-tajawal font-bold">
            <span>© ١٤٤٧ هـ - ٢٠٢٦ م | بصْمة حب من بنتٍ لحبيب عمرها 💖</span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-4 text-xs font-tajawal font-bold text-[#ffb7c5]">
            <button
              id="back-to-top"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-all cursor-pointer bg-transparent border-none outline-none font-bold"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>الرجوع للأعلى</span>
            </button>
          </div>
          
        </div>

      </div>
    </footer>
  );
}
