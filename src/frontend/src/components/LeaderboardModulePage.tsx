import { useLeaderboard } from "../hooks/useLeaderboard";
import type { Module } from "../types";

interface LeaderboardModulePageProps {
  module: Module;
  onBack: () => void;
  onRetry: () => void;
}

const MEDALS: Record<number, string> = { 0: "🥇", 1: "🥈", 2: "🥉" };

export default function LeaderboardModulePage({
  module: mod,
  onBack,
  onRetry,
}: LeaderboardModulePageProps) {
  const { getModuleEntries } = useLeaderboard();
  const entries = getModuleEntries(mod.id);

  return (
    <div className="min-h-screen bg-[#F3F8FF] animate-fade-in">
      {/* Header */}
      <div
        className="py-8 px-4 text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${mod.gradientFrom} 0%, ${mod.gradientTo} 100%)`,
        }}
      >
        <div className="text-5xl mb-3">{mod.emoji}</div>
        <h1 className="text-2xl font-black mb-1">{mod.title}</h1>
        <p className="text-white/80 text-sm">🏆 Papan Peringkat — Top 10</p>
      </div>

      <div className="max-w-xl mx-auto px-4 py-8">
        {entries.length === 0 ? (
          <div
            data-ocid="leaderboard.empty_state"
            className="bg-white rounded-2xl shadow p-10 text-center"
          >
            <div className="text-5xl mb-4">🎮</div>
            <h2 className="font-black text-[#003087] text-lg mb-2">
              Belum ada skor
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Jadilah yang pertama bermain dan masuk ke papan peringkat!
            </p>
            <button
              type="button"
              data-ocid="leaderboard.play.button"
              onClick={onRetry}
              className="px-6 py-3 rounded-xl text-white font-black text-sm hover:opacity-90 transition-opacity shadow"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              🎮 Main Sekarang!
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {/* Top 3 podium */}
            {entries.length >= 1 && (
              <div
                className="p-5"
                style={{
                  background: `linear-gradient(135deg, ${mod.gradientFrom}22, ${mod.gradientTo}22)`,
                }}
              >
                <h3 className="text-center font-black text-[#003087] mb-4 text-sm">
                  🏅 TOP PEMAIN
                </h3>
                <div className="flex justify-center items-end gap-3">
                  {entries
                    .slice(0, Math.min(3, entries.length))
                    .map((entry, i) => (
                      <div
                        key={entry.name}
                        data-ocid={`leaderboard.top.item.${i + 1}`}
                        className={`flex flex-col items-center rounded-xl p-3 ${
                          i === 0
                            ? "bg-yellow-50 border-2 border-yellow-300"
                            : "bg-white border border-gray-200"
                        }`}
                        style={{ minWidth: i === 0 ? 100 : 80 }}
                      >
                        <div className="text-2xl mb-1">{MEDALS[i]}</div>
                        <div className="font-black text-[#003087] text-xs text-center truncate w-full">
                          {entry.name}
                        </div>
                        <div
                          className="font-black text-base mt-1"
                          style={{ color: mod.accentColor }}
                        >
                          {entry.score}
                        </div>
                        <div className="text-gray-400 text-[10px]">poin</div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Full ranking list */}
            <div className="divide-y divide-gray-100">
              {entries.map((entry, index) => (
                <div
                  key={`${entry.name}-${entry.date}-${index}`}
                  data-ocid={`leaderboard.item.${index + 1}`}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-black text-sm ${
                      index < 3 ? "text-white" : "bg-gray-100 text-gray-600"
                    }`}
                    style={index < 3 ? { background: mod.accentColor } : {}}
                  >
                    {index < 3 ? MEDALS[index] : index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">
                      {entry.name}
                    </p>
                    <p className="text-gray-400 text-xs">{entry.date}</p>
                  </div>
                  <div
                    className="font-black text-lg"
                    style={{ color: mod.accentColor }}
                  >
                    {entry.score}
                    <span className="text-xs text-gray-400 font-normal">
                      /100
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="button"
            data-ocid="leaderboard.back.button"
            onClick={onBack}
            className="flex-1 px-5 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            ← Kembali ke Beranda
          </button>
          <button
            type="button"
            data-ocid="leaderboard.retry.button"
            onClick={onRetry}
            className="flex-1 px-5 py-3 rounded-xl text-white font-black text-sm hover:opacity-90 transition-opacity shadow"
            style={{
              background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
            }}
          >
            🔄 Main Lagi
          </button>
        </div>
      </div>
    </div>
  );
}
