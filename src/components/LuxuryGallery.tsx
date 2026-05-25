import { motion } from "motion/react";
import { Heart, Sparkles, Crown, Image } from "lucide-react";

export default function LuxuryGallery() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 text-center select-none" id="luxury-gallery">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37]/10 via-[#ffb7c5]/10 to-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-tajawal mb-4 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Crown className="w-3.5 h-3.5" />
            <span>معرض الصور الفاخر</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white font-sans tracking-tight">
            ذكرياتنا <span className="text-[#d4af37]">الذهبية</span> ✨
          </h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          <p className="text-sm text-pink-200/60 font-tajawal mt-4 max-w-lg mx-auto leading-relaxed">
            كل صورة تحكي قصة حبنا، وكل لحظة تجمعنا هي جوهرة في تاج عمرنا
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-[#1c0211]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="download.jpg"
                alt="صورة رومانسية"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/5 via-transparent to-[#ffb7c5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-[#d4af37]/30 text-[#d4af37] text-xs font-tajawal mb-2">
                  <Heart className="w-3 h-3 fill-[#d4af37]" />
                  <span>لحظة جميلة</span>
                </div>
                <p className="text-white font-sans font-bold text-lg">معًا في طريق الحب</p>
                <p className="text-pink-200/60 text-xs font-tajawal mt-1">كل لحظة معكِ هي عيد</p>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#d4af37] to-[#ffb7c5] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)] z-30">
              <span className="text-black text-xs font-bold">1</span>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-[#1c0211]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="images.jpg"
                alt="صورة رومانسية"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/5 via-transparent to-[#ffb7c5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-[#d4af37]/30 text-[#d4af37] text-xs font-tajawal mb-2">
                  <Heart className="w-3 h-3 fill-[#d4af37]" />
                  <span>ذكرى عزيزة</span>
                </div>
                <p className="text-white font-sans font-bold text-lg">أجمل أيام العمر</p>
                <p className="text-pink-200/60 text-xs font-tajawal mt-1">أنتِ دنياي يا بصمة</p>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#d4af37] to-[#ffb7c5] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)] z-30">
              <span className="text-black text-xs font-bold">2</span>
            </div>
          </motion.div>
        </div>

        {/* Footer accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-3 text-[#d4af37]/40"
        >
          <div className="h-px w-16 bg-gradient-to-l from-[#d4af37]/30 to-transparent" />
          <Image className="w-4 h-4" />
          <Heart className="w-4 h-4 fill-[#d4af37]/30" />
          <Image className="w-4 h-4" />
          <div className="h-px w-16 bg-gradient-to-r from-[#d4af37]/30 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
