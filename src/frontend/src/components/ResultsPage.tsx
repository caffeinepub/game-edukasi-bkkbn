import { useEffect, useRef } from "react";
import { useLeaderboard } from "../hooks/useLeaderboard";
import type { Module } from "../types";

interface ResultsPageProps {
  module: Module;
  playerName: string;
  score: number;
  onViewMaterial: () => void;
  onLeaderboard: () => void;
  onRetry: () => void;
  onHome: () => void;
}

function getGrade(score: number): {
  label: string;
  emoji: string;
  color: string;
} {
  if (score >= 90)
    return { label: "Luar Biasa!", emoji: "🌟", color: "#22c55e" };
  if (score >= 70) return { label: "Bagus!", emoji: "👍", color: "#2D9CDB" };
  if (score >= 50) return { label: "Cukup", emoji: "😊", color: "#FFB020" };
  return { label: "Perlu Belajar Lagi", emoji: "📚", color: "#F55A2A" };
}

function getMotivation(score: number): string {
  if (score >= 90)
    return "Luar biasa! Kamu sangat memahami materi ini. Terus pertahankan prestasi terbaikmu!";
  if (score >= 70)
    return "Bagus sekali! Kamu sudah memahami sebagian besar materi. Sedikit lagi untuk sempurna!";
  if (score >= 50)
    return "Lumayan! Kamu sudah belajar dengan baik. Coba baca materi lagi untuk meningkatkan pemahamanmu.";
  return "Jangan menyerah! Baca kembali Lembar Balik dan coba lagi. Kamu pasti bisa mendapat skor lebih baik!";
}

export default function ResultsPage({
  module: mod,
  playerName,
  score,
  onViewMaterial,
  onLeaderboard,
  onRetry,
  onHome,
}: ResultsPageProps) {
  const { addEntry } = useLeaderboard();
  const saved = useRef(false);
  const grade = getGrade(score);
  const correct = score / 10;

  useEffect(() => {
    if (saved.current) return;
    saved.current = true;
    addEntry({
      name: playerName,
      score,
      date: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      moduleId: mod.id,
      moduleTitle: mod.title,
    });
  }, [addEntry, mod.id, mod.title, playerName, score]);

  return (
    <div className="min-h-screen bg-[#F3F8FF] flex flex-col items-center justify-center px-4 py-10 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div
          className="py-8 px-6 text-white text-center"
          style={{
            background: `linear-gradient(135deg, ${mod.gradientFrom} 0%, ${mod.gradientTo} 100%)`,
          }}
        >
          <div className="text-5xl mb-2 animate-bounce-in">{mod.emoji}</div>
          <h1 className="text-lg font-black">Hasil Kuis</h1>
          <p className="text-white/80 text-sm">{mod.title}</p>
        </div>

        <div className="p-6">
          {/* Score display */}
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">{grade.emoji}</div>
            <div
              data-ocid="results.score.panel"
              className="text-6xl font-black mb-1 animate-score"
              style={{ color: grade.color }}
            >
              {score}
              <span className="text-2xl text-gray-400">/100</span>
            </div>
            <div
              className="inline-block text-white font-black text-sm px-4 py-1.5 rounded-full mb-3"
              style={{ background: grade.color }}
            >
              {grade.label}
            </div>
            <p className="text-gray-500 text-xs">
              Jawaban benar: <strong>{correct}</strong> dari <strong>10</strong>{" "}
              soal
            </p>
          </div>

          {/* Player info */}
          <div className="bg-blue-50 rounded-xl p-4 mb-5 text-center">
            <p className="text-gray-600 text-sm">
              Pemain: <strong className="text-[#003087]">{playerName}</strong>
            </p>
            <p className="text-gray-500 text-xs mt-1">{getMotivation(score)}</p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              type="button"
              data-ocid="results.leaderboard.button"
              onClick={onLeaderboard}
              className="w-full py-3 rounded-xl text-white font-black text-sm hover:opacity-90 transition-opacity shadow"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              🏆 Lihat Papan Peringkat
            </button>
            <button
              type="button"
              data-ocid="results.view-material.button"
              onClick={onViewMaterial}
              className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors"
            >
              📖 Lihat Materi Lagi
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                data-ocid="results.retry.button"
                onClick={onRetry}
                className="flex-1 py-2.5 rounded-xl border-2 font-bold text-sm transition-colors hover:bg-blue-50"
                style={{ borderColor: mod.accentColor, color: mod.accentColor }}
              >
                🔄 Ulangi
              </button>
              <button
                type="button"
                data-ocid="results.home.button"
                onClick={onHome}
                className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                🏠 Beranda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
