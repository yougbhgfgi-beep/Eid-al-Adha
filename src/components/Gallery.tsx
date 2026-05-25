import { motion } from "motion/react";
import { Camera } from "lucide-react";

const PHOTOS = [
  {
    id: "1",
    title: "حبيبي وقرة عيني ❤️",
    desc: "العيد معك له طعم دافئ يروي الروح بالأمان والسرور",
    image: "assets/images/romantic_eid_lamb_1779728926545.png",
    rotation: -3
  },
  {
    id: "2",
    title: "بصمة حب لا تزول 🔐",
    desc: "حب غُمر بالوفاء العذري المتبادل بين قلبي وقلبك",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
    rotation: 2
  },
  {
    id: "3",
    title: "أضواء البهجة والدلال ✨",
    desc: "أجواء العيد تغني بضحكتك البهية التي تملك فؤادي",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
    rotation: -1
  },
  {
    id: "4",
    title: "معاً إلى الأبد 💍",
    desc: "ننسج أحلامنا الوردية وندعو الله بجمع شملنا القريب",
    image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80&w=600",
    rotation: 4
  }
];

export default function Gallery() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 text-center select-none" id="gallery-section">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#ffb7c5]/5 border border-[#ffb7c5]/25 text-[#ffb7c5] text-sm font-tajawal">
          <Camera className="w-4 h-4" />
          <span>ألبوم ذكريات الحب الأبدي</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-[#ffb7c5] bg-clip-text text-transparent font-sans">
          معرض لقطات من ذكرياتنا السعيدة 📸💞
        </h3>
        <p className="text-pink-200/60 mt-2 max-w-lg mx-auto font-tajawal">
          مرر فوق الصور الفاخرة لتعديل ميلها وتأمل تفاصيل الحب والأعياد المشرقة برفقتنا
        </p>
      </motion.div>

      {/* Grid containing 4 polaroids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.07, 
              rotate: 0, 
              zIndex: 30,
              boxShadow: "0 25px 50px -12px rgba(226, 125, 151, 0.45)" 
            }}
            style={{ rotate: photo.rotation }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="bg-[#240619]/90 text-white p-4.5 pb-6 rounded-2xl shadow-2xl relative group cursor-pointer border border-[#ffb7c5]/20"
          >
            {/* Vintage Polaroid Tape Representation on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-[#ffb7c5]/20 backdrop-blur-sm border border-[#ffb7c5]/30 transform -rotate-1 shadow-sm opacity-90" />

            {/* Photo Image wrapper */}
            <div className="w-full aspect-square bg-[#3d0822] overflow-hidden rounded-xl relative border border-white/5 mb-4">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Pink shadow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Polaroid Description Block */}
            <div className="text-right px-1">
              <h4 className="text-pink-100 text-base font-extrabold font-sans mb-1 selection:bg-[#ffb7c5]/20">
                {photo.title}
              </h4>
              <p className="text-pink-200/60 font-tajawal text-xs leading-normal selection:bg-[#ffb7c5]/20 font-bold">
                {photo.desc}
              </p>
            </div>

            {/* Hand-drawn corner ornament */}
            <div className="absolute bottom-2 left-3 text-[#ffb7c5]/25 text-[10px] font-bold font-sans select-none pointer-events-none">
              ♥ LOVE
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
