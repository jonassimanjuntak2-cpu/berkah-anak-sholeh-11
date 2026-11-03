import { QuestionData } from '../types/physics';

export const MC_QUESTIONS_PART_1: QuestionData[] = [
  {
    id: 1,
    type: 'multiple_choice',
    category: 'Vektor',
    originalNumber: 1,
    diagramId: 'gambar-1',
    diagramTitle: 'Gambar 1 — Dua pekerja menarik peti dengan arah tali yang dapat diubah',
    questionText:
      'Dua orang pekerja menarik sebuah peti kayu di atas lantai licin menggunakan dua tali yang terpisah. Besar gaya yang mampu diberikan pekerja pertama adalah 25 N dan pekerja kedua 60 N. Arah kedua tali dapat diubah-ubah sesuai kesepakatan, tetapi besar masing-masing gaya tetap. Besar resultan gaya yang tidak mungkin dihasilkan oleh kedua pekerja tersebut adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '35 N' },
      { id: 'B', text: '90 N' },
      { id: 'C', text: '65 N' },
      { id: 'D', text: '50 N' },
      { id: 'E', text: '75 N' },
    ],
    variables: { F1: 25, F2: 60, unit: 'N' },
    caraLambat: {
      diketahui: [
        'Gaya pekerja pertama (F₁) = 25 N',
        'Gaya pekerja kedua (F₂) = 60 N',
        'Arah kedua tali dapat diubah-ubah bebas (sudut θ antara 0° hingga 180°)',
      ],
      ditanya: 'Besar resultan gaya (R) yang TIDAK MUNGKIN dihasilkan kedua pekerja.',
      konsep:
        'Hukum jajar genjang resultan dua vektor: R = √(F₁² + F₂² + 2·F₁·F₂·cos θ). Nilai kosinus sudut berkisar dari cos 180° = -1 sampai cos 0° = +1.',
      rumusDasar: [
        'R_{maks} = F₁ + F₂  (saat searah, θ = 0°)',
        'R_{min} = |F₂ - F₁|  (saat berlawanan arah, θ = 180°)',
        '|F₂ - F₁| ≤ R ≤ F₁ + F₂',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung resultan maksimum',
          detail: 'Resultan maksimum terjadi ketika kedua gaya ditarik searah (sudut θ = 0°, cos 0° = 1):',
          mathFormula: 'R_{maks} = F_1 + F_2 = 25\\text{ N} + 60\\text{ N} = 85\\text{ N}',
          result: 'R_maks = 85 N',
        },
        {
          title: 'Langkah 2: Menghitung resultan minimum',
          detail: 'Resultan minimum terjadi ketika kedua gaya ditarik berlawanan arah (sudut θ = 180°, cos 180° = -1):',
          mathFormula: 'R_{min} = |F_2 - F_1| = |60\\text{ N} - 25\\text{ N}| = 35\\text{ N}',
          result: 'R_min = 35 N',
        },
        {
          title: 'Langkah 3: Menentukan rentang resultan yang mungkin',
          detail: 'Seluruh nilai resultan yang mungkin berada dalam rentang inklusif [35 N, 85 N].',
          mathFormula: '35\\text{ N} \\le R \\le 85\\text{ N}',
          result: 'Rentang: 35 N s.d. 85 N',
        },
        {
          title: 'Langkah 4: Menguji setiap opsi jawaban',
          detail:
            'A (35 N) = R_min (mungkin). C (65 N), D (50 N), E (75 N) berada di antara 35 N dan 85 N (mungkin). B (90 N) lebih besar dari 85 N (TIDAK MUNGKIN).',
          result: '90 N berada di luar jangkauan fisik kedua gaya.',
        },
      ],
      kesimpulan:
        'Besar resultan gaya yang tidak mungkin dihasilkan oleh kedua pekerja adalah 90 N karena melebihi resultan maksimum 85 N.',
    },
    caraCepat: {
      trikNama: 'Trik Rentang Vektor (Jumlah & Selisih Ekstrem)',
      rumusPraktis: '|F₂ - F₁| ≤ R ≤ (F₁ + F₂)',
      langkahCepat:
        'Batas bawah: 60 - 25 = 35 N. Batas atas: 60 + 25 = 85 N. Rentang yang mungkin adalah 35 N s.d. 85 N. Nilai 90 N > 85 N, sehingga langsung terpilih sebagai jawaban yang tidak mungkin.',
      kapanDigunakan: 'Menentukan kemungkinan nilai resultan dua vektor.',
      jawabanSingkat: 'Batas [35 N, 85 N]. Nilai 90 N di luar batas, maka 90 N tidak mungkin.',
    },
    speechScript: {
      soal: 'Soal nomor satu. Dua orang pekerja menarik sebuah peti kayu di atas lantai licin menggunakan dua tali terpisah. Gaya pekerja pertama dua puluh lima Newton dan pekerja kedua enam puluh Newton. Arah kedua tali dapat diubah-ubah. Besar resultan gaya yang tidak mungkin dihasilkan oleh kedua pekerja tersebut adalah?',
      pembahasan:
        'Dua vektor gaya memiliki resultan maksimum ketika searah, yaitu dua puluh lima ditambah enam puluh sama dengan delapan puluh lima Newton. Resultan minimum saat berlawanan arah adalah enam puluh dikurang dua puluh lima sama dengan tiga puluh lima Newton. Jadi resultan yang mungkin hanya berada di antara tiga puluh lima hingga delapan puluh lima Newton. Nilai sembilan puluh Newton melebihi batas maksimum, sehingga sembilan puluh Newton tidak mungkin dihasilkan.',
    },
  },
  {
    id: 2,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 2,
    diagramId: 'gambar-2-koper',
    diagramTitle: 'Gaya tarik koper dengan tali bersudut θ terhadap lantai mendatar',
    questionText:
      'Seorang penumpang di stasiun menarik koper bermassa m dengan gaya F yang besarnya tetap melalui sebuah tali. Sudut θ antara tali dan lantai diperbesar perlahan dari 30° menjadi 60°, dan selama proses itu koper tetap meluncur mendatar di lantai. Analisis yang benar terhadap keadaan tersebut adalah ....',
    correctOptionId: 'A',
    options: [
      {
        id: 'A',
        text: 'Komponen gaya sejajar lantai mengecil dan komponen gaya tegak lurus lantai membesar, sehingga gaya normal lantai terhadap koper mengecil.',
      },
      {
        id: 'B',
        text: 'Kedua komponen gaya tetap karena besar gaya tarik F tidak berubah, sehingga gaya normal juga tetap.',
      },
      {
        id: 'C',
        text: 'Gaya normal lantai membesar karena koper menekan lantai lebih kuat ketika tali semakin ditegakkan.',
      },
      {
        id: 'D',
        text: 'Komponen gaya sejajar lantai membesar sehingga koper semakin mudah ditarik dan gaya geseknya mengecil.',
      },
      {
        id: 'E',
        text: 'Gaya normal menjadi nol karena seluruh berat koper telah ditahan oleh tali.',
      },
    ],
    variables: { theta1: 30, theta2: 60 },
    caraLambat: {
      diketahui: [
        'Massa koper = m, berat koper w = m·g (arah vertikal ke bawah)',
        'Gaya tarik F konstan',
        'Sudut elevasi θ diperbesar perlahan dari 30° menjadi 60°',
        'Koper tetap meluncur mendatar pada lantai (keseimbangan pada sumbu vertikal Y tetap berlaku)',
      ],
      ditanya: 'Analisis fisis yang benar terhadap komponen gaya dan gaya normal lantai.',
      konsep:
        'Uraian vektor pada sumbu kartesius: F_x = F·cos θ (horizontal), F_y = F·sin θ (vertikal ke atas). Hukum I Newton pada sumbu Y: ΣF_y = 0.',
      rumusDasar: [
        'F_x = F \\cdot \\cos\\theta',
        'F_y = F \\cdot \\sin\\theta',
        '\\Sigma F_y = 0 \\implies N + F_y - w = 0 \\implies N = mg - F\\sin\\theta',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Analisis komponen horizontal F_x',
          detail: 'Karena sudut θ bertambah dari 30° ke 60°, nilai cosinus sudut berkurang (cos 30° = 0,866 menjadi cos 60° = 0,5):',
          mathFormula: 'F_x = F \\cos\\theta \\implies F_x\\text{ mengecil}',
          result: 'Komponen sejajar lantai mengecil.',
        },
        {
          title: 'Langkah 2: Analisis komponen vertikal F_y',
          detail: 'Nilai sinus sudut bertambah (sin 30° = 0,5 menjadi sin 60° = 0,866):',
          mathFormula: 'F_y = F \\sin\\theta \\implies F_y\\text{ membesar}',
          result: 'Komponen tegak lurus lantai (ke atas) membesar.',
        },
        {
          title: 'Langkah 3: Analisis gaya normal N',
          detail:
            'Gaya normal merupakan gaya kontak lantai yang menopang koper. Komponen F_y menarik koper ke atas, meringankan beban pada lantai:',
          mathFormula: 'N = mg - F\\sin\\theta',
          result: 'Karena F sin θ membesar, maka N = mg - F sin θ semakin berkurang (mengecil).',
        },
      ],
      kesimpulan:
        'Komponen sejajar lantai (F cos θ) mengecil dan komponen tegak lurus lantai (F sin θ) membesar, sehingga gaya normal lantai terhadap koper mengecil.',
    },
    caraCepat: {
      trikNama: 'Logika Intuisi Arah Tali',
      rumusPraktis: 'N = w - F_y = mg - F\\sin\\theta',
      langkahCepat:
        'Ketika tali ditarik semakin tegak (θ makin besar), kita semakin mengangkat koper ke atas. Karena koper semakin terangkat, tekanan koper pada lantai berkurang sehingga gaya normal mengecil, sedangkan gaya maju ke depan berkurang.',
      kapanDigunakan: 'Pada seluruh permasalahan benda ditarik dengan tali bersudut pada bidang datar.',
      jawabanSingkat: 'Tali makin tegak -> tarikan ke atas makin kuat -> lantai makin ringan menopang -> gaya normal mengecil.',
    },
    speechScript: {
      soal: 'Soal nomor dua. Seorang penumpang di stasiun menarik koper bermassa m dengan gaya F konstan. Sudut teta antara tali dan lantai diperbesar perlahan dari tiga puluh derajat menjadi enam puluh derajat. Analisis yang benar terhadap keadaan tersebut adalah?',
      pembahasan:
        'Ketika sudut membesar dari tiga puluh ke enam puluh derajat, nilai cosinus mengecil sehingga gaya mendatar mengecil. Sebaliknya nilai sinus membesar sehingga gaya angkat ke atas membesar. Akibatnya, lantai menopang beban lebih sedikit dan gaya normal menjadi mengecil. Jadi pilihan yang tepat adalah A.',
    },
  },
  {
    id: 3,
    type: 'multiple_choice',
    category: 'Vektor',
    originalNumber: 3,
    diagramId: 'gambar-2',
    diagramTitle: 'Gambar 2 — Perahu diarahkan tegak lurus arus sungai',
    questionText:
      'Sebuah perahu motor menyeberangi sungai lurus selebar 160 m. Nahkoda mengarahkan haluan perahu tepat tegak lurus arah arus sehingga kecepatan perahu terhadap air 8 m/s. Kecepatan arus sungai seragam 6 m/s. Panjang perpindahan perahu dihitung dari titik berangkat hingga titik tempat perahu tiba di tepi seberang adalah ....',
    correctOptionId: 'C',
    options: [
      { id: 'A', text: '150 m' },
      { id: 'B', text: '120 m' },
      { id: 'C', text: '200 m' },
      { id: 'D', text: '240 m' },
      { id: 'E', text: '280 m' },
    ],
    variables: { width: 160, vBoat: 8, vCurrent: 6, unit: 'm' },
    caraLambat: {
      diketahui: [
        'Lebar sungai (y) = 160 m',
        'Kecepatan perahu terhadap air tegak lurus arus (v_p) = 8 m/s',
        'Kecepatan arus sungai searah tepi sungai (v_a) = 6 m/s',
      ],
      ditanya: 'Panjang perpindahan total perahu (s) dari titik berangkat sampai tiba di seberang.',
      konsep:
        'Gerak dua dimensi ortogonal: sumbu Y (menyeberang) dan sumbu X (hanyut terbawa arus). Waktu menyeberang t = lebar / v_p. Jarak hanyut x = v_a · t. Perpindahan total s = √(x² + y²).',
      rumusDasar: [
        't = \\frac{y}{v_p}',
        'x = v_a \\cdot t',
        's = \\sqrt{x^2 + y^2}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung waktu menyeberang',
          detail: 'Waktu menyeberang hanya dipengaruhi oleh kelajuan perahu menyeberang tegak lurus arus:',
          mathFormula: 't = \\frac{y}{v_p} = \\frac{160\\text{ m}}{8\\text{ m/s}} = 20\\text{ s}',
          result: 'Waktu tempuh t = 20 sekon',
        },
        {
          title: 'Langkah 2: Menghitung jarak hanyut searah arus',
          detail: 'Selama 20 sekon, arus sungai membawa perahu ke kanan:',
          mathFormula: 'x = v_a \\cdot t = 6\\text{ m/s} \\times 20\\text{ s} = 120\\text{ m}',
          result: 'Jarak hanyut x = 120 m',
        },
        {
          title: 'Langkah 3: Menghitung perpindahan total',
          detail: 'Perpindahan total adalah sisi miring dari segitiga dengan sisi 160 m dan 120 m:',
          mathFormula: 's = \\sqrt{x^2 + y^2} = \\sqrt{120^2 + 160^2} = \\sqrt{14400 + 25600} = \\sqrt{40000} = 200\\text{ m}',
          result: 'Perpindahan s = 200 m',
        },
      ],
      kesimpulan: 'Panjang perpindahan perahu dari titik awal hingga tepi seberang adalah 200 meter.',
    },
    caraCepat: {
      trikNama: 'Trik Tripel Pythagoras 3 - 4 - 5 Kelipatan 40',
      rumusPraktis: 's = y \\cdot \\frac{v_{resultan}}{v_p}',
      langkahCepat:
        'Kecepatan perahu 8 m/s dan arus 6 m/s membentuk rasio 4 : 3, sehingga kecepatan resultan = 10 m/s (rasio 5). Dengan lebar 160 m (4 x 40), maka panjang perpindahan total langsung 5 x 40 = 200 m.',
      kapanDigunakan: 'Perahu diarahkan tegak lurus arus sungai.',
      jawabanSingkat: 'Tripel 6 - 8 - 10 dikalikan faktor 20: 120 m, 160 m, dan 200 m. Jawaban 200 m.',
    },
    speechScript: {
      soal: 'Soal nomor tiga. Sebuah perahu motor menyeberangi sungai selebar seratus enam puluh meter. Haluan perahu diarahkan tegak lurus arus dengan kelajuan delapan meter per sekon, dan arus sungai enam meter per sekon. Panjang perpindahan perahu hingga tiba di seberang adalah?',
      pembahasan:
        'Waktu menyeberang adalah seratus enam puluh meter dibagi delapan meter per sekon, yaitu dua puluh sekon. Jarak hanyut perahu adalah enam dikali dua puluh sama dengan seratus dua puluh meter. Perpindahan total adalah akar dari seratus enam puluh kuadrat ditambah seratus dua puluh kuadrat, menghasilkan dua ratus meter. Atau gunakan tripel pythagoras enam, delapan, sepuluh dikali dua puluh yang langsung menghasilkan dua ratus meter.',
    },
  },
  {
    id: 4,
    type: 'multiple_choice',
    category: 'Vektor',
    originalNumber: 4,
    diagramId: 'gambar-3',
    diagramTitle: 'Gambar 3 — Tiga gaya pada satu titik tangkap (1 kotak = 1 N)',
    questionText:
      'Tiga buah gaya bekerja pada sebuah titik tangkap yang sama seperti ditunjukkan Gambar 3. Skala gambar adalah 1 kotak = 1 N. Besar resultan dan arah resultan ketiga gaya tersebut terhadap sumbu X positif adalah ....',
    correctOptionId: 'A',
    options: [
      { id: 'A', text: '5 N membentuk sudut 37° terhadap sumbu X positif' },
      { id: 'B', text: '7 N membentuk sudut 45° terhadap sumbu X positif' },
      { id: 'C', text: '5 N membentuk sudut 53° terhadap sumbu X positif' },
      { id: 'D', text: '14 N searah sumbu X positif' },
      { id: 'E', text: '19 N searah sumbu Y positif' },
    ],
    variables: { scale: 1, F1: 8, F2: 6, F3x: -4, F3y: -3 },
    caraLambat: {
      diketahui: [
        'Skala grafik: 1 kotak = 1 N',
        'Gaya F₁ ke arah sumbu X positif: panjang 8 kotak -> F₁ = (+8i + 0j) N',
        'Gaya F₂ ke arah sumbu Y positif: panjang 6 kotak -> F₂ = (0i + 6j) N',
        'Gaya F₃ di kuadran III: komponen x = -4 kotak, komponen y = -3 kotak -> F₃ = (-4i - 3j) N',
      ],
      ditanya: 'Besar resultan (R) dan arah sudutnya (θ) terhadap sumbu X positif.',
      konsep:
        'Metode analisis komponen kartesius: R_x = ΣF_x, R_y = ΣF_y. Besar resultan R = √(R_x² + R_y²), arah tan θ = R_y / R_x.',
      rumusDasar: [
        'R_x = \\Sigma F_x = F_{1x} + F_{2x} + F_{3x}',
        'R_y = \\Sigma F_y = F_{1y} + F_{2y} + F_{3y}',
        'R = \\sqrt{R_x^2 + R_y^2}',
        '\\tan\\theta = \\frac{R_y}{R_x}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung resultan komponen horizontal R_x',
          detail: 'Jumlahkan komponen gaya pada sumbu X:',
          mathFormula: 'R_x = 8 + 0 + (-4) = 4\\text{ N}',
          result: 'R_x = 4 N',
        },
        {
          title: 'Langkah 2: Menghitung resultan komponen vertikal R_y',
          detail: 'Jumlahkan komponen gaya pada sumbu Y:',
          mathFormula: 'R_y = 0 + 6 + (-3) = 3\\text{ N}',
          result: 'R_y = 3 N',
        },
        {
          title: 'Langkah 3: Menghitung besar resultan R',
          detail: 'Gunakan teorema Pythagoras:',
          mathFormula: 'R = \\sqrt{R_x^2 + R_y^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ N}',
          result: 'R = 5 N',
        },
        {
          title: 'Langkah 4: Menghitung arah resultan θ terhadap sumbu X positif',
          detail: 'Hitung nilai tangen sudut:',
          mathFormula: '\\tan\\theta = \\frac{R_y}{R_x} = \\frac{3}{4} = 0,75 \\implies \\theta = 37^\\circ',
          result: 'θ = 37° terhadap sumbu X positif',
        },
      ],
      kesimpulan: 'Besar resultan ketiga gaya adalah 5 N dan membentuk sudut 37° terhadap sumbu X positif.',
    },
    caraCepat: {
      trikNama: 'Trik Komponen Kotak Berpasangan',
      rumusPraktis: 'R = \\sqrt{(\\Sigma x)^2 + (\\Sigma y)^2}, \\tan\\theta = \\frac{\\Sigma y}{\\Sigma x}',
      langkahCepat:
        'Hitung selisih X: 8 - 4 = 4 N. Hitung selisih Y: 6 - 3 = 3 N. Pasangan (4, 3) menghasilkan resultan 5 N. Karena komponen X (4) lebih besar dari Y (3), sudut terhadap sumbu X adalah 37°.',
      kapanDigunakan: 'Soal vektor koordinat kartesius.',
      jawabanSingkat: 'Rx = 4 N, Ry = 3 N -> R = 5 N dengan sudut 37° terhadap sumbu X positif.',
    },
    speechScript: {
      soal: 'Soal nomor empat. Tiga buah gaya bekerja pada satu titik tangkap dengan skala satu kotak sama dengan satu Newton. Besar resultan dan arah resultan ketiga gaya tersebut terhadap sumbu X positif adalah?',
      pembahasan:
        'Jumlah gaya pada sumbu X adalah delapan dikurang empat sama dengan empat Newton. Jumlah gaya pada sumbu Y adalah enam dikurang tiga sama dengan tiga Newton. Resultan gayanya adalah akar empat kuadrat ditambah tiga kuadrat, yaitu lima Newton. Karena tangen sudutnya tiga per empat atau nol koma tujuh puluh lima, maka sudutnya adalah tiga puluh tujuh derajat terhadap sumbu X positif. Jawabannya adalah opsi A.',
    },
  },
  {
    id: 5,
    type: 'multiple_choice',
    category: 'Kinematika Gerak Lurus',
    originalNumber: 5,
    diagramId: 'grafik-1',
    diagramTitle: 'Grafik 1 — Hubungan kelajuan v terhadap waktu t mobil listrik',
    questionText:
      'Sebuah mobil listrik uji coba bergerak lurus di lintasan uji. Hasil pencatatan sensor kecepatannya disajikan pada Grafik 1. Berdasarkan Grafik 1, jarak total yang ditempuh mobil selama 45 sekon dan besar perlambatan pada 10 sekon terakhir berturut-turut adalah ....',
    correctOptionId: 'C',
    options: [
      { id: 'A', text: '800 m dan 2 m/s²' },
      { id: 'B', text: '900 m dan 5 m/s²' },
      { id: 'C', text: '1.050 m dan 3 m/s²' },
      { id: 'D', text: '1.050 m dan 30 m/s²' },
      { id: 'E', text: '1.200 m dan 1,5 m/s²' },
    ],
    variables: { tTotal: 45, vPeak: 30, tConstStart: 10, tConstEnd: 35 },
    caraLambat: {
      diketahui: [
        'Fase 1 (0 s - 10 s): GLBB dipercepat dari 0 m/s ke 30 m/s',
        'Fase 2 (10 s - 35 s): GLB dengan kecepatan tetap v = 30 m/s (durasi 25 sekon)',
        'Fase 3 (35 s - 45 s): GLBB diperlambat dari 30 m/s hingga berhenti 0 m/s (durasi 10 sekon)',
      ],
      ditanya: 'Jarak total (s) selama 45 sekon dan besar perlambatan (a) pada 10 sekon terakhir.',
      konsep:
        'Jarak pada grafik v-t sama dengan luas daerah di bawah kurva grafik (trapesium). Besar perlambatan a = |Δv / Δt|.',
      rumusDasar: [
        's_{total} = \\text{Luas Trapesium} = \\frac{1}{2} \\cdot (a + b) \\cdot t_t',
        'a = \\frac{|v_t - v_0|}{\\Delta t}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung jarak total dengan luas trapesium',
          detail: 'Sisi sejajar bawah b = 45 s, sisi sejajar atas a = (35 - 10) = 25 s, tinggi = 30 m/s:',
          mathFormula: 's = \\frac{(45 + 25) \\cdot 30}{2} = \\frac{70 \\cdot 30}{2} = 35 \\times 30 = 1.050\\text{ m}',
          result: 'Jarak total = 1.050 meter',
        },
        {
          title: 'Langkah 2: Menghitung besar perlambatan pada 10 sekon terakhir (t = 35 s s.d. 45 s)',
          detail: 'Kecepatan awal v₀ = 30 m/s, kecepatan akhir v_t = 0 m/s, selang waktu Δt = 10 s:',
          mathFormula: 'a = \\frac{|0 - 30\\text{ m/s}|}{10\\text{ s}} = \\frac{30}{10} = 3\\text{ m/s}^2',
          result: 'Perlambatan = 3 m/s²',
        },
      ],
      kesimpulan: 'Jarak total yang ditempuh adalah 1.050 m dan besar perlambatannya adalah 3 m/s².',
    },
    caraCepat: {
      trikNama: 'Trik Luas Trapesium Kilat',
      rumusPraktis: 's = \\left(\\frac{b + a}{2}\\right) \\times v_{maks}',
      langkahCepat:
        'Rata-rata alas trapesium adalah (45 + 25) / 2 = 35. Kalikan dengan tinggi 30: 35 x 30 = 1.050 m. Perlambatan 10 sekon terakhir: turun 30 m/s dalam 10 s -> 30/10 = 3 m/s².',
      kapanDigunakan: 'Grafik v terhadap t berbentuk trapesium.',
      jawabanSingkat: 'Jarak = 1.050 m, perlambatan = 3 m/s².',
    },
    speechScript: {
      soal: 'Soal nomor lima. Sebuah mobil listrik bergerak lurus dengan grafik kelajuan v terhadap waktu t. Jarak total yang ditempuh selama empat puluh lima sekon dan besar perlambatan pada sepuluh sekon terakhir berturut-turut adalah?',
      pembahasan:
        'Luas trapesium dihitung dari jumlah sisi sejajar yaitu empat puluh lima ditambah dua puluh lima sama dengan tujuh puluh, dibagi dua menjadi tiga puluh lima. Tiga puluh lima dikali tinggi tiga puluh meter per sekon menghasilkan jarak seribu lima puluh meter. Perlambatan pada sepuluh sekon terakhir adalah tiga puluh dibagi sepuluh sama dengan tiga meter per sekon kuadrat. Jawabannya adalah seribu lima puluh meter dan tiga meter per sekon kuadrat.',
    },
  },
  {
    id: 6,
    type: 'multiple_choice',
    category: 'Kinematika Gerak Lurus',
    originalNumber: 6,
    diagramId: 'gambar-lubang',
    diagramTitle: 'Mobil melaju dan mengerem sebelum lubang di jalan lurus',
    questionText:
      'Sebuah mobil melaju dengan kelajuan 72 km/jam di jalan lurus. Pengemudi melihat sebuah lubang di permukaan jalan tepat berada 54 m di depan mobil. Waktu reaksi pengemudi (selang waktu antara melihat lubang hingga menginjak rem) adalah 0,7 sekon. Setelah rem diinjak, mobil mengalami perlambatan tetap sebesar 5 m/s². Jarak henti minimum dari posisi saat melihat lubang agar mobil tepat berhenti sebelum mencapai lubang adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '40 m' },
      { id: 'B', text: '54 m' },
      { id: 'C', text: '60 m' },
      { id: 'D', text: '70 m' },
      { id: 'E', text: '48 m' },
    ],
    variables: { v0Kmh: 72, distHole: 54, tReact: 0.7, decel: 5 },
    caraLambat: {
      diketahui: [
        'Kelajuan awal v₀ = 72 km/jam = 20 m/s',
        'Waktu reaksi pengemudi t_reaksi = 0,7 s (mobil bergerak GLB)',
        'Perlambatan saat pengereman a = 5 m/s²',
        'Kecepatan akhir v_t = 0 m/s',
      ],
      ditanya: 'Jarak henti total minimum yang dibutuhkan mobil agar tepat berhenti.',
      konsep:
        'Gerak henti kendaraan terdiri dari dua fase: Fase Reaksi (GLB) + Fase Pengereman (GLBB diperlambat). Jarak henti total s_total = s_reaksi + s_rem.',
      rumusDasar: [
        'v_0 = 72 \\times \\frac{5}{18} = 20\\text{ m/s}',
        's_{reaksi} = v_0 \\cdot t_{reaksi}',
        's_{rem} = \\frac{v_0^2}{2a}',
        's_{total} = s_{reaksi} + s_{rem}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Konversi satuan kelajuan ke SI',
          detail: 'Ubah satuan dari km/jam ke m/s:',
          mathFormula: 'v_0 = 72 \\times \\frac{5}{18} = 20\\text{ m/s}',
          result: 'v₀ = 20 m/s',
        },
        {
          title: 'Langkah 2: Menghitung jarak selama waktu reaksi (GLB)',
          detail: 'Selama 0,7 sekon pengemudi bereaksi:',
          mathFormula: 's_{reaksi} = 20\\text{ m/s} \\times 0,7\\text{ s} = 14\\text{ m}',
          result: 's_reaksi = 14 meter',
        },
        {
          title: 'Langkah 3: Menghitung jarak pengereman (GLBB)',
          detail: 'Dari persamaan v_t² = v₀² - 2·a·s_rem dengan v_t = 0:',
          mathFormula: '0 = 20^2 - 2(5)s_{rem} \\implies 10 s_{rem} = 400 \\implies s_{rem} = 40\\text{ m}',
          result: 's_rem = 40 meter',
        },
        {
          title: 'Langkah 4: Menghitung jarak henti total',
          detail: 'Jumlahkan jarak reaksi dan pengereman:',
          mathFormula: 's_{total} = 14\\text{ m} + 40\\text{ m} = 54\\text{ m}',
          result: 's_total = 54 meter',
        },
      ],
      kesimpulan: 'Mobil membutuhkan jarak total tepat 54 meter untuk berhenti sempurna sebelum lubang.',
    },
    caraCepat: {
      trikNama: 'Formula Jarak Henti Total',
      rumusPraktis: 's = v_0 \\cdot t_r + \\frac{v_0^2}{2a}',
      langkahCepat:
        'v₀ = 20 m/s. Jarak reaksi = 20 x 0,7 = 14 m. Jarak rem = 20² / 10 = 40 m. Total henti = 14 + 40 = 54 m.',
      kapanDigunakan: 'Menghitung jarak reaksi dan pengereman mobil.',
      jawabanSingkat: '14 m + 40 m = 54 m.',
    },
    speechScript: {
      soal: 'Soal nomor enam. Mobil melaju tujuh puluh dua kilometer per jam. Pengemudi melihat lubang pada jarak lima puluh empat meter di depan. Waktu reaksi nol koma tujuh sekon dan perlambatan rem lima meter per sekon kuadrat. Berapa jarak minimum agar mobil tepat berhenti sebelum lubang?',
      pembahasan:
        'Kelajuan dua puluh meter per sekon dikali waktu reaksi nol koma tujuh sekon menghasilkan jarak reaksi empat belas meter. Jarak pengereman adalah dua puluh kuadrat dibagi dua kali lima, yaitu empat puluh meter. Jarak total untuk berhenti adalah empat belas ditambah empat puluh sama dengan lima puluh empat meter.',
    },
  },
  {
    id: 7,
    type: 'multiple_choice',
    category: 'Kinematika Gerak Lurus',
    originalNumber: 7,
    tableData: {
      caption: 'Tabel 1 — Data posisi kereta mainan terhadap waktu',
      headers: ['t (sekon)', '0', '1', '2', '3', '4'],
      rows: [
        ['s (meter)', '0', '3', '12', '27', '48'],
      ],
    },
    questionText:
      'Sekelompok siswa merekam posisi sebuah kereta mainan bertenaga baterai menggunakan sensor gerak. Kereta mula-mula diam pada posisi acuan s = 0, lalu bergerak lurus searah sumbu sensor. Hasil perekaman ditunjukkan pada Tabel 1. Berdasarkan pola data pada Tabel 1, dapat disimpulkan bahwa kereta tersebut bergerak lurus berubah beraturan dengan percepatan sebesar ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '3 m/s²' },
      { id: 'B', text: '6 m/s²' },
      { id: 'C', text: '9 m/s²' },
      { id: 'D', text: '12 m/s²' },
      { id: 'E', text: '2 m/s²' },
    ],
    variables: {},
    caraLambat: {
      diketahui: [
        'Posisi awal s₀ = 0 pada t = 0',
        'Kereta mula-mula diam -> kelajuan awal v₀ = 0',
        'Data tabel: t=1s -> s=3m; t=2s -> s=12m; t=3s -> s=27m; t=4s -> s=48m',
      ],
      ditanya: 'Besar percepatan tetap (a) kereta mainan.',
      konsep:
        'Persamaan posisi GLBB dengan kecepatan awal nol: s(t) = ½·a·t².',
      rumusDasar: [
        's = \\frac{1}{2} a t^2 \\implies a = \\frac{2s}{t^2}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menguji titik data pertama (t = 1 s, s = 3 m)',
          detail: 'Masukkan nilai t dan s ke rumus:',
          mathFormula: '3 = \\frac{1}{2} \\cdot a \\cdot (1)^2 \\implies \\frac{1}{2} a = 3 \\implies a = 6\\text{ m/s}^2',
          result: 'a = 6 m/s²',
        },
        {
          title: 'Langkah 2: Memverifikasi pada titik data kedua (t = 2 s, s = 12 m)',
          detail: 'Uji konsistensi data:',
          mathFormula: '12 = \\frac{1}{2} \\cdot a \\cdot (2)^2 = 2a \\implies a = 6\\text{ m/s}^2',
          result: 'Terverifikasi a = 6 m/s²',
        },
        {
          title: 'Langkah 3: Memverifikasi titik t = 3 s (s = 27 m) dan t = 4 s (s = 48 m)',
          detail: 'Pada t = 4 s: s = ½(6)(16) = 48 m. Konsisten sempurna.',
          result: 'Percepatan konstan a = 6 m/s²',
        },
      ],
      kesimpulan: 'Kereta bergerak lurus berubah beraturan dengan percepatan konstan 6 m/s².',
    },
    caraCepat: {
      trikNama: 'Trik Pola Kuadrat (Koefisien t²)',
      rumusPraktis: 's(t) = k \\cdot t^2 \\implies a = 2k',
      langkahCepat:
        'Rasio s / t² selalu bernilai konstan: 3/1 = 3, 12/4 = 3, 27/9 = 3, 48/16 = 3. Pola lintasan s = 3t². Karena ½ a = 3, maka a = 6 m/s².',
      kapanDigunakan: 'Data posisi terhadap waktu dari keadaan diam.',
      jawabanSingkat: 'Pola s = 3t² -> a = 2 x 3 = 6 m/s².',
    },
    speechScript: {
      soal: 'Soal nomor tujuh. Data posisi kereta mainan dari keadaan diam adalah: detik ke satu tiga meter, detik ke dua dua belas meter, detik ke tiga dua puluh tujuh meter, dan detik ke empat empat puluh delapan meter. Berapakah percepatan kereta tersebut?',
      pembahasan:
        'Perhatikan rasio jarak terhadap waktu kuadrat selalu bernilai tiga. Karena rumus GLBB dari diam adalah jarak sama dengan setengah dikali percepatan dikali waktu kuadrat, maka setengah percepatan sama dengan tiga. Sehingga percepatannya adalah dua dikali tiga sama dengan enam meter per sekon kuadrat.',
    },
  },
  {
    id: 8,
    type: 'multiple_choice',
    category: 'Kinematika Gerak Lurus',
    originalNumber: 8,
    diagramId: 'eskalator',
    diagramTitle: 'Eskalator stasiun dengan pengamatan gerak relatif',
    questionText:
      'Seorang pegawai mencatat tiga pengamatan pada sebuah eskalator di stasiun yang panjangnya tetap. Jika eskalator dimatikan (diam) dan ia berjalan naik dengan kelajuan tetap, ia sampai di ujung atas dalam waktu 90 sekon. Jika ia berdiri diam di atas eskalator yang berjalan, ia sampai di ujung atas dalam waktu 45 sekon. Waktu yang ia perlukan untuk sampai di ujung atas jika ia berjalan dengan kelajuan yang sama sementara eskalator juga berjalan adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '20 s' },
      { id: 'B', text: '30 s' },
      { id: 'C', text: '25 s' },
      { id: 'D', text: '40 s' },
      { id: 'E', text: '45 s' },
    ],
    variables: { tWalk: 90, tEscalator: 45 },
    caraLambat: {
      diketahui: [
        'Panjang eskalator = L (tetap)',
        'Waktu saat orang berjalan sendiri (eskalator diam): t₁ = 90 s -> kelajuan orang v_o = L / 90',
        'Waktu saat berdiri diam (eskalator berjalan): t₂ = 45 s -> kelajuan eskalator v_e = L / 45',
      ],
      ditanya: 'Waktu total (t) jika orang berjalan naik di atas eskalator yang juga berjalan.',
      konsep:
        'Kecepatan relatif searah saling menjumlahkan: v_{total} = v_o + v_e. Waktu tempuh t = L / v_{total}.',
      rumusDasar: [
        'v_o = \\frac{L}{t_1}, \\quad v_e = \\frac{L}{t_2}',
        'v_{total} = v_o + v_e = L \\left(\\frac{1}{t_1} + \\frac{1}{t_2}\\right)',
        't = \\frac{L}{v_{total}} = \\frac{t_1 \\cdot t_2}{t_1 + t_2}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menyatakan kelajuan masing-masing',
          detail: 'v_o = L/90 dan v_e = L/45.',
          result: 'v_o = L/90, v_e = L/45',
        },
        {
          title: 'Langkah 2: Menjumlahkan kelajuan total',
          detail: 'Samakan penyebut 90 dan 45 ke 90:',
          mathFormula: 'v_{total} = \\frac{L}{90} + \\frac{L}{45} = \\frac{L}{90} + \\frac{2L}{90} = \\frac{3L}{90} = \\frac{L}{30}',
          result: 'v_total = L / 30',
        },
        {
          title: 'Langkah 3: Menghitung waktu gabungan',
          detail: 'Waktu adalah panjang lintasan dibagi kelajuan total:',
          mathFormula: 't = \\frac{L}{v_{total}} = \\frac{L}{L / 30} = 30\\text{ sekon}',
          result: 't = 30 s',
        },
      ],
      kesimpulan: 'Waktu yang diperlukan ketika berjalan di atas eskalator yang bergerak adalah 30 sekon.',
    },
    caraCepat: {
      trikNama: 'Rumus Cepat Kecepatan Gabungan',
      rumusPraktis: 't = \\frac{t_1 \\cdot t_2}{t_1 + t_2}',
      langkahCepat:
        'Hasil kali dibagi hasil jumlah: t = (90 x 45) / (90 + 45) = 4050 / 135 = 30 sekon.',
      kapanDigunakan: 'Dua penggerak bekerja bersamaan searah melintasi jarak yang sama.',
      jawabanSingkat: 't = (90 x 45) / 135 = 30 s.',
    },
    speechScript: {
      soal: 'Soal nomor delapan. Berjalan di eskalator diam membutuhkan waktu sembilan puluh sekon. Berdiri diam di eskalator bergerak membutuhkan empat puluh lima sekon. Berapa lama jika berjalan di atas eskalator yang bergerak?',
      pembahasan:
        'Gunakan rumus hasil kali dibagi hasil jumlah. Kalikan sembilan puluh dengan empat puluh lima menghasilkan empat ribu lima puluh. Lalu bagi dengan sembilan puluh ditambah empat puluh lima yaitu seratus tiga puluh lima. Empat ribu lima puluh dibagi seratus tiga puluh lima menghasilkan tiga puluh sekon.',
    },
  },
  {
    id: 9,
    type: 'multiple_choice',
    category: 'Kinematika Gerak Lurus',
    originalNumber: 9,
    diagramId: 'lampu-merah-mobil',
    diagramTitle: 'Mobil A (GLBB dari diam) dan Mobil B (GLB konstan)',
    questionText:
      'Mobil A berhenti di belakang lampu merah. Tepat saat lampu berubah hijau, mobil A mulai bergerak dari keadaan diam dengan percepatan tetap 3 m/s². Pada saat yang bersamaan, mobil B melewati mobil A dengan kecepatan tetap 12 m/s searah gerak mobil A. Jarak terjauh yang pernah terbentuk antara kedua mobil sebelum mobil A berhasil menyusul mobil B adalah ....',
    correctOptionId: 'C',
    options: [
      { id: 'A', text: '12 m' },
      { id: 'B', text: '18 m' },
      { id: 'C', text: '24 m' },
      { id: 'D', text: '36 m' },
      { id: 'E', text: '48 m' },
    ],
    variables: { aA: 3, vB: 12 },
    caraLambat: {
      diketahui: [
        'Mobil A bergerak dari diam (v₀A = 0) dengan percepatan tetap a_A = 3 m/s²',
        'Mobil B bergerak lurus beraturan dengan kecepatan tetap v_B = 12 m/s',
        'Keduanya berangkat dari titik awal yang sama pada t = 0',
      ],
      ditanya: 'Jarak terjauh (pemisahan maksimum) antara mobil B dan mobil A.',
      konsep:
        'Jarak terjauh dicapai TEPAT saat kelajuan mobil A menyamai kelajuan mobil B (v_A = v_B). Setelah itu mobil A melaju lebih cepat dan mulai memperkecil jarak hingga menyusul.',
      rumusDasar: [
        'v_A(t) = a_A \\cdot t',
        's_B(t) = v_B \\cdot t',
        's_A(t) = \\frac{1}{2} a_A t^2',
        '\\Delta s(t) = s_B(t) - s_A(t)',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menentukan saat jarak terjauh terjadi',
          detail: 'Jarak maksimum terjadi saat kecepatan sesaat kedua mobil sama:',
          mathFormula: 'v_A = v_B \\implies a_A \\cdot t = 12 \\implies 3t = 12 \\implies t = 4\\text{ s}',
          result: 'Waktu puncak t = 4 sekon',
        },
        {
          title: 'Langkah 2: Menghitung posisi mobil B pada t = 4 s',
          detail: 'Mobil B bergerak GLB:',
          mathFormula: 's_B = 12\\text{ m/s} \\times 4\\text{ s} = 48\\text{ m}',
          result: 's_B = 48 m',
        },
        {
          title: 'Langkah 3: Menghitung posisi mobil A pada t = 4 s',
          detail: 'Mobil A bergerak GLBB dari diam:',
          mathFormula: 's_A = \\frac{1}{2} (3\\text{ m/s}^2)(4\\text{ s})^2 = \\frac{1}{2} \\times 3 \\times 16 = 24\\text{ m}',
          result: 's_A = 24 m',
        },
        {
          title: 'Langkah 4: Menghitung selisih jarak terjauh',
          detail: 'Selisih posisi keduanya:',
          mathFormula: '\\Delta s = s_B - s_A = 48\\text{ m} - 24\\text{ m} = 24\\text{ m}',
          result: 'Δs_maks = 24 m',
        },
      ],
      kesimpulan: 'Jarak terjauh yang pernah terbentuk antara kedua mobil adalah 24 meter.',
    },
    caraCepat: {
      trikNama: 'Rumus Cepat Jarak Pisah Maksimum',
      rumusPraktis: '\\Delta s_{maks} = \\frac{v_B^2}{2 a_A}',
      langkahCepat:
        'Masukkan rumus cepat: v_B² / (2 x a_A) = 12² / (2 x 3) = 144 / 6 = 24 meter.',
      kapanDigunakan: 'Satu benda GLB konstan disusul oleh benda kedua yang GLBB dari diam.',
      jawabanSingkat: 'Δs_maks = 144 / 6 = 24 m.',
    },
    speechScript: {
      soal: 'Soal nomor sembilan. Mobil A mulai bergerak dari diam dengan percepatan tiga meter per sekon kuadrat. Pada saat bersamaan mobil B melintas dengan kelajuan konstan dua belas meter per sekon. Jarak terjauh yang pernah terbentuk antara kedua mobil adalah?',
      pembahasan:
        'Jarak terjauh terjadi saat kelajuan mobil A sama dengan kelajuan mobil B, yaitu dua belas meter per sekon. Ini terjadi pada detik ke empat. Rumus cepatnya adalah kelajuan mobil B kuadrat dibagi dua kali percepatan mobil A. Seratus empat puluh empat dibagi enam menghasilkan dua puluh empat meter.',
    },
  },
  {
    id: 10,
    type: 'multiple_choice',
    category: 'Gerak Parabola',
    originalNumber: 10,
    diagramId: 'gambar-4',
    diagramTitle: 'Gambar 4 — Semburan air dari nosel menuju dinding gedung',
    questionText:
      'Sebuah mobil pemadam kebakaran menyemprotkan air dari nosel yang ketinggiannya diabaikan terhadap tanah. Air keluar dengan kecepatan awal 30 m/s dan membentuk sudut 53° terhadap arah mendatar (sin 53° = 0,8; cos 53° = 0,6; g = 10 m/s²). Jarak mendatar dari nosel ke dinding gedung yang terbakar adalah 36 m. Ketinggian titik pada dinding yang terkena semburan air adalah ....',
    correctOptionId: 'C',
    options: [
      { id: 'A', text: '20,00 m' },
      { id: 'B', text: '24,00 m' },
      { id: 'C', text: '28,00 m' },
      { id: 'D', text: '32,00 m' },
      { id: 'E', text: '36,00 m' },
    ],
    variables: { v0: 30, sinTheta: 0.8, cosTheta: 0.6, xTarget: 36, g: 10 },
    caraLambat: {
      diketahui: [
        'Kecepatan awal air v₀ = 30 m/s',
        'Sudut elevasi θ = 53° (sin 53° = 0,8; cos 53° = 0,6)',
        'Percepatan gravitasi g = 10 m/s²',
        'Jarak mendatar ke dinding gedung x = 36 m',
      ],
      ditanya: 'Ketinggian semburan air (y) saat mengenai dinding gedung.',
      konsep:
        'Gerak parabola: GLB pada sumbu mendatar (X) dan GLBB pada sumbu vertikal (Y).',
      rumusDasar: [
        'v_{0x} = v_0 \\cos\\theta',
        'v_{0y} = v_0 \\sin\\theta',
        't = \\frac{x}{v_{0x}}',
        'y = v_{0y} \\cdot t - \\frac{1}{2} g t^2',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung komponen kecepatan awal',
          detail: 'Uraikan vektor v₀ ke sumbu X dan Y:',
          mathFormula: 'v_{0x} = 30 \\times 0,6 = 18\\text{ m/s}, \\quad v_{0y} = 30 \\times 0,8 = 24\\text{ m/s}',
          result: 'v_0x = 18 m/s, v_0y = 24 m/s',
        },
        {
          title: 'Langkah 2: Menghitung waktu mencapai dinding',
          detail: 'Pada sumbu mendatar:',
          mathFormula: 't = \\frac{x}{v_{0x}} = \\frac{36\\text{ m}}{18\\text{ m/s}} = 2\\text{ s}',
          result: 't = 2 sekon',
        },
        {
          title: 'Langkah 3: Menghitung ketinggian pada dinding (y)',
          detail: 'Substitusikan t = 2 s ke persamaan posisi vertikal:',
          mathFormula: 'y = 24(2) - \\frac{1}{2}(10)(2)^2 = 48 - 20 = 28,00\\text{ m}',
          result: 'y = 28,00 meter',
        },
      ],
      kesimpulan: 'Ketinggian titik pada dinding yang terkena semburan air adalah 28,00 meter.',
    },
    caraCepat: {
      trikNama: 'Rumus Cepat Persamaan Lintasan Parabola',
      rumusPraktis: 't = \\frac{x}{v_0 \\cos\\theta}, \\quad y = v_{0y} t - 5 t^2',
      langkahCepat:
        'Waktu kilat: t = 36 / 18 = 2 s. Ketinggian: y = (24 x 2) - (5 x 4) = 48 - 20 = 28,00 m.',
      kapanDigunakan: 'Menentukan posisi proyektil pada jarak mendatar tertentu.',
      jawabanSingkat: 't = 2 s -> y = 48 - 20 = 28,00 m.',
    },
    speechScript: {
      soal: 'Soal nomor sepuluh. Mobil pemadam kebakaran menyemprotkan air dengan kelajuan awal tiga puluh meter per sekon pada sudut lima puluh tiga derajat. Jarak ke dinding gedung tiga puluh enam meter. Ketinggian titik semburan air pada dinding adalah?',
      pembahasan:
        'Kecepatan mendatar adalah tiga puluh dikali nol koma enam sama dengan delapan belas meter per sekon. Kecepatan vertikal awal adalah tiga puluh dikali nol koma delapan sama dengan dua puluh empat meter per sekon. Waktu mencapai dinding adalah tiga puluh enam dibagi delapan belas sama dengan dua sekon. Ketinggiannya adalah dua puluh empat dikali dua dikurangi lima dikali dua kuadrat, yaitu empat puluh delapan dikurang dua puluh sama dengan dua puluh delapan meter.',
    },
  },
];
