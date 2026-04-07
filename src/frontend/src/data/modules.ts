import type { Module } from "../types";

export const MODULES: Module[] = [
  {
    id: "siklus-hidup",
    title: "Siklus Hidup Manusia",
    subtitle: "Pahami tahapan kehidupan dari bayi hingga lansia",
    emoji: "🌱",
    gradientFrom: "#2D9CDB",
    gradientTo: "#0B3D91",
    accentColor: "#2D9CDB",
    lembarBalik: [
      {
        title: "Tahapan Kehidupan Manusia",
        emoji: "🧬",
        content:
          "Kehidupan manusia melewati 5 tahap utama: Masa Bayi (0-2 tahun), Masa Anak (3-12 tahun), Masa Remaja (13-19 tahun), Masa Dewasa (20-60 tahun), dan Masa Lansia (>60 tahun). Setiap tahap memiliki karakteristik fisik dan psikologis yang unik.",
        highlight:
          "Memahami tahapan ini membantu kita mempersiapkan diri di setiap fase kehidupan.",
      },
      {
        title: "Perkembangan Fisik",
        emoji: "💪",
        content:
          "Setiap tahap kehidupan ditandai perubahan fisik yang berbeda. Bayi mengalami pertumbuhan pesat dalam berat dan tinggi badan. Masa anak aktif bergerak dan motorik berkembang. Remaja mengalami pubertas dengan perubahan hormonal. Dewasa mencapai puncak fisik. Lansia mengalami penurunan fungsi fisik secara bertahap.",
      },
      {
        title: "Perkembangan Emosional",
        emoji: "❤️",
        content:
          "Emosi berkembang seiring usia. Bayi mengenal rasa aman dan tidak aman. Anak belajar empati dan bersosialisasi. Remaja mencari identitas diri. Dewasa mengelola emosi lebih matang. Lansia mengembangkan kebijaksanaan dan penerimaan diri.",
        highlight:
          "Setiap emosi yang dirasakan adalah normal sesuai tahap perkembangan.",
      },
      {
        title: "Masa Remaja (10-19 tahun)",
        emoji: "🌟",
        content:
          "Remaja adalah fase transisi dari anak menuju dewasa. Ditandai dengan pubertas, pencarian identitas diri, perkembangan kognitif yang pesat, dan sosialisasi yang lebih luas. WHO mendefinisikan remaja sebagai individu berusia 10-19 tahun.",
      },
      {
        title: "Menjaga Kesehatan di Setiap Tahap",
        emoji: "🏥",
        content:
          "Tips kesehatan per tahap: Bayi: ASI eksklusif 6 bulan pertama. Anak: imunisasi lengkap dan gizi seimbang. Remaja: olahraga rutin dan istirahat cukup. Dewasa: pemeriksaan kesehatan rutin. Lansia: tetap aktif fisik dan mental serta bersosialisasi.",
        highlight: "Investasi kesehatan terbaik dimulai sejak dini!",
      },
    ],
    questions: [
      {
        id: 1,
        question: "Berapa usia remaja menurut definisi WHO?",
        options: ["5-10 tahun", "10-19 tahun", "20-25 tahun", "25-30 tahun"],
        correctIndex: 1,
        explanation:
          "WHO mendefinisikan remaja sebagai individu berusia 10-19 tahun, mencakup masa pubertas hingga awal dewasa muda.",
      },
      {
        id: 2,
        question:
          "Apa ciri utama perkembangan fisik pada masa bayi (0-2 tahun)?",
        options: [
          "Pertumbuhan gigi geraham",
          "Pertumbuhan berat badan sangat pesat",
          "Perkembangan seksual sekunder",
          "Kemampuan berlari kencang",
        ],
        correctIndex: 1,
        explanation:
          "Bayi mengalami pertumbuhan berat badan paling pesat dalam hidupnya, dari sekitar 3 kg menjadi 3x lipat di usia 1 tahun.",
      },
      {
        id: 3,
        question: "Periode kehidupan mana yang ditandai dengan pubertas?",
        options: ["Masa bayi", "Masa anak", "Masa remaja", "Masa dewasa"],
        correctIndex: 2,
        explanation:
          "Pubertas terjadi pada masa remaja sebagai tanda kematangan seksual dan perubahan fisik yang signifikan.",
      },
      {
        id: 4,
        question:
          "Apa yang dimaksud dengan 'golden age' pada perkembangan anak?",
        options: [
          "Usia 10-15 tahun",
          "Usia 0-6 tahun",
          "Usia 15-20 tahun",
          "Usia 20-25 tahun",
        ],
        correctIndex: 1,
        explanation:
          "Golden age adalah periode 0-6 tahun ketika otak berkembang pesat hingga 80% dari total perkembangan otak.",
      },
      {
        id: 5,
        question:
          "Pada masa lansia, apa yang umumnya terjadi pada fungsi organ tubuh?",
        options: [
          "Semakin meningkat",
          "Tetap sama seperti dewasa",
          "Menurun secara bertahap",
          "Tiba-tiba berhenti",
        ],
        correctIndex: 2,
        explanation:
          "Proses penuaan menyebabkan penurunan fungsi semua organ tubuh secara bertahap, ini adalah proses alami.",
      },
      {
        id: 6,
        question: "Perubahan emosional yang normal pada remaja adalah?",
        options: [
          "Selalu tenang dan stabil",
          "Tidak pernah marah",
          "Mood yang berubah-ubah",
          "Tidak peduli lingkungan",
        ],
        correctIndex: 2,
        explanation:
          "Perubahan hormonal pada remaja menyebabkan mood yang tidak stabil, ini adalah hal yang normal dan wajar.",
      },
      {
        id: 7,
        question: "Usia berapa seseorang dianggap memasuki masa dewasa?",
        options: ["15 tahun", "18 tahun", "20-40 tahun", "50 tahun"],
        correctIndex: 2,
        explanation:
          "Masa dewasa umumnya dimulai sekitar usia 20 tahun setelah seseorang menyelesaikan masa remajanya.",
      },
      {
        id: 8,
        question: "Apa manfaat memahami siklus hidup manusia?",
        options: [
          "Hanya berguna untuk dokter",
          "Mempersiapkan setiap tahap kehidupan dengan lebih baik",
          "Tidak ada manfaatnya",
          "Hanya untuk orang tua",
        ],
        correctIndex: 1,
        explanation:
          "Memahami siklus hidup membantu kita mempersiapkan setiap fase, mengambil keputusan tepat, dan menjalani hidup lebih bermakna.",
      },
      {
        id: 9,
        question:
          "Pada masa anak (6-12 tahun), kemampuan apa yang berkembang pesat?",
        options: [
          "Kemampuan reproduksi",
          "Kemampuan kognitif dan sosial",
          "Hanya kemampuan fisik",
          "Kemampuan emosional lansia",
        ],
        correctIndex: 1,
        explanation:
          "Usia 6-12 tahun adalah periode perkembangan kognitif dan sosial yang sangat aktif, anak belajar membaca, berhitung, dan bersosialisasi.",
      },
      {
        id: 10,
        question: "Karakteristik utama lansia yang sehat adalah?",
        options: [
          "Tidak perlu berolahraga lagi",
          "Aktif secara fisik dan mental",
          "Banyak tidur dan istirahat saja",
          "Menghindari semua aktivitas sosial",
        ],
        correctIndex: 1,
        explanation:
          "Lansia sehat tetap aktif secara fisik dan mental, rajin bersosialisasi, dan menjaga pola hidup sehat untuk kualitas hidup yang baik.",
      },
    ],
  },
  {
    id: "pernikahan",
    title: "Persiapan Pernikahan",
    subtitle: "Siapkan diri sebelum melangkah ke jenjang pernikahan",
    emoji: "💍",
    gradientFrom: "#2ECC71",
    gradientTo: "#1B8D7A",
    accentColor: "#2ECC71",
    lembarBalik: [
      {
        title: "Usia Minimal Pernikahan",
        emoji: "📋",
        content:
          "UU No. 16 Tahun 2019 menetapkan usia minimal 19 tahun untuk pria dan wanita. Pernikahan di bawah usia ini memerlukan dispensasi pengadilan. Tujuannya adalah melindungi remaja dari risiko pernikahan dini yang merugikan.",
        highlight:
          "Batas usia 19 tahun bertujuan memastikan kesiapan fisik dan mental pasangan.",
      },
      {
        title: "Kesiapan Finansial",
        emoji: "💰",
        content:
          "Keuangan adalah salah satu fondasi penting pernikahan. Tips: miliki tabungan darurat 3-6 bulan pengeluaran, rencanakan anggaran bersama, diskusikan tujuan finansial jangka panjang, dan pahami aset serta kewajiban masing-masing pasangan.",
        highlight:
          "Konflik keuangan adalah salah satu penyebab utama perceraian.",
      },
      {
        title: "Kesiapan Emosional dan Mental",
        emoji: "🧠",
        content:
          "Kematangan emosional meliputi: kemampuan komunikasi asertif, manajemen konflik yang sehat, empati terhadap pasangan, dan komitmen jangka panjang. Konseling pranikah sangat dianjurkan untuk mempersiapkan diri menghadapi kehidupan rumah tangga.",
      },
      {
        title: "Hak dan Kewajiban Suami Istri",
        emoji: "⚖️",
        content:
          "Berdasarkan UU Perkawinan, suami berkewajiban memberi nafkah lahir dan batin. Istri berhak atas perlindungan dan pendidikan. Keduanya memiliki hak dan kewajiban yang setara dalam mengasuh anak dan membangun keluarga yang harmonis.",
        highlight:
          "Pernikahan adalah kemitraan setara berdasarkan rasa hormat dan kasih sayang.",
      },
      {
        title: "Dasar Keluarga Berencana",
        emoji: "👨\u200d👩\u200d👧",
        content:
          "KB bukan hanya tentang kontrasepsi, tetapi merencanakan keluarga ideal: jumlah anak, jarak kehamilan, waktu terbaik memulai keluarga. Program BKKBN mendukung keluarga merencanakan masa depan yang lebih baik dan berkualitas.",
      },
    ],
    questions: [
      {
        id: 1,
        question:
          "Berapa usia minimal menikah di Indonesia menurut UU No. 16 Tahun 2019?",
        options: ["17 tahun", "18 tahun", "19 tahun", "21 tahun"],
        correctIndex: 2,
        explanation:
          "UU No. 16/2019 menetapkan usia minimal 19 tahun untuk pria dan wanita, naik dari aturan sebelumnya yang berbeda antara pria dan wanita.",
      },
      {
        id: 2,
        question: "Apa dampak pernikahan dini pada kesehatan perempuan?",
        options: [
          "Meningkatkan kesehatan reproduksi",
          "Risiko komplikasi kehamilan lebih tinggi",
          "Tidak ada dampak kesehatan",
          "Lebih mudah melahirkan",
        ],
        correctIndex: 1,
        explanation:
          "Pernikahan dini meningkatkan risiko komplikasi kehamilan, kematian ibu, dan berbagai masalah kesehatan reproduksi karena tubuh belum siap.",
      },
      {
        id: 3,
        question: "Kesiapan apa yang paling penting dalam pernikahan?",
        options: [
          "Kesiapan fisik saja",
          "Kesiapan materi saja",
          "Kesiapan fisik, mental, dan finansial secara bersamaan",
          "Kesiapan sosial saja",
        ],
        correctIndex: 2,
        explanation:
          "Pernikahan memerlukan kesiapan holistik: fisik, mental, emosional, dan finansial agar dapat membentuk keluarga yang harmonis dan bahagia.",
      },
      {
        id: 4,
        question:
          "Apa yang dimaksud dengan 'Bina Keluarga' dalam program BKKBN?",
        options: [
          "Larangan dalam pernikahan",
          "Program pembinaan keluarga berdasarkan tahap usia",
          "Syarat mendaftar nikah",
          "Jenis asuransi keluarga",
        ],
        correctIndex: 1,
        explanation:
          "Bina Keluarga adalah program BKKBN yang membina keluarga berdasarkan tahap usia: Bina Keluarga Balita, Remaja, dan Lansia.",
      },
      {
        id: 5,
        question:
          "Dokumen apa yang wajib disiapkan untuk menikah secara resmi di Indonesia?",
        options: [
          "Hanya KTP saja",
          "KTP, Akta Kelahiran, dan surat keterangan dari kelurahan",
          "Hanya ijazah sekolah",
          "Hanya kartu BPJS",
        ],
        correctIndex: 1,
        explanation:
          "Dokumen wajib pernikahan di Indonesia meliputi KTP, Akta Kelahiran, dan berbagai surat dari kelurahan serta instansi terkait lainnya.",
      },
      {
        id: 6,
        question: "Mengapa perencanaan keuangan penting sebelum menikah?",
        options: [
          "Untuk memamerkan kekayaan",
          "Tidak penting bagi pasangan muda",
          "Mencegah konflik finansial dan mempersiapkan masa depan keluarga",
          "Hanya kewajiban pihak pria",
        ],
        correctIndex: 2,
        explanation:
          "Konflik keuangan adalah salah satu penyebab utama perceraian. Perencanaan finansial membantu pasangan membangun pondasi rumah tangga yang kuat.",
      },
      {
        id: 7,
        question:
          "Apa fungsi kursus pranikah atau bimbingan persiapan pernikahan?",
        options: [
          "Tidak ada fungsinya",
          "Hanya formalitas administrasi",
          "Mempersiapkan pasangan menghadapi kehidupan berumah tangga",
          "Hanya untuk pasangan bermasalah",
        ],
        correctIndex: 2,
        explanation:
          "Kursus pranikah membantu pasangan memahami hak-kewajiban, keterampilan komunikasi, dan mempersiapkan kehidupan berumah tangga yang harmonis.",
      },
      {
        id: 8,
        question: "Berapa lama idealnya masa perkenalan sebelum menikah?",
        options: [
          "Satu minggu sudah cukup",
          "Satu bulan sudah cukup",
          "Minimal 6 bulan hingga beberapa tahun",
          "10 tahun barulah cukup",
        ],
        correctIndex: 2,
        explanation:
          "Masa perkenalan yang memadai (minimal 6 bulan) membantu pasangan saling memahami karakter, nilai, dan kebiasaan masing-masing.",
      },
      {
        id: 9,
        question: "Apa hak perempuan dalam pernikahan menurut hukum Indonesia?",
        options: [
          "Perempuan tidak memiliki hak",
          "Hanya hak mengurus rumah tangga",
          "Hak nafkah, perlindungan, pendidikan, dan kesetaraan dalam keluarga",
          "Tidak diatur dalam hukum",
        ],
        correctIndex: 2,
        explanation:
          "Hukum Indonesia menjamin hak istri atas nafkah, perlindungan, pendidikan, dan kesetaraan dalam pengambilan keputusan keluarga.",
      },
      {
        id: 10,
        question: "Apa dampak positif dari program Keluarga Berencana (KB)?",
        options: [
          "Tidak ada dampak positif",
          "Meningkatkan kesejahteraan dan kualitas hidup keluarga",
          "Hanya menguntungkan pemerintah",
          "Membatasi hak asasi manusia",
        ],
        correctIndex: 1,
        explanation:
          "Program KB membantu keluarga merencanakan jumlah anak sesuai kemampuan, meningkatkan kualitas hidup dan pendidikan anak.",
      },
    ],
  },
  {
    id: "pus",
    title: "Pasangan Usia Subur",
    subtitle: "Kenali kesehatan reproduksi dan program KB untuk keluarga ideal",
    emoji: "👨\u200d👩\u200d👧",
    gradientFrom: "#FFB020",
    gradientTo: "#F55A2A",
    accentColor: "#FFB020",
    lembarBalik: [
      {
        title: "Siapa PUS?",
        emoji: "👫",
        content:
          "Pasangan Usia Subur adalah pasangan suami istri dimana istri berusia 15-49 tahun. Pada usia ini, wanita masih dalam masa reproduktif aktif. Indonesia memiliki jutaan PUS yang perlu mendapat layanan kesehatan reproduksi yang baik untuk keluarga berkualitas.",
      },
      {
        title: "Metode Kontrasepsi",
        emoji: "💊",
        content:
          "Pilihan KB modern: Pil (diminum harian), Suntik (setiap 1/3 bulan), IUD (3-10 tahun, reversibel), Implan (3-5 tahun), Kondom (setiap kali hubungan), MOW/MOP (sterilisasi permanen). Setiap metode memiliki kelebihan dan kekurangan masing-masing.",
        highlight:
          "Konsultasikan pilihan KB dengan tenaga kesehatan untuk hasil terbaik.",
      },
      {
        title: "Jarak Ideal Kehamilan",
        emoji: "📅",
        content:
          "WHO merekomendasikan jarak kehamilan minimal 2-3 tahun. Manfaatnya: ibu memiliki waktu pemulihan optimal, ASI eksklusif dapat diberikan penuh, anak pertama mendapat perhatian lebih, dan risiko komplikasi kehamilan berkurang secara signifikan.",
      },
      {
        title: "Nutrisi Kehamilan",
        emoji: "🥗",
        content:
          "Ibu hamil memerlukan: Asam folat (mencegah cacat tabung saraf), Zat besi (mencegah anemia), Kalsium (tulang janin), Protein (pertumbuhan janin), dan Vitamin D. Penuhi dari makanan bergizi dan suplemen yang direkomendasikan tenaga kesehatan.",
        highlight:
          "Nutrisi yang baik sejak awal kehamilan menentukan kesehatan bayi seumur hidup.",
      },
      {
        title: "Pemeriksaan Kehamilan (ANC)",
        emoji: "🏥",
        content:
          "Antenatal Care minimal 4 kali selama kehamilan: trimester 1 (1x), trimester 2 (1x), trimester 3 (2x). Pemeriksaan meliputi: tekanan darah, berat badan, tinggi fundus, denyut jantung janin, dan pemeriksaan laboratorium. Deteksi dini komplikasi sangat penting.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "Siapa yang dimaksud dengan Pasangan Usia Subur (PUS)?",
        options: [
          "Pasangan berusia di atas 50 tahun",
          "Pasangan dengan istri berusia 15-49 tahun",
          "Semua pasangan menikah",
          "Pasangan yang baru menikah",
        ],
        correctIndex: 1,
        explanation:
          "PUS adalah pasangan suami istri dimana istri berusia 15-49 tahun, yaitu masa usia reproduktif aktif wanita.",
      },
      {
        id: 2,
        question: "Berapa jarak ideal antara dua kehamilan menurut WHO?",
        options: [
          "6 bulan",
          "1 tahun",
          "Minimal 2-3 tahun",
          "5 tahun atau lebih",
        ],
        correctIndex: 2,
        explanation:
          "WHO merekomendasikan jarak kehamilan minimal 2-3 tahun untuk pemulihan optimal ibu dan tumbuh kembang anak yang baik.",
      },
      {
        id: 3,
        question: "Apa kelebihan utama metode kontrasepsi IUD?",
        options: [
          "Harus diminum setiap hari",
          "Efektif 3-10 tahun dan dapat dilepas kapan saja",
          "Bersifat permanen dan tidak bisa dilepas",
          "Hanya untuk ibu yang menyusui",
        ],
        correctIndex: 1,
        explanation:
          "IUD (Alat Kontrasepsi Dalam Rahim) sangat efektif, bersifat reversibel, dan dapat digunakan selama 3-10 tahun.",
      },
      {
        id: 4,
        question:
          "Vitamin apa yang paling penting untuk mencegah cacat tabung saraf pada janin?",
        options: ["Vitamin C", "Vitamin D", "Asam folat", "Vitamin B12"],
        correctIndex: 2,
        explanation:
          "Asam folat sangat penting dikonsumsi sebelum dan selama kehamilan untuk mencegah cacat tabung saraf seperti spina bifida.",
      },
      {
        id: 5,
        question: "Apa tanda bahaya kehamilan yang harus segera ditangani?",
        options: [
          "Mual di pagi hari",
          "Ngidam makanan tertentu",
          "Perdarahan, sakit kepala berat, atau kejang",
          "Kelelahan ringan",
        ],
        correctIndex: 2,
        explanation:
          "Perdarahan, sakit kepala berat, dan kejang adalah tanda bahaya kehamilan yang memerlukan penanganan medis segera.",
      },
      {
        id: 6,
        question:
          "Berapa kali minimal kunjungan ANC (Antenatal Care) yang direkomendasikan?",
        options: [
          "1 kali selama kehamilan",
          "2 kali selama kehamilan",
          "Minimal 4 kali selama kehamilan",
          "Setiap bulan tanpa ketentuan",
        ],
        correctIndex: 2,
        explanation:
          "WHO merekomendasikan minimal 4 kali kunjungan ANC: sekali di trimester 1, sekali di trimester 2, dan dua kali di trimester 3.",
      },
      {
        id: 7,
        question:
          "Metode kontrasepsi mana yang juga melindungi dari penyakit menular seksual?",
        options: ["Pil KB", "Suntik KB 3 bulan", "IUD spiral", "Kondom"],
        correctIndex: 3,
        explanation:
          "Kondom adalah satu-satunya metode kontrasepsi yang memberikan perlindungan ganda: mencegah kehamilan dan mengurangi risiko IMS/HIV.",
      },
      {
        id: 8,
        question: "Apa itu 'Keluarga Sejahtera' menurut indikator BKKBN?",
        options: [
          "Keluarga dengan penghasilan sangat tinggi",
          "Keluarga dengan banyak anak",
          "Keluarga yang dapat memenuhi kebutuhan fisik, sosial, dan spiritual",
          "Keluarga pejabat pemerintah",
        ],
        correctIndex: 2,
        explanation:
          "Keluarga Sejahtera BKKBN adalah keluarga yang mampu memenuhi kebutuhan dasar, sosial, psikologis, dan spiritual seluruh anggotanya.",
      },
      {
        id: 9,
        question: "Kapan sebaiknya ASI eksklusif diberikan pada bayi?",
        options: [
          "Hanya 3 bulan pertama",
          "Selama 6 bulan pertama",
          "Selama 1 tahun penuh",
          "Tidak perlu memberikan ASI",
        ],
        correctIndex: 1,
        explanation:
          "WHO dan Kemenkes Indonesia merekomendasikan ASI eksklusif selama 6 bulan pertama kehidupan bayi untuk tumbuh kembang optimal.",
      },
      {
        id: 10,
        question: "Apa manfaat program Keluarga Berencana bagi kesehatan ibu?",
        options: [
          "Tidak ada manfaat bagi ibu",
          "Meningkatkan risiko kesehatan",
          "Mengurangi risiko komplikasi dan kematian ibu",
          "Hanya bermanfaat bagi anak",
        ],
        correctIndex: 2,
        explanation:
          "Program KB membantu mengatur jarak kehamilan, mengurangi risiko komplikasi kehamilan, dan menurunkan angka kematian ibu.",
      },
    ],
  },
  {
    id: "remaja-berprestasi",
    title: "Remaja Berprestasi",
    subtitle: "Raih prestasi terbaik dan hindari perilaku berisiko",
    emoji: "🏆",
    gradientFrom: "#F4C430",
    gradientTo: "#2563EB",
    accentColor: "#F4C430",
    lembarBalik: [
      {
        title: "Potensi Diri Remaja",
        emoji: "💫",
        content:
          "Setiap remaja memiliki potensi unik yang perlu dikembangkan. Kenali bakat dan minatmu melalui eksplorasi berbagai kegiatan. Potensi bisa berupa kecerdasan akademis, seni, olahraga, kepemimpinan, atau kemampuan sosial yang tinggi.",
        highlight:
          "Kamu memiliki potensi luar biasa yang menunggu untuk dikembangkan!",
      },
      {
        title: "Strategi Belajar Efektif",
        emoji: "📚",
        content:
          "Tips belajar sukses: Buat jadwal rutin dan konsisten, gunakan teknik Pomodoro (25 menit fokus + 5 menit istirahat), buat ringkasan dengan bahasa sendiri, bergabung dengan kelompok belajar, dan manfaatkan teknologi edukasi yang tersedia.",
      },
      {
        title: "Bahaya Pernikahan Dini",
        emoji: "⚠️",
        content:
          "Menikah di usia remaja berdampak buruk: putus sekolah, risiko kesehatan akibat kehamilan dini, masalah ekonomi, ketidakstabilan emosional, dan hilangnya masa remaja. Selesaikan pendidikan terlebih dahulu sebelum menikah.",
        highlight:
          "Raih cita-citamu dulu, pernikahan lebih indah jika kamu sudah siap!",
      },
      {
        title: "Menghindari NAPZA dan Pergaulan Bebas",
        emoji: "🚫",
        content:
          "NAPZA (Narkotika, Psikotropika, Zat Adiktif) merusak otak dan menghancurkan masa depan. Cara menolak: katakan TIDAK dengan tegas dan percaya diri, cari lingkungan pertemanan yang positif, laporkan ke orang tua atau guru jika ada tekanan dari teman.",
      },
      {
        title: "Membangun Karakter dan Masa Depan",
        emoji: "🌟",
        content:
          "Karakter positif yang perlu dibangun: jujur, disiplin, bertanggung jawab, dan berempati. Rencanakan masa depan dengan menetapkan tujuan SMART, aktif di organisasi sekolah, dan terus mengembangkan diri setiap harinya.",
        highlight: "Investasi terbaik adalah investasi pada dirimu sendiri.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "Apa dampak negatif pernikahan dini bagi remaja perempuan?",
        options: [
          "Meningkatkan prestasi akademik",
          "Putus sekolah dan risiko kesehatan meningkat",
          "Mendapat status sosial lebih tinggi",
          "Mempercepat perkembangan karir",
        ],
        correctIndex: 1,
        explanation:
          "Pernikahan dini menyebabkan putus sekolah, risiko komplikasi kehamilan, masalah ekonomi, dan hilangnya kesempatan berkembang.",
      },
      {
        id: 2,
        question: "Strategi belajar yang paling efektif untuk remaja adalah?",
        options: [
          "Belajar semalam suntuk sebelum ujian",
          "Belajar teratur dan konsisten setiap hari",
          "Hanya menghafal tanpa memahami",
          "Belajar sambil bermain game sepenuhnya",
        ],
        correctIndex: 1,
        explanation:
          "Belajar teratur dan konsisten setiap hari lebih efektif daripada sistem SKS (Sistem Kebut Semalam) yang membuang energi.",
      },
      {
        id: 3,
        question: "Apa kepanjangan dari NAPZA yang berbahaya bagi remaja?",
        options: [
          "Nutrisi, Protein, Zat Besi, Air",
          "Narkotika, Psikotropika, dan Zat Adiktif",
          "Nilai, Perilaku, Zaman, dan Alam",
          "Niat, Aksi, Prestasi, Zona, Achievement",
        ],
        correctIndex: 1,
        explanation:
          "NAPZA adalah singkatan dari Narkotika, Psikotropika, dan Zat Adiktif lainnya yang berbahaya bagi kesehatan dan masa depan.",
      },
      {
        id: 4,
        question:
          "Bagaimana cara terbaik menolak ajakan teman untuk melakukan hal negatif?",
        options: [
          "Diam dan langsung mengikuti ajakan",
          "Menolak dengan tegas dan memberikan alasan yang jelas",
          "Marah-marah dan memutus pertemanan",
          "Pura-pura tidak mendengar ajakan",
        ],
        correctIndex: 1,
        explanation:
          "Menolak dengan tegas dan sopan adalah keterampilan penting. Remaja berprestasi harus percaya diri berkata TIDAK untuk hal negatif.",
      },
      {
        id: 5,
        question: "Apa ciri utama remaja yang memiliki karakter positif?",
        options: [
          "Selalu menuruti semua keinginan teman",
          "Jujur, bertanggung jawab, disiplin, dan berempati",
          "Tidak peduli dengan orang lain di sekitarnya",
          "Hanya memikirkan keuntungan diri sendiri",
        ],
        correctIndex: 1,
        explanation:
          "Karakter positif meliputi kejujuran, tanggung jawab, disiplin, empati, dan kepedulian sosial yang dibangun sejak remaja.",
      },
      {
        id: 6,
        question: "Mengapa remaja perlu menetapkan tujuan hidup sejak dini?",
        options: [
          "Tidak perlu, cukup mengikuti arus saja",
          "Agar memiliki arah, motivasi, dan fokus dalam hidup",
          "Tujuan hidup hanya untuk orang dewasa",
          "Supaya terlihat lebih pintar dari teman",
        ],
        correctIndex: 1,
        explanation:
          "Tujuan hidup memberikan arah, motivasi, dan fokus. Remaja yang punya tujuan lebih termotivasi berprestasi dan menghindari perilaku negatif.",
      },
      {
        id: 7,
        question: "Apa dampak pergaulan bebas pada kehidupan remaja?",
        options: [
          "Meningkatkan prestasi dan popularitas",
          "Risiko kehamilan tidak diinginkan dan infeksi menular seksual",
          "Membuat lebih populer di sekolah",
          "Tidak ada dampak negatif yang serius",
        ],
        correctIndex: 1,
        explanation:
          "Pergaulan bebas meningkatkan risiko kehamilan tidak diinginkan, IMS, masalah psikologis, dan berbagai konsekuensi sosial lainnya.",
      },
      {
        id: 8,
        question:
          "Kegiatan apa yang paling baik untuk pengembangan diri remaja?",
        options: [
          "Begadang bermain game online setiap malam",
          "Aktif dalam organisasi sekolah dan kegiatan positif",
          "Menghindari semua aktivitas dan interaksi sosial",
          "Hanya fokus pada pelajaran akademik saja",
        ],
        correctIndex: 1,
        explanation:
          "Aktif dalam organisasi mengembangkan soft skill kepemimpinan, kerjasama, komunikasi, dan jaringan sosial yang berguna di masa depan.",
      },
      {
        id: 9,
        question: "Apa manfaat memiliki mentor bagi perkembangan remaja?",
        options: [
          "Membuang waktu yang tidak berguna",
          "Mendapat bimbingan dan pengalaman dari orang yang lebih berpengalaman",
          "Hanya berguna bagi remaja yang bermasalah",
          "Tidak ada manfaat nyata dari mentoring",
        ],
        correctIndex: 1,
        explanation:
          "Mentor memberikan bimbingan, motivasi, pengalaman nyata, dan perspektif berharga yang membantu remaja mengembangkan diri secara optimal.",
      },
      {
        id: 10,
        question: "Bagaimana cara remaja mengelola waktu dengan efektif?",
        options: [
          "Tidak perlu jadwal, ikuti perasaan saja",
          "Membuat skala prioritas dan jadwal harian yang terstruktur",
          "Mengerjakan semua hal sekaligus tanpa prioritas",
          "Menunda pekerjaan hingga mendekati deadline",
        ],
        correctIndex: 1,
        explanation:
          "Manajemen waktu dengan skala prioritas adalah kunci produktivitas. Remaja berprestasi merencanakan waktu mereka dengan bijaksana.",
      },
    ],
  },
  {
    id: "kespro",
    title: "Kesehatan Reproduksi Remaja",
    subtitle: "Pahami tubuhmu dan jaga kesehatan reproduksi dengan baik",
    emoji: "🌸",
    gradientFrom: "#8B5CF6",
    gradientTo: "#E11D48",
    accentColor: "#8B5CF6",
    lembarBalik: [
      {
        title: "Apa itu Kesehatan Reproduksi?",
        emoji: "🌺",
        content:
          "Kesehatan reproduksi adalah kondisi sehat secara fisik, mental, dan sosial yang berkaitan dengan sistem reproduksi, bukan sekadar bebas dari penyakit. Remaja yang sehat reproduksinya dapat tumbuh, berkembang, dan menyiapkan masa depan dengan baik.",
        highlight:
          "Menjaga kesehatan reproduksi adalah hak dan tanggung jawab setiap remaja.",
      },
      {
        title: "Perubahan Fisik Saat Pubertas",
        emoji: "💫",
        content:
          "Perempuan: payudara berkembang, menstruasi pertama, pinggul melebar, rambut di area tertentu tumbuh. Laki-laki: suara membesar, tumbuh jakun, mimpi basah, tumbuh kumis dan jenggot. Semua perubahan ini NORMAL dan merupakan tanda kematangan fisik yang sehat.",
      },
      {
        title: "Menjaga Kebersihan Organ Reproduksi",
        emoji: "🚿",
        content:
          "Tips kebersihan: Bersihkan dengan air bersih dari depan ke belakang (khusus perempuan), ganti pakaian dalam setiap hari, gunakan sabun lembut (bukan antiseptik keras), hindari douching. Menjaga kebersihan organ reproduksi mencegah infeksi berbahaya.",
        highlight:
          "Kebersihan organ reproduksi adalah bagian dari ibadah dan kesehatan.",
      },
      {
        title: "Hubungan Sehat vs Tidak Sehat",
        emoji: "💚",
        content:
          "Hubungan sehat: saling menghormati, mendukung, berkomunikasi terbuka, menjaga batasan pribadi. Hubungan tidak sehat: ada paksaan, manipulasi, kekerasan fisik atau verbal, tekanan seksual. Kamu berhak memilih hubungan yang sehat dan menolak yang tidak sehat.",
      },
      {
        title: "Hak Kesehatan Seksual dan Reproduksi",
        emoji: "📖",
        content:
          "Setiap remaja berhak: mendapat informasi yang benar tentang reproduksi, dilindungi dari kekerasan dan eksploitasi, memilih kapan dan dengan siapa berhubungan, mendapat layanan kesehatan reproduksi yang aman. Jika ada masalah, ceritakan kepada orang dewasa terpercaya.",
      },
    ],
    questions: [
      {
        id: 1,
        question: "Apa pengertian kesehatan reproduksi yang benar?",
        options: [
          "Hanya kesehatan alat kelamin saja",
          "Kondisi sehat fisik, mental, dan sosial yang berkaitan dengan sistem reproduksi",
          "Hanya penting bagi perempuan dewasa",
          "Hanya masalah yang diurus dokter kandungan",
        ],
        correctIndex: 1,
        explanation:
          "Kesehatan reproduksi mencakup aspek fisik, mental, dan sosial terkait sistem reproduksi, bukan hanya tentang organ atau penyakit.",
      },
      {
        id: 2,
        question:
          "Pada perempuan, tanda pertama pubertas yang umumnya muncul adalah?",
        options: [
          "Suara menjadi lebih besar",
          "Tumbuh rambut di area wajah",
          "Payudara mulai berkembang",
          "Tumbuh jakun di leher",
        ],
        correctIndex: 2,
        explanation:
          "Pada perempuan, perkembangan payudara umumnya menjadi tanda pertama pubertas, diikuti perubahan fisik lainnya.",
      },
      {
        id: 3,
        question: "Apa itu menstruasi pada perempuan?",
        options: [
          "Tanda bahwa sedang sakit parah",
          "Peluruhan dinding rahim ketika tidak terjadi pembuahan",
          "Tanda kehamilan yang pasti",
          "Reaksi alergi pada sistem reproduksi",
        ],
        correctIndex: 1,
        explanation:
          "Menstruasi adalah proses alami peluruhan lapisan dinding rahim yang terjadi setiap bulan ketika sel telur tidak dibuahi.",
      },
      {
        id: 4,
        question:
          "Cara yang benar membersihkan organ reproduksi perempuan adalah?",
        options: [
          "Menggunakan sabun antiseptik kuat setiap hari",
          "Membersihkan dengan air bersih dari arah depan ke belakang",
          "Tidak perlu dibersihkan khusus",
          "Menggunakan parfum atau deodoran pada area tersebut",
        ],
        correctIndex: 1,
        explanation:
          "Membersihkan dari arah depan ke belakang mencegah bakteri dari anus berpindah ke vagina, mengurangi risiko infeksi saluran kemih.",
      },
      {
        id: 5,
        question: "Apa ciri-ciri hubungan pertemanan atau pacaran yang sehat?",
        options: [
          "Ada paksaan dalam setiap keputusan",
          "Saling menghormati, mendukung, dan menjaga batasan",
          "Selalu bergantung pada pasangan untuk semua hal",
          "Menyimpan rahasia berbahaya bersama",
        ],
        correctIndex: 1,
        explanation:
          "Hubungan sehat ditandai dengan saling menghormati, komunikasi terbuka, dukungan positif, dan menghargai batasan masing-masing.",
      },
      {
        id: 6,
        question:
          "Apa yang harus dilakukan jika mendapat tekanan untuk melakukan hubungan seksual?",
        options: [
          "Langsung menuruti agar tidak kehilangan teman",
          "Menolak dengan tegas dan mencari bantuan dari orang terpercaya",
          "Diam saja dan pasrah dengan situasi",
          "Menyalahkan diri sendiri atas situasi tersebut",
        ],
        correctIndex: 1,
        explanation:
          "Setiap orang berhak menolak tekanan seksual. Menolak dengan tegas dan mencari bantuan adalah respons yang tepat dan berani.",
      },
      {
        id: 7,
        question: "Apa bahaya kehamilan pada usia remaja (di bawah 19 tahun)?",
        options: [
          "Tidak ada bahaya khusus bagi remaja",
          "Risiko komplikasi dan kematian ibu lebih tinggi dibanding wanita dewasa",
          "Justru lebih mudah melahirkan di usia muda",
          "Bayi yang dilahirkan lebih sehat",
        ],
        correctIndex: 1,
        explanation:
          "Remaja belum siap secara fisik dan mental untuk kehamilan, sehingga risiko komplikasi, kematian ibu, dan masalah kesehatan lebih tinggi.",
      },
      {
        id: 8,
        question:
          "Penyakit Menular Seksual (PMS) dapat dicegah secara efektif dengan?",
        options: [
          "Minum antibiotik setiap hari sebagai pencegahan",
          "Tidak melakukan hubungan seksual berisiko dan setia pada pasangan yang sehat",
          "Makan buah-buahan dan suplemen vitamin saja",
          "Berolahraga rutin setiap pagi",
        ],
        correctIndex: 1,
        explanation:
          "Pencegahan PMS yang paling efektif adalah dengan tidak melakukan hubungan seksual berisiko, setia pada pasangan yang sehat.",
      },
      {
        id: 9,
        question:
          "Apa yang dimaksud dengan HKSR (Hak Kesehatan Seksual dan Reproduksi)?",
        options: [
          "Hak ini hanya berlaku untuk orang dewasa",
          "Hak setiap orang mendapat informasi dan layanan kesehatan reproduksi yang aman",
          "Hak untuk berhubungan bebas tanpa konsekuensi",
          "Hak ini tidak diakui secara internasional",
        ],
        correctIndex: 1,
        explanation:
          "HKSR adalah hak universal setiap individu untuk mendapat informasi yang benar, layanan kesehatan, dan perlindungan terkait reproduksi.",
      },
      {
        id: 10,
        question:
          "Kepada siapa sebaiknya remaja berkonsultasi tentang masalah kesehatan reproduksi?",
        options: [
          "Tidak perlu cerita kepada siapapun",
          "Hanya kepada teman sebaya saja",
          "Orang tua, guru BK, dokter, atau tenaga kesehatan yang terpercaya",
          "Mencari informasi dari media sosial saja",
        ],
        correctIndex: 2,
        explanation:
          "Remaja sebaiknya berkonsultasi dengan orang dewasa terpercaya atau tenaga kesehatan profesional untuk mendapat informasi dan bantuan yang tepat.",
      },
    ],
  },
];
