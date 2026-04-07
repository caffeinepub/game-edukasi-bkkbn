import type { Module } from "../types";

interface LembarBalikPageProps {
  module: Module;
  mode: "before" | "after";
  onStart: () => void;
  onBack: () => void;
}

export default function LembarBalikPage({
  module: mod,
  mode,
  onStart,
  onBack,
}: LembarBalikPageProps) {
  const isAfter = mode === "after";

  return (
    <div className="min-h-screen bg-[#F3F8FF] animate-fade-in">
      {/* Module header banner */}
      <div
        className="py-8 px-4 text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${mod.gradientFrom} 0%, ${mod.gradientTo} 100%)`,
        }}
      >
        <div className="text-5xl mb-3">{mod.emoji}</div>
        <h1 className="text-2xl sm:text-3xl font-black mb-1">{mod.title}</h1>
        <p className="text-white/80 text-sm">
          {isAfter
            ? "📖 Pelajari kembali materi setelah bermain"
            : "📖 Baca materi ini sebelum mulai bermain"}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ background: mod.accentColor }}
          >
            📋
          </span>
          <h2 className="text-xl font-black text-[#003087]">
            Lembar Balik — Materi Pembelajaran
          </h2>
        </div>

        {/* Content cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {mod.lembarBalik.map((section) => (
            <div
              key={section.title}
              data-ocid={`lembar-balik.card.${mod.lembarBalik.indexOf(section) + 1}`}
              className="bg-white rounded-2xl shadow-sm overflow-hidden animate-fade-in"
            >
              {/* Colored top border */}
              <div
                className="h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
                }}
              />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{section.emoji}</span>
                  <h3 className="font-black text-[#003087] text-base">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {section.content}
                </p>
                {section.highlight && (
                  <div
                    className="rounded-xl p-3 text-sm font-semibold"
                    style={{
                      background: `${mod.accentColor}18`,
                      color: mod.gradientTo,
                      borderLeft: `3px solid ${mod.accentColor}`,
                    }}
                  >
                    💡 {section.highlight}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            data-ocid="lembar-balik.back.button"
            onClick={onBack}
            className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition-colors"
          >
            ← Kembali
          </button>
          <button
            type="button"
            data-ocid="lembar-balik.start.button"
            onClick={onStart}
            className="px-8 py-3 rounded-xl text-white font-black text-base hover:opacity-90 transition-opacity shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
            }}
          >
            {isAfter ? "🏆 Lihat Papan Peringkat →" : "🎮 Mulai Kuis →"}
          </button>
        </div>
      </div>
    </div>
  );
}
