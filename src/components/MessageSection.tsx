import { motion } from "motion/react";
import { Heart, Gift, Compass } from "lucide-react";

export default function MessageSection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center select-none">
      {/* Outer Border with gold accents */}
      <div className="relative overflow-hidden glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col md:flex-row gap-10 items-center">
        
        {/* Decorative corner carvings */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-pink-400/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-pink-400/20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-400/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-pink-400/20 pointer-events-none" />
        
        {/* Left Side: Symbolic Islamic Star & Ornament Vector */}
        <div className="md:w-1/3 flex flex-col items-center justify-center relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="w-48 h-48 border border-[#ffb7c5]/25 rounded-full flex items-center justify-center relative"
          >
            <div className="absolute inset-4 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/5" />
            {/* Elegant Octagram representation */}
            <div className="w-28 h-28 bg-[#3d0822] backdrop-blur-md border border-[#ffb7c5]/35 rotate-45 flex items-center justify-center transform hover:rotate-90 transition-transform duration-1000">
              <div className="w-24 h-24 bg-[#1c0211] rotate-12 flex items-center justify-center text-pink-400 font-bold text-4xl shadow-[0_0_20px_rgba(226,125,151,0.3)]">
                💖
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Inspirational Text Context */}
        <div className="md:w-2/3 text-right flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 mb-1 justify-end">
            <span className="text-[#ffb7c5] font-black tracking-wider text-xs uppercase font-tajawal">من عبق التهاني ونبض الوداد</span>
            <div className="w-2 h-2 rounded-full bg-[#e27d97]" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
            أَنْتَ عِيدِي السَّعِيدُ وَنَبْضُ قَلْبِي 💍❤️
          </h3>

          <div className="w-24 h-1 bg-gradient-to-l from-[#e27d97] to-transparent self-start md:self-end mt-1 rounded-full" />

          <p className="text-pink-100/85 font-semibold text-lg md:text-xl leading-loose font-tajawal mt-3 drop-shadow-sm">
            العيد بوجودك معي ليس مجرد أيام تمر، بل هو جنة حقيقية تفرح فؤادي. بضحكتك تبتسم كل أيامي، وبقربك تكتمل كل الأعياد والمسرات في حياتي.
            <br />
            حبيبي الغالي، لنجعل من هذا العيد بداية جديدة لعهدنا الأبدي الدافئ، ولنملأ دنيانا بالود والدعاء الصادق. قلبي ينبض بحبك ولا يكتمل العيد إلا برؤية ابتسامتك. عساك من عواده يا حبّي الأول والأخير.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 justify-end">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[#ffb7c5] text-sm font-bold font-tajawal">
              <Gift className="w-4 h-4 text-pink-300" />
              <span>عهد الوفاء الأبدي</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[#ffb7c5] text-sm font-bold font-tajawal">
              <Heart className="w-4 h-4 text-[#e27d97] fill-[#e27d97]" />
              <span>نبضات بصمة المخلصة</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
