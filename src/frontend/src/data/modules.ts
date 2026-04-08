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

  // ─── MODULE 6: Anak & Perlindungan ───────────────────────────────────────
  {
    id: "anak-perlindungan",
    title: "Anak & Perlindungan",
    subtitle:
      "Edukasi organ reproduksi anak dan perlindungan dari kekerasan seksual",
    emoji: "🛡️",
    gradientFrom: "#EC4899",
    gradientTo: "#DC2626",
    accentColor: "#EC4899",
    lembarBalik: [
      {
        title: "Mengenal Organ Reproduksi Anak",
        emoji: "🔬",
        content:
          "Setiap anak berhak mengenal tubuhnya sendiri dengan benar. Organ reproduksi adalah bagian tubuh yang tertutup pakaian dalam. Mengajarkan nama yang tepat sejak dini membantu anak berkomunikasi jika terjadi sesuatu yang tidak baik.",
        highlight:
          "Pengetahuan tentang tubuh adalah bentuk perlindungan pertama bagi anak.",
      },
      {
        title: "Cara Menjaga Kebersihan",
        emoji: "🚿",
        content:
          "Kebersihan organ reproduksi sangat penting: ganti pakaian dalam setiap hari, bersihkan dengan air bersih, arah membersihkan dari depan ke belakang untuk anak perempuan, dan gunakan pakaian dalam yang bersih serta tidak terlalu ketat.",
      },
      {
        title: "Sentuhan Aman vs Tidak Aman",
        emoji: "✋",
        content:
          "Ajarkan anak tentang sentuhan aman (pelukan orang tua, pemeriksaan dokter dengan izin) dan sentuhan tidak aman (menyentuh bagian tubuh yang tertutup pakaian dalam tanpa alasan medis). Anak berhak menolak sentuhan yang tidak nyaman.",
        highlight: "Tubuhku milikku — anak berhak berkata TIDAK!",
      },
      {
        title: "Mengenali Child Grooming",
        emoji: "⚠️",
        content:
          "Child grooming adalah proses pendekatan oleh pelaku untuk memanipulasi anak sebelum melakukan kekerasan seksual. Tanda-tanda: orang dewasa yang terlalu dekat secara pribadi, memberi hadiah berlebihan, meminta bertemu diam-diam, mengajak anak menjaga rahasia.",
      },
      {
        title: "Peran Ayah dalam Perlindungan",
        emoji: "👨‍👧",
        content:
          "Ayah memiliki peran vital dalam melindungi anak: membangun komunikasi terbuka, mengajarkan batasan sentuhan, mengawasi lingkungan pergaulan anak, dan menjadi sosok aman tempat anak melapor jika terjadi sesuatu yang tidak nyaman.",
        highlight:
          "Keterlibatan ayah mengurangi risiko anak menjadi korban kekerasan seksual.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "Mengenal Organ Reproduksi",
        emoji: "🔬",
        description:
          "Kenali organ reproduksi, fungsinya, dan cara menjaga kebersihannya",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Apa yang dimaksud dengan organ reproduksi pada anak?",
            [
              "Hanya organ pencernaan",
              "Bagian tubuh yang tertutup pakaian dalam dan berkaitan dengan reproduksi",
              "Seluruh bagian tubuh",
              "Hanya wajah dan tangan",
            ],
            1,
            "Organ reproduksi adalah bagian tubuh yang tertutup pakaian dalam, penting dikenal anak agar bisa melindungi dirinya.",
          ),
          tf(
            102,
            "Mengajarkan nama yang benar untuk organ reproduksi kepada anak sejak dini adalah hal yang baik dan penting.",
            true,
            "Benar. Anak yang tahu nama organ tubuhnya dengan tepat lebih mudah berkomunikasi jika terjadi sesuatu yang tidak nyaman.",
          ),
          mc(
            103,
            "Fungsi utama organ reproduksi perempuan yang akan digunakan saat dewasa adalah?",
            [
              "Untuk bernapas",
              "Untuk berkembang biak dan melanjutkan keturunan",
              "Hanya untuk buang air",
              "Untuk menyerap makanan",
            ],
            1,
            "Organ reproduksi berfungsi untuk berkembang biak dan melanjutkan keturunan, aktif secara penuh saat dewasa.",
          ),
          fb(
            104,
            "Bagian tubuh yang tertutup pakaian dalam dan tidak boleh disentuh sembarangan oleh orang lain disebut bagian ___.",
            "Privat",
            ["Umum", "Terbuka", "Bebas"],
            "Bagian privat adalah area tubuh yang dilindungi pakaian dalam, hanya boleh diperiksa oleh dokter dengan izin orang tua.",
          ),
          tf(
            105,
            "Anak perempuan dan laki-laki memiliki organ reproduksi yang berbeda.",
            true,
            "Benar. Perbedaan organ reproduksi antara laki-laki dan perempuan adalah hal yang normal dan alami.",
          ),
          mc(
            106,
            "Mengapa anak perlu mengenal organ reproduksinya sejak dini?",
            [
              "Agar bisa membicarakannya dengan semua orang",
              "Agar bisa melindungi diri dan berkomunikasi jika ada yang tidak nyaman",
              "Tidak perlu, cukup diketahui saat dewasa",
              "Supaya bisa mengajarkan ke teman-temannya",
            ],
            1,
            "Pengetahuan dini membantu anak melindungi diri dan melaporkan jika ada yang mencoba menyentuh bagian privat mereka.",
          ),
        ],
      },
      {
        id: 2,
        title: "Menjaga Kebersihan",
        emoji: "🚿",
        description:
          "Pelajari cara menjaga kebersihan organ reproduksi dengan benar",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Cara yang benar membersihkan organ reproduksi anak perempuan adalah?",
            [
              "Dari belakang ke depan",
              "Dari depan ke belakang menggunakan air bersih",
              "Dengan sabun antiseptik kuat setiap hari",
              "Tidak perlu dibersihkan secara khusus",
            ],
            1,
            "Membersihkan dari depan ke belakang mencegah bakteri dari anus berpindah ke vagina, menghindari infeksi.",
          ),
          tf(
            202,
            "Pakaian dalam harus diganti setiap hari untuk menjaga kebersihan organ reproduksi.",
            true,
            "Benar. Mengganti pakaian dalam setiap hari penting untuk mencegah berkembangnya bakteri dan jamur.",
          ),
          mc(
            203,
            "Apa yang sebaiknya digunakan untuk membersihkan organ reproduksi anak sehari-hari?",
            [
              "Sabun berbahan kimia keras",
              "Air bersih saja atau sabun ringan tanpa pewangi",
              "Antiseptik rumah tangga",
              "Bedak talc setiap hari",
            ],
            1,
            "Air bersih sudah cukup untuk membersihkan organ reproduksi anak. Sabun ringan tanpa pewangi boleh digunakan seperlunya.",
          ),
          fb(
            204,
            "Siklus bulanan yang dialami perempuan yang sudah pubertas dan perlu dijaga kebersihannya disebut ___.",
            "Menstruasi",
            ["Ovulasi", "Pubertas", "Laktasi"],
            "Menstruasi adalah peluruhan dinding rahim setiap bulan. Kebersihan saat menstruasi penting dengan mengganti pembalut secara rutin.",
          ),
          tf(
            205,
            "Memakai pakaian dalam yang terlalu ketat tidak mempengaruhi kesehatan organ reproduksi.",
            false,
            "Salah. Pakaian dalam yang terlalu ketat dapat mengganggu sirkulasi udara dan meningkatkan risiko infeksi jamur.",
          ),
          mc(
            206,
            "Berapa kali sebaiknya pakaian dalam diganti dalam sehari?",
            [
              "Cukup seminggu sekali",
              "Minimal satu kali sehari, lebih sering jika kotor atau lembab",
              "Sebulan sekali sudah cukup",
              "Hanya saat mandi malam",
            ],
            1,
            "Pakaian dalam harus diganti minimal sekali sehari, atau lebih sering jika terasa lembab atau kotor untuk menjaga kebersihan.",
          ),
        ],
      },
      {
        id: 3,
        title: "Mengenal Child Grooming",
        emoji: "⚠️",
        description:
          "Kenali perilaku grooming dan cara melindungi diri dari manipulasi",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Apa yang dimaksud dengan child grooming?",
            [
              "Cara merawat rambut anak",
              "Proses manipulasi oleh pelaku untuk mendekati anak sebelum melakukan kekerasan seksual",
              "Program bimbingan belajar anak",
              "Kegiatan bermain bersama anak",
            ],
            1,
            "Child grooming adalah taktik pelaku kejahatan seksual untuk mendekati dan memanipulasi anak secara bertahap.",
          ),
          tf(
            302,
            "Orang yang melakukan grooming selalu merupakan orang asing yang tidak dikenal.",
            false,
            "Salah. Pelaku grooming seringkali adalah orang yang dikenal dan dipercaya anak, seperti kerabat, tetangga, atau guru.",
          ),
          mc(
            303,
            "Mana yang merupakan tanda peringatan (warning sign) dari grooming?",
            [
              "Guru yang mengajari pelajaran tambahan di sekolah",
              "Orang dewasa yang sering memberi hadiah dan mengajak bertemu diam-diam",
              "Teman bermain yang mengajak bermain di taman umum",
              "Dokter yang memeriksa dengan orang tua hadir",
            ],
            1,
            "Pemberian hadiah berlebihan dan ajakan bertemu diam-diam adalah tanda peringatan grooming yang harus diwaspadai.",
          ),
          fb(
            304,
            "Strategi pelaku grooming meminta anak menjaga rahasia perbuatan mereka disebut ___.",
            "Manipulasi",
            ["Pendekatan", "Persahabatan", "Pendampingan"],
            "Manipulasi adalah taktik grooming di mana pelaku mengontrol anak melalui rasa takut, janji, atau hadiah agar menyimpan rahasia.",
          ),
          tf(
            305,
            "Anak boleh menerima hadiah dari orang dewasa manapun tanpa memberitahu orang tuanya.",
            false,
            "Salah. Anak harus selalu memberitahu orang tua jika menerima hadiah dari orang dewasa, terutama jika diminta merahasiakannya.",
          ),
          mc(
            306,
            "Apa yang harus dilakukan anak jika ada orang dewasa yang mengajaknya bertemu diam-diam?",
            [
              "Langsung pergi memenuhi ajakan tersebut",
              "Menolak dan segera memberitahu orang tua atau orang dewasa terpercaya",
              "Diam saja karena tidak enak menolak",
              "Mempertimbangkan dulu tawaran hadiahnya",
            ],
            1,
            "Anak harus berani menolak dan segera memberitahu orang tua atau orang dewasa terpercaya tentang situasi tersebut.",
          ),
        ],
      },
      {
        id: 4,
        title: "Peran Ayah dalam Perlindungan",
        emoji: "👨‍👧",
        description:
          "Pahami peran vital ayah dalam melindungi anak dari kekerasan seksual",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Apa peran penting ayah dalam perlindungan anak dari kekerasan seksual?",
            [
              "Hanya mencari nafkah dan tidak perlu terlibat",
              "Membangun komunikasi terbuka dan mengajarkan batasan sentuhan yang aman",
              "Menyerahkan urusan anak sepenuhnya kepada ibu",
              "Melarang anak berteman dengan siapapun",
            ],
            1,
            "Ayah yang terlibat aktif membantu anak memahami batasan tubuh dan menciptakan ruang aman untuk melapor.",
          ),
          tf(
            402,
            "Keterlibatan ayah dalam pengasuhan anak terbukti mengurangi risiko anak menjadi korban kekerasan seksual.",
            true,
            "Benar. Penelitian menunjukkan bahwa anak dengan figur ayah yang aktif dan komunikatif lebih terlindungi dari kekerasan.",
          ),
          mc(
            403,
            "Bagaimana cara ayah membangun komunikasi yang baik dengan anak tentang keselamatan tubuh?",
            [
              "Membicarakannya hanya sekali saat anak sudah dewasa",
              "Menghindari topik tersebut karena dianggap tabu",
              "Membicarakan secara terbuka, menggunakan bahasa yang sesuai usia, sejak dini",
              "Menyerahkan sepenuhnya pada guru di sekolah",
            ],
            2,
            "Komunikasi terbuka sejak dini dengan bahasa yang sesuai usia membangun kepercayaan anak untuk melapor jika ada masalah.",
          ),
          fb(
            404,
            "Tindakan ayah yang aktif terlibat dalam kehidupan anak untuk melindunginya disebut pengasuhan ___.",
            "Responsif",
            ["Otoriter", "Permisif", "Neglektif"],
            "Pengasuhan responsif adalah gaya pengasuhan di mana ayah peka terhadap kebutuhan anak, memberikan respons tepat, dan membangun rasa aman.",
          ),
          tf(
            405,
            "Ayah tidak perlu membicarakan topik keselamatan tubuh karena itu tugas ibu.",
            false,
            "Salah. Baik ayah maupun ibu memiliki peran penting dalam mengajarkan keselamatan tubuh dan perlindungan dari kekerasan.",
          ),
          mc(
            406,
            "Apa yang sebaiknya dilakukan ayah jika anaknya melapor mengalami sentuhan yang tidak nyaman?",
            [
              "Menghukum anak karena dianggap mempermalukan keluarga",
              "Tidak percaya dan menganggap anak berlebihan",
              "Mendengarkan dengan serius, menenangkan anak, dan segera melaporkan ke pihak berwenang",
              "Menunggu bukti yang lebih kuat dulu",
            ],
            2,
            "Respons ayah yang tepat adalah mendengarkan, percaya, menenangkan anak, dan segera bertindak untuk melindunginya.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Apa yang dimaksud dengan organ reproduksi pada anak?",
        [
          "Hanya organ pencernaan",
          "Bagian tubuh yang tertutup pakaian dalam dan berkaitan dengan reproduksi",
          "Seluruh bagian tubuh",
          "Hanya wajah dan tangan",
        ],
        1,
        "Organ reproduksi adalah bagian tubuh yang tertutup pakaian dalam.",
      ),
    ],
  },

  // ─── MODULE 7: Remaja & Calon Pengantin ─────────────────────────────────
  {
    id: "remaja-calon-pengantin",
    title: "Remaja & Calon Pengantin",
    subtitle: "Persiapan menuju pernikahan sehat dan bertanggung jawab",
    emoji: "💍",
    gradientFrom: "#A855F7",
    gradientTo: "#4338CA",
    accentColor: "#A855F7",
    lembarBalik: [
      {
        title: "Menghindari Hubungan Seksual Sebelum Menikah",
        emoji: "🚫",
        content:
          "Hubungan seksual sebelum menikah membawa risiko besar: kehamilan tidak diinginkan, infeksi menular seksual, trauma psikologis, dan dampak sosial. Dari sisi agama, budaya, dan kesehatan — menunggu hingga menikah adalah pilihan terbaik.",
        highlight:
          "Kesucian diri adalah investasi terbaik untuk masa depan pernikahan.",
      },
      {
        title: "Risiko Kehamilan Remaja",
        emoji: "⚠️",
        content:
          "Kehamilan remaja membawa dampak besar: putus sekolah, komplikasi medis (preeklamsia, anemia), bayi berat lahir rendah, dampak psikologis, dan ketidakstabilan ekonomi. Angka kematian ibu remaja 2-5 kali lebih tinggi dari ibu dewasa.",
      },
      {
        title: "Pemeriksaan Kesehatan Pra-Nikah",
        emoji: "🏥",
        content:
          "Calon pengantin dianjurkan melakukan pemeriksaan: golongan darah, Hb, hepatitis B, HIV/AIDS, TORCH (Toxoplasma, Rubella, CMV, Herpes), dan kesuburan. Deteksi dini mencegah masalah kesehatan yang dapat diturunkan ke anak.",
        highlight:
          "Cek kesehatan pra-nikah adalah bukti cinta kepada pasangan dan calon anak.",
      },
      {
        title: "Nutrisi Pra-Kehamilan",
        emoji: "🥗",
        content:
          "Calon ibu perlu mempersiapkan nutrisi sebelum hamil: asam folat (400-800 mcg/hari), zat besi, kalsium, dan protein cukup. Mulai konsumsi suplemen asam folat minimal 3 bulan sebelum kehamilan direncanakan.",
      },
      {
        title: "Persiapan Mental Calon Pengantin",
        emoji: "🧠",
        content:
          "Selain fisik, kesiapan mental penting: kemampuan berkomunikasi, manajemen konflik, kesiapan menjadi orang tua, dan pemahaman tentang peran suami-istri. Konseling pra-nikah membantu pasangan membangun pondasi hubungan yang kuat.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "Menghindari Seks Pra-Nikah",
        emoji: "🚫",
        description:
          "Pahami alasan kuat menghindari hubungan seksual sebelum menikah",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Mengapa hubungan seksual sebelum menikah perlu dihindari?",
            [
              "Karena dilarang pemerintah saja",
              "Karena berisiko kehamilan tidak diinginkan, IMS, dan trauma psikologis",
              "Hanya karena aturan adat tertentu",
              "Tidak ada alasan kuat untuk menghindarinya",
            ],
            1,
            "Hubungan seksual pra-nikah berisiko kehamilan tidak diinginkan, infeksi menular seksual, dan dampak psikologis jangka panjang.",
          ),
          tf(
            102,
            "Semua agama besar di Indonesia melarang hubungan seksual sebelum menikah.",
            true,
            "Benar. Islam, Kristen, Katolik, Hindu, dan Budha semua mengajarkan pentingnya menjaga kesucian sebelum pernikahan.",
          ),
          mc(
            103,
            "Apa dampak psikologis dari hubungan seksual pra-nikah bagi remaja?",
            [
              "Tidak ada dampak psikologis",
              "Rasa bersalah, rendah diri, trauma, dan gangguan kepercayaan diri",
              "Menjadi lebih percaya diri",
              "Meningkatkan prestasi belajar",
            ],
            1,
            "Hubungan seksual pra-nikah dapat menyebabkan rasa bersalah, trauma, dan gangguan psikologis yang mempengaruhi kehidupan.",
          ),
          fb(
            104,
            "Kemampuan remaja untuk menolak tekanan teman dalam situasi negatif disebut ___.",
            "Asertivitas",
            ["Agresivitas", "Pasivitas", "Emosionalitas"],
            "Asertivitas adalah kemampuan menyatakan pendapat dan batasan dengan tegas namun sopan, keterampilan penting bagi remaja.",
          ),
          tf(
            105,
            "Remaja yang menolak ajakan seks pra-nikah berarti tidak modern dan ketinggalan zaman.",
            false,
            "Salah. Menolak seks pra-nikah adalah keputusan yang cerdas, matang, dan bertanggung jawab atas kesehatan dan masa depan.",
          ),
          mc(
            106,
            "Apa yang sebaiknya dilakukan remaja yang mendapat tekanan dari pasangan untuk melakukan hubungan seksual?",
            [
              "Menurut saja agar hubungan tetap harmonis",
              "Menolak dengan tegas dan mempertimbangkan apakah hubungan ini sehat",
              "Diam saja karena tidak enak menolak",
              "Menunda keputusan tanpa batas waktu",
            ],
            1,
            "Tekanan untuk melakukan hubungan seksual adalah tanda hubungan yang tidak sehat. Menolak dengan tegas adalah respons yang tepat.",
          ),
        ],
      },
      {
        id: 2,
        title: "Risiko Kehamilan Remaja",
        emoji: "⚠️",
        description:
          "Kenali dampak serius kehamilan di usia remaja bagi ibu dan bayi",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Berapa kali lebih tinggi risiko kematian ibu remaja dibanding ibu dewasa?",
            [
              "Sama saja tidak ada perbedaan",
              "2-5 kali lebih tinggi",
              "Hanya 10% lebih tinggi",
              "Ibu remaja justru lebih kuat",
            ],
            1,
            "Angka kematian ibu remaja 2-5 kali lebih tinggi karena tubuh belum matang untuk menanggung beban kehamilan.",
          ),
          tf(
            202,
            "Kehamilan remaja dapat menyebabkan putus sekolah dan kehilangan kesempatan pendidikan.",
            true,
            "Benar. Kehamilan remaja sering memaksa anak muda meninggalkan pendidikan, membatasi peluang karir dan kehidupan mereka.",
          ),
          mc(
            203,
            "Apa risiko kesehatan yang paling sering dialami ibu hamil usia remaja?",
            [
              "Tidak ada risiko khusus",
              "Preeklamsia, anemia, dan bayi berat lahir rendah",
              "Justru lebih sehat karena masih muda",
              "Hanya kelelahan ringan",
            ],
            1,
            "Ibu hamil remaja rentan mengalami preeklamsia, anemia berat, dan melahirkan bayi dengan berat badan lahir rendah.",
          ),
          fb(
            204,
            "Kondisi tekanan darah tinggi berbahaya saat kehamilan yang sering dialami ibu muda disebut ___.",
            "Preeklamsia",
            ["Anemia", "Diabetes", "Hipertensi biasa"],
            "Preeklamsia adalah kondisi tekanan darah tinggi disertai protein dalam urin saat hamil, berbahaya bagi ibu dan janin.",
          ),
          tf(
            205,
            "Bayi yang lahir dari ibu remaja memiliki risiko lebih tinggi mengalami berat badan lahir rendah.",
            true,
            "Benar. Ibu remaja sering belum mampu memenuhi kebutuhan nutrisi optimal untuk pertumbuhan janin yang sehat.",
          ),
          mc(
            206,
            "Apa dampak sosial kehamilan remaja yang paling umum di Indonesia?",
            [
              "Mendapat dukungan penuh dari masyarakat",
              "Stigma sosial, putus sekolah, dan isolasi dari komunitas",
              "Dihormati sebagai ibu muda yang berani",
              "Mendapat beasiswa khusus dari pemerintah",
            ],
            1,
            "Kehamilan remaja sering menyebabkan stigma sosial, putus sekolah, dan isolasi yang berdampak jangka panjang.",
          ),
        ],
      },
      {
        id: 3,
        title: "Persiapan Fisik Calon Pengantin",
        emoji: "🏥",
        description:
          "Siapkan kondisi fisik optimal sebelum memasuki jenjang pernikahan",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Mengapa pemeriksaan kesehatan pra-nikah penting dilakukan?",
            [
              "Hanya untuk memenuhi syarat administrasi saja",
              "Mendeteksi kondisi kesehatan yang perlu ditangani sebelum menikah dan hamil",
              "Tidak penting karena muda pasti sehat",
              "Hanya untuk pasangan yang sudah tua",
            ],
            1,
            "Pemeriksaan pra-nikah mendeteksi dini kondisi yang bisa mempengaruhi kesehatan pasangan dan calon anak.",
          ),
          tf(
            302,
            "Pemeriksaan TORCH (Toxoplasma, Rubella, CMV, Herpes) penting dilakukan calon pengantin wanita.",
            true,
            "Benar. Infeksi TORCH yang tidak terdeteksi dapat menyebabkan cacat bawaan atau keguguran pada kehamilan.",
          ),
          mc(
            303,
            "Vaksin apa yang dianjurkan untuk calon pengantin wanita sebelum menikah?",
            [
              "Tidak perlu vaksin apapun",
              "Vaksin Tetanus Toksoid (TT) dan Hepatitis B",
              "Hanya vaksin influenza",
              "Vaksin untuk semua penyakit ada",
            ],
            1,
            "Vaksin TT melindungi bayi dari tetanus neonatorum, sedangkan Hepatitis B mencegah penularan ke bayi.",
          ),
          fb(
            304,
            "Pemeriksaan golongan darah dan faktor rhesus penting untuk mencegah konflik ___.",
            "Rhesus",
            ["Golongan Darah", "Imun", "Genetik"],
            "Konflik rhesus terjadi jika ibu rhesus negatif mengandung bayi rhesus positif, dapat berbahaya jika tidak dideteksi.",
          ),
          tf(
            305,
            "Kadar hemoglobin (Hb) calon pengantin wanita tidak perlu diperiksa.",
            false,
            "Salah. Anemia (Hb rendah) pada calon pengantin wanita perlu ditangani sebelum hamil untuk mencegah komplikasi.",
          ),
          mc(
            306,
            "Berapa lama sebelum menikah idealnya melakukan pemeriksaan kesehatan pra-nikah?",
            [
              "Satu hari sebelum menikah",
              "Minimal 3-6 bulan sebelum menikah",
              "Setelah menikah saja tidak masalah",
              "Tidak ada waktu yang tepat",
            ],
            1,
            "Pemeriksaan 3-6 bulan sebelum menikah memberikan cukup waktu untuk menangani masalah kesehatan yang ditemukan.",
          ),
        ],
      },
      {
        id: 4,
        title: "Persiapan Kehamilan Sehat",
        emoji: "🤰",
        description:
          "Rencanakan kehamilan sehat dengan persiapan nutrisi dan pemeriksaan yang tepat",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Kapan sebaiknya calon ibu mulai mengonsumsi suplemen asam folat?",
            [
              "Setelah positif hamil",
              "Minimal 3 bulan sebelum kehamilan direncanakan",
              "Hanya saat trimester ketiga",
              "Tidak perlu suplemen, cukup makanan biasa",
            ],
            1,
            "Asam folat perlu dikonsumsi 3 bulan sebelum hamil untuk mencegah cacat tabung saraf pada janin.",
          ),
          tf(
            402,
            "Asam folat hanya dibutuhkan oleh ibu yang sudah hamil.",
            false,
            "Salah. Asam folat sebaiknya dikonsumsi sebelum kehamilan karena tabung saraf janin terbentuk pada minggu pertama.",
          ),
          mc(
            403,
            "Apa manfaat asam folat untuk calon ibu?",
            [
              "Tidak ada manfaat khusus",
              "Mencegah cacat tabung saraf pada janin dan anemia pada ibu",
              "Hanya untuk menjaga berat badan",
              "Suplemen untuk kulit wajah",
            ],
            1,
            "Asam folat mencegah cacat tabung saraf (spina bifida, anensefali) dan mendukung pembentukan sel darah merah.",
          ),
          fb(
            404,
            "Kondisi ideal berat badan sebelum hamil yang diukur menggunakan Indeks Masa Tubuh normal disebut ___.",
            "Berat Badan Ideal",
            ["Overweight", "Underweight", "Obesitas"],
            "Berat badan ideal sebelum hamil (IMT 18,5-24,9) mendukung kehamilan sehat dan menurunkan risiko komplikasi.",
          ),
          tf(
            405,
            "Calon ayah juga perlu menjaga kesehatan sebelum kehamilan direncanakan.",
            true,
            "Benar. Kualitas sperma ayah mempengaruhi kesuburan dan kesehatan kehamilan. Gaya hidup sehat ayah sangat penting.",
          ),
          mc(
            406,
            "Apa yang dimaksud dengan perawatan antenatal pertama pada kehamilan?",
            [
              "Operasi caesar",
              "Kunjungan pertama ke tenaga kesehatan untuk pemeriksaan kehamilan",
              "Pemberian obat-obatan khusus",
              "Pemeriksaan setelah melahirkan",
            ],
            1,
            "Kunjungan antenatal pertama pada trimester 1 penting untuk memastikan kehamilan sehat dan mendeteksi risiko sejak awal.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Mengapa hubungan seksual sebelum menikah perlu dihindari?",
        [
          "Karena dilarang pemerintah saja",
          "Karena berisiko kehamilan tidak diinginkan, IMS, dan trauma psikologis",
          "Hanya karena aturan adat tertentu",
          "Tidak ada alasan kuat untuk menghindarinya",
        ],
        1,
        "Hubungan seksual pra-nikah berisiko kehamilan tidak diinginkan dan dampak psikologis.",
      ),
    ],
  },

  // ─── MODULE 8: PUS & KB Pascapersalinan ─────────────────────────────────
  {
    id: "pus-kbpp",
    title: "PUS & KB Pascapersalinan",
    subtitle: "KB pascapersalinan dan peran suami dalam keluarga berencana",
    emoji: "👶",
    gradientFrom: "#14B8A6",
    gradientTo: "#0891B2",
    accentColor: "#14B8A6",
    lembarBalik: [
      {
        title: "KB Pascapersalinan (KBPP)",
        emoji: "📅",
        content:
          "KB Pascapersalinan adalah penggunaan kontrasepsi segera setelah melahirkan untuk mencegah kehamilan terlalu cepat. WHO merekomendasikan jarak kehamilan minimal 24 bulan. KBPP melindungi kesehatan ibu dan mendukung tumbuh kembang bayi.",
        highlight:
          "Mulai KB segera setelah melahirkan adalah keputusan terbaik untuk keluarga.",
      },
      {
        title: "Metode KB yang Tepat untuk Ibu Menyusui",
        emoji: "💊",
        content:
          "KB untuk ibu menyusui: IUD (dapat dipasang 48 jam atau 6 minggu setelah melahirkan), Implan (6 minggu setelah melahirkan), Suntik progestin saja (tidak mempengaruhi ASI), dan MAL (Metode Amenore Laktasi) jika menyusui eksklusif.",
      },
      {
        title: "Peran Suami dalam KB",
        emoji: "👨‍👩‍👧",
        content:
          "Suami memiliki tanggung jawab aktif dalam KB: mendukung istri memilih metode yang tepat, menggunakan kondom jika diperlukan, mempertimbangkan vasektomi sebagai pilihan permanen, dan aktif hadir dalam konsultasi KB bersama tenaga kesehatan.",
        highlight:
          "KB adalah tanggung jawab bersama suami dan istri, bukan hanya urusan wanita.",
      },
      {
        title: "ASI dan Kesehatan Pascapersalinan",
        emoji: "🤱",
        content:
          "ASI eksklusif 6 bulan memberikan nutrisi terbaik dan perlindungan imun untuk bayi. Menyusui juga bermanfaat bagi ibu: membantu rahim kembali ke ukuran normal, menurunkan risiko kanker payudara, dan mempererat ikatan ibu-bayi.",
      },
      {
        title: "Imunisasi Bayi Pascapersalinan",
        emoji: "💉",
        content:
          "Jadwal imunisasi bayi: Hepatitis B (hari pertama), BCG + Polio tetes (bulan 1), DPT-HB-Hib + Polio (bulan 2, 3, 4), Campak/MR (bulan 9). Imunisasi lengkap melindungi bayi dari penyakit berbahaya.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "KB Pascapersalinan (KBPP)",
        emoji: "📅",
        description:
          "Pahami pentingnya KB segera setelah melahirkan untuk kesehatan ibu dan anak",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Apa tujuan utama KB Pascapersalinan (KBPP)?",
            [
              "Mencegah ibu dari kewajiban menyusui",
              "Mencegah kehamilan terlalu cepat dan melindungi kesehatan ibu-bayi",
              "Hanya untuk ibu yang tidak mau hamil lagi selamanya",
              "Menggantikan imunisasi bayi",
            ],
            1,
            "KBPP bertujuan melindungi kesehatan ibu dengan mencegah kehamilan terlalu cepat setelah persalinan.",
          ),
          tf(
            102,
            "KB pascapersalinan sebaiknya dimulai segera setelah melahirkan atau paling lambat 42 hari setelah persalinan.",
            true,
            "Benar. Memulai KB dalam 48 jam atau paling lambat 6 minggu setelah persalinan adalah rekomendasi kesehatan.",
          ),
          mc(
            103,
            "Berapa jarak kehamilan minimal yang direkomendasikan WHO setelah persalinan?",
            ["3 bulan", "6 bulan", "Minimal 24 bulan (2 tahun)", "5 tahun"],
            2,
            "WHO merekomendasikan jarak minimal 24 bulan antar kehamilan untuk pemulihan optimal ibu dan tumbuh kembang bayi.",
          ),
          fb(
            104,
            "Metode KB alami untuk ibu yang menyusui penuh dan belum mendapat menstruasi disebut ___.",
            "MAL",
            ["IUD", "Implan", "Suntik"],
            "MAL (Metode Amenore Laktasi) efektif jika ibu menyusui penuh eksklusif dan belum mengalami menstruasi kembali.",
          ),
          tf(
            105,
            "Ibu yang baru melahirkan tidak perlu KB karena menyusui sudah cukup mencegah kehamilan.",
            false,
            "Salah. Menyusui hanya memberikan perlindungan terbatas. KB tetap dibutuhkan untuk mencegah kehamilan tidak terencana.",
          ),
          mc(
            106,
            "Kapan IUD dapat dipasang setelah persalinan normal?",
            [
              "Hanya 1 tahun setelah melahirkan",
              "Dalam 48 jam atau 6 minggu setelah persalinan",
              "Hanya sebelum kehamilan",
              "Tidak boleh digunakan ibu menyusui",
            ],
            1,
            "IUD dapat dipasang dalam 48 jam pertama atau menunggu 6 minggu setelah persalinan untuk keamanan optimal.",
          ),
        ],
      },
      {
        id: 2,
        title: "Metode KB yang Tepat",
        emoji: "💊",
        description:
          "Kenali berbagai metode KB dan mana yang tepat untuk ibu menyusui",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Metode KB mana yang AMAN digunakan ibu menyusui tanpa mempengaruhi produksi ASI?",
            [
              "Pil KB kombinasi (estrogen-progestin)",
              "IUD, Implan, dan Suntik progestin saja",
              "Tidak ada metode KB yang aman untuk ibu menyusui",
              "Hanya kondom yang boleh digunakan",
            ],
            1,
            "IUD, Implan, dan suntik progestin saja tidak mengandung estrogen sehingga tidak mempengaruhi produksi ASI.",
          ),
          tf(
            202,
            "Pil KB kombinasi (mengandung estrogen) dapat mengurangi produksi ASI.",
            true,
            "Benar. Estrogen dalam pil KB kombinasi dapat mengurangi volume ASI, sehingga tidak dianjurkan untuk ibu menyusui.",
          ),
          mc(
            203,
            "Apa keunggulan metode Implan sebagai KB pascapersalinan?",
            [
              "Harus diganti setiap hari",
              "Efektif 3-5 tahun, tidak mempengaruhi ASI, dan reversibel",
              "Bersifat permanen dan tidak bisa dilepas",
              "Hanya efektif selama 1 bulan",
            ],
            1,
            "Implan efektif 3-5 tahun, tidak mengandung estrogen, aman untuk ibu menyusui, dan dapat dilepas kapan saja.",
          ),
          fb(
            204,
            "Metode KB pria berupa operasi kecil untuk memotong saluran sperma disebut ___.",
            "Vasektomi",
            ["MOP", "MOW", "Ligasi"],
            "Vasektomi adalah prosedur KB pria permanen melalui pemotongan/pengikatan vas deferens, sangat efektif dan aman.",
          ),
          tf(
            205,
            "Suntik KB 3 bulan yang hanya mengandung progestin aman digunakan ibu menyusui.",
            true,
            "Benar. Suntik progestin saja (Depo Medroxyprogesterone Acetate) aman untuk ibu menyusui karena tidak mengandung estrogen.",
          ),
          mc(
            206,
            "Apa yang membedakan MOW (ligasi tuba) dengan metode KB lainnya?",
            [
              "MOW bersifat sementara dan bisa dibatalkan mudah",
              "MOW adalah sterilisasi permanen yang sulit dibalik",
              "MOW adalah jenis suntikan hormonal",
              "MOW sama dengan pemasangan IUD",
            ],
            1,
            "MOW adalah sterilisasi permanen untuk wanita yang sudah memutuskan tidak ingin hamil lagi.",
          ),
        ],
      },
      {
        id: 3,
        title: "Peran Suami dalam KB",
        emoji: "👨‍👩‍👧",
        description:
          "Pahami tanggung jawab aktif suami dalam program keluarga berencana",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Apa bentuk partisipasi aktif suami dalam program KB?",
            [
              "Hanya menyetujui pilihan istri tanpa terlibat",
              "Menggunakan kondom, mendukung istri, dan mempertimbangkan vasektomi",
              "KB hanya urusan istri, suami tidak perlu ikut",
              "Melarang istri menggunakan KB",
            ],
            1,
            "Suami dapat berpartisipasi aktif dengan menggunakan kondom, mendukung keputusan KB istri, dan mempertimbangkan vasektomi.",
          ),
          tf(
            302,
            "Kondom adalah satu-satunya metode KB yang bisa digunakan oleh pria.",
            false,
            "Salah. Pria memiliki dua pilihan KB: kondom (sementara) dan vasektomi (permanen).",
          ),
          mc(
            303,
            "Mengapa suami perlu hadir saat istri konsultasi KB ke tenaga kesehatan?",
            [
              "Karena tidak boleh pergi sendiri",
              "Agar suami memahami pilihan KB dan mendukung keputusan bersama",
              "Tidak perlu, cukup istri saja",
              "Hanya jika ada masalah kesehatan",
            ],
            1,
            "Kehadiran suami mendukung pengambilan keputusan KB yang tepat, meningkatkan kepatuhan, dan mempererat tanggung jawab bersama.",
          ),
          fb(
            304,
            "Sikap suami yang mendukung dan terlibat aktif dalam pengasuhan anak dan KB disebut ___.",
            "Suami Siaga",
            ["Suami Ideal", "Suami Baik", "Suami Hebat"],
            "Suami Siaga (Suami Siap, Antar, Jaga) adalah konsep BKKBN untuk suami yang aktif mendukung kesehatan keluarga.",
          ),
          tf(
            305,
            "Vasektomi dapat mempengaruhi kemampuan seksual pria.",
            false,
            "Salah. Vasektomi hanya memotong saluran sperma, tidak mempengaruhi produksi hormon atau kemampuan seksual pria.",
          ),
          mc(
            306,
            "Apa manfaat keterlibatan suami dalam KB bagi keluarga?",
            [
              "Tidak ada manfaat khusus",
              "Meningkatkan keharmonisan, mengurangi beban istri, dan meningkatkan kesejahteraan keluarga",
              "Hanya bermanfaat jika istri sakit",
              "Membatasi kebebasan suami",
            ],
            1,
            "Suami yang terlibat aktif dalam KB berkontribusi pada kesehatan keluarga, keharmonisan rumah tangga, dan kesejahteraan anak.",
          ),
        ],
      },
      {
        id: 4,
        title: "Kesehatan Ibu dan Anak",
        emoji: "🤱",
        description:
          "Pelajari pentingnya ASI, imunisasi, dan nutrisi pasca persalinan",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Apa manfaat ASI eksklusif bagi bayi selama 6 bulan pertama?",
            [
              "Tidak ada manfaat khusus",
              "Nutrisi sempurna, perlindungan imun, dan mendukung perkembangan otak",
              "Hanya menambah berat badan bayi saja",
              "Hanya untuk bayi lahir prematur",
            ],
            1,
            "ASI eksklusif memberikan nutrisi sempurna, antibodi pelindung infeksi, dan mendukung perkembangan otak yang optimal.",
          ),
          tf(
            402,
            "Menyusui membantu rahim ibu kembali ke ukuran semula lebih cepat.",
            true,
            "Benar. Hormon oksitosin yang dilepas saat menyusui membantu kontraksi rahim untuk kembali ke ukuran normal.",
          ),
          mc(
            403,
            "Imunisasi pertama yang diberikan kepada bayi dalam 24 jam setelah lahir adalah?",
            ["Vaksin BCG", "Vaksin Hepatitis B", "Vaksin Polio", "Vaksin DPT"],
            1,
            "Vaksin Hepatitis B diberikan segera dalam 24 jam pertama untuk mencegah penularan Hepatitis B dari ibu ke bayi.",
          ),
          fb(
            404,
            "Cairan kekuningan yang keluar pertama kali dari payudara ibu dan kaya antibodi disebut ___.",
            "Kolostrum",
            ["ASI Biasa", "Susu Formula", "Air Susu Peralihan"],
            "Kolostrum adalah ASI pertama yang sangat kaya antibodi, protein, dan nutrisi esensial untuk kekebalan bayi baru lahir.",
          ),
          tf(
            405,
            "Ibu menyusui memerlukan tambahan kalori lebih banyak dari ibu hamil.",
            true,
            "Benar. Produksi ASI memerlukan sekitar 500 kalori tambahan per hari, sedikit lebih banyak dari kebutuhan tambahan saat hamil.",
          ),
          mc(
            406,
            "Kapan imunisasi campak (MR) pertama diberikan kepada bayi?",
            ["Saat bayi lahir", "Usia 3 bulan", "Usia 9 bulan", "Usia 2 tahun"],
            2,
            "Imunisasi Campak/MR pertama diberikan pada usia 9 bulan untuk perlindungan dari campak dan rubella.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Apa tujuan utama KB Pascapersalinan (KBPP)?",
        [
          "Mencegah ibu dari kewajiban menyusui",
          "Mencegah kehamilan terlalu cepat dan melindungi kesehatan ibu-bayi",
          "Hanya untuk ibu yang tidak mau hamil lagi selamanya",
          "Menggantikan imunisasi bayi",
        ],
        1,
        "KBPP bertujuan melindungi kesehatan ibu dengan mencegah kehamilan terlalu cepat.",
      ),
    ],
  },

  // ─── MODULE 9: Lansia & Keluarga ────────────────────────────────────────
  {
    id: "lansia-keluarga",
    title: "Lansia & Keluarga",
    subtitle: "Dukungan keluarga untuk kesehatan reproduksi lansia",
    emoji: "👴",
    gradientFrom: "#F59E0B",
    gradientTo: "#EA580C",
    accentColor: "#F59E0B",
    lembarBalik: [
      {
        title: "Perimenopause & Menopause",
        emoji: "🌸",
        content:
          "Menopause adalah berhentinya menstruasi secara permanen, biasanya terjadi antara usia 45-55 tahun. Perimenopause adalah masa transisi 2-8 tahun sebelumnya. Gejala umum: hot flashes, gangguan tidur, perubahan mood, dan kekeringan vagina.",
        highlight:
          "Menopause adalah proses alami, bukan penyakit. Dukungan keluarga sangat berarti.",
      },
      {
        title: "Andropause pada Pria Lansia",
        emoji: "👴",
        content:
          "Andropause adalah penurunan kadar hormon testosteron pada pria di atas usia 50 tahun secara bertahap. Gejala: penurunan energi, perubahan suasana hati, penurunan libido, dan gangguan tidur. Berbeda dari menopause, andropause terjadi lebih lambat.",
      },
      {
        title: "Dukungan Keluarga untuk Lansia",
        emoji: "❤️",
        content:
          "Keluarga berperan penting: mendengarkan keluhan tanpa menghakimi, mendampingi ke fasilitas kesehatan, mendorong gaya hidup aktif, memastikan nutrisi terpenuhi, dan memberikan afirmasi positif bahwa perubahan yang dialami adalah normal.",
        highlight:
          "Satu kata dukungan dari anak atau cucu lebih berharga dari seribu obat.",
      },
      {
        title: "Penyakit Reproduksi Lansia Wanita",
        emoji: "🔍",
        content:
          "Risiko meningkat seiring usia: kanker serviks (dapat dicegah dengan vaksin HPV dan tes Pap smear), kanker ovarium, kanker payudara, dan prolaps uteri. Deteksi dini melalui pemeriksaan rutin sangat meningkatkan peluang kesembuhan.",
      },
      {
        title: "Penyakit Reproduksi Lansia Pria",
        emoji: "🏥",
        content:
          "Pria lansia rentan terhadap: hiperplasia prostat jinak (BPH), kanker prostat, dan disfungsi ereksi. Pemeriksaan PSA (Prostate-Specific Antigen) dianjurkan setelah usia 50 tahun. Gaya hidup sehat dapat mengurangi risiko secara signifikan.",
      },
    ],
    chapters: [
      {
        id: 1,
        title: "Perimenopause & Menopause",
        emoji: "🌸",
        description:
          "Pahami perubahan hormonal menopause dan cara menghadapinya dengan sehat",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            101,
            "Pada usia berapa wanita umumnya mengalami menopause?",
            [
              "Usia 30-35 tahun",
              "Usia 40-44 tahun",
              "Usia 45-55 tahun",
              "Usia 60-70 tahun",
            ],
            2,
            "Menopause umumnya terjadi antara usia 45-55 tahun, rata-rata di usia 51 tahun di Indonesia.",
          ),
          tf(
            102,
            "Menopause adalah kondisi penyakit yang harus diobati dengan segera.",
            false,
            "Salah. Menopause adalah proses alami berhentinya menstruasi, bukan penyakit. Gejalanya dapat dikelola dengan dukungan yang tepat.",
          ),
          mc(
            103,
            "Apa gejala perimenopause yang paling umum dikeluhkan wanita?",
            [
              "Rambut tumbuh lebih lebat",
              "Hot flashes, gangguan tidur, dan perubahan mood",
              "Menstruasi menjadi lebih teratur",
              "Berat badan turun drastis",
            ],
            1,
            "Hot flashes (rasa panas tiba-tiba), gangguan tidur, dan perubahan mood adalah gejala perimenopause yang paling umum.",
          ),
          fb(
            104,
            "Penurunan hormon estrogen yang drastis pada wanita menopause dapat menyebabkan pengeroposon tulang disebut ___.",
            "Osteoporosis",
            ["Artritis", "Anemia", "Hipertensi"],
            "Osteoporosis terjadi karena estrogen membantu menjaga kepadatan tulang; penurunannya mempercepat kehilangan massa tulang.",
          ),
          tf(
            105,
            "Wanita menopause tidak perlu melakukan pemeriksaan kesehatan reproduksi karena sudah tidak aktif secara seksual.",
            false,
            "Salah. Wanita menopause tetap perlu pemeriksaan rutin untuk deteksi dini kanker dan masalah kesehatan reproduksi lainnya.",
          ),
          mc(
            106,
            "Apa yang dapat dilakukan wanita untuk mengelola gejala menopause secara alami?",
            [
              "Berhenti berolahraga sama sekali",
              "Olahraga teratur, pola makan sehat, dan hindari stres berlebih",
              "Minum jamu setiap hari tanpa konsultasi dokter",
              "Mengisolasi diri dari keluarga",
            ],
            1,
            "Gaya hidup sehat seperti olahraga teratur, diet seimbang, dan manajemen stres membantu mengelola gejala menopause.",
          ),
        ],
      },
      {
        id: 2,
        title: "Andropause pada Pria",
        emoji: "👴",
        description:
          "Kenali perubahan hormonal pada pria lansia dan cara mengelolanya",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            201,
            "Apa yang dimaksud dengan andropause?",
            [
              "Menopause pada pria yang terjadi tiba-tiba",
              "Penurunan bertahap hormon testosteron pada pria usia lanjut",
              "Penyakit prostat yang berbahaya",
              "Gangguan psikologis pada lansia pria",
            ],
            1,
            "Andropause adalah penurunan kadar testosteron secara bertahap pada pria, umumnya dimulai usia 40-50 tahun.",
          ),
          tf(
            202,
            "Andropause pada pria terjadi sama cepatnya dengan menopause pada wanita.",
            false,
            "Salah. Andropause terjadi lebih lambat dan bertahap dibanding menopause wanita, sehingga sering tidak disadari.",
          ),
          mc(
            203,
            "Apa gejala umum andropause yang sering dirasakan pria lansia?",
            [
              "Suara menjadi lebih tinggi",
              "Penurunan energi, libido menurun, perubahan suasana hati",
              "Pertumbuhan rambut yang lebih lebat",
              "Tidak ada perubahan apapun",
            ],
            1,
            "Gejala andropause meliputi penurunan energi, libido, massa otot, dan perubahan suasana hati.",
          ),
          fb(
            204,
            "Hormon utama pria yang kadarnya menurun saat andropause disebut ___.",
            "Testosteron",
            ["Estrogen", "Progesteron", "Insulin"],
            "Testosteron adalah hormon seks utama pria yang berperan dalam energi, libido, massa otot, dan kesehatan reproduksi.",
          ),
          tf(
            205,
            "Gaya hidup sehat dapat membantu memperlambat dan meringankan gejala andropause.",
            true,
            "Benar. Olahraga teratur, tidur cukup, diet seimbang, dan hindari rokok dapat membantu mengelola gejala andropause.",
          ),
          mc(
            206,
            "Apa yang sebaiknya dilakukan pria lansia jika mengalami gejala andropause yang mengganggu?",
            [
              "Mendiamkan saja karena tidak berbahaya",
              "Konsultasi ke dokter untuk pemeriksaan dan penanganan yang tepat",
              "Mengonsumsi suplemen tanpa resep dokter",
              "Menghindari semua aktivitas fisik",
            ],
            1,
            "Konsultasi medis penting untuk memastikan diagnosis yang tepat dan mendapat penanganan sesuai kondisi pria lansia.",
          ),
        ],
      },
      {
        id: 3,
        title: "Dukungan Keluarga",
        emoji: "❤️",
        description:
          "Pelajari cara keluarga mendukung kesehatan reproduksi lansia dengan penuh kasih",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            301,
            "Apa peran utama keluarga dalam mendukung lansia yang mengalami menopause atau andropause?",
            [
              "Mengabaikan perubahan yang terjadi",
              "Memberikan dukungan emosional, menemani ke dokter, dan memastikan gizi terpenuhi",
              "Menganggap keluhan sebagai berlebihan",
              "Menyuruh lansia untuk tidak mengeluh",
            ],
            1,
            "Dukungan keluarga berupa empati, pendampingan medis, dan pemenuhan kebutuhan gizi sangat penting bagi kesehatan lansia.",
          ),
          tf(
            302,
            "Perubahan suasana hati ibu yang sedang menopause seringkali membuat keluarga kesal dan tidak perlu dimaklumi.",
            false,
            "Salah. Perubahan suasana hati saat menopause disebabkan perubahan hormonal. Keluarga perlu memahami dan bersabar.",
          ),
          mc(
            303,
            "Bagaimana keluarga dapat membantu lansia menjaga kesehatan reproduksinya?",
            [
              "Melarang lansia pergi ke dokter",
              "Mengingatkan dan menemani pemeriksaan kesehatan rutin",
              "Tidak perlu ikut campur urusan kesehatan lansia",
              "Hanya memberikan obat-obatan yang dijual bebas",
            ],
            1,
            "Mengingatkan dan menemani lansia untuk pemeriksaan rutin membantu deteksi dini masalah kesehatan reproduksi.",
          ),
          fb(
            304,
            "Program BKKBN untuk pembinaan kesehatan lansia melalui keluarga disebut ___.",
            "BKL",
            ["BKB", "BKR", "PIKR"],
            "BKL (Bina Keluarga Lansia) adalah program BKKBN yang membina keluarga dalam merawat dan mendukung lansia di rumah.",
          ),
          tf(
            305,
            "Lansia yang aktif bersosialisasi dengan keluarga dan masyarakat cenderung lebih sehat secara mental.",
            true,
            "Benar. Interaksi sosial yang aktif mencegah depresi dan demensia, mendukung kesehatan mental lansia secara signifikan.",
          ),
          mc(
            306,
            "Apa dampak positif jika keluarga aktif mendampingi lansia menjalani gaya hidup sehat?",
            [
              "Lansia menjadi lebih bergantung",
              "Meningkatkan kualitas hidup, mencegah komplikasi, dan memperkuat ikatan keluarga",
              "Tidak ada dampak positif",
              "Hanya berguna bagi keluarga, bukan lansia",
            ],
            1,
            "Pendampingan aktif keluarga meningkatkan kualitas hidup lansia, mencegah penyakit, dan mempererat hubungan keluarga.",
          ),
        ],
      },
      {
        id: 4,
        title: "Penyakit Reproduksi Lansia",
        emoji: "🔍",
        description:
          "Kenali risiko penyakit reproduksi pada lansia dan cara pencegahannya",
        questionsPerPlay: 3,
        questionPool: [
          mc(
            401,
            "Apa pemeriksaan yang dianjurkan untuk deteksi dini kanker serviks pada wanita?",
            [
              "Pemeriksaan darah rutin",
              "Pap smear dan tes IVA",
              "Hanya USG kandungan",
              "Tidak perlu pemeriksaan khusus",
            ],
            1,
            "Pap smear dan tes IVA (Inspeksi Visual Asam Asetat) adalah metode deteksi dini kanker serviks yang efektif dan mudah dilakukan.",
          ),
          tf(
            402,
            "Kanker prostat hanya bisa terjadi pada pria di bawah usia 40 tahun.",
            false,
            "Salah. Risiko kanker prostat meningkat seiring usia, paling sering terjadi pada pria di atas usia 50 tahun.",
          ),
          mc(
            403,
            "Tes apa yang dianjurkan untuk skrining kanker prostat pada pria lansia?",
            [
              "Pemeriksaan urin biasa",
              "Tes PSA (Prostate-Specific Antigen) darah",
              "Hanya pemeriksaan tekanan darah",
              "Tes kolesterol",
            ],
            1,
            "Tes PSA adalah pemeriksaan darah yang mengukur kadar antigen spesifik prostat, membantu deteksi dini kanker prostat.",
          ),
          fb(
            404,
            "Pembesaran kelenjar prostat yang jinak pada pria lansia yang menyebabkan kesulitan buang air kecil disebut ___.",
            "BPH",
            ["Kanker Prostat", "Prostatitis", "Infeksi Saluran Kemih"],
            "BPH (Benign Prostatic Hyperplasia) adalah pembesaran jinak prostat yang umum pada pria di atas 50 tahun, berbeda dari kanker prostat.",
          ),
          tf(
            405,
            "Vaksin HPV hanya bermanfaat bagi remaja perempuan dan tidak berguna bagi wanita yang lebih tua.",
            false,
            "Salah. Vaksin HPV juga bermanfaat bagi wanita dewasa hingga usia 45 tahun untuk mencegah infeksi HPV yang belum pernah terkena.",
          ),
          mc(
            406,
            "Faktor risiko utama kanker serviks yang dapat dicegah adalah?",
            [
              "Usia terlalu muda",
              "Infeksi HPV (Human Papillomavirus) melalui hubungan seksual",
              "Terlalu sering berolahraga",
              "Kurang makan sayuran",
            ],
            1,
            "HPV adalah penyebab utama kanker serviks. Vaksinasi HPV dan perilaku seksual yang aman dapat mencegahnya secara efektif.",
          ),
        ],
      },
    ],
    questions: [
      mc(
        1,
        "Pada usia berapa wanita umumnya mengalami menopause?",
        [
          "Usia 30-35 tahun",
          "Usia 40-44 tahun",
          "Usia 45-55 tahun",
          "Usia 60-70 tahun",
        ],
        2,
        "Menopause umumnya terjadi antara usia 45-55 tahun.",
      ),
    ],
  },
];
