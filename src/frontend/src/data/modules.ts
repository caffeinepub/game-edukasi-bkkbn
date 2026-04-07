import type { Module, Question } from "../types";

// Helper to create multiple-choice question
const mc = (
  id: number,
  question: string,
  options: [string, string, string, string],
  correctIndex: number,
  explanation: string,
): Question => ({
  id,
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
});

// Helper to create true-false question
const tf = (
  id: number,
  question: string,
  isTrue: boolean,
  explanation: string,
): Question => ({
  id,
  type: "true-false",
  question,
  options: ["Benar", "Salah"],
  correctIndex: isTrue ? 0 : 1,
  explanation,
});

// Helper to create fill-blank question
const fb = (
  id: number,
  question: string,
  answer: string,
  wrongOptions: [string, string, string],
  explanation: string,
): Question => ({
  id,
  type: "fill-blank",
  question,
  options: [answer, ...wrongOptions] as [string, string, string, string],
  correctIndex: 0,
  fillAnswer: answer,
  explanation,
});

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
    chapters: [
      {
        id: 1,
        title: "Tahap Kehidupan",
        emoji: "📅",
        description:
          "Kenali fase-fase utama kehidupan manusia dari bayi hingga lansia",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Berapa usia remaja menurut definisi WHO?",
            ["5-10 tahun", "10-19 tahun", "20-25 tahun", "25-30 tahun"],
            1,
            "WHO mendefinisikan remaja sebagai individu berusia 10-19 tahun, mencakup masa pubertas hingga awal dewasa muda.",
          ),
          mc(
            102,
            "Pada masa anak (6-12 tahun), kemampuan apa yang berkembang pesat?",
            [
              "Kemampuan reproduksi",
              "Kemampuan kognitif dan sosial",
              "Hanya kemampuan fisik",
              "Kemampuan emosional lansia",
            ],
            1,
            "Usia 6-12 tahun adalah periode perkembangan kognitif dan sosial yang sangat aktif.",
          ),
          tf(
            103,
            "Masa remaja menurut WHO dimulai pada usia 10 tahun.",
            true,
            "Benar. WHO menetapkan batas awal remaja pada usia 10 tahun karena pubertas dini bisa terjadi pada usia tersebut.",
          ),
          tf(
            104,
            "Masa bayi berlangsung hingga usia 5 tahun.",
            false,
            "Salah. Masa bayi berlangsung dari lahir hingga usia 2 tahun, dilanjutkan masa anak pada usia 3-12 tahun.",
          ),
          fb(
            105,
            "Masa ketika otak berkembang pesat hingga 80% disebut masa ___.",
            "Golden Age",
            ["Pubertas", "Remaja", "Dewasa"],
            "Golden Age adalah periode 0-6 tahun ketika otak berkembang paling pesat, 80% dari total perkembangan otak.",
          ),
          mc(
            106,
            "Usia berapa seseorang dianggap memasuki masa dewasa?",
            ["15 tahun", "18 tahun", "20-40 tahun", "50 tahun"],
            2,
            "Masa dewasa umumnya dimulai sekitar usia 20 tahun setelah seseorang menyelesaikan masa remajanya.",
          ),
        ],
      },
      {
        id: 2,
        title: "Perkembangan Fisik",
        emoji: "💪",
        description:
          "Pahami perubahan fisik yang terjadi di setiap tahap kehidupan",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Apa ciri utama perkembangan fisik pada masa bayi (0-2 tahun)?",
            [
              "Pertumbuhan gigi geraham",
              "Pertumbuhan berat badan sangat pesat",
              "Perkembangan seksual sekunder",
              "Kemampuan berlari kencang",
            ],
            1,
            "Bayi mengalami pertumbuhan berat badan paling pesat dalam hidupnya, dari sekitar 3 kg menjadi 3x lipat di usia 1 tahun.",
          ),
          mc(
            202,
            "Periode kehidupan mana yang ditandai dengan pubertas?",
            ["Masa bayi", "Masa anak", "Masa remaja", "Masa dewasa"],
            2,
            "Pubertas terjadi pada masa remaja sebagai tanda kematangan seksual dan perubahan fisik yang signifikan.",
          ),
          tf(
            203,
            "Pada masa lansia, fungsi organ tubuh akan meningkat secara bertahap.",
            false,
            "Salah. Proses penuaan menyebabkan penurunan fungsi semua organ tubuh secara bertahap, ini adalah proses alami.",
          ),
          tf(
            204,
            "Pertumbuhan tinggi badan paling pesat terjadi saat masa remaja.",
            true,
            "Benar. Lonjakan pertumbuhan (growth spurt) terjadi saat remaja, terutama pada usia 12-16 tahun.",
          ),
          fb(
            205,
            "Perubahan hormon yang menyebabkan perubahan fisik pada remaja disebut ___.",
            "Pubertas",
            ["Menstruasi", "Imunisasi", "Metabolisme"],
            "Pubertas adalah proses kematangan seksual yang menyebabkan perubahan fisik dan hormonal pada remaja.",
          ),
          mc(
            206,
            "Apa karakteristik utama lansia yang sehat?",
            [
              "Tidak perlu berolahraga lagi",
              "Aktif secara fisik dan mental",
              "Banyak tidur dan istirahat saja",
              "Menghindari semua aktivitas sosial",
            ],
            1,
            "Lansia sehat tetap aktif secara fisik dan mental, rajin bersosialisasi, dan menjaga pola hidup sehat.",
          ),
        ],
      },
      {
        id: 3,
        title: "Perkembangan Emosional",
        emoji: "❤️",
        description:
          "Kenali perkembangan emosi dan psikologis di setiap fase kehidupan",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Perubahan emosional yang normal pada remaja adalah?",
            [
              "Selalu tenang dan stabil",
              "Tidak pernah marah",
              "Mood yang berubah-ubah",
              "Tidak peduli lingkungan",
            ],
            2,
            "Perubahan hormonal pada remaja menyebabkan mood yang tidak stabil, ini adalah hal yang normal.",
          ),
          mc(
            302,
            "Apa manfaat memahami siklus hidup manusia?",
            [
              "Hanya berguna untuk dokter",
              "Mempersiapkan setiap tahap kehidupan dengan lebih baik",
              "Tidak ada manfaatnya",
              "Hanya untuk orang tua",
            ],
            1,
            "Memahami siklus hidup membantu kita mempersiapkan setiap fase dan mengambil keputusan tepat.",
          ),
          tf(
            303,
            "Bayi yang berusia 0-2 tahun sudah bisa memahami emosi kompleks seperti rasa malu.",
            false,
            "Salah. Bayi baru mengenal emosi dasar seperti senang, sedih, dan takut. Emosi kompleks berkembang di usia yang lebih tua.",
          ),
          tf(
            304,
            "Remaja yang sering berubah mood adalah hal yang normal secara psikologis.",
            true,
            "Benar. Fluktuasi emosi pada remaja adalah respons normal terhadap perubahan hormonal yang sedang terjadi.",
          ),
          fb(
            306,
            "Kemampuan mengelola perasaan sendiri disebut ___.",
            "Regulasi Emosi",
            ["Pubertas", "Kematangan Fisik", "IQ Emosional"],
            "Regulasi emosi adalah kemampuan mengelola dan mengendalikan perasaan secara sehat dan konstruktif.",
          ),
          mc(
            305,
            "Pada masa apa manusia mencapai kestabilan emosi yang paling matang?",
            ["Masa bayi", "Masa remaja", "Masa dewasa", "Masa anak-anak"],
            2,
            "Masa dewasa umumnya ditandai dengan kestabilan emosi yang lebih baik karena kematangan otak dan pengalaman hidup.",
          ),
        ],
      },
      {
        id: 4,
        title: "Menjaga Kesehatan",
        emoji: "🏥",
        description:
          "Pelajari cara menjaga kesehatan optimal di setiap tahap kehidupan",
        questionsPerPlay: 3,
        questionPool: [
          tf(
            401,
            "ASI eksklusif diberikan selama 6 bulan pertama kehidupan bayi.",
            true,
            "Benar. WHO dan Kemenkes merekomendasikan ASI eksklusif 6 bulan pertama untuk tumbuh kembang optimal bayi.",
          ),
          mc(
            402,
            "Apa yang dimaksud imunisasi dasar lengkap untuk anak?",
            [
              "Imunisasi yang mahal",
              "Serangkaian vaksin wajib sesuai jadwal Kemenkes",
              "Hanya imunisasi campak saja",
              "Imunisasi yang dilakukan satu kali",
            ],
            1,
            "Imunisasi dasar lengkap adalah serangkaian vaksin yang wajib diberikan sesuai jadwal Kemenkes untuk melindungi anak dari penyakit.",
          ),
          fb(
            403,
            "Pemeriksaan kesehatan rutin setelah usia 40 tahun disebut ___.",
            "Medical Check-Up",
            ["Vaksinasi", "Imunisasi", "Konsultasi Gizi"],
            "Medical Check-Up adalah pemeriksaan kesehatan menyeluruh yang sangat dianjurkan dilakukan secara rutin terutama setelah usia 40 tahun.",
          ),
          mc(
            404,
            "Berapa jam tidur yang direkomendasikan untuk remaja setiap malamnya?",
            ["4-5 jam", "6-7 jam", "8-10 jam", "12-14 jam"],
            2,
            "Remaja membutuhkan 8-10 jam tidur per malam untuk mendukung pertumbuhan fisik dan perkembangan otak yang optimal.",
          ),
          tf(
            405,
            "Olahraga rutin tidak diperlukan bagi lansia karena berisiko berbahaya.",
            false,
            "Salah. Olahraga ringan seperti jalan kaki dan senam sangat dianjurkan untuk menjaga kesehatan fisik dan mental lansia.",
          ),
          mc(
            406,
            "Nutrisi yang paling penting untuk pertumbuhan tulang anak adalah?",
            ["Vitamin C", "Zat besi", "Kalsium", "Lemak jenuh"],
            2,
            "Kalsium adalah mineral utama yang membangun dan memperkuat tulang, sangat penting selama masa pertumbuhan anak.",
          ),
        ],
      },
    ],
    // Legacy flat questions (ambil dari semua chapter pool)
    questions: [
      mc(
        1,
        "Berapa usia remaja menurut definisi WHO?",
        ["5-10 tahun", "10-19 tahun", "20-25 tahun", "25-30 tahun"],
        1,
        "WHO mendefinisikan remaja sebagai individu berusia 10-19 tahun.",
      ),
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
          "Kematangan emosional meliputi: kemampuan komunikasi asertif, manajemen konflik yang sehat, empati terhadap pasangan, dan komitmen jangka panjang. Konseling pranikah sangat dianjurkan.",
      },
      {
        title: "Hak dan Kewajiban Suami Istri",
        emoji: "⚖️",
        content:
          "Berdasarkan UU Perkawinan, suami berkewajiban memberi nafkah lahir dan batin. Istri berhak atas perlindungan dan pendidikan. Keduanya memiliki hak dan kewajiban yang setara dalam mengasuh anak.",
        highlight:
          "Pernikahan adalah kemitraan setara berdasarkan rasa hormat dan kasih sayang.",
      },
      {
        title: "Dasar Keluarga Berencana",
        emoji: "👨‍👩‍👧",
        content:
          "KB bukan hanya tentang kontrasepsi, tetapi merencanakan keluarga ideal: jumlah anak, jarak kehamilan, waktu terbaik memulai keluarga. Program BKKBN mendukung keluarga merencanakan masa depan yang lebih baik.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "Hukum & Usia Nikah",
        emoji: "⚖️",
        description:
          "Kenali aturan hukum pernikahan di Indonesia dan usia ideal menikah",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Berapa usia minimal menikah di Indonesia menurut UU No. 16 Tahun 2019?",
            ["17 tahun", "18 tahun", "19 tahun", "21 tahun"],
            2,
            "UU No. 16/2019 menetapkan usia minimal 19 tahun untuk pria dan wanita.",
          ),
          mc(
            102,
            "Apa dampak pernikahan dini pada kesehatan perempuan?",
            [
              "Meningkatkan kesehatan reproduksi",
              "Risiko komplikasi kehamilan lebih tinggi",
              "Tidak ada dampak kesehatan",
              "Lebih mudah melahirkan",
            ],
            1,
            "Pernikahan dini meningkatkan risiko komplikasi kehamilan dan berbagai masalah kesehatan reproduksi.",
          ),
          tf(
            103,
            "UU No. 16 Tahun 2019 menetapkan usia minimal menikah yang sama antara laki-laki dan perempuan.",
            true,
            "Benar. UU terbaru menyamakan usia minimal 19 tahun untuk pria dan wanita, berbeda dari aturan lama.",
          ),
          tf(
            104,
            "Pernikahan dini di bawah 19 tahun bisa diizinkan jika ada dispensasi dari pengadilan.",
            true,
            "Benar. Meskipun ada dispensasi, pernikahan dini tetap berisiko dan sebaiknya dihindari.",
          ),
          fb(
            105,
            "Pengadilan yang berwenang mengeluarkan dispensasi untuk pernikahan di bawah usia minimum disebut ___.",
            "Pengadilan Agama",
            ["Pengadilan Negeri", "Mahkamah Agung", "Komisi HAM"],
            "Pengadilan Agama berwenang mengeluarkan dispensasi pernikahan di bawah usia untuk pasangan Muslim di Indonesia.",
          ),
          mc(
            106,
            "Berapa lama masa perkenalan ideal sebelum memutuskan menikah?",
            [
              "Satu minggu sudah cukup",
              "Satu bulan sudah cukup",
              "Minimal 6 bulan hingga beberapa tahun",
              "10 tahun barulah cukup",
            ],
            2,
            "Masa perkenalan minimal 6 bulan membantu pasangan saling memahami karakter, nilai, dan kebiasaan.",
          ),
        ],
      },
      {
        id: 2,
        title: "Kesiapan Menikah",
        emoji: "🧠",
        description:
          "Persiapkan diri secara fisik, mental, dan finansial sebelum berumah tangga",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Kesiapan apa yang paling penting dalam pernikahan?",
            [
              "Kesiapan fisik saja",
              "Kesiapan materi saja",
              "Kesiapan fisik, mental, dan finansial secara bersamaan",
              "Kesiapan sosial saja",
            ],
            2,
            "Pernikahan memerlukan kesiapan holistik: fisik, mental, emosional, dan finansial.",
          ),
          tf(
            202,
            "Kesiapan finansial tidak terlalu penting dalam membangun rumah tangga.",
            false,
            "Salah. Konflik keuangan adalah salah satu penyebab utama perceraian. Perencanaan finansial sangat penting.",
          ),
          mc(
            203,
            "Apa fungsi kursus pranikah atau bimbingan persiapan pernikahan?",
            [
              "Tidak ada fungsinya",
              "Hanya formalitas administrasi",
              "Mempersiapkan pasangan menghadapi kehidupan berumah tangga",
              "Hanya untuk pasangan bermasalah",
            ],
            2,
            "Kursus pranikah membantu pasangan memahami hak-kewajiban dan keterampilan komunikasi.",
          ),
          fb(
            204,
            "Tabungan yang disiapkan untuk menghadapi keadaan darurat keuangan disebut ___.",
            "Dana Darurat",
            ["Deposito", "Investasi Saham", "Modal Usaha"],
            "Dana darurat idealnya setara 3-6 bulan pengeluaran untuk menghadapi keadaan tak terduga.",
          ),
          tf(
            205,
            "Pasangan yang sudah menikah tidak perlu komunikasi rutin karena sudah tinggal bersama.",
            false,
            "Salah. Komunikasi yang terbuka dan rutin adalah kunci keharmonisan rumah tangga meskipun tinggal bersama.",
          ),
          mc(
            206,
            "Mengapa perencanaan keuangan penting sebelum menikah?",
            [
              "Untuk memamerkan kekayaan",
              "Tidak penting bagi pasangan muda",
              "Mencegah konflik finansial dan mempersiapkan masa depan keluarga",
              "Hanya kewajiban pihak pria",
            ],
            2,
            "Konflik keuangan adalah salah satu penyebab utama perceraian. Perencanaan finansial membangun pondasi kuat.",
          ),
        ],
      },
      {
        id: 3,
        title: "Hak & Kewajiban",
        emoji: "📜",
        description:
          "Pahami hak dan kewajiban suami istri dalam pernikahan yang sah",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Apa hak perempuan dalam pernikahan menurut hukum Indonesia?",
            [
              "Perempuan tidak memiliki hak",
              "Hanya hak mengurus rumah tangga",
              "Hak nafkah, perlindungan, pendidikan, dan kesetaraan dalam keluarga",
              "Tidak diatur dalam hukum",
            ],
            2,
            "Hukum Indonesia menjamin hak istri atas nafkah, perlindungan, pendidikan, dan kesetaraan dalam pengambilan keputusan.",
          ),
          tf(
            302,
            "Dalam pernikahan, hanya suami yang berhak mengambil keputusan untuk keluarga.",
            false,
            "Salah. Suami dan istri memiliki hak yang setara dalam pengambilan keputusan keluarga menurut hukum Indonesia.",
          ),
          mc(
            303,
            "Dokumen apa yang wajib disiapkan untuk menikah secara resmi di Indonesia?",
            [
              "Hanya KTP saja",
              "KTP, Akta Kelahiran, dan surat keterangan dari kelurahan",
              "Hanya ijazah sekolah",
              "Hanya kartu BPJS",
            ],
            1,
            "Dokumen wajib pernikahan meliputi KTP, Akta Kelahiran, dan berbagai surat dari kelurahan.",
          ),
          fb(
            304,
            "Kewajiban utama suami untuk memenuhi kebutuhan materi dan spiritual istri dan anak disebut ___.",
            "Nafkah",
            ["Mahar", "Hibah", "Warisan"],
            "Nafkah adalah kewajiban suami untuk memenuhi kebutuhan lahir batin istri dan anak-anaknya.",
          ),
          tf(
            305,
            "Kekerasan dalam rumah tangga adalah pelanggaran hukum di Indonesia.",
            true,
            "Benar. UU No. 23 Tahun 2004 tentang Penghapusan KDRT menetapkan KDRT sebagai tindak pidana.",
          ),
          mc(
            306,
            "Apa yang dimaksud dengan 'Bina Keluarga' dalam program BKKBN?",
            [
              "Larangan dalam pernikahan",
              "Program pembinaan keluarga berdasarkan tahap usia",
              "Syarat mendaftar nikah",
              "Jenis asuransi keluarga",
            ],
            1,
            "Bina Keluarga adalah program BKKBN yang membina keluarga berdasarkan tahap usia: BKB, BKR, dan BKL.",
          ),
        ],
      },
      {
        id: 4,
        title: "Keluarga Berencana",
        emoji: "👨‍👩‍👧",
        description: "Rencanakan keluarga ideal dengan program KB yang tepat",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Apa dampak positif dari program Keluarga Berencana (KB)?",
            [
              "Tidak ada dampak positif",
              "Meningkatkan kesejahteraan dan kualitas hidup keluarga",
              "Hanya menguntungkan pemerintah",
              "Membatasi hak asasi manusia",
            ],
            1,
            "Program KB membantu keluarga merencanakan jumlah anak sesuai kemampuan, meningkatkan kualitas hidup.",
          ),
          tf(
            402,
            "Program KB hanya diperuntukkan bagi perempuan saja.",
            false,
            "Salah. Program KB berlaku untuk suami dan istri. Ada metode KB pria seperti kondom dan vasektomi.",
          ),
          mc(
            403,
            "Apa tujuan utama program KKBPK (Kependudukan, KB, dan Pembangunan Keluarga)?",
            [
              "Membatasi jumlah penduduk secara paksa",
              "Mewujudkan keluarga berkualitas dan pembangunan berwawasan kependudukan",
              "Melarang pernikahan muda",
              "Hanya untuk keluarga miskin",
            ],
            1,
            "KKBPK bertujuan mewujudkan penduduk tumbuh seimbang dan keluarga berkualitas.",
          ),
          fb(
            404,
            "Konsep keluarga ideal yang terdiri dari ayah, ibu, dan dua anak dipromosikan lewat slogan ___.",
            "Dua Anak Cukup",
            ["Satu Anak Ideal", "Tiga Anak Cukup", "KB untuk Semua"],
            "Slogan 'Dua Anak Cukup' dipromosikan BKKBN untuk mendorong keluarga berencana yang ideal.",
          ),
          tf(
            405,
            "Keluarga Berencana bertentangan dengan nilai agama dan budaya.",
            false,
            "Salah. Program KB mendapat dukungan dari berbagai organisasi keagamaan dan sejalan dengan nilai-nilai keluarga yang bertanggung jawab.",
          ),
          mc(
            406,
            "Kapan waktu terbaik pasangan merencanakan jumlah anak?",
            [
              "Setelah memiliki banyak anak",
              "Sejak sebelum menikah hingga awal pernikahan",
              "Tidak perlu direncanakan",
              "Hanya ketika ada masalah ekonomi",
            ],
            1,
            "Perencanaan keluarga idealnya dimulai sejak sebelum menikah untuk mempersiapkan keuangan dan kesiapan fisik-mental.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Berapa usia minimal menikah di Indonesia menurut UU No. 16 Tahun 2019?",
        ["17 tahun", "18 tahun", "19 tahun", "21 tahun"],
        2,
        "UU No. 16/2019 menetapkan usia minimal 19 tahun untuk pria dan wanita.",
      ),
    ],
  },

  {
    id: "pus",
    title: "Pasangan Usia Subur",
    subtitle: "Kenali kesehatan reproduksi dan program KB untuk keluarga ideal",
    emoji: "👨‍👩‍👧",
    gradientFrom: "#FFB020",
    gradientTo: "#F55A2A",
    accentColor: "#FFB020",
    lembarBalik: [
      {
        title: "Siapa PUS?",
        emoji: "👫",
        content:
          "Pasangan Usia Subur adalah pasangan suami istri dimana istri berusia 15-49 tahun. Pada usia ini, wanita masih dalam masa reproduktif aktif.",
      },
      {
        title: "Metode Kontrasepsi",
        emoji: "💊",
        content:
          "Pilihan KB modern: Pil (diminum harian), Suntik (setiap 1/3 bulan), IUD (3-10 tahun, reversibel), Implan (3-5 tahun), Kondom, MOW/MOP (sterilisasi permanen).",
        highlight:
          "Konsultasikan pilihan KB dengan tenaga kesehatan untuk hasil terbaik.",
      },
      {
        title: "Jarak Ideal Kehamilan",
        emoji: "📅",
        content:
          "WHO merekomendasikan jarak kehamilan minimal 2-3 tahun. Manfaatnya: ibu memiliki waktu pemulihan optimal, ASI eksklusif dapat diberikan penuh, anak pertama mendapat perhatian lebih.",
      },
      {
        title: "Nutrisi Kehamilan",
        emoji: "🥗",
        content:
          "Ibu hamil memerlukan: Asam folat (mencegah cacat tabung saraf), Zat besi (mencegah anemia), Kalsium (tulang janin), Protein (pertumbuhan janin), dan Vitamin D.",
        highlight:
          "Nutrisi yang baik sejak awal kehamilan menentukan kesehatan bayi seumur hidup.",
      },
      {
        title: "Pemeriksaan Kehamilan (ANC)",
        emoji: "🏥",
        content:
          "Antenatal Care minimal 4 kali selama kehamilan: trimester 1 (1x), trimester 2 (1x), trimester 3 (2x). Pemeriksaan meliputi tekanan darah, berat badan, tinggi fundus, denyut jantung janin.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "Mengenal PUS",
        emoji: "👫",
        description:
          "Pahami siapa yang disebut Pasangan Usia Subur dan hak-hak kesehatan reproduksinya",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Siapa yang dimaksud dengan Pasangan Usia Subur (PUS)?",
            [
              "Pasangan berusia di atas 50 tahun",
              "Pasangan dengan istri berusia 15-49 tahun",
              "Semua pasangan menikah",
              "Pasangan yang baru menikah",
            ],
            1,
            "PUS adalah pasangan suami istri dimana istri berusia 15-49 tahun, yaitu masa usia reproduktif aktif.",
          ),
          tf(
            102,
            "Pasangan Usia Subur (PUS) adalah istri yang berusia antara 15 hingga 49 tahun.",
            true,
            "Benar. PUS didefinisikan berdasarkan usia istri yaitu 15-49 tahun, fase reproduktif aktif wanita.",
          ),
          mc(
            103,
            "Apa itu 'Keluarga Sejahtera' menurut indikator BKKBN?",
            [
              "Keluarga dengan penghasilan sangat tinggi",
              "Keluarga dengan banyak anak",
              "Keluarga yang dapat memenuhi kebutuhan fisik, sosial, dan spiritual",
              "Keluarga pejabat pemerintah",
            ],
            2,
            "Keluarga Sejahtera BKKBN adalah keluarga yang mampu memenuhi kebutuhan dasar, sosial, psikologis, dan spiritual.",
          ),
          fb(
            104,
            "Masa dimana wanita sudah tidak produktif secara reproduksi disebut ___.",
            "Menopause",
            ["Pubertas", "Menstruasi", "Ovulasi"],
            "Menopause adalah berhentinya menstruasi secara permanen, menandai akhir masa reproduktif wanita, biasanya sekitar usia 50 tahun.",
          ),
          tf(
            105,
            "Semua pasangan menikah termasuk dalam kategori PUS.",
            false,
            "Salah. PUS hanya mencakup pasangan dimana istri masih dalam usia subur yaitu 15-49 tahun.",
          ),
          mc(
            106,
            "Berapa jarak ideal antara dua kehamilan menurut WHO?",
            ["6 bulan", "1 tahun", "Minimal 2-3 tahun", "5 tahun atau lebih"],
            2,
            "WHO merekomendasikan jarak kehamilan minimal 2-3 tahun untuk pemulihan optimal ibu dan tumbuh kembang anak.",
          ),
        ],
      },
      {
        id: 2,
        title: "Metode Kontrasepsi",
        emoji: "💊",
        description: "Kenali berbagai metode KB dan cara kerja masing-masing",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Apa kelebihan utama metode kontrasepsi IUD?",
            [
              "Harus diminum setiap hari",
              "Efektif 3-10 tahun dan dapat dilepas kapan saja",
              "Bersifat permanen dan tidak bisa dilepas",
              "Hanya untuk ibu yang menyusui",
            ],
            1,
            "IUD sangat efektif, bersifat reversibel, dan dapat digunakan selama 3-10 tahun.",
          ),
          tf(
            202,
            "Kondom adalah satu-satunya metode KB yang melindungi dari penyakit menular seksual.",
            true,
            "Benar. Kondom memberikan perlindungan ganda: mencegah kehamilan dan mengurangi risiko IMS/HIV.",
          ),
          mc(
            203,
            "Metode kontrasepsi mana yang juga melindungi dari penyakit menular seksual?",
            ["Pil KB", "Suntik KB 3 bulan", "IUD spiral", "Kondom"],
            3,
            "Kondom adalah satu-satunya metode kontrasepsi yang memberikan perlindungan dari IMS/HIV.",
          ),
          fb(
            204,
            "Metode KB jangka panjang yang dipasang di bawah kulit lengan atas disebut ___.",
            "Implan",
            ["IUD", "Pil KB", "Spiral"],
            "Implan adalah batang kecil yang dipasang di bawah kulit lengan atas, efektif selama 3-5 tahun.",
          ),
          tf(
            205,
            "Pil KB harus diminum setiap hari pada waktu yang sama untuk hasil optimal.",
            true,
            "Benar. Konsistensi waktu minum pil KB sangat penting untuk menjaga efektivitasnya.",
          ),
          mc(
            206,
            "MOW (Metode Operasi Wanita) adalah?",
            [
              "Jenis KB hormonal",
              "Sterilisasi permanen melalui operasi pada wanita",
              "Alat kontrasepsi dalam rahim",
              "Jenis suntik KB",
            ],
            1,
            "MOW adalah metode kontrasepsi permanen melalui operasi ligasi tuba, diperuntukkan bagi wanita yang tidak ingin hamil lagi.",
          ),
        ],
      },
      {
        id: 3,
        title: "Kehamilan Sehat",
        emoji: "🤱",
        description:
          "Pelajari nutrisi dan pemantauan kehamilan yang penting untuk ibu dan bayi",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Vitamin apa yang paling penting untuk mencegah cacat tabung saraf pada janin?",
            ["Vitamin C", "Vitamin D", "Asam folat", "Vitamin B12"],
            2,
            "Asam folat sangat penting dikonsumsi sebelum dan selama kehamilan untuk mencegah cacat tabung saraf.",
          ),
          tf(
            302,
            "Antenatal Care (ANC) minimal dilakukan 4 kali selama kehamilan.",
            true,
            "Benar. WHO dan Kemenkes merekomendasikan minimal 4 kali kunjungan ANC selama kehamilan.",
          ),
          mc(
            303,
            "Apa tanda bahaya kehamilan yang harus segera ditangani?",
            [
              "Mual di pagi hari",
              "Ngidam makanan tertentu",
              "Perdarahan, sakit kepala berat, atau kejang",
              "Kelelahan ringan",
            ],
            2,
            "Perdarahan, sakit kepala berat, dan kejang adalah tanda bahaya kehamilan yang memerlukan penanganan medis segera.",
          ),
          fb(
            304,
            "Kondisi kekurangan sel darah merah pada ibu hamil disebut ___.",
            "Anemia",
            ["Diabetes", "Hipertensi", "Malnutrisi"],
            "Anemia pada ibu hamil dapat menyebabkan kelelahan, bayi lahir prematur, dan berat badan lahir rendah.",
          ),
          tf(
            305,
            "Mual di pagi hari (morning sickness) pada trimester pertama adalah tanda bahaya kehamilan.",
            false,
            "Salah. Morning sickness adalah gejala normal kehamilan muda. Tanda bahaya adalah perdarahan, kejang, atau sakit kepala berat.",
          ),
          mc(
            306,
            "Berapa kali minimal kunjungan ANC yang direkomendasikan?",
            [
              "1 kali selama kehamilan",
              "2 kali selama kehamilan",
              "Minimal 4 kali selama kehamilan",
              "Setiap minggu",
            ],
            2,
            "WHO merekomendasikan minimal 4 kali kunjungan ANC: 1x trimester 1, 1x trimester 2, 2x trimester 3.",
          ),
        ],
      },
      {
        id: 4,
        title: "Pasca Persalinan",
        emoji: "👶",
        description:
          "Kenali pentingnya ASI, imunisasi, dan perawatan pasca melahirkan",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Kapan sebaiknya ASI eksklusif diberikan pada bayi?",
            [
              "Hanya 3 bulan pertama",
              "Selama 6 bulan pertama",
              "Selama 1 tahun penuh",
              "Tidak perlu memberikan ASI",
            ],
            1,
            "WHO dan Kemenkes merekomendasikan ASI eksklusif selama 6 bulan pertama untuk tumbuh kembang optimal.",
          ),
          tf(
            402,
            "ASI mengandung zat imun yang melindungi bayi dari berbagai infeksi.",
            true,
            "Benar. ASI mengandung antibodi, sel imun, dan zat bioaktif yang melindungi bayi dari infeksi dan penyakit.",
          ),
          mc(
            403,
            "Apa manfaat program Keluarga Berencana bagi kesehatan ibu?",
            [
              "Tidak ada manfaat bagi ibu",
              "Meningkatkan risiko kesehatan",
              "Mengurangi risiko komplikasi dan kematian ibu",
              "Hanya bermanfaat bagi anak",
            ],
            2,
            "Program KB membantu mengatur jarak kehamilan, mengurangi risiko komplikasi, dan menurunkan angka kematian ibu.",
          ),
          fb(
            404,
            "Periode 40 hari setelah melahirkan yang penting untuk pemulihan ibu disebut ___.",
            "Masa Nifas",
            ["Trimester", "Menopause", "Laktasi"],
            "Masa nifas adalah periode pasca persalinan selama 40 hari dimana rahim kembali ke ukuran semula dan ibu membutuhkan istirahat.",
          ),
          tf(
            405,
            "Ibu yang menyusui tidak perlu menggunakan KB karena menyusui mencegah kehamilan.",
            false,
            "Salah. Menyusui hanya memberikan perlindungan terbatas. KB tetap dianjurkan selama menyusui untuk mencegah kehamilan tidak terencana.",
          ),
          mc(
            406,
            "Imunisasi dasar pertama apa yang diberikan segera setelah bayi lahir?",
            [
              "Imunisasi Polio",
              "Imunisasi Hepatitis B",
              "Imunisasi Campak",
              "Imunisasi DPT",
            ],
            1,
            "Imunisasi Hepatitis B diberikan dalam 24 jam pertama setelah lahir untuk mencegah penularan Hepatitis B dari ibu ke bayi.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Siapa yang dimaksud dengan Pasangan Usia Subur (PUS)?",
        [
          "Pasangan berusia di atas 50 tahun",
          "Pasangan dengan istri berusia 15-49 tahun",
          "Semua pasangan menikah",
          "Pasangan yang baru menikah",
        ],
        1,
        "PUS adalah pasangan suami istri dimana istri berusia 15-49 tahun.",
      ),
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
          "Setiap remaja memiliki potensi unik yang perlu dikembangkan. Kenali bakat dan minatmu melalui eksplorasi berbagai kegiatan.",
        highlight:
          "Kamu memiliki potensi luar biasa yang menunggu untuk dikembangkan!",
      },
      {
        title: "Strategi Belajar Efektif",
        emoji: "📚",
        content:
          "Tips belajar sukses: Buat jadwal rutin dan konsisten, gunakan teknik Pomodoro (25 menit fokus + 5 menit istirahat), buat ringkasan dengan bahasa sendiri, bergabung dengan kelompok belajar.",
      },
      {
        title: "Bahaya Pernikahan Dini",
        emoji: "⚠️",
        content:
          "Menikah di usia remaja berdampak buruk: putus sekolah, risiko kesehatan akibat kehamilan dini, masalah ekonomi, ketidakstabilan emosional.",
        highlight:
          "Raih cita-citamu dulu, pernikahan lebih indah jika kamu sudah siap!",
      },
      {
        title: "Menghindari NAPZA dan Pergaulan Bebas",
        emoji: "🚫",
        content:
          "NAPZA (Narkotika, Psikotropika, Zat Adiktif) merusak otak dan menghancurkan masa depan. Cara menolak: katakan TIDAK dengan tegas, cari lingkungan pertemanan yang positif.",
      },
      {
        title: "Membangun Karakter dan Masa Depan",
        emoji: "🌟",
        content:
          "Karakter positif yang perlu dibangun: jujur, disiplin, bertanggung jawab, dan berempati. Rencanakan masa depan dengan tujuan SMART.",
        highlight: "Investasi terbaik adalah investasi pada dirimu sendiri.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "Potensi & Karakter",
        emoji: "💫",
        description:
          "Kenali potensi dirimu dan bangun karakter positif sejak remaja",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Apa ciri utama remaja yang memiliki karakter positif?",
            [
              "Selalu menuruti semua keinginan teman",
              "Jujur, bertanggung jawab, disiplin, dan berempati",
              "Tidak peduli dengan orang lain",
              "Hanya memikirkan keuntungan diri sendiri",
            ],
            1,
            "Karakter positif meliputi kejujuran, tanggung jawab, disiplin, empati, dan kepedulian sosial.",
          ),
          tf(
            102,
            "Bakat dan minat tidak perlu dikembangkan karena sudah dimiliki sejak lahir.",
            false,
            "Salah. Bakat perlu diasah dan dikembangkan melalui latihan, belajar, dan pengalaman yang konsisten.",
          ),
          mc(
            103,
            "Mengapa remaja perlu menetapkan tujuan hidup sejak dini?",
            [
              "Tidak perlu, cukup mengikuti arus saja",
              "Agar memiliki arah, motivasi, dan fokus dalam hidup",
              "Tujuan hidup hanya untuk orang dewasa",
              "Supaya terlihat lebih pintar dari teman",
            ],
            1,
            "Tujuan hidup memberikan arah, motivasi, dan fokus sehingga remaja lebih termotivasi berprestasi.",
          ),
          fb(
            104,
            "Metode penetapan tujuan yang efektif menggunakan singkatan ___ (Spesifik, Terukur, Dapat Dicapai, Relevan, Berbatas Waktu).",
            "SMART",
            ["SUKSES", "BEST", "PEAK"],
            "Tujuan SMART (Specific, Measurable, Achievable, Relevant, Time-bound) membantu remaja menetapkan dan mencapai tujuan secara efektif.",
          ),
          tf(
            103,
            "Remaja yang aktif di organisasi sekolah cenderung lebih berkembang soft skillnya.",
            true,
            "Benar. Organisasi sekolah melatih kepemimpinan, komunikasi, kerja tim, dan manajemen waktu yang sangat berguna.",
          ),
          mc(
            105,
            "Apa manfaat memiliki mentor bagi perkembangan remaja?",
            [
              "Membuang waktu yang tidak berguna",
              "Mendapat bimbingan dari orang yang lebih berpengalaman",
              "Hanya berguna bagi remaja bermasalah",
              "Tidak ada manfaat nyata",
            ],
            1,
            "Mentor memberikan bimbingan, motivasi, pengalaman nyata, dan perspektif berharga yang membantu remaja berkembang.",
          ),
        ],
      },
      {
        id: 2,
        title: "Strategi Belajar",
        emoji: "📚",
        description:
          "Kuasai teknik belajar efektif untuk meraih prestasi akademik terbaik",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Strategi belajar yang paling efektif untuk remaja adalah?",
            [
              "Belajar semalam suntuk sebelum ujian",
              "Belajar teratur dan konsisten setiap hari",
              "Hanya menghafal tanpa memahami",
              "Belajar sambil bermain game sepenuhnya",
            ],
            1,
            "Belajar teratur dan konsisten setiap hari jauh lebih efektif daripada belajar SKS (Sistem Kebut Semalam).",
          ),
          tf(
            202,
            "Tidur yang cukup sebelum ujian lebih baik daripada belajar semalam suntuk.",
            true,
            "Benar. Tidur yang cukup membantu konsolidasi memori dan meningkatkan kinerja kognitif saat ujian.",
          ),
          mc(
            203,
            "Apa yang dimaksud dengan teknik Pomodoro dalam belajar?",
            [
              "Belajar non-stop selama 2 jam",
              "Belajar 25 menit, istirahat 5 menit, berulang",
              "Belajar sambil mendengarkan musik keras",
              "Menghafal sambil berjalan-jalan",
            ],
            1,
            "Teknik Pomodoro adalah sesi belajar 25 menit fokus penuh, dilanjutkan 5 menit istirahat untuk menjaga konsentrasi.",
          ),
          fb(
            204,
            "Cara belajar dengan mengelompokkan informasi dalam bentuk diagram disebut ___.",
            "Mind Mapping",
            ["Pomodoro", "Hafalan", "Diskusi"],
            "Mind Mapping adalah teknik mencatat visual yang mengelompokkan informasi secara hierarkis, membantu memahami hubungan antar konsep.",
          ),
          tf(
            205,
            "Belajar kelompok selalu lebih efektif daripada belajar sendiri.",
            false,
            "Salah. Efektivitas belajar bergantung pada gaya belajar masing-masing. Ada yang lebih efektif belajar sendiri, ada yang lebih baik dalam kelompok.",
          ),
          mc(
            206,
            "Bagaimana cara remaja mengelola waktu dengan efektif?",
            [
              "Tidak perlu jadwal, ikuti perasaan saja",
              "Membuat skala prioritas dan jadwal harian yang terstruktur",
              "Mengerjakan semua hal sekaligus",
              "Menunda pekerjaan hingga mendekati deadline",
            ],
            1,
            "Manajemen waktu dengan skala prioritas adalah kunci produktivitas remaja berprestasi.",
          ),
        ],
      },
      {
        id: 3,
        title: "Hindari Perilaku Berisiko",
        emoji: "🚫",
        description:
          "Kenali bahaya NAPZA, pergaulan bebas, dan cara menghindar dari tekanan negatif",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Apa kepanjangan dari NAPZA yang berbahaya bagi remaja?",
            [
              "Nutrisi, Protein, Zat Besi, Air",
              "Narkotika, Psikotropika, dan Zat Adiktif",
              "Nilai, Perilaku, Zaman, dan Alam",
              "Niat, Aksi, Prestasi, Zona, Achievement",
            ],
            1,
            "NAPZA adalah singkatan dari Narkotika, Psikotropika, dan Zat Adiktif lainnya yang berbahaya.",
          ),
          tf(
            302,
            "Mencoba NAPZA sekali saja bisa menyebabkan kecanduan.",
            true,
            "Benar. Beberapa jenis NAPZA seperti heroin dan metamfetamin dapat menyebabkan ketergantungan bahkan setelah percobaan pertama.",
          ),
          mc(
            303,
            "Bagaimana cara terbaik menolak ajakan teman untuk melakukan hal negatif?",
            [
              "Diam dan langsung mengikuti ajakan",
              "Menolak dengan tegas dan memberikan alasan yang jelas",
              "Marah-marah dan memutus pertemanan",
              "Pura-pura tidak mendengar",
            ],
            1,
            "Menolak dengan tegas dan sopan adalah keterampilan penting bagi remaja berprestasi.",
          ),
          fb(
            304,
            "Dorongan dari teman untuk melakukan sesuatu yang mungkin tidak kita inginkan disebut tekanan ___.",
            "Teman Sebaya",
            ["Negatif", "Sosial", "Pergaulan"],
            "Peer pressure (tekanan teman sebaya) adalah pengaruh dari teman seusia yang mendorong kita mengikuti perilaku tertentu.",
          ),
          tf(
            305,
            "Pergaulan bebas tidak berdampak pada prestasi akademik remaja.",
            false,
            "Salah. Pergaulan bebas dapat menurunkan motivasi belajar, mengganggu konsentrasi, dan merusak masa depan akademik remaja.",
          ),
          mc(
            306,
            "Apa dampak pergaulan bebas pada kehidupan remaja?",
            [
              "Meningkatkan prestasi dan popularitas",
              "Risiko kehamilan tidak diinginkan dan infeksi menular seksual",
              "Membuat lebih populer di sekolah",
              "Tidak ada dampak negatif",
            ],
            1,
            "Pergaulan bebas meningkatkan risiko kehamilan tidak diinginkan, IMS, masalah psikologis, dan konsekuensi sosial.",
          ),
        ],
      },
      {
        id: 4,
        title: "Meraih Prestasi",
        emoji: "🏆",
        description:
          "Pelajari cara membangun karir, mengembangkan soft skill, dan meraih masa depan cerah",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Apa dampak negatif pernikahan dini bagi remaja perempuan?",
            [
              "Meningkatkan prestasi akademik",
              "Putus sekolah dan risiko kesehatan meningkat",
              "Mendapat status sosial lebih tinggi",
              "Mempercepat perkembangan karir",
            ],
            1,
            "Pernikahan dini menyebabkan putus sekolah, risiko komplikasi kehamilan, dan hilangnya kesempatan berkembang.",
          ),
          tf(
            402,
            "Aktif dalam kegiatan ekstrakurikuler bermanfaat untuk meningkatkan soft skill.",
            true,
            "Benar. Ekstrakurikuler melatih kepemimpinan, kerja tim, kreativitas, dan kemampuan komunikasi yang dibutuhkan di dunia kerja.",
          ),
          mc(
            403,
            "Kegiatan apa yang paling baik untuk pengembangan diri remaja?",
            [
              "Begadang bermain game setiap malam",
              "Aktif dalam organisasi sekolah dan kegiatan positif",
              "Menghindari semua aktivitas sosial",
              "Hanya fokus pada pelajaran akademik",
            ],
            1,
            "Aktif dalam organisasi mengembangkan soft skill kepemimpinan, kerjasama, komunikasi, dan jaringan sosial.",
          ),
          fb(
            404,
            "Kemampuan non-akademik seperti kepemimpinan, komunikasi, dan kerja tim disebut ___.",
            "Soft Skill",
            ["Hard Skill", "IQ", "Bakat Alami"],
            "Soft skill adalah kemampuan interpersonal yang melengkapi kemampuan teknis (hard skill) dan sangat dihargai di dunia kerja.",
          ),
          tf(
            405,
            "Remaja yang rajin membaca buku cenderung memiliki kemampuan berpikir kritis yang lebih baik.",
            true,
            "Benar. Membaca memperluas wawasan, kosakata, dan kemampuan analisis yang mendukung prestasi akademik dan non-akademik.",
          ),
          mc(
            406,
            "Apa yang dimaksud dengan 'investasi pada diri sendiri' bagi remaja?",
            [
              "Menabung uang sebanyak mungkin",
              "Mengembangkan ilmu, keterampilan, dan karakter positif",
              "Membeli banyak baju dan aksesoris",
              "Hanya berolahraga setiap hari",
            ],
            1,
            "Investasi terbaik adalah mengembangkan ilmu pengetahuan, keterampilan, dan karakter yang berguna sepanjang hidup.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Apa dampak negatif pernikahan dini bagi remaja perempuan?",
        [
          "Meningkatkan prestasi akademik",
          "Putus sekolah dan risiko kesehatan meningkat",
          "Mendapat status sosial lebih tinggi",
          "Mempercepat perkembangan karir",
        ],
        1,
        "Pernikahan dini menyebabkan putus sekolah dan berbagai risiko kesehatan.",
      ),
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
          "Kesehatan reproduksi adalah kondisi sehat secara fisik, mental, dan sosial yang berkaitan dengan sistem reproduksi, bukan sekadar bebas dari penyakit.",
        highlight:
          "Menjaga kesehatan reproduksi adalah hak dan tanggung jawab setiap remaja.",
      },
      {
        title: "Perubahan Fisik Saat Pubertas",
        emoji: "💫",
        content:
          "Perempuan: payudara berkembang, menstruasi pertama, pinggul melebar. Laki-laki: suara membesar, tumbuh jakun, mimpi basah. Semua perubahan ini NORMAL.",
      },
      {
        title: "Menjaga Kebersihan Organ Reproduksi",
        emoji: "🚿",
        content:
          "Tips kebersihan: Bersihkan dengan air bersih dari depan ke belakang (khusus perempuan), ganti pakaian dalam setiap hari, gunakan sabun lembut.",
        highlight:
          "Kebersihan organ reproduksi adalah bagian dari ibadah dan kesehatan.",
      },
      {
        title: "Hubungan Sehat vs Tidak Sehat",
        emoji: "💚",
        content:
          "Hubungan sehat: saling menghormati, mendukung, berkomunikasi terbuka, menjaga batasan pribadi. Hubungan tidak sehat: ada paksaan, manipulasi, kekerasan.",
      },
      {
        title: "Hak Kesehatan Seksual dan Reproduksi",
        emoji: "📖",
        content:
          "Setiap remaja berhak: mendapat informasi yang benar tentang reproduksi, dilindungi dari kekerasan dan eksploitasi, mendapat layanan kesehatan reproduksi yang aman.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "Mengenal Kesehatan Reproduksi",
        emoji: "🌺",
        description:
          "Pahami apa itu kesehatan reproduksi dan pentingnya bagi remaja",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Apa pengertian kesehatan reproduksi yang benar?",
            [
              "Hanya kesehatan alat kelamin saja",
              "Kondisi sehat fisik, mental, dan sosial yang berkaitan dengan sistem reproduksi",
              "Hanya penting bagi perempuan dewasa",
              "Hanya masalah dokter kandungan",
            ],
            1,
            "Kesehatan reproduksi mencakup aspek fisik, mental, dan sosial terkait sistem reproduksi.",
          ),
          tf(
            102,
            "Kesehatan reproduksi hanya penting bagi perempuan saja.",
            false,
            "Salah. Kesehatan reproduksi penting bagi semua orang, laki-laki maupun perempuan, sejak remaja hingga dewasa.",
          ),
          mc(
            103,
            "Kepada siapa sebaiknya remaja berkonsultasi tentang masalah kesehatan reproduksi?",
            [
              "Tidak perlu cerita kepada siapapun",
              "Hanya kepada teman sebaya saja",
              "Orang tua, guru BK, dokter, atau tenaga kesehatan terpercaya",
              "Mencari informasi dari media sosial saja",
            ],
            2,
            "Remaja sebaiknya berkonsultasi dengan orang dewasa terpercaya atau tenaga kesehatan profesional.",
          ),
          fb(
            104,
            "Hak setiap individu untuk mendapat informasi dan layanan kesehatan reproduksi yang aman disebut ___.",
            "HKSR",
            ["HAM", "KIA", "KB"],
            "HKSR (Hak Kesehatan Seksual dan Reproduksi) adalah hak universal setiap individu untuk mendapat informasi dan layanan kesehatan reproduksi.",
          ),
          tf(
            105,
            "Informasi tentang kesehatan reproduksi dari internet selalu dapat dipercaya.",
            false,
            "Salah. Tidak semua informasi di internet akurat. Selalu verifikasi dengan tenaga kesehatan atau sumber resmi terpercaya.",
          ),
          mc(
            106,
            "Apa yang dimaksud dengan HKSR?",
            [
              "Hak ini hanya berlaku untuk orang dewasa",
              "Hak setiap orang mendapat informasi dan layanan kesehatan reproduksi yang aman",
              "Hak untuk berhubungan bebas",
              "Tidak diakui secara internasional",
            ],
            1,
            "HKSR adalah hak universal untuk mendapat informasi benar dan layanan kesehatan reproduksi yang aman.",
          ),
        ],
      },
      {
        id: 2,
        title: "Pubertas & Perubahan Fisik",
        emoji: "💫",
        description:
          "Kenali perubahan fisik saat pubertas pada remaja laki-laki dan perempuan",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Pada perempuan, tanda pertama pubertas yang umumnya muncul adalah?",
            [
              "Suara menjadi lebih besar",
              "Tumbuh rambut di area wajah",
              "Payudara mulai berkembang",
              "Tumbuh jakun di leher",
            ],
            2,
            "Pada perempuan, perkembangan payudara umumnya menjadi tanda pertama pubertas.",
          ),
          tf(
            202,
            "Mimpi basah pada laki-laki remaja adalah tanda adanya gangguan kesehatan.",
            false,
            "Salah. Mimpi basah adalah hal yang normal pada laki-laki remaja, merupakan tanda kematangan seksual yang alami.",
          ),
          mc(
            203,
            "Apa itu menstruasi pada perempuan?",
            [
              "Tanda bahwa sedang sakit parah",
              "Peluruhan dinding rahim ketika tidak terjadi pembuahan",
              "Tanda kehamilan yang pasti",
              "Reaksi alergi pada sistem reproduksi",
            ],
            1,
            "Menstruasi adalah proses alami peluruhan lapisan dinding rahim setiap bulan ketika sel telur tidak dibuahi.",
          ),
          fb(
            204,
            "Perempuan pertama kali mendapat menstruasi disebut ___.",
            "Menarche",
            ["Menopause", "Ovulasi", "Pubertas"],
            "Menarche adalah menstruasi pertama yang dialami remaja perempuan, biasanya terjadi antara usia 10-15 tahun.",
          ),
          tf(
            205,
            "Perempuan yang belum mendapat menstruasi di usia 16 tahun harus berkonsultasi ke dokter.",
            true,
            "Benar. Jika menstruasi pertama belum datang di usia 16 tahun, sebaiknya konsultasi ke dokter untuk pemeriksaan lebih lanjut.",
          ),
          mc(
            206,
            "Pada remaja laki-laki, suara yang berubah menjadi lebih berat disebabkan oleh?",
            [
              "Terlalu banyak minum air putih",
              "Pertumbuhan laring dan pengaruh hormon testosteron",
              "Penyakit tenggorokan",
              "Kurang makan bergizi",
            ],
            1,
            "Perubahan suara pada laki-laki remaja terjadi karena pertumbuhan laring dan peningkatan hormon testosteron.",
          ),
        ],
      },
      {
        id: 3,
        title: "Kebersihan & Keselamatan",
        emoji: "🚿",
        description:
          "Pelajari cara menjaga kebersihan organ reproduksi dan keselamatan diri",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Cara yang benar membersihkan organ reproduksi perempuan adalah?",
            [
              "Menggunakan sabun antiseptik kuat setiap hari",
              "Membersihkan dengan air bersih dari arah depan ke belakang",
              "Tidak perlu dibersihkan khusus",
              "Menggunakan parfum pada area tersebut",
            ],
            1,
            "Membersihkan dari arah depan ke belakang mencegah bakteri dari anus berpindah ke vagina.",
          ),
          tf(
            302,
            "Menggunakan sabun antiseptik kuat untuk membersihkan organ reproduksi setiap hari adalah hal yang baik.",
            false,
            "Salah. Sabun antiseptik kuat dapat merusak flora normal vagina. Cukup gunakan air bersih atau sabun ringan.",
          ),
          mc(
            303,
            "Apa yang harus dilakukan jika mendapat tekanan untuk melakukan hubungan seksual?",
            [
              "Langsung menuruti agar tidak kehilangan teman",
              "Menolak dengan tegas dan mencari bantuan dari orang terpercaya",
              "Diam saja dan pasrah",
              "Menyalahkan diri sendiri",
            ],
            1,
            "Setiap orang berhak menolak tekanan seksual. Menolak dengan tegas dan mencari bantuan adalah respons yang tepat.",
          ),
          fb(
            304,
            "Tindakan yang tidak diinginkan secara seksual yang dilakukan oleh seseorang yang dikenal disebut ___.",
            "Pelecehan Seksual",
            ["Bullying", "KDRT", "Diskriminasi"],
            "Pelecehan seksual adalah tindakan seksual yang tidak diinginkan dan dapat terjadi dari orang asing maupun orang yang dikenal.",
          ),
          tf(
            305,
            "Korban pelecehan seksual tidak perlu melapor karena itu adalah aib.",
            false,
            "Salah. Korban pelecehan seksual harus melapor. Melapor adalah hak dan langkah penting untuk mendapat perlindungan dan keadilan.",
          ),
          mc(
            306,
            "Apa ciri-ciri hubungan pertemanan atau pacaran yang sehat?",
            [
              "Ada paksaan dalam setiap keputusan",
              "Saling menghormati, mendukung, dan menjaga batasan",
              "Selalu bergantung pada pasangan untuk semua hal",
              "Menyimpan rahasia berbahaya bersama",
            ],
            1,
            "Hubungan sehat ditandai dengan saling menghormati, komunikasi terbuka, dan menghargai batasan masing-masing.",
          ),
        ],
      },
      {
        id: 4,
        title: "Mencegah Risiko & Penyakit",
        emoji: "🛡️",
        description:
          "Kenali risiko kehamilan remaja, penyakit menular seksual, dan cara pencegahannya",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Apa bahaya kehamilan pada usia remaja (di bawah 19 tahun)?",
            [
              "Tidak ada bahaya khusus",
              "Risiko komplikasi dan kematian ibu lebih tinggi",
              "Justru lebih mudah melahirkan di usia muda",
              "Bayi yang dilahirkan lebih sehat",
            ],
            1,
            "Remaja belum siap secara fisik dan mental untuk kehamilan, sehingga risiko komplikasi lebih tinggi.",
          ),
          tf(
            402,
            "HIV/AIDS dapat menular melalui jabat tangan atau duduk bersama orang yang terinfeksi.",
            false,
            "Salah. HIV menular melalui cairan tubuh tertentu seperti darah, ASI, dan hubungan seksual, bukan melalui kontak fisik biasa.",
          ),
          mc(
            403,
            "Penyakit Menular Seksual (PMS) dapat dicegah secara efektif dengan?",
            [
              "Minum antibiotik setiap hari",
              "Tidak melakukan hubungan seksual berisiko dan setia pada pasangan yang sehat",
              "Makan buah-buahan dan suplemen saja",
              "Berolahraga rutin setiap pagi",
            ],
            1,
            "Pencegahan PMS yang paling efektif adalah tidak melakukan hubungan seksual berisiko dan setia pada pasangan.",
          ),
          fb(
            405,
            "Virus yang menyerang sistem kekebalan tubuh dan ditularkan melalui hubungan seksual berisiko adalah ___.",
            "HIV",
            ["Hepatitis B", "HPV", "Sifilis"],
            "HIV (Human Immunodeficiency Virus) menyerang sel CD4 yang melindungi tubuh dari infeksi, dan dapat berkembang menjadi AIDS.",
          ),
          tf(
            404,
            "Kehamilan remaja di bawah usia 19 tahun berisiko lebih tinggi menyebabkan komplikasi.",
            true,
            "Benar. Tubuh remaja belum sepenuhnya siap untuk kehamilan, meningkatkan risiko komplikasi seperti preeklamsia dan anemia.",
          ),
          mc(
            406,
            "Apa manfaat melakukan pemeriksaan kesehatan reproduksi secara rutin?",
            [
              "Tidak ada manfaatnya",
              "Hanya untuk orang yang sudah sakit",
              "Deteksi dini masalah kesehatan reproduksi sebelum berkembang serius",
              "Hanya untuk perempuan yang sudah menikah",
            ],
            2,
            "Pemeriksaan rutin membantu mendeteksi masalah sejak dini sehingga dapat ditangani sebelum berkembang lebih serius.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Apa pengertian kesehatan reproduksi yang benar?",
        [
          "Hanya kesehatan alat kelamin saja",
          "Kondisi sehat fisik, mental, dan sosial yang berkaitan dengan sistem reproduksi",
          "Hanya penting bagi perempuan dewasa",
          "Hanya masalah dokter kandungan",
        ],
        1,
        "Kesehatan reproduksi mencakup aspek fisik, mental, dan sosial terkait sistem reproduksi.",
      ),
    ],
  },
];
