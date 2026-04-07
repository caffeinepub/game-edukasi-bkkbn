import { MODULES } from "../data/modules";
import type { ModuleId } from "../types";

interface HomeScreenProps {
  onSelectModule: (id: ModuleId) => void;
  onGlobalLeaderboard: () => void;
}

const HOW_TO_STEPS = [
  {
    step: "1",
    icon: "📚",
    title: "Baca Materi",
    desc: "Buka Lembar Balik dan pelajari materi dengan saksama",
  },
  {
    step: "2",
    icon: "✍️",
    title: "Masukkan Nama",
    desc: "Masukkan namamu untuk papan peringkat",
  },
  {
    step: "3",
    icon: "🎯",
    title: "Jawab Kuis",
    desc: "Jawab 10 pertanyaan pilihan ganda dengan tepat",
  },
  {
    step: "4",
    icon: "🏆",
    title: "Lihat Skor",
    desc: "Cek skormu dan bandingkan di papan peringkat",
  },
];

export default function HomeScreen({
  onSelectModule,
  onGlobalLeaderboard,
}: HomeScreenProps) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="py-12 px-4 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #003087 0%, #0B3D91 50%, #2D9CDB 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-4">🇮🇩</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Selamat Datang di
            <span className="block text-[#F5B700]">Game Edukasi BKKBN</span>
          </h1>
          <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-xl mx-auto">
            Platform belajar interaktif untuk remaja dan orang tua tentang
            kesehatan keluarga, reproduksi, dan perencanaan hidup yang lebih
            baik.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
              🎮 5 Modul Kuis
            </span>
            <span className="bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
              📚 Lembar Balik Interaktif
            </span>
            <span className="bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
              🏆 Papan Peringkat
            </span>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-black text-[#003087] text-center mb-2">
          Pilih Modul Belajar
        </h2>
        <p className="text-gray-500 text-center mb-8 text-sm sm:text-base">
          Setiap modul memiliki materi bacaan dan 10 soal kuis. Ayo mulai
          belajar!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {MODULES.map((mod, idx) => (
            <button
              type="button"
              key={mod.id}
              data-ocid={`module.card.${idx + 1}`}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col text-left"
              style={{
                background: `linear-gradient(160deg, ${mod.gradientFrom} 0%, ${mod.gradientTo} 100%)`,
              }}
              onClick={() => onSelectModule(mod.id)}
            >
              <div className="p-5 flex flex-col flex-1">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  {mod.emoji}
                </div>
                <h3 className="text-white font-black text-base text-center leading-tight mb-2">
                  {mod.title}
                </h3>
                <p className="text-white/80 text-xs text-center mb-4 flex-1">
                  {mod.subtitle}
                </p>
                <div className="flex items-center justify-center gap-3 text-white/70 text-xs mb-4">
                  <span>📖 Materi</span>
                  <span>•</span>
                  <span>❓ 10 Soal</span>
                </div>
                <div className="w-full bg-white/20 hover:bg-white/30 text-white font-bold text-sm py-2.5 rounded-xl transition-colors border border-white/30 text-center">
                  Main Sekarang →
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-[#003087] mb-8">
            Cara Bermain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {HOW_TO_STEPS.map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg mb-3"
                  style={{ background: "#003087" }}
                >
                  {item.step}
                </div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-[#003087] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Leaderboard CTA */}
      <section className="py-10 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-4xl mb-3">🏆</div>
          <h2 className="text-2xl font-black text-[#003087] mb-2">
            Papan Peringkat Global
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Lihat siapa yang mendapat skor terbaik di semua modul!
          </p>
          <button
            type="button"
            data-ocid="home.global_leaderboard.button"
            onClick={onGlobalLeaderboard}
            className="bg-[#F5B700] hover:bg-[#e0a800] text-[#003087] font-black text-base px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            Lihat Papan Peringkat Global 🏅
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003087] text-white/70 text-center text-xs py-4 px-4">
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white/90 hover:text-white"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
