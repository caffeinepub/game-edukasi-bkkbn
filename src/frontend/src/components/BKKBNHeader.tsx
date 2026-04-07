interface BKKBNHeaderProps {
  onHome: () => void;
  onGlobalLeaderboard: () => void;
}

export default function BKKBNHeader({
  onHome,
  onGlobalLeaderboard,
}: BKKBNHeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <button
          type="button"
          data-ocid="header.home.button"
          onClick={onHome}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HapCGO475tDSF1XUKufcOziyuQDeev6ldA&s"
            alt="Logo BKKBN"
            className="h-11 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <div className="text-xl font-black text-[#003087] leading-tight tracking-wide">
              BKKBN
            </div>
            <div className="text-[10px] text-gray-500 leading-tight font-medium">
              Badan Kependudukan dan Keluarga Berencana
            </div>
          </div>
        </button>

        {/* Nav */}
        <nav
          className="flex items-center gap-2 sm:gap-4"
          aria-label="Navigasi Utama"
        >
          <button
            type="button"
            data-ocid="header.home.link"
            onClick={onHome}
            className="text-[#003087] font-semibold text-sm hover:text-[#F5B700] transition-colors hidden sm:block"
          >
            Beranda
          </button>
          <button
            type="button"
            data-ocid="header.leaderboard.link"
            onClick={onGlobalLeaderboard}
            className="text-[#003087] font-semibold text-sm hover:text-[#F5B700] transition-colors hidden sm:block"
          >
            Papan Peringkat
          </button>
          <button
            type="button"
            data-ocid="header.play.button"
            onClick={onHome}
            className="bg-[#003087] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-[#00236b] transition-colors shadow"
          >
            Main Sekarang
          </button>
        </nav>
      </div>

      {/* Rainbow accent strip */}
      <div className="h-1 flex">
        <div className="flex-1" style={{ background: "#003087" }} />
        <div className="flex-1" style={{ background: "#2D9CDB" }} />
        <div className="flex-1" style={{ background: "#2ECC71" }} />
        <div className="flex-1" style={{ background: "#F5B700" }} />
        <div className="flex-1" style={{ background: "#FFB020" }} />
        <div className="flex-1" style={{ background: "#8B5CF6" }} />
        <div className="flex-1" style={{ background: "#E11D48" }} />
      </div>
    </header>
  );
}
