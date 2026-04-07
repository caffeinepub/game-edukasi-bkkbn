import { useState } from "react";
import type { Module } from "../types";

interface NameEntryPageProps {
  module: Module;
  onStart: (name: string) => void;
  onBack: () => void;
}

export default function NameEntryPage({
  module: mod,
  onStart,
  onBack,
}: NameEntryPageProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Nama minimal 2 karakter");
      return;
    }
    onStart(trimmed);
  };

  return (
    <div className="min-h-screen bg-[#F3F8FF] flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full overflow-hidden">
        {/* Header gradient */}
        <div
          className="py-8 px-6 text-white text-center"
          style={{
            background: `linear-gradient(135deg, ${mod.gradientFrom} 0%, ${mod.gradientTo} 100%)`,
          }}
        >
          <div className="text-5xl mb-3 animate-bounce-in">{mod.emoji}</div>
          <h1 className="text-xl font-black mb-1">{mod.title}</h1>
          <p className="text-white/80 text-sm">
            Siap bermain? Masukkan namamu dulu!
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">
              Namamu akan tampil di papan peringkat jika berhasil mendapat skor
              tinggi. 🏆
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="player-name"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Nama Pemain
              </label>
              <input
                id="player-name"
                data-ocid="name-entry.input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder="Masukkan nama kamu..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#003087] focus:outline-none text-base font-medium transition-colors"
                maxLength={30}
              />
              {error && (
                <p
                  data-ocid="name-entry.error_state"
                  className="text-red-500 text-xs mt-1 font-medium"
                >
                  ⚠️ {error}
                </p>
              )}
            </div>

            {/* Quiz info */}
            <div className="bg-blue-50 rounded-xl p-4 mb-5 text-sm text-blue-700">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="font-black text-lg text-[#003087]">10</div>
                  <div className="text-xs">Pertanyaan</div>
                </div>
                <div>
                  <div className="font-black text-lg text-[#003087]">100</div>
                  <div className="text-xs">Skor Maks</div>
                </div>
                <div>
                  <div className="font-black text-lg text-[#003087]">🏆</div>
                  <div className="text-xs">Peringkat</div>
                </div>
              </div>
            </div>

            <button
              data-ocid="name-entry.submit.button"
              type="submit"
              disabled={name.trim().length < 2}
              className="w-full py-3.5 rounded-xl text-white font-black text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              🎮 Mulai Bermain!
            </button>
          </form>

          <button
            type="button"
            data-ocid="name-entry.back.button"
            onClick={onBack}
            className="w-full mt-3 py-2.5 text-gray-500 font-semibold text-sm hover:text-gray-700 transition-colors"
          >
            ← Kembali ke Materi
          </button>
        </div>
      </div>
    </div>
  );
}
