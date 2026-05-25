import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MailOpen } from "lucide-react";

export default function GreetingEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  const greetingMessage = `حبيب قلبي وسندي الغالي.. ❤️
بكل الحب والاشتياق أهديك هذه المعايدة الخاصة من عمق فؤادي بمناسبة عيد الأضحى المبارك.

كل عام وأنت عيدي، وكل عام والضحكة لا تفارق شفتيك بوجودي بجانبك. أسأل الله أن يحفظك لي، ويبارك في عمرك، ويجمع بيننا دائماً على السعادة والوئام والمودة.

عيد أضحى مبارك يا حب عمري، وصاحب قلبي، ودائماً معاً في كل أعيادنا القادمة.

حبيبتك الوفية المخلصة: بَصْمَة 💖`;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16 text-center select-none">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#ffb7c5]/5 border border-[#ffb7c5]/25 text-[#ffb7c5] text-sm font-tajawal">
          <MailOpen className="w-4 h-4" />
          <span>رسالة حب خاصة من حبيبتك بصْمة</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-[#ffb7c5] bg-clip-text text-transparent font-sans">
          افتح هدية قلبي لك 💌🥰
        </h3>
        <p className="text-pink-200/60 mt-2 max-w-lg mx-auto font-tajawal">
          اضغط على الظرف الوردي الرقيق لتفتح الرسالة الرومانسية المكتوبة لك بنبضات الحب والدفء
        </p>
      </motion.div>

      {/* Interactive Envelope Container */}
      <div className="relative h-[480px] w-full max-w-md mx-auto flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {!isOpen ? (
            /* CLICK UNOPENED ENVELOPE */
            <motion.div
              key="closed-envelope"
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.82, opacity: 0, y: 30 }}
              whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => setIsOpen(true)}
              className="w-full max-w-sm cursor-pointer relative"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 to-[#e27d97] opacity-25 blur-xl animate-pulse" />
              
              {/* Envelope Body */}
              <div className="relative glass-card bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col items-center gap-6 overflow-hidden">
                {/* Red Sealing Heart wax crest replacement style */}
                <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#e27d97] via-pink-300 to-[#e27d97]" />
                
                {/* Mail Icon with animated ring */}
                <div className="relative w-24 h-24 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#ffb7c5] shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)]">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full border border-pink-400/20"
                  />
                  <span className="text-5xl">💌</span>
                </div>

                {/* Sealing Emblem Text */}
                <div className="text-center">
                  <span className="block text-[#ffb7c5] font-black font-tajawal text-xs uppercase tracking-widest mb-1">
                    بصمة تهمس بحبك
                  </span>
                  <p className="text-white text-lg font-bold">بين ثنايا هذا القلب رسالة لك</p>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400/20 to-transparent" />

                {/* Instruction to open */}
                <motion.div 
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black font-black text-sm shadow-[0_4px_12px_rgba(226,125,151,0.4)] hover:opacity-90 transition-colors cursor-pointer"
                >
                  افتح الرسالة يا حبيبي 💖✍️
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* OPENED LETTER DISPLAY */
            <motion.div
              key="opened-envelope"
              initial={{ scale: 0.85, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="w-full absolute inset-0 flex flex-col justify-end"
            >
              {/* Outer Royal Border */}
              <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-[0_24px_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between h-full">
                {/* Gold Crest background */}
                <div className="absolute -top-[10%] -left-[10%] w-48 h-48 bg-[#e27d97]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-[10%] -right-[10%] w-48 h-48 bg-[#e27d97]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Letter Header */}
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="text-right">
                    <h4 className="text-[#ffb7c5] font-black font-sans text-xs tracking-wide">
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </h4>
                    <span className="text-pink-100/65 text-xs font-tajawal block">مكتوب بصدق ونبض الوفاء</span>
                  </div>
                  <span className="text-2xl animate-pulse">❤️</span>
                </div>

                {/* Letter Content Styled elegantly */}
                <div className="my-6 flex-1 flex flex-col justify-center overflow-y-auto">
                  {/* Decorative Islamic & Romantic Border Frame inside */}
                  <div className="relative border-r-2 border-l-2 border-[#e27d97]/20 px-4 md:px-6">
                    <p className="text-right text-pink-50 font-sans text-base md:text-lg leading-loose tracking-wide font-medium whitespace-pre-line drop-shadow-sm">
                      {greetingMessage}
                    </p>
                  </div>
                </div>

                {/* Letter Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  {/* Stamp */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/30 flex items-center justify-center text-[#ffb7c5] text-xs">
                      💖
                    </div>
                    <span className="text-pink-200/85 text-xs font-tajawal font-bold">كل عام وأنت حب حياتي الأول والأخير</span>
                  </div>

                  {/* Close/Refold Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-xs px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/20 text-[#ffb7c5] transition-all font-tajawal cursor-pointer"
                  >
                    أعد طي الرسالة 📂
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
