import { QuestionData } from '../types/physics';

export const MC_QUESTIONS_PART_3: QuestionData[] = [
  {
    id: 21,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 21,
    diagramId: 'lift-timbangan',
    diagramTitle: 'Seseorang bermassa 50 kg di atas timbangan badan di lantai lift',
    questionText:
      'Seseorang bermassa 50 kg berdiri di atas timbangan badan yang diletakkan di lantai sebuah lift. Ketika lift sedang bergerak, angka timbangan menunjukkan nilai yang tetap sebesar 650 N. Dengan g = 10 m/s², kesimpulan yang paling tepat adalah ....',
    correctOptionId: 'E',
    options: [
      { id: 'A', text: 'Lift pasti sedang bergerak ke atas dengan kecepatan yang semakin besar.' },
      { id: 'B', text: 'Lift pasti sedang bergerak ke bawah dengan kecepatan yang semakin besar.' },
      { id: 'C', text: 'Lift mengalami percepatan 13 m/s² ke atas karena angka timbangan lebih besar daripada berat orang.' },
      { id: 'D', text: 'Lift sedang bergerak dengan kecepatan tetap ke atas karena angka timbangan tidak berubah.' },
      {
        id: 'E',
        text: 'Lift mengalami percepatan 3 m/s² berarah ke atas; dapat berarti lift bergerak ke atas makin cepat atau bergerak ke bawah makin lambat.',
      },
    ],
    variables: { mass: 50, scaleRead: 650, g: 10 },
    caraLambat: {
      diketahui: [
        'Massa orang m = 50 kg -> berat sebenarnya w = m·g = 50 × 10 = 500 N',
        'Angka yang ditunjukkan timbangan (gaya normal desak lantai) N = 650 N',
        'Nilai timbangan tetap (konstan) selama lift bergerak',
      ],
      ditanya: 'Analisis fisis yang paling tepat mengenai percepatan dan kemungkinan arah gerak lift.',
      konsep:
        'Hukum II Newton pada kerangka inersial: ΣF_y = m·a. Pada orang bekerja dua gaya vertikal: gaya normal timbangan ke atas (N) dan gaya berat gravitasi ke bawah (w). Angka timbangan adalah nilai gaya normal N.',
      rumusDasar: [
        '\\Sigma F_y = m \\cdot a',
        'N - mg = m \\cdot a \\implies a = \\frac{N - mg}{m}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung besar dan arah percepatan lift',
          detail: 'Substitusikan N = 650 N dan w = 500 N:',
          mathFormula: '650\\text{ N} - 500\\text{ N} = 50 \\cdot a \\implies 150 = 50a \\implies a = +3\\text{ m/s}^2',
          result: 'Percepatan bernilai positif (+3 m/s²), yang berarti vektor percepatan berarah KE ATAS.',
        },
        {
          title: 'Langkah 2: Menganalisis kinematika gerak dengan percepatan ke atas',
          detail:
            'Percepatan berarah ke atas (vektor a ke atas) memiliki dua interpretasi fisik yang sah: (1) Lift bergerak ke atas dengan kelajuan bertambah (ke atas makin cepat), atau (2) Lift bergerak ke bawah tetapi sedang direm (ke bawah makin lambat).',
          result: 'Arah gerak lift bisa naik dipercepat ATAU turun diperlambat.',
        },
      ],
      kesimpulan:
        'Lift mengalami percepatan 3 m/s² berarah ke atas; dapat berarti lift bergerak ke atas makin cepat atau bergerak ke bawah makin lambat.',
    },
    caraCepat: {
      trikNama: 'Trik Berat Semu Lift',
      rumusPraktis: 'a = \\frac{N - w}{m} = \\frac{650 - 500}{50} = 3\\text{ m/s}^2 \\text{ (arah ke atas)}',
      langkahCepat:
        'Timbangan membaca 650 N > 500 N -> berat semu bertambah 150 N -> percepatan a = 150 / 50 = 3 m/s² ke atas. Vektor percepatan ke atas berarti: naik makin cepat ATAU turun makin lambat.',
      kapanDigunakan: 'Permasalahan timbangan badan di dalam lift.',
      jawabanSingkat: 'a = 3 m/s² ke atas (naik makin cepat atau turun makin lambat). Opsi E.',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh satu. Seseorang bermassa lima puluh kilogram berdiri di atas timbangan lift yang menunjukkan nilai konstan enam ratus lima puluh Newton. Dengan gravitasi sepuluh meter per sekon kuadrat, kesimpulan yang paling tepat adalah?',
      pembahasan:
        'Berat asli orang tersebut adalah lima puluh dikali sepuluh sama dengan lima ratus Newton. Angka timbangan menunjukkan gaya normal sebesar enam ratus lima puluh Newton. Selisih gaya sebesar seratus lima puluh Newton dibagi massa lima puluh kilogram menghasilkan percepatan tiga meter per sekon kuadrat dengan arah ke atas. Percepatan ke atas berarti lift sedang naik semakin cepat atau turun semakin lambat. Pilihan yang benar adalah E.',
    },
  },
  {
    id: 22,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 22,
    diagramId: 'balok-didorong-diam',
    diagramTitle: 'Peti di atas lantai mendatar didorong gaya mendatar namun belum bergerak',
    questionText:
      'Sebuah peti bermassa 50 kg berada di atas lantai mendatar yang kasar. Koefisien gesek statis antara peti dan lantai adalah 0,6 dan koefisien gesek kinetisnya 0,45. Seorang pekerja mendorong peti tersebut dengan gaya mendatar 180 N, tetapi peti sama sekali tidak berpindah tempat. Besar gaya gesek yang bekerja pada peti saat didorong adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '300 N, yaitu gaya gesek statis maksimum' },
      { id: 'B', text: '180 N, yaitu gaya gesek statis yang besarnya sama dengan gaya dorong' },
      { id: 'C', text: '225 N, yaitu gaya gesek kinetis' },
      { id: 'D', text: '0 N, karena peti belum bergerak' },
      { id: 'E', text: '500 N, yaitu sama dengan gaya berat peti' },
    ],
    variables: { mass: 50, muS: 0.6, muK: 0.45, pushForce: 180 },
    caraLambat: {
      diketahui: [
        'Massa peti m = 50 kg -> gaya normal N = mg = 50 × 10 = 500 N',
        'Koefisien gesek statis μ_s = 0,6',
        'Koefisien gesek kinetis μ_k = 0,45',
        'Gaya dorong mendatar F = 180 N',
        'Kondisi: Peti tetap diam (a = 0, v = 0)',
      ],
      ditanya: 'Besar gaya gesek yang bekerja pada peti saat didorong.',
      konsep:
        'Gaya gesek statis f_s adalah gaya reaksi penyeimbang yang besarnya fleksibel menyesuaikan gaya pendorong (0 ≤ f_s ≤ f_s,maks). Rumus μ_s·N HANYA menghasilkan nilai batas maksimum f_s,maks, bukan nilai gaya gesek statis seketika!',
      rumusDasar: [
        'N = mg = 500\\text{ N}',
        'f_{s,maks} = \\mu_s N',
        '\\Sigma F_x = 0 \\implies F - f_s = 0 \\implies f_s = F',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung gaya gesek statis maksimum (f_s,maks)',
          detail: 'Batas kemampuan gesekan lantai menahan pergeseran:',
          mathFormula: 'f_{s,maks} = \\mu_s N = 0,6 \\times 500\\text{ N} = 300\\text{ N}',
          result: 'f_s,maks = 300 N',
        },
        {
          title: 'Langkah 2: Membandingkan gaya dorong F dengan f_s,maks',
          detail: 'Gaya dorong pekerja F = 180 N:',
          mathFormula: 'F (180\\text{ N}) < f_{s,maks} (300\\text{ N}) \\implies \\text{Peti TETAP DIAM}',
          result: 'Peti tidak bergerak.',
        },
        {
          title: 'Langkah 3: Menerapkan Hukum I Newton pada sumbu horizontal',
          detail: 'Karena peti diam seimbang, resultan gaya mendatar bernilai nol:',
          mathFormula: '\\Sigma F_x = 0 \\implies F - f_s = 0 \\implies f_s = F = 180\\text{ N}',
          result: 'f_s = 180 N',
        },
      ],
      kesimpulan:
        'Besar gaya gesek yang bekerja pada peti saat didorong adalah 180 N, yaitu gaya gesek statis yang mengimbangi gaya dorong tepat.',
    },
    caraCepat: {
      trikNama: 'Aturan Emas Gesekan Statis: f_s = F Dorong',
      rumusPraktis: 'f_s = F \\quad (\\text{selama } F \\le f_{s,maks})',
      langkahCepat:
        'Batas maksimum = 0,6 x 500 = 300 N. Karena didorong 180 N (belum tembus 300 N), peti diam. Benda diam -> gaya gesek persis mengimbangi gaya dorong, yaitu f_s = 180 N.',
      kapanDigunakan: 'Menentukan gaya gesek pada benda yang masih diam ditarik/didorong.',
      jawabanSingkat: 'f_s = 180 N (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh dua. Peti lima puluh kilogram di lantai dengan koefisien gesek statis nol koma enam dan kinetis nol koma empat lima didorong gaya seratus delapan puluh Newton tetapi tidak bergerak. Berapa besar gaya gesek yang bekerja?',
      pembahasan:
        'Gaya gesek statis maksimum lantai adalah nol koma enam dikali lima ratus Newton sama dengan tiga ratus Newton. Karena gaya dorong seratus delapan puluh Newton lebih kecil dari tiga ratus Newton, peti tetap diam seimbang. Berdasarkan Hukum Pertama Newton, gaya gesek yang timbul harus sama besar dengan gaya pendorongnya agar resultan nol, yaitu tepat seratus delapan puluh Newton. Pilihan yang tepat adalah B.',
    },
  },
  {
    id: 23,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 23,
    diagramId: 'gambar-12',
    diagramTitle: 'Gambar 12 — Balok ditarik tali dengan sudut kemiringan terhadap bidang datar',
    questionText:
      'Sebuah balok bermassa m ditarik dengan seutas tali yang tegangannya T membentuk sudut θ terhadap lantai mendatar yang kasar, seperti Gambar 12. Balok bergerak ke kanan dengan kecepatan konstan. Jika koefisien gesek kinetis antara balok dan lantai adalah μ_k dan percepatan gravitasi g, hubungan yang benar antara gaya-gaya yang bekerja pada balok adalah ....',
    correctOptionId: 'E',
    options: [
      { id: 'A', text: 'N = mg dan T cos θ = μ_k mg' },
      { id: 'B', text: 'N = mg + T sin θ dan T cos θ = μ_k N' },
      { id: 'C', text: 'N = mg - T cos θ dan T sin θ = μ_k N' },
      { id: 'D', text: 'N = mg - T sin θ dan T = μ_k mg' },
      { id: 'E', text: 'N = mg - T sin θ dan T cos θ = μ_k (mg - T sin θ)' },
    ],
    variables: {},
    caraLambat: {
      diketahui: [
        'Balok ditarik gaya tali T bersudut θ terhadap horizontal ke kanan-atas',
        'Permukaan lantai kasar dengan koefisien gesek kinetis μ_k',
        'Kondisi: Balok bergerak dengan kecepatan konstan (v = konstan, a = 0)',
      ],
      ditanya: 'Hubungan matematis yang benar antara gaya normal (N), gaya tarik (T), dan gesekan (f_k).',
      konsep:
        'Karena balok bergerak dengan kecepatan tetap, berlaku kesetimbangan translasi Hukum I Newton: ΣF_x = 0 dan ΣF_y = 0. Komponen vertikal tali (T sin θ) mengangkat balok sebagian, mengurangi tekanan normal ke lantai.',
      rumusDasar: [
        '\\Sigma F_y = 0 \\implies N + T \\sin\\theta - mg = 0 \\implies N = mg - T \\sin\\theta',
        '\\Sigma F_x = 0 \\implies T \\cos\\theta - f_k = 0 \\implies T \\cos\\theta = f_k',
        'f_k = \\mu_k N = \\mu_k (mg - T \\sin\\theta)',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Meninjau kesetimbangan gaya vertikal (sumbu Y)',
          detail: 'Gaya ke atas adalah N dan T sin θ, gaya ke bawah adalah berat mg:',
          mathFormula: '\\Sigma F_y = 0 \\implies N + T\\sin\\theta - mg = 0 \\implies N = mg - T\\sin\\theta',
          result: 'N = mg - T sin θ',
        },
        {
          title: 'Langkah 2: Meninjau kesetimbangan gaya horizontal (sumbu X)',
          detail: 'Gaya penggerak ke kanan adalah T cos θ, penahan ke kiri adalah f_k:',
          mathFormula: '\\Sigma F_x = 0 \\implies T\\cos\\theta = f_k',
          result: 'T cos θ = f_k',
        },
        {
          title: 'Langkah 3: Menggabungkan nilai gaya normal ke persamaan gesek',
          detail: 'Substitusi N = mg - T sin θ ke rumus f_k = μ_k·N:',
          mathFormula: 'T\\cos\\theta = \\mu_k (mg - T\\sin\\theta)',
          result: 'T cos θ = μ_k (mg - T sin θ)',
        },
      ],
      kesimpulan: 'Hubungan yang benar adalah N = mg - T sin θ dan T cos θ = μ_k (mg - T sin θ).',
    },
    caraCepat: {
      trikNama: 'Komponen Tali Mengangkat Lantai',
      rumusPraktis: 'N = mg - T\\sin\\theta, \\quad T\\cos\\theta = \\mu_k N',
      langkahCepat:
        'Tali serong ke atas -> mengurangi tekanan normal lantai (N = mg - T sin θ). Kelajuan konstan -> gaya maju sama dengan gaya gesek (T cos θ = μ_k N). Langsung pilih pasangan yang memuat kedua bentuk tersebut.',
      kapanDigunakan: 'Benda ditarik tali miring pada bidang horizontal.',
      jawabanSingkat: 'N = mg - T sin θ dan T cos θ = μ_k(mg - T sin θ). Opsi E.',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh tiga. Balok ditarik tali bertegangan T membentuk sudut teta di atas lantai kasar dan bergerak konstan. Hubungan gaya-gaya yang benar adalah?',
      pembahasan:
        'Tali yang ditarik miring ke atas memiliki komponen vertikal T sinus teta yang membantu mengangkat balok, sehingga gaya normal berkurang menjadi N sama dengan m g dikurang T sinus teta. Karena balok bergerak dengan kecepatan tetap, komponen mendatar T cosinus teta harus seimbang dengan gaya gesek kinetis, yaitu mu k dikali gaya normal. Jadi hubungannya adalah N sama dengan m g dikurang T sinus teta, dan T cosinus teta sama dengan mu k dikali kurung m g dikurang T sinus teta. Jawabannya adalah E.',
    },
  },
  {
    id: 24,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 24,
    diagramId: 'gambar-13',
    diagramTitle: 'Gambar 13 — Balok A diletakkan di atas balok B di atas lantai licin',
    questionText:
      'Balok A bermassa 3 kg diletakkan di atas balok B bermassa 6 kg yang berada di atas lantai mendatar yang licin (gesekan antara balok B dan lantai diabaikan). Koefisien gesek statis antara balok A dan balok B adalah 0,5 dan koefisien gesek kinetisnya 0,35. Gaya mendatar F diberikan pada balok B seperti pada Gambar 13. Dengan g = 10 m/s², besar gaya F maksimum agar balok A tidak tergelincir di atas balok B adalah ....',
    correctOptionId: 'C',
    options: [
      { id: 'A', text: '15 N' },
      { id: 'B', text: '30 N' },
      { id: 'C', text: '45 N' },
      { id: 'D', text: '60 N' },
      { id: 'E', text: '90 N' },
    ],
    variables: { mA: 3, mB: 6, muS: 0.5, muK: 0.35, g: 10 },
    caraLambat: {
      diketahui: [
        'Massa balok atas m_A = 3 kg',
        'Massa balok bawah m_B = 6 kg',
        'Lantai bawah licin sempurna (μ_lantai = 0)',
        'Koefisien gesek statis kontak balok A-B: μ_s = 0,5',
        'Percepatan gravitasi g = 10 m/s²',
      ],
      ditanya: 'Besar gaya dorong F maksimum pada balok B agar balok A ikut bergerak bersama tanpa tergelincir.',
      konsep:
        'Satu-satunya gaya yang mempercepat balok A ke depan adalah gaya gesek statis dari balok B. Percepatan maksimum balok A dibatasi oleh gesek statis maksimum: a_maks = f_s,maks / m_A = μ_s·g. Karena keduanya bergerak bersama, percepatan sistem sama.',
      rumusDasar: [
        'f_{s,maks} = \\mu_s \\cdot m_A \\cdot g',
        'a_{maks} = \\frac{f_{s,maks}}{m_A} = \\mu_s \\cdot g',
        'F_{maks} = (m_A + m_B) \\cdot a_{maks}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung percepatan maksimum balok A sebelum slip',
          detail: 'Gaya normal kontak A-B adalah N_A = m_A·g = 3 × 10 = 30 N:',
          mathFormula: 'f_{s,maks} = \\mu_s N_A = 0,5 \\times 30\\text{ N} = 15\\text{ N}',
          result: 'f_s,maks = 15 N',
        },
        {
          title: 'Langkah 2: Menghitung percepatan maksimum bersama (a_maks)',
          detail: 'Terapkan Hukum II Newton pada balok A:',
          mathFormula: 'a_{maks} = \\frac{f_{s,maks}}{m_A} = \\frac{15\\text{ N}}{3\\text{ kg}} = 5\\text{ m/s}^2',
          result: 'a_maks = 5 m/s²',
        },
        {
          title: 'Langkah 3: Menghitung gaya luar maksimum F_maks pada balok B',
          detail: 'Tinjau kedua balok sebagai satu kesatuan sistem bermassa (m_A + m_B):',
          mathFormula: 'F_{maks} = (m_A + m_B) \\cdot a_{maks} = (3\\text{ kg} + 6\\text{ kg}) \\times 5\\text{ m/s}^2 = 9\\text{ kg} \\times 5\\text{ m/s}^2 = 45\\text{ N}',
          result: 'F_maks = 45 N',
        },
      ],
      kesimpulan: 'Besar gaya F maksimum agar balok A tidak tergelincir di atas balok B adalah 45 N.',
    },
    caraCepat: {
      trikNama: 'Rumus Kilat Balok Tumpuk Lantai Licin',
      rumusPraktis: 'F_{maks} = (m_A + m_B) \\cdot \\mu_s \\cdot g',
      langkahCepat:
        'Percepatan batas a_maks = μ_s x g = 0,5 x 10 = 5 m/s². Kalikan langsung dengan total massa (3 + 6 = 9 kg): F_maks = 9 x 5 = 45 N.',
      kapanDigunakan: 'Balok ditumpuk di lantai licin dan ditarik pada balok bawah.',
      jawabanSingkat: 'F_maks = (3 + 6) x (0,5 x 10) = 45 N (Opsi C).',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh empat. Balok A tiga kilogram di atas balok B enam kilogram pada lantai licin dengan koefisien gesek statis nol koma lima. Berapa gaya dorong mendatar maksimum pada B agar A tidak tergelincir?',
      pembahasan:
        'Percepatan maksimum balok atas tanpa tergelincir adalah koefisien gesek statis dikali gravitasi, yaitu nol koma lima dikali sepuluh sama dengan lima meter per sekon kuadrat. Agar kedua balok bergerak bersama dengan percepatan tersebut, gaya total yang diperlukan adalah massa total sembilan kilogram dikali percepatan lima meter per sekon kuadrat, menghasilkan empat puluh lima Newton. Jawabannya adalah C.',
    },
  },
  {
    id: 25,
    type: 'multiple_choice',
    category: 'Kesetimbangan Benda Tegar',
    originalNumber: 25,
    diagramId: 'gambar-14',
    diagramTitle: 'Gambar 14 — Papan ditumpu di kedua ujungnya dengan seorang anak berdiri di atasnya',
    questionText:
      'Sebuah papan homogen bermassa 20 kg dan panjang 6 m ditumpu di kedua ujungnya, yaitu tumpuan A di ujung kiri dan tumpuan B di ujung kanan. Seorang anak bermassa 60 kg berdiri di atas papan pada jarak 2 m dari tumpuan A. Dengan g = 10 m/s², besar gaya kontak (gaya normal) yang diberikan tumpuan B pada papan adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '200 N' },
      { id: 'B', text: '300 N' },
      { id: 'C', text: '400 N' },
      { id: 'D', text: '500 N' },
      { id: 'E', text: '800 N' },
    ],
    variables: { boardMass: 20, length: 6, childMass: 60, childDistA: 2, g: 10 },
    caraLambat: {
      diketahui: [
        'Panjang papan L = 6 m (tumpuan A di x = 0 m, tumpuan B di x = 6 m)',
        'Massa papan homogen M_p = 20 kg -> berat papan W_p = 20 × 10 = 200 N di titik tengah (x = 3 m dari A)',
        'Massa anak m_a = 60 kg -> berat anak W_a = 60 × 10 = 600 N di x = 2 m dari A',
        'Sistem dalam keadaan setimbang statis tegar',
      ],
      ditanya: 'Besar gaya normal reaksi pada tumpuan B (N_B).',
      konsep:
        'Syarat kesetimbangan benda tegar: Jumlah torsi terhadap sembarang poros harus bernilai nol (Στ = 0). Kita pilih titik A sebagai poros putar agar gaya normal N_A tidak muncul dalam perhitungan.',
      rumusDasar: [
        '\\Sigma \\tau_A = 0',
        '(N_B \\cdot L) - (W_p \\cdot \\frac{L}{2}) - (W_a \\cdot x_a) = 0',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menentukan posisi gaya dan lengan terhadap titik A',
          detail: 'Berat anak 600 N pada lengan 2 m; berat papan 200 N pada lengan 3 m; gaya N_B ke atas pada lengan 6 m:',
          mathFormula: '\\tau_{anak} = -600\\text{ N} \\times 2\\text{ m} = -1.200\\text{ N}\\cdot\\text{m}, \\quad \\tau_{papan} = -200\\text{ N} \\times 3\\text{ m} = -600\\text{ N}\\cdot\\text{m}',
          result: 'Torsi searah jarum jam = 1.800 N·m',
        },
        {
          title: 'Langkah 2: Menyusun persamaan kesetimbangan momen gaya di titik A',
          detail: 'Gaya tumpuan B menghasilkan torsi berlawanan jarum jam:',
          mathFormula: '\\Sigma \\tau_A = (N_B \\times 6) - 1.200 - 600 = 0 \\implies 6 N_B = 1.800\\text{ N}\\cdot\\text{m}',
          result: '6 N_B = 1.800',
        },
        {
          title: 'Langkah 3: Menghitung nilai gaya normal N_B',
          detail: 'Bagi 1.800 dengan lengan 6 m:',
          mathFormula: 'N_B = \\frac{1.800}{6} = 300\\text{ N}',
          result: 'N_B = 300 N',
        },
      ],
      kesimpulan: 'Besar gaya kontak yang diberikan tumpuan B pada papan adalah 300 N.',
    },
    caraCepat: {
      trikNama: 'Trik Pembagian Beban Tuas',
      rumusPraktis: 'N_B = W_p \\left(\\frac{x_p}{L}\\right) + W_a \\left(\\frac{x_a}{L}\\right)',
      langkahCepat:
        'Sumbangan berat papan = 200 x (3/6) = 100 N. Sumbangan berat anak = 600 x (2/6) = 200 N. Total beban yang ditanggung tumpuan B = 100 + 200 = 300 N.',
      kapanDigunakan: 'Jembatan atau papan ditumpu dua tiang di ujung-ujungnya.',
      jawabanSingkat: '100 N + 200 N = 300 N (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh lima. Papan homogen enam meter bermassa dua puluh kilogram ditumpu di kedua ujungnya. Anak bermassa enam puluh kilogram berdiri dua meter dari tumpuan kiri A. Berapa gaya kontak di tumpuan kanan B?',
      pembahasan:
        'Papan menyumbang berat dua ratus Newton di tengah, yaitu tiga meter dari A, menyumbang separuh beban seratus Newton ke tumpuan B. Anak berbobot enam ratus Newton berjarak dua meter dari enam meter total panjang, sehingga menyumbang sepertiga bebannya yaitu dua ratus Newton ke tumpuan B. Jumlah total gaya normal di tumpuan B adalah seratus ditambah dua ratus sama dengan tiga ratus Newton. Jawabannya adalah B.',
    },
  },
  {
    id: 26,
    type: 'multiple_choice',
    category: 'Kesetimbangan Benda Tegar',
    originalNumber: 26,
    diagramId: 'batang-torsi-lima-gaya',
    diagramTitle: 'Batang ringan berporos O dengan lima opsi konfigurasi gaya dan sudut',
    questionText:
      'Sebuah batang ringan dapat berputar bebas terhadap poros tetap di salah satu ujungnya (titik O). Batang tersebut dikenai satu buah gaya pada berbagai konfigurasi besaran, titik tangkap, dan arah sudut terhadap batang seperti disajikan pada pilihan di bawah ini. Konfigurasi yang menghasilkan momen gaya (torsi) paling besar terhadap poros O adalah ....',
    correctOptionId: 'E',
    options: [
      { id: 'A', text: 'Gaya 25 N tegak lurus batang pada jarak 0,20 m dari poros' },
      { id: 'B', text: 'Gaya 40 N membentuk sudut 30° terhadap batang pada jarak 0,35 m dari poros' },
      { id: 'C', text: 'Gaya 20 N membentuk sudut 30° terhadap batang pada jarak 0,50 m dari poros' },
      { id: 'D', text: 'Gaya 12 N tegak lurus batang pada jarak 0,60 m dari poros' },
      { id: 'E', text: 'Gaya 15 N tegak lurus batang pada jarak 0,70 m dari poros' },
    ],
    variables: {},
    caraLambat: {
      diketahui: [
        'Poros putar berada di ujung batang (titik O)',
        'Konfigurasi (a): F = 25 N tegak lurus (90°) pada r = 0,20 m',
        'Konfigurasi (b): F = 40 N sudut 30° pada r = 0,35 m',
        'Konfigurasi (c): F = 20 N sudut 30° pada r = 0,50 m',
        'Konfigurasi (d): F = 12 N tegak lurus (90°) pada r = 0,60 m',
        'Konfigurasi (e): F = 15 N tegak lurus (90°) pada r = 0,70 m',
      ],
      ditanya: 'Konfigurasi gaya yang menghasilkan torsi (τ) terbesar terhadap poros O.',
      konsep:
        'Momen gaya (torsi) didefinisikan sebagai hasil kali gaya, lengan momen, dan sinus sudut antara vektor gaya dengan batang: τ = F · r · sin θ.',
      rumusDasar: [
        '\\tau = F \\cdot r \\cdot \\sin\\theta',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung torsi konfigurasi (A)',
          detail: 'τ_a = 25 N × 0,20 m × sin 90° = 5,00 N·m:',
          mathFormula: '\\tau_a = 5,00\\text{ N}\\cdot\\text{m}',
          result: 'τ_a = 5,0 N·m',
        },
        {
          title: 'Langkah 2: Menghitung torsi konfigurasi (B)',
          detail: 'τ_b = 40 N × 0,35 m × sin 30° = 14 × 0,5 = 7,00 N·m:',
          mathFormula: '\\tau_b = 7,00\\text{ N}\\cdot\\text{m}',
          result: 'τ_b = 7,0 N·m',
        },
        {
          title: 'Langkah 3: Menghitung torsi konfigurasi (C)',
          detail: 'τ_c = 20 N × 0,50 m × sin 30° = 10 × 0,5 = 5,00 N·m:',
          mathFormula: '\\tau_c = 5,00\\text{ N}\\cdot\\text{m}',
          result: 'τ_c = 5,0 N·m',
        },
        {
          title: 'Langkah 4: Menghitung torsi konfigurasi (D)',
          detail: 'τ_d = 12 N × 0,60 m × sin 90° = 7,20 N·m:',
          mathFormula: '\\tau_d = 7,20\\text{ N}\\cdot\\text{m}',
          result: 'τ_d = 7,2 N·m',
        },
        {
          title: 'Langkah 5: Menghitung torsi konfigurasi (E)',
          detail: 'τ_e = 15 N × 0,70 m × sin 90° = 10,50 N·m:',
          mathFormula: '\\tau_e = 10,50\\text{ N}\\cdot\\text{m}',
          result: 'τ_e = 10,5 N·m',
        },
      ],
      kesimpulan: 'Torsi terbesar dihasilkan oleh konfigurasi (E) sebesar 10,50 N·m.',
    },
    caraCepat: {
      trikNama: 'Perbandingan Cepat F x r x sin θ',
      rumusPraktis: '\\tau = F \\cdot r \\cdot \\sin\\theta',
      langkahCepat:
        '(A) 25 x 0,2 = 5. (B) 40 x 0,35 x 0,5 = 7. (C) 20 x 0,5 x 0,5 = 5. (D) 12 x 0,6 = 7,2. (E) 15 x 0,7 = 10,5. Nilai tertinggi jelas 10,5 N·m pada opsi E.',
      kapanDigunakan: 'Memilih momen gaya terbesar dari beberapa pilihan.',
      jawabanSingkat: 'Konfigurasi (E) menghasilkan 10,5 N·m (terbesar).',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh enam. Batang ringan berporos di ujung O diberi lima opsi konfigurasi gaya. Konfigurasi manakah yang menghasilkan momen gaya torsi terbesar?',
      pembahasan:
        'Mari kita kalikan gaya, jarak lengan, dan sinus sudut masing-masing pilihan. Pilihan A menghasilkan lima Newton meter. Pilihan B menghasilkan empat puluh dikali nol koma tiga lima dikali setengah yaitu tujuh Newton meter. Pilihan C menghasilkan lima Newton meter. Pilihan D menghasilkan tujuh koma dua Newton meter. Dan pilihan E menghasilkan lima belas dikali nol koma tujuh yaitu sepuluh koma lima Newton meter. Nilai terbesar adalah sepuluh koma lima Newton meter pada pilihan E.',
    },
  },
  {
    id: 27,
    type: 'multiple_choice',
    category: 'Dinamika Rotasi',
    originalNumber: 27,
    diagramId: 'gambar-15',
    diagramTitle: 'Gambar 15 — Katrol silinder pejal dengan beban yang menggantung',
    questionText:
      'Sebuah katrol berbentuk silinder pejal bermassa M = 4 kg dan berjari-jari R = 0,25 m (momen inersia I = ½MR²) dipasang pada poros tetap yang licin. Seutas tali ringan dililitkan pada tepi katrol dan ujungnya mengikat balok bermassa m = 6 kg seperti Gambar 15. Tali tidak selip terhadap katrol dan g = 10 m/s². Ketika sistem dilepaskan, besar tegangan tali adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '10,0 N' },
      { id: 'B', text: '15,0 N' },
      { id: 'C', text: '20,0 N' },
      { id: 'D', text: '30,0 N' },
      { id: 'E', text: '45,0 N' },
    ],
    variables: { M: 4, R: 0.25, m: 6, g: 10 },
    caraLambat: {
      diketahui: [
        'Massa katrol silinder pejal M = 4 kg',
        'Jari-jari katrol R = 0,25 m',
        'Momen inersia katrol I = ½ M R²',
        'Massa beban gantung m = 6 kg -> berat w = m·g = 6 × 10 = 60 N',
        'Tali tidak selip terhadap katrol (a = α·R)',
        'Percepatan gravitasi g = 10 m/s²',
      ],
      ditanya: 'Besar gaya tegangan tali (T) saat beban bergerak turun.',
      konsep:
        'Gerak gabungan translasi (beban m) dan rotasi (katrol M). Pada beban berlaku: mg - T = m·a. Pada katrol berlaku: τ = T·R = I·α = (½ M R²)(a / R) -> T = ½ M a.',
      rumusDasar: [
        'mg - T = m \\cdot a',
        'T = \\frac{1}{2} M \\cdot a',
        'a = \\frac{mg}{m + \\frac{1}{2}M}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung percepatan sistem (a)',
          detail: 'Substitusikan nilai numerik m = 6 kg dan M = 4 kg:',
          mathFormula: 'a = \\frac{m g}{m + \\frac{1}{2}M} = \\frac{6 \\times 10}{6 + \\frac{1}{2}(4)} = \\frac{60}{6 + 2} = \\frac{60}{8} = 7,5\\text{ m/s}^2',
          result: 'Percepatan linier a = 7,5 m/s²',
        },
        {
          title: 'Langkah 2: Menghitung besar tegangan tali (T)',
          detail: 'Gunakan persamaan torsi katrol:',
          mathFormula: 'T = \\frac{1}{2} M \\cdot a = \\frac{1}{2} (4\\text{ kg}) \\times 7,5\\text{ m/s}^2 = 2 \\times 7,5 = 15,0\\text{ N}',
          result: 'T = 15,0 N',
        },
      ],
      kesimpulan: 'Besar tegangan tali ketika sistem dilepaskan adalah 15,0 N.',
    },
    caraCepat: {
      trikNama: 'Rumus Kilat Tegangan Tali Katrol Pejal',
      rumusPraktis: 'T = \\frac{m \\cdot (\\frac{1}{2}M)}{m + \\frac{1}{2}M} \\cdot g',
      langkahCepat:
        'Inersia katrol silinder pejal setara dengan massa translasi ½M = 2 kg. Beban m = 6 kg. Tegangan tali T = (6 x 2 / 8) x 10 = (12 / 8) x 10 = 1,5 x 10 = 15,0 N.',
      kapanDigunakan: 'Katrol silinder pejal digantungi satu beban tali tunggal.',
      jawabanSingkat: 'T = (6 x 2 / 8) x 10 = 15,0 N (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh tujuh. Katrol silinder pejal empat kilogram dihubungkan tali dengan beban gantung enam kilogram. Berapa besar tegangan tali saat sistem dilepaskan?',
      pembahasan:
        'Katrol silinder pejal menyumbang inersia efektif setengah massanya yaitu dua kilogram. Percepatan gerak adalah berat beban enam puluh Newton dibagi total massa delapan kilogram, menghasilkan tujuh koma lima meter per sekon kuadrat. Tegangan tali yang memutar katrol adalah setengah massa katrol dikali percepatan, yaitu dua dikali tujuh koma lima sama dengan lima belas koma nol Newton. Pilihan yang benar adalah B.',
    },
  },
  {
    id: 28,
    type: 'multiple_choice',
    category: 'Dinamika Rotasi',
    originalNumber: 28,
    diagramId: 'penari-balet-rotasi',
    diagramTitle: 'Penari berputar merapatkan lengan ke tubuh',
    questionText:
      'Seorang penari berputar di tempat dengan kedua lengan terentang. Pada keadaan itu momen inersia tubuhnya terhadap sumbu putar adalah 6 kg·m² dan kelajuan sudutnya 2 rad/s. Ia kemudian menarik kedua lengannya rapat ke tubuh sehingga momen inersianya menjadi 2 kg·m². Gesekan sepatu terhadap lantai diabaikan. Pernyataan yang benar tentang momentum sudut dan energi kinetik rotasi penari setelah menarik lengannya adalah ....',
    correctOptionId: 'B',
    options: [
      {
        id: 'A',
        text: 'Momentum sudut tetap 12 kg·m²/s dan energi kinetik rotasi tetap 12 J karena tidak ada torsi luar yang bekerja.',
      },
      {
        id: 'B',
        text: 'Momentum sudut tetap 12 kg·m²/s, kelajuan sudut naik menjadi 6 rad/s, dan energi kinetik rotasi naik menjadi 36 J karena penari melakukan usaha ketika menarik lengannya.',
      },
      {
        id: 'C',
        text: 'Momentum sudut naik menjadi 36 kg·m²/s dan energi kinetik rotasi tetap 12 J karena kelajuan sudut berbanding terbalik dengan momen inersia.',
      },
      {
        id: 'D',
        text: 'Momentum sudut turun menjadi 4 kg·m²/s dan energi kinetik rotasi naik menjadi 36 J karena momen inersia mengecil.',
      },
      {
        id: 'E',
        text: 'Momentum sudut tetap 12 kg·m²/s dan energi kinetik rotasi turun menjadi 4 J karena momen inersia menjadi sepertiga semula.',
      },
    ],
    variables: { I1: 6, omega1: 2, I2: 2 },
    caraLambat: {
      diketahui: [
        'Momen inersia awal I₁ = 6 kg·m²',
        'Kelajuan sudut awal ω₁ = 2 rad/s',
        'Momen inersia akhir setelah merapatkan lengan I₂ = 2 kg·m²',
        'Torsi luar Στ_eksternal = 0 (lantai licin)',
      ],
      ditanya: 'Besar momentum sudut (L), kelajuan sudut baru (ω₂), dan perubahan energi kinetik rotasi (E_k).',
      konsep:
        'Hukum Kekekalan Momentum Sudut: Jika tidak ada torsi luar, momentum sudut sistem konstan (L₁ = L₂). Energi kinetik rotasi E_k = ½ I ω² = L² / (2I). Karena I mengecil sementara L tetap, E_k bertambah karena penari melakukan usaha otot menarik lengan ke dalam.',
      rumusDasar: [
        'L_1 = I_1 \\cdot \\omega_1',
        'L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2 \\implies \\omega_2 = \\frac{I_1 \\omega_1}{I_2}',
        'E_{k1} = \\frac{1}{2} I_1 \\omega_1^2, \\quad E_{k2} = \\frac{1}{2} I_2 \\omega_2^2',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung momentum sudut awal L₁',
          detail: 'Momentum sudut awal penari:',
          mathFormula: 'L_1 = I_1 \\cdot \\omega_1 = 6\\text{ kg}\\cdot\\text{m}^2 \\times 2\\text{ rad/s} = 12\\text{ kg}\\cdot\\text{m}^2/\\text{s}',
          result: 'L = 12 kg·m²/s (Kekal / Tetap)',
        },
        {
          title: 'Langkah 2: Menghitung kelajuan sudut baru ω₂',
          detail: 'Dari kekekalan momentum sudut I₁ω₁ = I₂ω₂:',
          mathFormula: '\\omega_2 = \\frac{12\\text{ kg}\\cdot\\text{m}^2/\\text{s}}{2\\text{ kg}\\cdot\\text{m}^2} = 6\\text{ rad/s}',
          result: 'ω₂ = 6 rad/s (putaran menjadi lebih cepat)',
        },
        {
          title: 'Langkah 3: Menghitung energi kinetik rotasi sebelum dan sesudah',
          detail: 'Hitung energi kinetik rotasinya:',
          mathFormula: 'E_{k1} = \\frac{1}{2}(6)(2^2) = 12\\text{ J}, \\quad E_{k2} = \\frac{1}{2}(2)(6^2) = 36\\text{ J}',
          result: 'E_k naik dari 12 J menjadi 36 J',
        },
      ],
      kesimpulan:
        'Momentum sudut tetap 12 kg·m²/s, kelajuan sudut naik menjadi 6 rad/s, dan energi kinetik rotasi naik menjadi 36 J karena penari melakukan usaha ketika menarik lengannya.',
    },
    caraCepat: {
      trikNama: 'Trik L Tetap & E_k Berbanding Terbalik dengan I',
      rumusPraktis: 'L = \\text{konstan}, \\quad E_k = \\frac{L^2}{2I}',
      langkahCepat:
        'L = 6 x 2 = 12 kg·m²/s (pasti tetap). I turun 3 kali lipat (dari 6 ke 2), maka ω naik 3 kali lipat (dari 2 ke 6 rad/s). Karena E_k = L² / (2I), saat I turun 3 kali, E_k naik 3 kali lipat dari 12 J menjadi 36 J.',
      kapanDigunakan: 'Penari balet merapatkan tangan, pesenam melipat tubuh.',
      jawabanSingkat: 'L = 12 (tetap), ω = 6 rad/s, Ek = 36 J (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh delapan. Penari balet berputar dengan inersia enam dan kecepatan sudut dua radian per sekon merapatkan tangannya hingga inersia menjadi dua. Bagaimana momentum sudut dan energi kinetik rotasinya?',
      pembahasan:
        'Karena tidak ada torsi luar, momentum sudut penari kekal sebesar enam dikali dua yaitu dua belas kilogram meter kuadrat per sekon. Kecepatan sudut baru naik menjadi dua belas dibagi dua sama dengan enam radian per sekon. Energi kinetik rotasi awalnya adalah setengah dikali enam dikali dua kuadrat yaitu dua belas Joule. Setelah lengan dirapatkan, energi kinetiknya menjadi setengah dikali dua dikali enam kuadrat yaitu tiga puluh enam Joule. Energi kinetik bertambah karena usaha otot penari. Jawabannya adalah B.',
    },
  },
  {
    id: 29,
    type: 'multiple_choice',
    category: 'Dinamika Rotasi',
    originalNumber: 29,
    diagramId: 'gambar-16',
    diagramTitle: 'Gambar 16 — Tiga benda menggelinding menuruni bidang miring yang identik',
    questionText:
      'Tiga benda — bola pejal, silinder pejal, dan cincin tipis — memiliki massa dan jari-jari yang sama. Ketiga benda ditempatkan di puncak tiga bidang miring yang identik dengan ketinggian h yang sama, lalu dilepaskan serentak sehingga menggelinding tanpa tergelincir sampai ke dasar. Urutan benda yang tiba di dasar bidang miring beserta alasan fisis yang tepat adalah ....',
    correctOptionId: 'B',
    options: [
      {
        id: 'A',
        text: 'Cincin, silinder, bola — karena cincin memiliki jari-jari efektif paling besar sehingga paling cepat menggelinding.',
      },
      {
        id: 'B',
        text: 'Bola, silinder, cincin — karena pada bola bagian energi potensial yang berubah menjadi energi kinetik translasi paling besar sehingga percepatannya paling besar.',
      },
      {
        id: 'C',
        text: 'Ketiganya tiba bersamaan — karena percepatan gravitasi sama untuk semua benda dan massa ketiganya sama.',
      },
      {
        id: 'D',
        text: 'Silinder, bola, cincin — karena silinder memiliki bentuk yang paling stabil saat menggelinding.',
      },
      {
        id: 'E',
        text: 'Bola, cincin, silinder — karena cincin lebih ringan daripada silinder pada jari-jari yang sama.',
      },
    ],
    variables: {},
    caraLambat: {
      diketahui: [
        'Massa (m) dan jari-jari (R) ketiga benda sama',
        'Dilepaskan dari ketinggian puncak h yang sama pada bidang miring identik bersudut θ',
        'Momen inersia bola pejal: I = 2/5 m R² (faktor inersia k = 0,4)',
        'Momen inersia silinder pejal: I = 1/2 m R² (faktor inersia k = 0,5)',
        'Momen inersia cincin tipis: I = 1 m R² (faktor inersia k = 1,0)',
        'Ketiga benda menggelinding murni tanpa slip (v = ω·R)',
      ],
      ditanya: 'Urutan tiba di dasar bidang miring dan alasan fisisnya.',
      konsep:
        'Hukum Kekekalan Energi Mekanik pada gerak menggelinding: mgh = ½mv² + ½Iω² = ½mv²(1 + k). Maka percepatan liniernya a = (g sin θ) / (1 + k). Benda dengan konstanta inersia k terkecil akan memiliki percepatan terbesar dan tiba paling awal.',
      rumusDasar: [
        'a = \\frac{g \\sin\\theta}{1 + k}',
        'k_{bola} = 0,4 < k_{silinder} = 0,5 < k_{cincin} = 1,0',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Membandingkan percepatan masing-masing benda',
          detail: 'Percepatan linier berbanding terbalik dengan (1 + k):',
          mathFormula: 'a_{bola} = \\frac{g \\sin\\theta}{1,4} \\approx 0,71 g \\sin\\theta, \\quad a_{silinder} = \\frac{g \\sin\\theta}{1,5} \\approx 0,67 g \\sin\\theta, \\quad a_{cincin} = \\frac{g \\sin\\theta}{2} = 0,50 g \\sin\\theta',
          result: 'a_bola > a_silinder > a_cincin',
        },
        {
          title: 'Langkah 2: Menentukan urutan waktu tempuh tiba di dasar',
          detail: 'Karena jarak lintasan sama dan a_bola paling besar, waktu tempuh t_bola paling singkat.',
          result: 'Urutan tiba: Bola pejal, kemudian Silinder pejal, terakhir Cincin tipis.',
        },
        {
          title: 'Langkah 3: Menganalisis alasan fisis pembagian energi',
          detail: 'Pada bola pejal, fraksi energi yang terserap ke putaran rotasi paling sedikit (hanya 2/7), sehingga fraksi energi kinetik translasi paling besar (5/7), membuatnya meluncur paling kencang.',
          result: 'Energi kinetik translasi bola paling dominan.',
        },
      ],
      kesimpulan:
        'Urutan tiba adalah Bola, silinder, cincin — karena pada bola bagian energi potensial yang berubah menjadi energi kinetik translasi paling besar sehingga percepatannya paling besar.',
    },
    caraCepat: {
      trikNama: 'Trik Semakin Kecil k, Semakin Cepat Tiba',
      rumusPraktis: 'k \\propto \\text{hambatan rotasi} \\implies k\\text{ terkecil selalu juara}',
      langkahCepat:
        'Hafalkan nilai k: Bola pejal (0,4) < Silinder pejal (0,5) < Cincin (1,0). Benda dengan konstanta inersia k paling kecil selalu tercepat mencapai garis akhir.',
      kapanDigunakan: 'Lomba menggelinding benda pejal dan berongga di bidang miring.',
      jawabanSingkat: 'Bola pejal (0,4) -> Silinder pejal (0,5) -> Cincin (1,0). Opsi B.',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh sembilan. Bola pejal, silinder pejal, dan cincin tipis menggelinding bersamaan dari ketinggian yang sama. Manakah urutan benda yang tiba di dasar terlebih dahulu beserta alasan fisisnya?',
      pembahasan:
        'Percepatan gerak menggelinding berbanding terbalik dengan satu ditambah konstanta inersia k. Bola pejal memiliki k nol koma empat, silinder pejal nol koma lima, dan cincin bernilai satu. Semakin kecil nilai k, semakin banyak porsi energi potensial yang dialirkan menjadi energi kinetik gerak translasi. Oleh karena itu, bola pejal memiliki percepatan terbesar dan tiba paling awal, diikuti silinder pejal, dan terakhir cincin tipis. Pilihan yang benar adalah B.',
    },
  },
  {
    id: 30,
    type: 'multiple_choice',
    category: 'Kesetimbangan Benda Tegar',
    originalNumber: 30,
    diagramId: 'gambar-17',
    diagramTitle: 'Gambar 17 — Tampak atas pintu dengan dua gaya dorong yang tegak lurus daun pintu',
    questionText:
      'Sebuah pintu memiliki lebar 0,90 m dengan engsel pada salah satu sisi tepinya. Kakak mendorong daun pintu dengan gaya 24 N yang tegak lurus terhadap pintu tepat di tepi luar sehingga pintu berputar membuka. Adiknya yang lebih kecil hanya mampu memberikan gaya maksimum 18 N. Agar torsi yang dihasilkan adik sama besar dengan torsi yang dihasilkan kakak, hal yang harus dilakukan adik adalah ....',
    correctOptionId: 'D',
    options: [
      {
        id: 'A',
        text: 'Mendorong tegak lurus tepat di tepi luar pintu sehingga torsinya menjadi 16,2 N·m, sama dengan torsi kakak.',
      },
      {
        id: 'B',
        text: 'Mendorong tegak lurus pada jarak 0,67 m dari engsel.',
      },
      {
        id: 'C',
        text: 'Mendorong dengan sudut 30° terhadap daun pintu tepat di tepi luar.',
      },
      {
        id: 'D',
        text: 'Tidak mungkin menyamai torsi kakak, karena lengan gaya yang dibutuhkan sekitar 1,20 m melebihi lebar pintu sehingga torsi maksimum adik hanya 16,2 N·m.',
      },
      {
        id: 'E',
        text: 'Mendorong tepat pada engsel pintu dengan gaya 18 N karena torsi di dekat poros paling besar.',
      },
    ],
    variables: { width: 0.9, forceOlder: 24, forceYounger: 18 },
    caraLambat: {
      diketahui: [
        'Lebar maksimum daun pintu L = 0,90 m (jarak terjauh dari engsel adalah tepi pintu, r_maks = 0,90 m)',
        'Kakak mendorong tegak lurus (sin 90° = 1) di tepi paling luar: F₁ = 24 N, r₁ = 0,90 m',
        'Gaya dorong maksimum adik: F₂ = 18 N',
      ],
      ditanya: 'Posisi atau kelayakan fisis agar torsi adik menyamai torsi kakak (τ₂ = τ₁).',
      konsep:
        'Torsi didefinisikan sebagai τ = F · r · sin θ. Untuk menghasilkan torsi yang sama dengan gaya yang lebih kecil (18 N < 24 N), diperlukan lengan momen r yang lebih panjang. Kita uji apakah lengan momen yang dibutuhkan secara fisik masih berada di dalam bidang daun pintu.',
      rumusDasar: [
        '\\tau_1 = F_1 \\cdot r_1 \\cdot \\sin 90^\\circ',
        '\\tau_2 = F_2 \\cdot r_2 \\cdot \\sin\\theta',
        '\\text{Syarat: } \\tau_2 = \\tau_1',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung torsi yang dihasilkan kakak',
          detail: 'Kakak mendorong di tepi luar 0,90 m tegak lurus:',
          mathFormula: '\\tau_1 = 24\\text{ N} \\times 0,90\\text{ m} = 21,6\\text{ N}\\cdot\\text{m}',
          result: 'Torsi kakak τ₁ = 21,6 N·m',
        },
        {
          title: 'Langkah 2: Menghitung torsi maksimum yang sanggup dicapai adik',
          detail: 'Torsi terbesar adik tercapai jika ia mendorong tegak lurus di titik terjauh (ujung pintu 0,90 m):',
          mathFormula: '\\tau_{2,maks} = 18\\text{ N} \\times 0,90\\text{ m} = 16,2\\text{ N}\\cdot\\text{m}',
          result: 'Torsi maksimum adik hanya 16,2 N·m',
        },
        {
          title: 'Langkah 3: Menghitung jarak lengan yang dibutuhkan untuk mencapai 21,6 N·m',
          detail: 'Jika dipaksakan menyamai 21,6 N·m dengan gaya 18 N:',
          mathFormula: 'r_2 = \\frac{\\tau_1}{F_2} = \\frac{21,6\\text{ N}\\cdot\\text{m}}{18\\text{ N}} = 1,20\\text{ meter}',
          result: 'r₂ = 1,20 meter',
        },
        {
          title: 'Langkah 4: Evaluasi batasan fisik lebar pintu',
          detail: 'Karena lebar daun pintu hanya 0,90 m, jarak 1,20 m berada di udara kosong di luar pintu. Adik tidak mungkin mendorong di titik tersebut.',
          result: 'Tidak mungkin menyamai torsi kakak.',
        },
      ],
      kesimpulan:
        'Tidak mungkin menyamai torsi kakak, karena lengan gaya yang dibutuhkan sekitar 1,20 m melebihi lebar pintu sehingga torsi maksimum adik hanya 16,2 N·m.',
    },
    caraCepat: {
      trikNama: 'Uji Batas Geometris Torsi',
      rumusPraktis: '\\tau_{maks} = F_{maks} \\times L_{pintu} = 18 \\times 0,90 = 16,2\\text{ N}\\cdot\\text{m}',
      langkahCepat:
        'Torsi kakak = 24 x 0,90 = 21,6 N·m. Torsi puncak adik di ujung terjauh hanyalah 18 x 0,90 = 16,2 N·m. Karena 16,2 < 21,6 dan panjang pintu tidak bisa diperpanjang (butuh 1,20 m), adik mustahil menyamai torsi kakak.',
      kapanDigunakan: 'Permasalahan batasan geometris tuas dan torsi.',
      jawabanSingkat: 'Torsi maks adik hanya 16,2 N·m < 21,6 N·m (Opsi D).',
    },
    speechScript: {
      soal: 'Soal nomor tiga puluh. Daun pintu selebar nol koma sembilan puluh meter didorong kakak dengan gaya dua puluh empat Newton di tepi luar. Adik yang hanya mampu mendorong delapan belas Newton ingin menghasilkan torsi yang sama. Apa yang harus dilakukan adik?',
      pembahasan:
        'Torsi kakak adalah dua puluh empat dikali nol koma sembilan meter sama dengan dua puluh satu koma enam Newton meter. Torsi maksimal yang mampu diberikan adik di tepi terluar pintu hanyalah delapan belas dikali nol koma sembilan sama dengan enam belas koma dua Newton meter. Untuk mencapai dua puluh satu koma enam Newton meter, adik membutuhkan lengan gaya satu koma dua puluh meter yang berada di luar daun pintu. Jadi secara fisik adik tidak mungkin menyamai torsi kakak. Pilihan yang tepat adalah D.',
    },
  },
];
