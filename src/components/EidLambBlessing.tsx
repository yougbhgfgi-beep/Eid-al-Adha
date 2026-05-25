import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart, Gift, Award, HelpCircle } from "lucide-react";

interface RomanticMessage {
  id: number;
  title: string;
  body: string;
  phrase: string;
}

const EIDIA_MESSAGES: RomanticMessage[] = [
  {
    id: 1,
    title: "شيك المليون نبضة حب وأمان 💖",
    body: "حبيبي وسندي الغالي.. بصمتي تدق في كل زاوية من زوايا هذا العيد لتعبر لك عن أصدق مشاعر العِشق. أنت عيدي الدائم وجنتي الباقية في الأرض. عساك دائمًا سعيدًا وتاجًا فوق رأسي.",
    phrase: "رصيد الحب لدينا لا ينتهي وقدرك في قلبي يفوق الخيال يا أغلى البشر! ✨💍"
  },
  {
    id: 2,
    title: "وثيقة الوفاء والعهد الأبدي 📜🥀",
    body: "وصاحب قلبي وحبيب روحي.. في هذا العيد المبارك، أجدد معك عهد الهوى العذري. أعدك أن أكون دقاتك الوفية، سندك الدائم، وبصمتك التي تفيض حنانًا ودفئًا في كل لحظة تمر بنا.",
    phrase: "كل عام وأنت تسكن قلبي والروح لك مأوى ومستقر دائم... 🥰🧸"
  },
  {
    id: 3,
    title: "سَند عُمري وحبي الأول والأخير 💍❤️",
    body: "لا تكتمل فرحتي بالعيد إلا بضحكتك التي تضيء عالمي. بوجودك تمتلئ دنيانا بالمسرات والبهجة. أحبك فوق الحب حبًا، وأسأل الله أن يجمعنا قريبًا في بيت السعادة والهناء.",
    phrase: "أنت الفرح والسرور في كل أعيادي وسنيني... عيد أضحى مبارك! 🎉"
  }
];

export default function EidLambBlessing() {
  const [isSlaughtered, setIsSlaughtered] = useState(false);
  const [isSlaughtering, setIsSlaughtering] = useState(false);
  const [showEidia, setShowEidia] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<RomanticMessage>(EIDIA_MESSAGES[0]);

  const handleLaunchSlaughter = () => {
    setIsSlaughtering(true);
    
    // Choose a random heartwarming message for variety
    const randomMsg = EIDIA_MESSAGES[Math.floor(Math.random() * EIDIA_MESSAGES.length)];
    setSelectedMessage(randomMsg);

    setTimeout(() => {
      setIsSlaughtered(true);
      setIsSlaughtering(false);
    }, 1800); // Duration of the cute slice and rose pedal explosion
  };

  const resetLamb = () => {
    setIsSlaughtered(false);
    setShowEidia(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center select-none" id="eid-lamb-section">
      {/* Module Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-[#ffb7c5] text-sm font-tajawal">
          <Gift className="w-4 h-4 text-pink-300 animate-bounce" />
          <span>أضحية الحب ومفاجأة العيدية الكبرى</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-pink-200 to-[#ffb7c5] bg-clip-text text-transparent font-sans">
          أضحية العيد التفاعلية: اذبح الأضحية بحُب 🐑💝
        </h3>
        <p className="text-pink-200/60 mt-2 max-w-lg mx-auto font-tajawal text-base">
          تفاعل مع خروف العيد المطور والمتحرك.. انقر على زر الذبح الشرعي بلمسات رقيقة تنفجر معها قلوب الحب لتنال كنز العيدية والكلمات الساحرة!
        </p>
      </motion.div>

      {/* Main Container */}
      <div className="relative overflow-hidden glass-card bg-[#1c0211]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-[0_24px_50px_rgba(0,0,0,0.65)] flex flex-col items-center">
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-[#ffb7c5]/10 text-6xl">🐑</div>
        <div className="absolute bottom-4 right-4 text-[#ffb7c5]/10 text-6xl">🍬</div>

        <div className="w-full max-w-md min-h-[380px] flex flex-col items-center justify-center relative">
          
          <AnimatePresence mode="wait">
            {!isSlaughtered ? (
              /* ALIVE ANIMATED DYNAMIC LAMB SCREEN */
              <motion.div
                key="alive-lamb"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center gap-8"
              >
                {/* Advanced moving, interactive Lamb construct */}
                <div className="relative w-52 h-52 flex items-center justify-center">
                  {/* Subtle pulsing shadow behind lamb */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-2 w-40 h-8 bg-pink-500 rounded-full blur-xl pointer-events-none"
                  />

                  {/* Curly Woolly Stack Body */}
                  <motion.div
                    animate={isSlaughtering ? { 
                      scale: [1, 1.05, 0.95, 1], 
                      rotate: [0, -3, 3, -3, 0], 
                      y: [-5, 5, -5, 0] 
                    } : { 
                      y: [0, -6, 0] 
                    }}
                    transition={isSlaughtering ? { duration: 0.4, repeat: 4 } : { repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                    className="relative w-44 h-36 bg-[#ffeef2] rounded-[45%] border-2 border-[#ffb7c5] shadow-lg flex items-center justify-center cursor-pointer group"
                  >
                    {/* Cute puffy curly shapes on the outer perimeter */}
                    <div className="absolute -top-3 left-4 w-10 h-10 bg-[#ffeef2] rounded-full border border-pink-200 shadow-sm" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#ffeef2] rounded-full border border-pink-200" />
                    <div className="absolute -top-2 right-4 w-10 h-10 bg-[#ffeef2] rounded-full border border-pink-200" />
                    <div className="absolute -bottom-2 left-6 w-11 h-11 bg-[#ffeef2] rounded-full border border-pink-200 shadow-inner" />
                    <div className="absolute -bottom-3 right-8 w-12 h-12 bg-[#ffeef2] rounded-full border border-pink-200" />
                    
                    {/* Flapping/Bouncing Ears */}
                    <motion.div
                      animate={{ rotate: [0, -12, 0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
                      className="absolute -left-6 top-6 w-8 h-12 bg-pink-200 rounded-full origin-right border border-[#ffb7c5]"
                    />
                    <motion.div
                      animate={{ rotate: [0, 12, 0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
                      className="absolute -right-6 top-6 w-8 h-12 bg-pink-200 rounded-full origin-left border border-[#ffb7c5]"
                    />

                    {/* Cute cartoon Face Plate */}
                    <div className="relative w-24 h-22 bg-[#ffd1dc] rounded-full border border-pink-300 flex flex-col items-center justify-center p-2 shadow-inner z-10 overflow-hidden">
                      {/* Blinking Anime Eyes */}
                      <div className="flex justify-between w-14 mb-2 mt-1">
                        <motion.div
                          animate={{ scaleY: [1, 0.1, 1] }}
                          transition={{ repeat: Infinity, duration: 4, repeatDelay: 1.5 }}
                          className="w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center relative origin-center"
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 right-0.5" />
                        </motion.div>
                        <motion.div
                          animate={{ scaleY: [1, 0.1, 1] }}
                          transition={{ repeat: Infinity, duration: 4, repeatDelay: 1.5 }}
                          className="w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center relative origin-center"
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-0.5 right-0.5" />
                        </motion.div>
                      </div>

                      {/* Sweet heart rosy cheeks */}
                      <div className="absolute left-3 bottom-5 w-4 h-2 bg-pink-400/50 rounded-full blur-[1px]" />
                      <div className="absolute right-3 bottom-5 w-4 h-2 bg-pink-400/50 rounded-full blur-[1px]" />

                      {/* Muzzle with friendly smile */}
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-pink-600 font-bold text-xs select-none">♥</span>
                        <div className="w-4 h-2.5 border-b-2 border-r-2 border-l-2 border-pink-700/60 rounded-b-md" />
                      </div>
                    </div>

                    {/* Cute Golden Bow Ribbon around his neck */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-8 h-5 bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-600 rounded-lg shadow-sm flex items-center justify-center border border-amber-600 text-[8px] text-black font-black font-sans font-bold">
                      🎀
                    </div>
                  </motion.div>

                  {/* Bouncing adorable little legs */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 flex justify-between px-3">
                    <motion.div
                      animate={isSlaughtering ? { y: [0, -4, 4, 0] } : { y: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="w-4 h-11 bg-[#ffd1dc] border-b-4 border-pink-300 rounded-b-lg shadow-sm"
                    />
                    <motion.div
                      animate={isSlaughtering ? { y: [0, 3, -3, 0] } : { y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.1 }}
                      className="w-4 h-11 bg-[#ffd1dc] border-b-4 border-pink-300 rounded-b-lg shadow-sm"
                    />
                    <motion.div
                      animate={isSlaughtering ? { y: [0, -4, 4, 0] } : { y: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                      className="w-4 h-11 bg-[#ffd1dc] border-b-4 border-pink-300 rounded-b-lg shadow-sm"
                    />
                    <motion.div
                      animate={isSlaughtering ? { y: [0, 3, -3, 0] } : { y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
                      className="w-4 h-11 bg-[#ffd1dc] border-b-4 border-pink-300 rounded-b-lg shadow-sm"
                    />
                  </div>
                </div>

                {/* Status/Speech label */}
                <span className="text-xs font-bold font-tajawal text-pink-100/90 tracking-wide px-4 py-1.5 rounded-full bg-[#3d0822] border border-[#ffb7c5]/25">
                  {isSlaughtering ? "حبيبي يذبح الأضحية ببسمة مباركة... 🥹💖" : "الخروف المطور يقرأ نبضات حبك بانتظار العيد! 🐑✨"}
                </span>

                {/* Slaughter Execution Trigger button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleLaunchSlaughter}
                  disabled={isSlaughtering}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 via-[#e27d97] to-red-500 border border-white/20 text-white font-sans text-base font-black tracking-wide shadow-[0_6px_25px_rgba(239,35,60,0.4)] transition-all flex items-center gap-3 cursor-pointer outline-none active:scale-95 disabled:opacity-50"
                >
                  <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: "5s" }} />
                  <span>اذبح أضحيتنا المباركة بحب 🔪🐑🍭</span>
                </motion.button>
              </motion.div>
            ) : (
              /* MAGICAL EXTREMELY ROMANTIC REVEAL / GOLDEN EIDIA CARDS PANEL */
              <motion.div
                key="slaughtered-eidia"
                initial={{ opacity: 0, scale: 0.82, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full flex flex-col items-center gap-6"
              >
                {!showEidia ? (
                  /* CLOSED GLEAMING TREASURE ENVELOPE DESIGN */
                  <div className="flex flex-col items-center text-center gap-5">
                    {/* Glowing golden circle backplate */}
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-300 rounded-full opacity-35 blur-xl animate-pulse" />
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-600 to-amber-300 border border-yellow-400 flex items-center justify-center text-5xl shadow-2xl relative cursor-pointer"
                        onClick={() => setShowEidia(true)}
                      >
                        🧧
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white text-xs border border-white/30 animate-bounce">
                          💝
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-2 text-center">
                      <h4 className="text-yellow-300 font-extrabold text-xl font-sans">
                        تم الذبح بحب وبدرت الورد والفل! 🎉🌹
                      </h4>
                      <p className="text-pink-100/70 text-xs font-tajawal max-w-sm mt-1">
                        لقد تحوّل الخروف الجميل إلى سحابة من القلوب الحمراء، وبقيت في انتظارك بطاقة العيدية الفاخرة المليئة بالغرام!
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowEidia(true)}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-300 text-black font-sans font-black text-sm shadow-[0_4px_15px_rgba(245,158,11,0.4)] transition-all cursor-pointer outline-none"
                    >
                      افتح العيدية الفاخرة للحب 🎁💌
                    </motion.button>
                  </div>
                ) : (
                  /* DETAILED ROYAL ROMANTIC EIDIA CHECK PANEL */
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="w-full bg-[#240619]/90 border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl relative text-right"
                  >
                    {/* Golden ornaments */}
                    <div className="absolute top-2 right-2 text-yellow-400 text-xs">⭐</div>
                    <div className="absolute top-2 left-2 text-yellow-400 text-xs">⭐</div>
                    
                    {/* Bank Check Title segment */}
                    <div className="flex justify-between items-center pb-3 border-b border-yellow-400/20 mb-4 h-12">
                      <div className="text-right">
                        <span className="text-[10px] text-yellow-300/80 font-black block leading-none">شيك مصرف الهوى والغرام الأبدي</span>
                        <span className="text-[9px] text-pink-200/50 block font-mono">BANK OF ETERNAL EMOTIONS</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 font-mono text-[10px] font-bold">
                        رصيد غرام لا نهائي ♾️
                      </div>
                    </div>

                    {/* Pay to of loved spouse */}
                    <div className="flex flex-col gap-3 my-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-pink-200/60 font-tajawal">:يُصرف لأمر المقرّب لروحي</span>
                        <span className="text-[#ffe4e1] font-extrabold text-sm border-b border-pink-200/20 pb-0.5 px-2 flex-1 text-left">
                          حبيبُ عمري ومالكُ وجداني 👤💌
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="text-pink-200/60 font-tajawal">:القيمة المخصصة للغالية</span>
                        <span className="text-yellow-400 font-extrabold text-sm border-b border-pink-205/20 pb-0.5 px-2 flex-1 text-left font-mono">
                          {selectedMessage.title}
                        </span>
                      </div>
                    </div>

                    {/* Letter Body of Eidia */}
                    <div className="my-5 p-4 rounded-xl bg-black/40 border border-yellow-400/10 text-pink-50 text-sm leading-relaxed font-tajawal font-medium">
                      "{selectedMessage.body}"
                    </div>

                    {/* Fancy footer code line & signature */}
                    <div className="pt-3 border-t border-yellow-400/20 flex items-center justify-between text-xs mt-4">
                      <div className="text-right">
                        <span className="text-[10px] text-pink-200/40 font-mono"># LOVE-1447-96885626</span>
                      </div>
                      <div className="text-left font-tajawal font-black text-[#ffb7c5] flex items-center gap-1.5">
                        <span>إمضاء العاشقة الوفية: بصمة</span>
                        <span className="text-red-500">💖</span>
                      </div>
                    </div>

                    {/* Additional phrase */}
                    <div className="mt-4 text-center bg-yellow-400/5 py-2 px-3 rounded-lg border border-yellow-400/10 text-yellow-300/95 text-xs font-tajawal font-bold">
                      {selectedMessage.phrase}
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <button
                        onClick={resetLamb}
                        className="py-2.5 rounded-xl border border-pink-500/30 hover:bg-pink-500/10 text-pink-200 text-xs transition-colors cursor-pointer font-tajawal font-bold"
                      >
                        أعد رؤية الأضحية 🐑
                      </button>
                      
                      <button
                        onClick={() => {
                          const randomMsg = EIDIA_MESSAGES[Math.floor(Math.random() * EIDIA_MESSAGES.length)];
                          setSelectedMessage(randomMsg);
                        }}
                        className="py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-300 text-black text-xs font-sans font-black transition-all cursor-pointer shadow-md"
                      >
                        عيدية وكلمات أخرى 🎁💫
                      </button>
                    </div>

                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
