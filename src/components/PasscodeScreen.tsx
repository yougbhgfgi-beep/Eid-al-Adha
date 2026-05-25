import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, Heart, ArrowRight, Eye, EyeOff, Sparkles } from "lucide-react";

interface PasscodeScreenProps {
  onUnlock: () => void;
}

export default function PasscodeScreen({ onUnlock }: PasscodeScreenProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = password.trim().toLowerCase();
    
    // Accepts "love", "love you", "حب", or "love" variations
    if (cleanPass === "love" || cleanPass === "love" || cleanPass === "حب" || cleanPass === "الحب") {
      setIsUnlocked(true);
      setError(false);
      setTimeout(() => {
        onUnlock();
      }, 1000); // 1s transition
    } else {
      setError(true);
      setPassword("");
      // Vibrating/shaking effect is handled by state
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#170410] overflow-hidden select-none">
      {/* Immersive background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing dynamic gradient meshes */}
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-red-800/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        
        {/* Floating animated hearts */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.4 + 0.1, 
              scale: Math.random() * 0.5 + 0.5,
              x: Math.random() * 100 + "%",
              y: "110%"
            }}
            animate={{ 
              y: "-10%",
              x: ["0%", (Math.random() > 0.5 ? "10%" : "-10%"), "0%"]
            }}
            transition={{ 
              duration: Math.random() * 8 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-pink-400/20 text-3xl"
            style={{ left: `${Math.random() * 90}%` }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock-panel"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="relative w-full max-w-md mx-4 p-8 rounded-3xl glass-card bg-[#1c0211]/85 border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.8)] text-center flex flex-col items-center"
          >
            {/* Elegant glowing lock/heart crest */}
            <div className="relative mb-6">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-20 h-20 rounded-full bg-[#3d0822] border border-[#ffb7c5]/35 flex items-center justify-center text-[#ffb7c5] shadow-[0_0_30px_rgba(226,125,151,0.25)]"
              >
                <Lock className="w-8 h-8 text-[#ffb7c5]" />
              </motion.div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs shadow-md border border-white/20">
                ❤️
              </div>
            </div>

            {/* Arabic Welcome Lines */}
            <span className="text-[#ffb7c5] font-black tracking-widest text-xs uppercase font-tajawal mb-1 block">
              مساحة الحب المغلقة للحبيب الغالي 🔐✨
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-wide leading-tight mb-3">
              أهلاً بك في عالم دلالي 🥰
            </h2>
            <p className="text-pink-100/70 text-sm font-tajawal leading-relaxed mb-8 max-w-sm">
              هذه المعايدة السعيدة صُمّمت بنبضات الوفاء والدفء لتليق بقلبك.. أدخل كلمة سر العشق للدخول والتأمل 🌸
            </p>

            {/* Password input form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-right">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="اكتب كلمة السر هنا... (تلميح: love) 💝"
                  className={`w-full pr-12 pl-12 py-3.5 bg-black/60 rounded-2xl text-white font-sans text-center placeholder:text-pink-200/30 focus:outline-none transition-all ${
                    error 
                      ? "border border-red-500 ring-2 ring-red-500/20 focus:border-red-500 animate-[shake_0.5s_ease-in-out]" 
                      : "border border-white/10 focus:border-[#ffb7c5] focus:ring-1 focus:ring-[#ffb7c5]"
                  }`}
                  autoFocus
                />
                
                {/* Prefix Heart Lock Icon */}
                <div className="absolute right-4 top-4 text-[#ffb7c5]/75">
                  <Heart className="w-5 h-5 fill-current text-[#e27d97]" />
                </div>

                {/* Suffix password visibility switch */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-4 text-pink-200/50 hover:text-[#ffb7c5] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Error warning statement */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-xs font-tajawal text-center font-bold"
                  >
                    كلمة المرور خاطئة يا حبيبي، حاول مجدداً 🥺❤️
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Glowing Submission button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#e27d97] via-[#ffb7c5] to-[#e27d97] text-black font-sans font-black text-base shadow-[0_6px_25px_rgba(226,125,151,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2 outline-none mt-2"
              >
                <span>افتح بستان المعايدة الوردية 🔓🎉</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </motion.button>
            </form>

            <div className="mt-8 text-[11px] text-pink-200/40 font-tajawal">
              شُيّد هذا الصرح بخالص العشق بقلم بَصْمَة 🔐
            </div>
          </motion.div>
        ) : (
          /* UNLOCKED SUCCESS SPLASH SCREEN */
          <motion.div
            key="unlock-success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center flex flex-col items-center"
          >
            <motion.div
              animate={{ 
                scale: [0.8, 1.2, 1],
                rotate: [0, 15, 0]
              }}
              className="text-8xl mb-6 relative"
            >
              💖
              <div className="absolute inset-0 animate-ping opacity-75 text-5xl">💖</div>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-pink-200 to-[#ffb7c5] bg-clip-text text-transparent mb-3 font-sans">
              اكتمل نبض عشق العيد! ✨💍
            </h1>
            <p className="text-pink-200/85 font-tajawal text-base font-bold animate-pulse">
              جاري فتح الأبواب والأنوار الوردية لحبيبي الغالي...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
