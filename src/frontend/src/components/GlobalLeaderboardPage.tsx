import { useState } from "react";
import { MODULES } from "../data/modules";
import { useLeaderboard } from "../hooks/useLeaderboard";
import type { ModuleId } from "../types";

interface GlobalLeaderboardPageProps {
  onBack: () => void;
}

const MEDALS: Record<number, string> = { 0: "🥇", 1: "🥈", 2: "🥉" };

export default function GlobalLeaderboardPage({
  onBack,
}: GlobalLeaderboardPageProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | ModuleId>("all");
  const { getAllEntries, getModuleEntries } = useLeaderboard();

  const allEntries = getAllEntries();
  const filteredEntries =
    activeFilter === "all" ? allEntries : getModuleEntries(activeFilter);

  const moduleMap = Object.fromEntries(MODULES.map((m) => [m.id, m]));

  return (
    <div className="min-h-screen bg-[#F3F8FF] animate-fade-in">
      {/* Header */}
      <div
        className="py-10 px-4 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #003087 0%, #0B3D91 50%, #2D9CDB 100%)",
        }}
      >
        <div className="text-5xl mb-3">🏆</div>
        <h1 className="text-3xl font-black mb-2">Papan Peringkat Global</h1>
        <p className="text-blue-100 text-sm">
          Skor terbaik dari semua modul kuis BKKBN
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Filter tabs */}
        <div
          data-ocid="global-leaderboard.filter.tab"
          className="flex flex-wrap gap-2 mb-6"
        >
          <button
            type="button"
            data-ocid="global-leaderboard.all.tab"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              activeFilter === "all"
                ? "bg-[#003087] text-white"
                : "bg-white text-[#003087] border border-gray-200 hover:bg-blue-50"
            }`}
          >
            Semua Modul
          </button>
          {MODULES.map((mod) => (
            <button
              type="button"
              key={mod.id}
              data-ocid={`global-leaderboard.module.tab.${MODULES.indexOf(mod) + 1}`}
              onClick={() => setActiveFilter(mod.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                activeFilter === mod.id
                  ? "text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
              style={
                activeFilter === mod.id
                  ? {
                      background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
                    }
                  : {}
              }
            >
              {mod.emoji} {mod.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        {filteredEntries.length === 0 ? (
          <div
            data-ocid="global-leaderboard.empty_state"
            className="bg-white rounded-2xl shadow p-12 text-center"
          >
            <div className="text-5xl mb-4">🎮</div>
            <h2 className="font-black text-[#003087] text-lg mb-2">
              Belum ada skor
            </h2>
            <p className="text-gray-500 text-sm">
              Mulai bermain dan jadilah yang pertama masuk papan peringkat!
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="divide-y divide-gray-100">
              {filteredEntries.map((entry, index) => {
                const mod = moduleMap[entry.moduleId];
                return (
                  <div
                    key={`${entry.name}-${entry.moduleId}-${entry.date}-${index}`}
                    data-ocid={`global-leaderboard.item.${index + 1}`}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
                  >
                    {/* Rank */}
                    <div
                      className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center font-black text-sm ${
                        index < 3 ? "text-white" : "bg-gray-100 text-gray-600"
                      }`}
                      style={index < 3 ? { background: "#003087" } : {}}
                    >
                      {index < 3 ? MEDALS[index] : index + 1}
                    </div>

                    {/* Name + module */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">
                        {entry.name}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {mod && (
                          <span
                            className="text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
                            }}
                          >
                            {mod.emoji}{" "}
                            {mod.title.split(" ").slice(0, 2).join(" ")}
                          </span>
                        )}
                        <span className="text-gray-400 text-xs">
                          {entry.date}
                        </span>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <div className="font-black text-lg text-[#003087]">
                        {entry.score}
                        <span className="text-xs text-gray-400 font-normal">
                          /100
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-6">
          <button
            type="button"
            data-ocid="global-leaderboard.back.button"
            onClick={onBack}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
