import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Hourglass, Calendar, Star } from "lucide-react";

export default function Countdown() {
  // Target Eid al-Adha 2026 early dawn (approx May 27, 2026 at 04:30 AM UTC)
  const targetDate = new Date("2026-05-27T04:30:00Z").getTime();

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [isFinished, setIsFinished] = useState(false);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const left = calculateTimeLeft();
      setTimeLeft(left);

      if (left.days === 0 && left.hours === 0 && left.minutes === 0 && left.seconds === 0) {
        setIsFinished(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-center select-none" id="countdown-section">
      <div className="relative overflow-hidden glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        {/* Decorative ambient rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Hourglass className="w-4 h-4 text-[#ffb7c5] animate-spin" style={{ animationDuration: '4s' }} />
          <span className="text-pink-300 font-bold tracking-widest text-xs sm:text-sm uppercase font-tajawal">
            نبضات الوقت المتبقية لعيدنا الأول والمبارك ⏰💖
          </span>
        </motion.div>

        {/* Heading text */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-extrabold text-white mb-8 font-sans"
        >
          {isFinished ? "أهلاً ببهجة العيد المبارك يا حب العمر" : "ساعات الشوق تقربنا من العيد معك... 🥰"}
        </motion.h3>

        {/* Countdown Board */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {/* Days */}
          <div className="glass-card bg-[#1c0211]/85 backdrop-blur-md border border-white/15 p-5 rounded-2xl flex flex-col justify-center items-center shadow-lg relative overflow-hidden group hover:border-[#ffb7c5] transition-colors">
            <span className="text-4xl sm:text-5xl font-black font-mono text-[#ffb7c5] tracking-tight">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-pink-100/70 font-tajawal text-xs mt-2 font-bold">أيام حُب</span>
          </div>

          {/* Hours */}
          <div className="glass-card bg-[#1c0211]/85 backdrop-blur-md border border-white/15 p-5 rounded-2xl flex flex-col justify-center items-center shadow-lg relative overflow-hidden group hover:border-[#ffb7c5] transition-colors">
            <span className="text-4xl sm:text-5xl font-black font-mono text-[#ffb7c5] tracking-tight">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-pink-100/70 font-tajawal text-xs mt-2 font-bold">ساعات شوق</span>
          </div>

          {/* Minutes */}
          <div className="glass-card bg-[#1c0211]/85 backdrop-blur-md border border-white/15 p-5 rounded-2xl flex flex-col justify-center items-center shadow-lg relative overflow-hidden group hover:border-[#ffb7c5] transition-colors">
            <span className="text-4xl sm:text-5xl font-black font-mono text-[#ffb7c5] tracking-tight">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-pink-100/70 font-tajawal text-xs mt-2 font-bold">دقائق عِشق</span>
          </div>

          {/* Seconds */}
          <div className="glass-card bg-[#1c0211]/85 backdrop-blur-md border border-white/15 p-5 rounded-2xl flex flex-col justify-center items-center shadow-lg relative overflow-hidden group hover:border-[#ffb7c5] transition-colors">
            <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight animate-pulse text-[#e27d97]">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-pink-100/70 font-tajawal text-xs mt-2 font-bold animate-pulse">نبضة ثوانٍ</span>
          </div>
        </div>

        {/* Bottom Banner Decoration */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Calendar className="w-4 h-4 text-[#ffb7c5]" />
          <span className="text-xs text-pink-200/60 font-tajawal font-medium">
            كل ثانية تمر تقربنا أكثر وبصمتنا دافئة باقية للأبد
          </span>
        </div>
      </div>
    </div>
  );
}
