import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Trophy, Heart, RotateCcw } from "lucide-react";

const MAZE_GRID = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const START = { row: 1, col: 1 };
const GOAL = { row: 7, col: 7 };

export default function MazeGame() {
  const [playerPos, setPlayerPos] = useState(START);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const resetMaze = useCallback(() => {
    setPlayerPos(START);
    setMoves(0);
    setIsComplete(false);
    setShowModal(false);
    setConfetti(false);
  }, []);

  const canMove = (row: number, col: number) => {
    if (row < 0 || row >= MAZE_GRID.length) return false;
    if (col < 0 || col >= MAZE_GRID[0].length) return false;
    return MAZE_GRID[row][col] === 0;
  };

  const move = (dRow: number, dCol: number) => {
    if (isComplete) return;
    const newRow = playerPos.row + dRow;
    const newCol = playerPos.col + dCol;
    if (!canMove(newRow, newCol)) return;
    setPlayerPos({ row: newRow, col: newCol });
    setMoves((m) => m + 1);
  };

  useEffect(() => {
    if (playerPos.row === GOAL.row && playerPos.col === GOAL.col) {
      setIsComplete(true);
      setConfetti(true);
      setTimeout(() => setShowModal(true), 500);
    }
  }, [playerPos]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": move(-1, 0); break;
        case "ArrowDown": move(1, 0); break;
        case "ArrowLeft": move(0, -1); break;
        case "ArrowRight": move(0, 1); break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playerPos, isComplete]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center select-none" id="maze-game">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card bg-gradient-to-t from-[#260517] via-[#240619]/90 to-[#170410] border border-[#ffb7c5]/30 rounded-3xl p-6 md:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative overflow-hidden"
      >
        {/* Maze Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb7c5]/10 border border-[#ffb7c5]/20 text-[#ffb7c5] text-xs font-tajawal mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>لعبة المتاهة</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white font-sans">
            متاهة الحب 💖
          </h3>
          <p className="text-sm text-pink-200/70 font-tajawal mt-2 max-w-md mx-auto">
            استخدمي الأزرار للوصول إلى قلب حبيبك في المتاهة 🗺️
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mb-6 text-sm">
          <span className="text-pink-200/60 font-tajawal font-bold">
            عدد الخطوات: <span className="text-[#ffb7c5]">{moves}</span>
          </span>
          {isComplete && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-[#ffb7c5] font-tajawal font-bold flex items-center gap-1"
            >
              <Heart className="w-4 h-4 fill-[#ffb7c5]" /> أكملت المتاهة!
            </motion.span>
          )}
        </div>

        {/* Maze Grid */}
        <div className="flex justify-center mb-6">
          <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${MAZE_GRID[0].length}, minmax(0, 1fr))` }}>
            {MAZE_GRID.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                const isPlayer = rIdx === playerPos.row && cIdx === playerPos.col;
                const isGoal = rIdx === GOAL.row && cIdx === GOAL.col;
                const isWall = cell === 1;
                return (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`
                      w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center text-lg
                      transition-colors duration-150
                      ${isWall ? 'bg-[#1c0211] border border-[#ffb7c5]/10' : 'bg-[#240619]/50 border border-[#ffb7c5]/5'}
                      ${isPlayer ? 'bg-[#e27d97]/30 border-[#ffb7c5] shadow-[0_0_12px_rgba(226,125,151,0.5)]' : ''}
                    `}
                  >
                    {isPlayer && <motion.span key={`p-${moves}`} initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="text-[#ffb7c5]">💖</motion.span>}
                    {isGoal && !isPlayer && <span className="text-[#d4af37]">⭐</span>}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Arrow Controls */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <button
            onClick={() => move(-1, 0)}
            disabled={isComplete}
            className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black flex items-center justify-center shadow-[0_4px_12px_rgba(226,125,151,0.4)] hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer active:scale-95"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => move(0, -1)}
              disabled={isComplete}
              className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black flex items-center justify-center shadow-[0_4px_12px_rgba(226,125,151,0.4)] hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => move(1, 0)}
              disabled={isComplete}
              className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black flex items-center justify-center shadow-[0_4px_12px_rgba(226,125,151,0.4)] hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer active:scale-95"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
            <button
              onClick={() => move(0, 1)}
              disabled={isComplete}
              className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black flex items-center justify-center shadow-[0_4px_12px_rgba(226,125,151,0.4)] hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer active:scale-95"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Reset button */}
        <button
          onClick={resetMaze}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#ffb7c5]/30 bg-[#ffb7c5]/5 hover:bg-[#ffb7c5]/10 text-[#ffb7c5] font-tajawal text-sm font-bold transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة المتاهة
        </button>
      </motion.div>

      {/* Confetti effect on completion */}
      <AnimatePresence>
        {confetti && (
          <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -60, x: Math.random() * 100 + "%", opacity: 1, rotate: 0 }}
                animate={{ y: "110vh", opacity: 0, rotate: 720 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 0.5, ease: "easeIn" }}
                className="absolute text-xl"
                style={{ left: `${Math.random() * 100}%` }}
              >
                {["💖", "✨", "🎉", "💕", "🌹", "🥰"][Math.floor(Math.random() * 6)]}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Love Message Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 70 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative w-full max-w-lg glass-card bg-[#240619]/95 border-2 border-[#ffb7c5] rounded-3xl p-8 md:p-10 text-center shadow-[0_24px_50px_rgba(0,0,0,0.8)] z-10"
            >
              <div className="w-16 h-16 rounded-full bg-pink-400/10 border border-[#ffb7c5]/40 flex items-center justify-center text-[#ffb7c5] mx-auto mb-6">
                <Heart className="w-9 h-9 text-[#ffb7c5] fill-[#ffb7c5]" />
              </div>
              <span className="text-[#ffb7c5] font-black tracking-widest text-xs uppercase font-tajawal mb-1 block">
                🎉 مبروك! لقد وصلتي إلى قلب حبيبك
              </span>
              <h4 className="text-2xl font-black text-white font-sans tracking-wide leading-tight mb-4">
                رسالة حب من أعماق القلب 💌
              </h4>
              <div className="text-pink-50 font-sans text-base sm:text-lg leading-relaxed mb-8 border-y border-[#ffb7c5]/15 py-5 font-bold">
                <p className="mb-4">
                  "حبيبتي بصمة حياتي، كل خطوة في هذه المتاهة كانت تذكرني كم أنا محظوظ لأنك اخترتِ أن تكوني شريكة عمري.
                </p>
                <p className="mb-4">
                  أنتِ لستِ مجرد حب، أنتِ دنياي كلها، وأعدك أن أكون لكِ سنداً وظلاً في كل أيام العيد وكل أيام العمر."
                </p>
                <p>
                  كل عام وأنتِ بألف خير يا أغلى ما في الوجود ❤️🌹
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e27d97] to-[#ffb7c5] text-black font-black font-sans text-sm transition-all shadow-[0_5px_15px_rgba(226,125,151,0.3)] cursor-pointer outline-none"
              >
                أحبكِ يا بصمة عمري 💍❤️
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
