import { QuestionData } from '../types/physics';

export const ESSAY_QUESTIONS: QuestionData[] = [
  {
    id: 31,
    type: 'essay',
    category: 'Vektor',
    originalNumber: 31,
    diagramId: 'gambar-18',
    diagramTitle: 'Gambar 18 — Kapal diarahkan tegak lurus arus sungai',
    questionText:
      'Sebuah kapal feri harus menyeberangi sungai lurus selebar 240 m. Kecepatan arus sungai seragam 4 m/s dan sejajar tepi sungai, sedangkan kapal mampu bergerak dengan kecepatan 6 m/s terhadap air. Perhatikan Gambar 18.\n\nJika nahkoda mengarahkan haluan kapal tepat tegak lurus arah arus, gambarkan diagram penjumlahan vektornya, lalu tentukan besar kecepatan resultan kapal terhadap tanah, waktu yang diperlukan untuk mencapai tepi seberang, dan jarak hanyut kapal searah arus!',
    variables: { width: 240, vCurrent: 4, vBoat: 6 },
    caraLambat: {
      diketahui: [
        'Lebar sungai (jarak tegak lurus sumbu Y) d = 240 m',
        'Kecepatan kapal terhadap air (haluan tegak lurus tepi) v_k = 6 m/s (arah sumbu Y positif)',
        'Kecepatan arus sungai v_a = 4 m/s (arah mendatar sumbu X positif)',
      ],
      ditanya:
        '1. Diagram penjumlahan vektor kecepatan kapal dan arus.\n2. Besar kecepatan resultan kapal terhadap pengamat di tepi (v_res).\n3. Waktu yang diperlukan menyeberang (t).\n4. Jarak hanyut kapal searah arus (x_hanyut).',
      konsep:
        'Prinsip independensi gerak dalam dua dimensi: Gerak menyeberang (sumbu Y) sama sekali tidak dipengaruhi oleh kecepatan arus sungai (sumbu X). Waktu menyeberang hanya ditentukan oleh lebar sungai dan kecepatan kapal tegak lurus tepi. Vektor resultan diperoleh dari penjumlahan ortogonal v_res = √(v_k² + v_a²).',
      rumusDasar: [
        '\\vec{v}_{res} = \\vec{v}_k + \\vec{v}_a',
        'v_{res} = \\sqrt{v_k^2 + v_a^2}',
        't = \\frac{d}{v_k}',
        'x_{hanyut} = v_a \\cdot t',
      ],
      langkahPenyelesaian: [
        {
          title: 'Bagian A: Diagram Penjumlahan Vektor',
          detail:
            'Gambarkan vektor v_k tegak lurus ke atas (panjang 6 satuan) dan vektor v_a mendatar ke kanan (panjang 4 satuan). Vektor resultan v_res ditarik dari titik awal keberangkatan ke ujung diagonal persegi panjang, menyerong ke kanan-atas.',
          result: 'Diagram vektor siku-siku dengan sisi 6 m/s dan 4 m/s.',
        },
        {
          title: 'Bagian B: Menghitung Besar Kecepatan Resultan Kapal',
          detail: 'Gunakan teorema Pythagoras pada dua vektor yang saling tegak lurus:',
          mathFormula: 'v_{res} = \\sqrt{v_k^2 + v_a^2} = \\sqrt{6^2 + 4^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13} \\approx 7,21\\text{ m/s}',
          result: 'v_res = √52 m/s ≈ 7,21 m/s',
        },
        {
          title: 'Bagian C: Menghitung Waktu Mencapai Tepi Seberang',
          detail: 'Waktu menyeberang hanya ditentukan oleh jarak tempuh dan kecepatan pada sumbu Y:',
          mathFormula: 't = \\frac{d}{v_k} = \\frac{240\\text{ m}}{6\\text{ m/s}} = 40\\text{ sekon}',
          result: 't = 40 sekon',
        },
        {
          title: 'Bagian D: Menghitung Jarak Hanyut Searah Arus',
          detail: 'Selama 40 sekon menyeberang, arus sungai menyeret kapal ke hilir:',
          mathFormula: 'x_{hanyut} = v_a \\cdot t = 4\\text{ m/s} \\times 40\\text{ s} = 160\\text{ meter}',
          result: 'x_hanyut = 160 meter',
        },
      ],
      kesimpulan:
        'Kecepatan resultan kapal terhadap tanah adalah √52 m/s (sekitar 7,21 m/s), waktu menyeberang adalah 40 sekon, dan kapal hanyut sejauh 160 meter di hilir titik awal.',
    },
    caraCepat: {
      trikNama: 'Trik Gerak Independen Dua Sumbu',
      rumusPraktis: 't = \\frac{d}{v_y}, \\quad x_{hanyut} = d \\times \\left(\\frac{v_x}{v_y}\\right)',
      langkahCepat:
        'Waktu = 240 / 6 = 40 s. Jarak hanyut = 40 s x 4 m/s = 160 m (atau langsung 240 x 4/6 = 160 m). Kecepatan resultan = √(6² + 4²) = √52 ≈ 7,21 m/s.',
      kapanDigunakan: 'Perahu menyeberang sungai dengan haluan tegak lurus arus.',
      jawabanSingkat: 'v_res = √52 ≈ 7,21 m/s; t = 40 s; x_hanyut = 160 m.',
    },
    speechScript: {
      soal: 'Soal esai nomor tiga puluh satu. Kapal feri menyeberangi sungai selebar dua ratus empat puluh meter. Arus sungai empat meter per sekon dan kecepatan kapal enam meter per sekon diarahkan tegak lurus arus. Tentukan resultan kecepatan, waktu sampai di seberang, dan jarak hanyutnya!',
      pembahasan:
        'Pertama, kecepatan resultan adalah akar dari enam kuadrat ditambah empat kuadrat, yaitu akar dari lima puluh dua atau sekitar tujuh koma dua puluh satu meter per sekon. Kedua, waktu menyeberang dihitung dari lebar sungai dua ratus empat puluh meter dibagi kecepatan kapal enam meter per sekon, menghasilkan empat puluh sekon. Ketiga, jarak hanyut kapal adalah kecepatan arus empat meter per sekon dikali waktu empat puluh sekon, yaitu seratus enam puluh meter.',
    },
  },
  {
    id: 32,
    type: 'essay',
    category: 'Kinematika Gerak Lurus',
    originalNumber: 32,
    diagramId: 'gambar-19',
    diagramTitle: 'Gambar 19 — Mobil dan penghalang pada jalan lurus',
    questionText:
      'Sebuah mobil melaju di jalan lurus dengan kelajuan 90 km/jam. Pada suatu saat pengemudi melihat sebuah penghalang berada 80 m tepat di depan mobil. Waktu reaksi pengemudi (selang waktu antara melihat penghalang hingga rem mulai bekerja) adalah 0,6 sekon. Setelah rem bekerja, mobil mengalami perlambatan tetap sebesar 5 m/s² hingga berhenti. Perhatikan Gambar 19.\n\na. Nyatakan kelajuan awal mobil dalam satuan m/s, kemudian hitung jarak yang ditempuh mobil selama waktu reaksi pengemudi.\nb. Hitung jarak pengereman, yaitu jarak yang ditempuh mobil sejak rem bekerja hingga mobil berhenti.',
    variables: { v0Kmh: 90, distObstacle: 80, tReact: 0.6, decel: 5 },
    caraLambat: {
      diketahui: [
        'Kelajuan awal mobil v₀ = 90 km/jam',
        'Jarak posisi penghalang di depan mobil d = 80 m',
        'Waktu reaksi pengemudi t_reaksi = 0,6 sekon (mobil masih melaju konstan GLB)',
        'Perlambatan konstan saat rem aktif a = 5 m/s²',
        'Kelajuan akhir saat berhenti v_t = 0 m/s',
      ],
      ditanya:
        'a. Nilai kelajuan awal dalam m/s dan jarak tempuh selama waktu reaksi (s_reaksi).\nb. Jarak pengereman sejak rem diinjak hingga mobil berhenti (s_rem).',
      konsep:
        'Gerak mobil terdiri dari dua fase terpisah: Tahap 1 GLB (kecepatan tetap v₀ selama reaksi refleks pengemudi) dan Tahap 2 GLBB diperlambat beraturan sampai v_t = 0.',
      rumusDasar: [
        'v_0 (\\text{m/s}) = v_0 (\\text{km/jam}) \\times \\frac{1000}{3600}',
        's_{reaksi} = v_0 \\cdot t_{reaksi}',
        'v_t^2 = v_0^2 - 2 a s_{rem} \\implies s_{rem} = \\frac{v_0^2}{2a}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Bagian a (Tahap 1): Konversi Satuan dan Jarak Reaksi',
          detail: 'Konversikan 90 km/jam ke satuan SI:',
          mathFormula: 'v_0 = 90 \\times \\frac{5}{18} = 25\\text{ m/s}',
          result: 'v₀ = 25 m/s',
        },
        {
          title: 'Bagian a (Tahap 2): Menghitung Jarak Selama Waktu Reaksi',
          detail: 'Selama 0,6 sekon mobil melaju dengan kecepatan konstan 25 m/s:',
          mathFormula: 's_{reaksi} = v_0 \\times t_{reaksi} = 25\\text{ m/s} \\times 0,6\\text{ s} = 15\\text{ meter}',
          result: 's_reaksi = 15 meter',
        },
        {
          title: 'Bagian b: Menghitung Jarak Pengereman',
          detail: 'Saat rem mulai bekerja, mobil diperlambat dengan a = 5 m/s² hingga berhenti (v_t = 0):',
          mathFormula: '0^2 = 25^2 - 2(5)s_{rem} \\implies 10 s_{rem} = 625 \\implies s_{rem} = \\frac{625}{10} = 62,5\\text{ meter}',
          result: 's_rem = 62,5 meter',
        },
        {
          title: 'Analisis Tambahan Keselamatan Fisis',
          detail: 'Jarak henti total mobil = s_reaksi + s_rem = 15 m + 62,5 m = 77,5 meter. Karena jarak penghalang adalah 80 meter, mobil berhasil berhenti selamat pada jarak 2,5 meter di depan penghalang!',
          result: 's_total = 77,5 m (kurang dari 80 m, aman).',
        },
      ],
      kesimpulan:
        'Kelajuan awal mobil adalah 25 m/s dengan jarak reaksi 15 m, dan jarak pengereman mobil adalah 62,5 m. Jarak henti total adalah 77,5 m sehingga mobil tidak menabrak penghalang.',
    },
    caraCepat: {
      trikNama: 'Formula Ringkas Jarak Reaksi dan Pengereman',
      rumusPraktis: 's_{reaksi} = v_0 \\cdot t_r, \\quad s_{rem} = \\frac{v_0^2}{2a}',
      langkahCepat:
        'a. 90 km/jam = 25 m/s. Jarak reaksi = 25 x 0,6 = 15 m.\nb. Jarak rem = 25² / (2 x 5) = 625 / 10 = 62,5 m.\n(Total henti 15 + 62,5 = 77,5 m, berhenti selamat sebelum penghalang 80 m).',
      kapanDigunakan: 'Analisis keselamatan lalu lintas, jeda reaksi, dan pengereman kendaraan.',
      jawabanSingkat: 'a. v₀ = 25 m/s, s_reaksi = 15 m; b. s_rem = 62,5 m.',
    },
    speechScript: {
      soal: 'Soal esai nomor tiga puluh dua. Mobil melaju sembilan puluh kilometer per jam melihat rintangan delapan puluh meter di depan. Waktu reaksi nol koma enam sekon dan perlambatan rem lima meter per sekon kuadrat. Tentukan kelajuan awal dalam meter per sekon, jarak waktu reaksi, dan jarak pengereman!',
      pembahasan:
        'Pertama, sembilan puluh kilometer per jam setara dengan dua puluh lima meter per sekon. Jarak selama waktu reaksi adalah dua puluh lima dikali nol koma enam sama dengan lima belas meter. Kedua, jarak pengereman dihitung dari dua puluh lima kuadrat dibagi dua dikali lima, yaitu enam ratus dua puluh lima dibagi sepuluh sama dengan enam puluh dua koma lima meter. Jarak henti total mobil adalah lima belas ditambah enam puluh dua koma lima sama dengan tujuh puluh tujuh koma lima meter, sehingga mobil berhenti aman sebelum rintangan.',
    },
  },
  {
    id: 33,
    type: 'essay',
    category: 'Gerak Melingkar',
    originalNumber: 33,
    diagramId: 'gambar-20',
    diagramTitle: 'Gambar 20 — Mobil melintasi tikungan datar (tampak atas)',
    questionText:
      'Sebuah mobil bermassa 1.500 kg melintasi tikungan datar berjari-jari 80 m seperti tampak pada Gambar 20. Koefisien gesek statis antara ban dan permukaan jalan adalah 0,5 dan g = 10 m/s².\n\na. Hitung kelajuan maksimum mobil agar tidak tergelincir keluar lintasan, lalu nyatakan hasilnya dalam km/jam.\nb. Jika mobil melaju dengan kelajuan 36 km/jam, hitung besar gaya gesek yang diperlukan dan simpulkan apakah kondisi tersebut aman.',
    variables: { mass: 1500, radius: 80, muS: 0.5, g: 10, actualSpeedKmh: 36 },
    caraLambat: {
      diketahui: [
        'Massa mobil m = 1.500 kg',
        'Jari-jari tikungan datar melingkar R = 80 m',
        'Koefisien gesek statis ban-jalan μ_s = 0,5',
        'Percepatan gravitasi g = 10 m/s²',
        'Kelajuan uji kasus b: v_uji = 36 km/jam',
      ],
      ditanya:
        'a. Kelajuan maksimum (v_maks) agar tidak tergelincir dalam km/jam.\nb. Besar gaya gesek yang bekerja pada 36 km/jam dan evaluasi keamanannya.',
      konsep:
        'Pada tikungan datar tanpa kemiringan, gaya sentripetal penjaga belokan dipenuhi sepenuhnya oleh gaya gesek statis ban: F_s = m·v² / R ≤ f_s,maks = μ_s·m·g. Jika gaya yang dibutuhkan masih di bawah batas f_s,maks, mobil aman.',
      rumusDasar: [
        'f_{s,maks} = \\mu_s \\cdot m \\cdot g',
        'v_{maks} = \\sqrt{\\mu_s \\cdot g \\cdot R}',
        'F_{sentripetal} = \\frac{m v^2}{R}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Bagian a (Langkah 1): Menghitung Kelajuan Maksimum dalam m/s',
          detail: 'Pada kondisi batas kritis pergeseran, gaya sentripetal sama dengan gaya gesek statis maksimum:',
          mathFormula: '\\frac{m v_{maks}^2}{R} = \\mu_s m g \\implies v_{maks} = \\sqrt{\\mu_s g R} = \\sqrt{0,5 \\times 10 \\times 80} = \\sqrt{400} = 20\\text{ m/s}',
          result: 'v_maks = 20 m/s',
        },
        {
          title: 'Bagian a (Langkah 2): Mengonversi ke km/jam',
          detail: 'Kalikan dengan 3,6:',
          mathFormula: 'v_{maks} = 20 \\times 3,6 = 72\\text{ km/jam}',
          result: 'v_maks = 72 km/jam',
        },
        {
          title: 'Bagian b (Langkah 1): Konversi Kecepatan Uji 36 km/jam',
          detail: 'Ubah 36 km/jam ke satuan SI:',
          mathFormula: 'v = 36 \\times \\frac{5}{18} = 10\\text{ m/s}',
          result: 'v = 10 m/s',
        },
        {
          title: 'Bagian b (Langkah 2): Menghitung Gaya Gesek Sentripetal yang Diperlukan',
          detail: 'Hitung gaya sentripetal aktual yang dibutuhkan:',
          mathFormula: 'f_s = \\frac{m v^2}{R} = \\frac{1.500 \\times 10^2}{80} = \\frac{150.000}{80} = 1.875\\text{ N}',
          result: 'Gaya gesek yang bekerja f_s = 1.875 N',
        },
        {
          title: 'Bagian b (Langkah 3): Kesimpulan Keamanan Fisis',
          detail: 'Gaya gesek statis maksimum yang tersedia adalah f_s,maks = 0,5 × 1.500 × 10 = 7.500 N. Karena gaya yang diperlukan (1.875 N) jauh lebih kecil dari gaya gesek maksimum yang mampu ditahan jalan (7.500 N), kondisi mobil SANGAT AMAN dan mobil tidak akan tergelincir.',
          result: 'Aman (1.875 N < 7.500 N)',
        },
      ],
      kesimpulan:
        'Kelajuan maksimum mobil adalah 72 km/jam. Pada kelajuan 36 km/jam gaya gesek yang bekerja adalah 1.875 N dan kondisi tersebut sangat aman.',
    },
    caraCepat: {
      trikNama: 'Rumus Cepat Tikungan Datar',
      rumusPraktis: 'v_{maks} = \\sqrt{\\mu g R}, \\quad f_s = \\frac{m v^2}{R}',
      langkahCepat:
        'a. v_maks = √(0,5 x 10 x 80) = √400 = 20 m/s = 72 km/jam.\nb. 36 km/jam = 10 m/s. f_s = 1500 x 100 / 80 = 1.875 N. Karena 1.875 N < 7.500 N, kondisi sangat aman.',
      kapanDigunakan: 'Tikungan jalan datar mendatar tanpa kemiringan.',
      jawabanSingkat: 'a. v_maks = 72 km/jam; b. f_s = 1.875 N (Sangat Aman).',
    },
    speechScript: {
      soal: 'Soal esai nomor tiga puluh tiga. Mobil seribu lima ratus kilogram melintasi tikungan datar jari-jari delapan puluh meter dengan koefisien gesek ban nol koma lima. Hitung kelajuan maksimum dalam kilometer per jam, dan hitung gaya gesek pada kecepatan tiga puluh enam kilometer per jam!',
      pembahasan:
        'Pertama, kelajuan maksimum adalah akar dari koefisien gesek dikali gravitasi dikali jari-jari, yaitu akar dari nol koma lima dikali sepuluh dikali delapan puluh, menghasilkan dua puluh meter per sekon atau tujuh puluh dua kilometer per jam. Kedua, tiga puluh enam kilometer per jam setara dengan sepuluh meter per sekon. Gaya gesek yang dibutuhkan adalah seribu lima ratus dikali sepuluh kuadrat dibagi delapan puluh, menghasilkan seribu delapan ratus tujuh puluh lima Newton. Karena gaya ini jauh lebih kecil dari batas gesek maksimum tujuh ribu lima ratus Newton, maka kondisi sangat aman dan mobil tidak akan tergelincir.',
    },
  },
  {
    id: 34,
    type: 'essay',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 34,
    diagramId: 'gambar-21',
    diagramTitle: 'Gambar 21 — Balok pada bidang miring dihubungkan katrol dengan balok menggantung',
    questionText:
      'Balok A bermassa 5 kg terletak pada bidang miring yang membentuk sudut 37° terhadap horizontal (sin 37° = 0,6; cos 37° = 0,8). Balok A dihubungkan dengan tali ringan tidak mulur yang melewati katrol ideal (massa katrol dan gesekan poros diabaikan) ke balok B bermassa 8 kg yang menggantung bebas, seperti Gambar 21. Koefisien gesek statis antara balok A dan bidang miring adalah 0,4 dan koefisien gesek kinetisnya 0,2. Sistem mula-mula ditahan diam, kemudian dilepaskan. Gunakan g = 10 m/s².\n\na. Gambarkan diagram benda bebas untuk balok A dan balok B, lengkap dengan arah setiap gaya.\nb. Tunjukkan dengan perhitungan apakah sistem bergerak setelah dilepaskan, dan jika bergerak, tentukan arah geraknya.',
    variables: { mA: 5, mB: 8, theta: 37, muS: 0.4, muK: 0.2, g: 10 },
    caraLambat: {
      diketahui: [
        'Massa balok A (di bidang miring) m_A = 5 kg -> berat w_A = 50 N',
        'Massa balok B (menggantung bebas) m_B = 8 kg -> berat w_B = 80 N',
        'Sudut kemiringan bidang miring θ = 37° (sin 37° = 0,6; cos 37° = 0,8)',
        'Koefisien gesek statis bidang miring μ_s = 0,4',
        'Koefisien gesek kinetis bidang miring μ_k = 0,2',
        'Katrol ideal licin tanpa massa, tali tak mulur',
        'Percepatan gravitasi g = 10 m/s²',
      ],
      ditanya:
        'a. Diagram benda bebas lengkap pada balok A dan balok B.\nb. Bukti perhitungan apakah sistem bergerak dan penentuan arah geraknya.',
      konsep:
        'Uraikan gaya pada balok A: w_Ax sejajar bidang ke bawah dan w_Ay tegak lurus bidang. Bandingkan gaya penggerak netto |w_B - w_Ax| dengan gaya gesek statis maksimum f_s,maks = μ_s·N_A. Jika selisih gaya penggerak > f_s,maks, maka sistem bergerak.',
      rumusDasar: [
        'w_B = m_B \\cdot g = 80\\text{ N}',
        'w_{Ax} = m_A g \\sin 37^\\circ = 50 \\times 0,6 = 30\\text{ N}',
        'N_A = m_A g \\cos 37^\\circ = 50 \\times 0,8 = 40\\text{ N}',
        'f_{s,maks} = \\mu_s \\cdot N_A',
      ],
      langkahPenyelesaian: [
        {
          title: 'Bagian a: Deskripsi Diagram Benda Bebas',
          detail:
            'Pada Balok B bekerja 2 gaya: Gaya berat w_B (80 N ke bawah) dan tegangan tali T (ke atas).\nPada Balok A bekerja 5 komponen gaya: Gaya berat w_A (50 N vertikal ke bawah), gaya normal N_A (40 N tegak lurus bidang ke atas), komponen berat sejajar bidang w_Ax (30 N menuruni lereng), tegangan tali T (ke atas menaiki lereng), dan gaya gesek statis f_s (menuruni lereng menahan tarikan tali).',
          result: 'Diagram gaya lengkap pada balok A dan B.',
        },
        {
          title: 'Bagian b (Langkah 1): Menghitung Komponen Gaya Balok A',
          detail: 'Hitung gaya normal dan berat sejajar lereng balok A:',
          mathFormula: 'w_{Ax} = 50 \\times 0,6 = 30\\text{ N}, \\quad N_A = 50 \\times 0,8 = 40\\text{ N}',
          result: 'w_Ax = 30 N, N_A = 40 N',
        },
        {
          title: 'Bagian b (Langkah 2): Menghitung Gaya Gesek Statis Maksimum',
          detail: 'Gaya gesek penahan geseran:',
          mathFormula: 'f_{s,maks} = \\mu_s N_A = 0,4 \\times 40\\text{ N} = 16\\text{ N}',
          result: 'f_s,maks = 16 N',
        },
        {
          title: 'Bagian b (Langkah 3): Menghitung Selisih Gaya Penggerak Bersih',
          detail: 'Balok B menarik dengan 80 N ke bawah, melawan komponen balok A sebesar 30 N:',
          mathFormula: '\\Delta F_{tarik} = w_B - w_{Ax} = 80\\text{ N} - 30\\text{ N} = 50\\text{ N}',
          result: 'Selisih gaya pendorong = 50 N',
        },
        {
          title: 'Bagian b (Langkah 4): Uji Kondisi Gerak dan Penentuan Arah',
          detail: 'Bandingkan selisih gaya dengan gaya gesek statis maksimum:',
          mathFormula: '\\Delta F_{tarik} (50\\text{ N}) > f_{s,maks} (16\\text{ N}) \\implies \\text{SISTEM BERGERAK!}',
          result: 'Sistem bergerak: Balok B turun ke bawah, Balok A bergerak menaiki bidang miring.',
        },
      ],
      kesimpulan:
        'Sistem bergerak setelah dilepaskan karena selisih gaya tarik 50 N melampaui gaya gesek statis maksimum 16 N. Balok B bergerak ke bawah dan Balok A bergerak menaiki bidang miring.',
    },
    caraCepat: {
      trikNama: 'Trik Tarik-Menarik Dua Sisi Katrol',
      rumusPraktis: '|w_B - m_A g \\sin\\theta| > \\mu_s m_A g \\cos\\theta',
      langkahCepat:
        'Sisi B menarik 80 N. Sisi A menahan 30 N (selisih 50 N ke arah B). Tahanan gesek statis maks A = 0,4 x 40 = 16 N. Karena 50 N > 16 N, tarikan B menang mutlak! Sistem bergerak dengan B turun dan A naik.',
      kapanDigunakan: 'Sistem katrol bidang miring ditarik beban gantung.',
      jawabanSingkat: 'Bergerak (50 N > 16 N); Balok B bergerak turun, Balok A naik.',
    },
    speechScript: {
      soal: 'Soal esai nomor tiga puluh empat. Balok A lima kilogram di bidang miring tiga puluh tujuh derajat dihubungkan katrol dengan balok B delapan kilogram yang menggantung. Buktikan apakah sistem bergerak dan tentukan arah geraknya!',
      pembahasan:
        'Mari kita bandingkan gaya penggeraknya. Berat balok B adalah delapan puluh Newton. Komponen berat balok A sejajar bidang yang menahan adalah lima puluh dikali sinus tiga puluh tujuh derajat yaitu tiga puluh Newton. Selisih gaya tarik penggerak adalah delapan puluh dikurang tiga puluh sama dengan lima puluh Newton. Gaya normal balok A adalah empat puluh Newton, sehingga gaya gesek statis maksimumnya adalah nol koma empat dikali empat puluh sama dengan enam belas Newton. Karena lima puluh Newton jauh lebih besar dari enam belas Newton, maka sistem pasti bergerak dengan arah balok B turun ke bawah dan balok A bergerak menaiki bidang miring.',
    },
  },
  {
    id: 35,
    type: 'essay',
    category: 'Dinamika Rotasi',
    originalNumber: 35,
    diagramId: 'gambar-22',
    diagramTitle: 'Gambar 22 — Silinder pejal menggelinding menuruni bidang miring',
    questionText:
      'Sebuah silinder pejal bermassa 6 kg dan berjari-jari 0,3 m (momen inersia terhadap sumbu pusatnya I = ½mR²) menggelinding tanpa tergelincir dari keadaan diam menuruni sebuah bidang miring bersudut 30° seperti Gambar 22. Ketinggian vertikal puncak bidang miring terhadap dasarnya adalah h = 4,8 m dan g = 10 m/s².\n\na. Hitung energi potensial gravitasi silinder ketika berada di puncak bidang miring.\nb. Dengan menggunakan hukum kekekalan energi mekanik dan syarat menggelinding tanpa slip (v = ωR), tentukan kelajuan pusat massa silinder ketika tiba di dasar bidang miring.',
    variables: { mass: 6, radius: 0.3, height: 4.8, angle: 30, g: 10 },
    caraLambat: {
      diketahui: [
        'Massa silinder pejal m = 6 kg',
        'Jari-jari silinder R = 0,3 m',
        'Momen inersia silinder pejal I = ½ m R²',
        'Ketinggian vertikal puncak h = 4,8 m',
        'Kemiringan bidang miring θ = 30°',
        'Silinder mula-mula diam di puncak (v₀ = 0, ω₀ = 0)',
        'Silinder menggelinding murni tanpa slip (v = ω·R)',
        'Percepatan gravitasi g = 10 m/s²',
      ],
      ditanya:
        'a. Energi potensial gravitasi di puncak bidang miring (E_p).\nb. Kelajuan linear pusat massa (v) saat tiba di dasar menggunakan Hukum Kekekalan Energi Mekanik.',
      konsep:
        'Hukum Kekekalan Energi Mekanik: Seluruh energi potensial gravitasi di puncak berubah menjadi energi kinetik total di dasar, yang merupakan gabungan energi kinetik translasi (½ m v²) dan energi kinetik rotasi (½ I ω²).',
      rumusDasar: [
        'E_p = m \\cdot g \\cdot h',
        'E_m = E_p = E_{k,trans} + E_{k,rot}',
        'E_k = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2',
        '\\omega = \\frac{v}{R}, \\quad I = \\frac{1}{2} m R^2',
      ],
      langkahPenyelesaian: [
        {
          title: 'Bagian a: Menghitung Energi Potensial Gravitasi di Puncak',
          detail: 'Gunakan rumus energi potensial gravitasi:',
          mathFormula: 'E_p = m \\cdot g \\cdot h = 6\\text{ kg} \\times 10\\text{ m/s}^2 \\times 4,8\\text{ m} = 288\\text{ Joule}',
          result: 'E_p = 288 J',
        },
        {
          title: 'Bagian b (Langkah 1): Menguraikan Energi Kinetik Total',
          detail: 'Substitusikan I = ½mR² dan ω = v/R ke dalam energi rotasi:',
          mathFormula: 'E_{k,rot} = \\frac{1}{2} \\left(\\frac{1}{2} m R^2\\right) \\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4} m v^2',
          result: 'E_k,rot = ¼ m v²',
        },
        {
          title: 'Bagian b (Langkah 2): Menjumlahkan Energi Kinetik Translasi dan Rotasi',
          detail: 'Energi kinetik total menggelinding silinder pejal:',
          mathFormula: 'E_{k,total} = \\frac{1}{2} m v^2 + \\frac{1}{4} m v^2 = \\frac{3}{4} m v^2',
          result: 'E_k,total = ¾ m v²',
        },
        {
          title: 'Bagian b (Langkah 3): Menyamakan Energi Potensial Puncak dengan Energi Kinetik Dasar',
          detail: 'Terapkan kekekalan energi mekanik E_m1 = E_m2:',
          mathFormula: 'm g h = \\frac{3}{4} m v^2 \\implies g h = \\frac{3}{4} v^2 \\implies v^2 = \\frac{4}{3} g h',
          result: 'v² = (4/3) g h',
        },
        {
          title: 'Bagian b (Langkah 4): Menghitung Nilai Kelajuan v',
          detail: 'Substitusikan g = 10 m/s² dan h = 4,8 m:',
          mathFormula: 'v^2 = \\frac{4}{3} \\times 10 \\times 4,8 = \\frac{4}{3} \\times 48 = 4 \\times 16 = 64 \\implies v = \\sqrt{64} = 8,0\\text{ m/s}',
          result: 'v = 8,0 m/s',
        },
      ],
      kesimpulan:
        'Energi potensial gravitasi silinder di puncak adalah 288 Joule, dan kelajuan pusat massa silinder ketika tiba di dasar adalah 8,0 m/s.',
    },
    caraCepat: {
      trikNama: 'Rumus Kilat Kelajuan Menggelinding Silinder Pejal',
      rumusPraktis: 'v = \\sqrt{\\frac{4}{3} g h}',
      langkahCepat:
        'a. Ep = 6 x 10 x 4,8 = 288 J.\nb. v = √[ (4/3) x 10 x 4,8 ] = √(4 x 16) = √64 = 8,0 m/s.',
      kapanDigunakan: 'Silinder pejal menggelinding murni menuruni bidang miring dari ketinggian h.',
      jawabanSingkat: 'a. Ep = 288 J; b. v = 8,0 m/s.',
    },
    speechScript: {
      soal: 'Soal esai nomor tiga puluh lima. Silinder pejal enam kilogram menggelinding tanpa slip dari puncak bidang miring setinggi empat koma delapan meter. Hitung energi potensial di puncak dan kelajuan pusat massa silinder saat tiba di dasar!',
      pembahasan:
        'Pertama, energi potensial di puncak adalah massa enam dikali gravitasi sepuluh dikali tinggi empat koma delapan, menghasilkan dua ratus delapan puluh delapan Joule. Kedua, menurut hukum kekekalan energi mekanik, energi potensial berubah menjadi energi gerak total tiga perempat m v kuadrat. Menyamakan dua ratus delapan puluh delapan Joule dengan tiga perempat dikali enam dikali v kuadrat, menghasilkan v kuadrat sama dengan enam puluh empat. Kelajuan di dasar adalah akar dari enam puluh empat yaitu tepat delapan koma nol meter per sekon.',
    },
  },
];
