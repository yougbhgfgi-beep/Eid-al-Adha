import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Upload, Mic, Video, Sparkles } from "lucide-react";

export default function AudioSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [audioSource, setAudioSource] = useState<string>("default");
  const [customAudioName, setCustomAudioName] = useState<string>("");
  const [showVideo] = useState(true);
  const [wasPlayingBeforeVideo, setWasPlayingBeforeVideo] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const DEFAULT_TAKBEERAT_URL = "عيد.mp3";

  useEffect(() => {
    audioRef.current = new Audio(DEFAULT_TAKBEERAT_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio play error", err);
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      audioRef.current.muted = newVol === 0;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  };

  const handleVideoPlay = () => {
    if (audioRef.current && isPlaying) {
      setWasPlayingBeforeVideo(true);
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoPause = () => {
    if (wasPlayingBeforeVideo && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
      setWasPlayingBeforeVideo(false);
    }
  };

  const handleVideoEnded = () => {
    if (wasPlayingBeforeVideo && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
      setWasPlayingBeforeVideo(false);
    }
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCustomAudioName(file.name);
    setAudioSource("custom");
    
    // Mount the new uploaded file
    audioRef.current = new Audio(fileUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    audioRef.current.muted = isMuted;

    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.log("Uploaded file play error", err);
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center select-none" id="audio-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Playback Controls and Upload Panel (Left 5 cols) */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between">
          <div className="glass-card bg-[#240619]/90 p-6 rounded-3xl border border-[#ffb7c5]/25 shadow-xl flex flex-col justify-between h-full text-right w-full">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/20 text-[#ffb7c5] text-xs font-tajawal">
                <Mic className="w-3.5 h-3.5" />
                <span>مشغل نغمات وفرحة العيد الدائمة</span>
              </div>
              <h4 className="text-2xl font-black text-white mb-2 font-sans tracking-tight">
                أهزوجة الحب والسرور 🎧💖
              </h4>
              <p className="text-xs text-pink-200/70 leading-relaxed font-tajawal">
                استمع إلى نغمات العيد الهادئة، أو ارفعي وحمّلي أي مقطع صوتي مفضل لكما لتستمعا إليه معاً في هذه المعايدة الحالمة!
              </p>
            </div>

            {/* Custom File Upload Button */}
            <div className="my-6 bg-[#170410]/80 rounded-2xl p-4 border border-[#ffb7c5]/15 flex flex-col gap-4 text-center">
              <span className="text-xs font-tajawal font-medium text-pink-100/80">
                {audioSource === "custom" 
                  ? `🎵 ملفك النشط: ${customAudioName}`
                  : "هل تودين تشغيل موسيقى خاصة بسبوبة حبكما؟ 💞"}
              </span>
              
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="py-3 px-4 rounded-xl border border-dashed border-[#ffb7c5]/40 hover:border-[#ffb7c5] bg-[#ffb7c5]/5 hover:bg-[#ffb7c5]/10 text-[#ffb7c5] font-tajawal text-xs font-bold transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                تحميل مقطع صوتي خاص بكما 📱
              </button>
              
              <input
                type="file"
                ref={fileInputRef}
                accept="audio/*"
                onChange={handleAudioUpload}
                className="hidden"
              />
            </div>

            {/* Professional Audio Controls Layout */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                {/* Play Button */}
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black flex items-center justify-center shadow-[0_5px_15px_rgba(226,125,151,0.5)] hover:opacity-95 transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current text-black" />
                  ) : (
                    <Play className="w-6 h-6 fill-current text-black translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Volume sliders */}
              <div className="flex items-center justify-between gap-4 mt-2">
                <button onClick={toggleMute} className="text-[#ffb7c5] hover:text-white">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-[#1c0211] rounded-lg appearance-none cursor-pointer accent-[#ffb7c5]"
                />
              </div>

              {/* Dynamic Sound waves */}
              <div className="flex justify-center items-center gap-1.5 h-6 mt-1">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-[#ffb7c5] rounded-full"
                    animate={isPlaying ? {
                      height: [6, 24, 6],
                    } : {
                      height: [6, 6]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8 + i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video stream container (Right 7 cols) */}
        <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-between">
          <div className="glass-card bg-[#240619]/90 p-5 rounded-3xl border border-[#ffb7c5]/25 shadow-2xl relative overflow-hidden h-full flex flex-col w-full">
            {/* Shimmer glaze */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e27d97] via-[#ffb7c5] to-[#e27d97] animate-pulse" />
            
            {/* Header bar */}
            <div className="flex items-center justify-between mb-4 mt-1 px-1">
              <span className="text-[#ffb7c5] flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-pink-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-[10px] font-tajawal font-bold tracking-widest uppercase">أجواء وتكبيرات العيد المبارك المرئية</span>
              </span>
              <div className="flex items-center gap-1.5 text-xs text-pink-200/60 font-tajawal font-bold">
                <span>بث مباشر دافئ</span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
              </div>
            </div>

            {/* Video Frame */}
            <div className="relative w-full flex-1 aspect-video rounded-2xl overflow-hidden border border-[#ffb7c5]/25 shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] bg-black">
              {showVideo ? (
                <video
                  src="WhatsAVideo 2026-03-16 at 9.16.49 AM.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onEnded={handleVideoEnded}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-[#ffb7c5] p-4">
                  <Video className="w-12 h-12 mb-3" />
                  <p className="text-sm font-tajawal font-semibold">اضغط على زر تفعيل البث المرئي للتكبيرات</p>
                </div>
              )}
            </div>
            
            <p className="text-[11px] text-pink-200/50 text-center font-tajawal font-medium mt-3 leading-normal">
              معايدة مطرّزة باسم الحبيبة «بصمة» مغلفة بنبضات الوجد والشوق لحبيب عمرها
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
