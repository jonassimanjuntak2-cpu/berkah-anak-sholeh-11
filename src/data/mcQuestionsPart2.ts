import { QuestionData } from '../types/physics';

export const MC_QUESTIONS_PART_2: QuestionData[] = [
  {
    id: 11,
    type: 'multiple_choice',
    category: 'Gerak Parabola',
    originalNumber: 11,
    diagramId: 'gambar-5',
    diagramTitle: 'Gambar 5 — Dua bola ditendang dengan kelajuan awal sama dan sudut elevasi berbeda (37° dan 53°)',
    questionText:
      'Dua buah bola identik ditendang dari titik yang sama di lapangan datar. Bola pertama ditendang dengan sudut elevasi 37° dan bola kedua dengan sudut elevasi 53° (sin 37° = 0,6; cos 37° = 0,8). Kelajuan awal kedua bola sama besar dan hambatan udara diabaikan. Pernyataan yang benar mengenai kedua lintasan tersebut adalah ....',
    correctOptionId: 'E',
    options: [
      {
        id: 'A',
        text: 'Bola 37° memiliki jangkauan terjauh karena lintasannya lebih mendatar sehingga lebih lama bergerak mendatar.',
      },
      {
        id: 'B',
        text: 'Bola 53° memiliki jangkauan terjauh karena mencapai ketinggian yang lebih besar.',
      },
      {
        id: 'C',
        text: 'Kedua bola memiliki waktu melayang yang sama karena kelajuan awalnya sama besar.',
      },
      {
        id: 'D',
        text: 'Bola 37° mencapai tinggi maksimum lebih besar karena komponen mendatar kecepatannya lebih besar.',
      },
      {
        id: 'E',
        text: 'Kedua bola memiliki jangkauan mendatar yang sama, tetapi bola 53° melayang lebih lama dan mencapai titik tertinggi yang lebih tinggi.',
      },
    ],
    variables: { theta1: 37, theta2: 53 },
    caraLambat: {
      diketahui: [
        'Dua bola identik dengan kelajuan awal sama: v₀₁ = v₀₂ = v₀',
        'Sudut elevasi bola 1: θ₁ = 37° (sin 37° = 0,6; cos 37° = 0,8)',
        'Sudut elevasi bola 2: θ₂ = 53° (sin 53° = 0,8; cos 53° = 0,6)',
        'Hambatan udara diabaikan, percepatan gravitasi g konstan',
      ],
      ditanya: 'Perbandingan jangkauan mendatar (X), waktu melayang di udara (t), dan ketinggian puncak (H).',
      konsep:
        'Sifat sudut komplementer pada gerak parabola: jika θ₁ + θ₂ = 90° (seperti 37° + 53° = 90°), maka sin(2θ₁) = sin(2θ₂), sehingga jangkauan mendatarnya bernilai tepat SAMA. Namun komponen kecepatan vertikal v₀y = v₀ sin θ menentukan waktu melayang dan tinggi maksimum.',
      rumusDasar: [
        'X = \\frac{v_0^2 \\sin(2\\theta)}{g}',
        't_{udara} = \\frac{2 v_0 \\sin\\theta}{g}',
        'H_{maks} = \\frac{v_0^2 \\sin^2\\theta}{2g}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menganalisis jangkauan mendatar (X)',
          detail: 'Uji nilai sin(2θ) untuk kedua sudut komplementer:',
          mathFormula: '\\sin(2 \\times 37^\\circ) = \\sin 74^\\circ, \\quad \\sin(2 \\times 53^\\circ) = \\sin 106^\\circ = \\sin(180^\\circ - 74^\\circ) = \\sin 74^\\circ',
          result: 'X₁ = X₂ (jangkauan kedua bola persis sama)',
        },
        {
          title: 'Langkah 2: Menganalisis waktu melayang di udara (t_udara)',
          detail: 'Waktu melayang berbanding lurus dengan sin θ:',
          mathFormula: '\\sin 37^\\circ = 0,6, \\quad \\sin 53^\\circ = 0,8',
          result: 't₂ > t₁ (bola 53° melayang lebih lama di udara)',
        },
        {
          title: 'Langkah 3: Menganalisis ketinggian maksimum (H_maks)',
          detail: 'Tinggi maksimum berbanding lurus dengan sin² θ:',
          mathFormula: 'H_1 \\propto (0,6)^2 = 0,36, \\quad H_2 \\propto (0,8)^2 = 0,64',
          result: 'H₂ > H₁ (bola 53° mencapai titik tertinggi yang lebih tinggi)',
        },
      ],
      kesimpulan:
        'Kedua bola memiliki jangkauan mendatar yang sama, tetapi bola 53° melayang lebih lama dan mencapai titik tertinggi yang lebih tinggi.',
    },
    caraCepat: {
      trikNama: 'Teorema Sudut Komplementer Parabola (Jumlah Sudut 90°)',
      rumusPraktis: '\\theta_1 + \\theta_2 = 90^\\circ \\implies X_1 = X_2',
      langkahCepat:
        'Karena 37° + 53° = 90°, jarak jatuh mendatarnya pasti kembar identik! Bola dengan sudut lebih tegak (53°) selalu melambung lebih tinggi dan berada di udara lebih lama.',
      kapanDigunakan: 'Dua proyektil dengan kelajuan awal sama dilempar pada pasangan sudut yang berjumlah 90° (misal 37° & 53°, 30° & 60°).',
      jawabanSingkat: 'Jangkauan sama besar, bola 53° lebih tinggi dan lebih lama di udara (Opsi E).',
    },
    speechScript: {
      soal: 'Soal nomor sebelas. Dua buah bola identik ditendang dengan kelajuan awal sama pada sudut tiga puluh tujuh derajat dan lima puluh tiga derajat. Pernyataan yang benar mengenai lintasan kedua bola adalah?',
      pembahasan:
        'Ingat prinsip sudut komplementer dalam gerak parabola. Karena tiga puluh tujuh derajat ditambah lima puluh tiga derajat sama dengan sembilan puluh derajat, nilai sinus dua teta keduanya sama besar, sehingga jangkauan mendatar kedua bola adalah persis sama. Namun bola dengan sudut lima puluh tiga derajat memiliki komponen vertikal yang lebih besar, sehingga melayang lebih lama di udara dan mencapai ketinggian maksimum yang lebih tinggi. Pilihan yang benar adalah E.',
    },
  },
  {
    id: 12,
    type: 'multiple_choice',
    category: 'Gerak Parabola',
    originalNumber: 12,
    diagramId: 'gambar-6',
    diagramTitle: 'Gambar 6 — Paket bantuan dilepaskan dari pesawat yang terbang mendatar',
    questionText:
      'Sebuah pesawat angkut terbang mendatar dengan kelajuan tetap 60 m/s pada ketinggian 180 m di atas permukaan tanah. Sebuah paket bantuan dilepaskan dari pesawat (bukan dilempar) sehingga bergerak mengikuti lintasan parabola. Hambatan udara diabaikan dan g = 10 m/s². Kelajuan paket dan arah kecepatannya sesaat sebelum menyentuh tanah adalah ....',
    correctOptionId: 'A',
    options: [
      { id: 'A', text: '60√2 m/s dengan arah membentuk sudut 45° di bawah garis mendatar' },
      { id: 'B', text: '60 m/s dengan arah mendatar' },
      { id: 'C', text: '60√2 m/s dengan arah membentuk sudut 60° di bawah garis mendatar' },
      { id: 'D', text: '120 m/s dengan arah membentuk sudut 45° di bawah garis mendatar' },
      { id: 'E', text: '85 m/s dengan arah vertikal ke bawah' },
    ],
    variables: { vx: 60, height: 180, g: 10 },
    caraLambat: {
      diketahui: [
        'Kelajuan horizontal awal pesawat (dan paket) v_x = 60 m/s',
        'Kecepatan awal vertikal paket v₀y = 0 (dilepaskan perlahan)',
        'Ketinggian terbang pesawat h = 180 m',
        'Percepatan gravitasi g = 10 m/s²',
      ],
      ditanya: 'Kelajuan resultan (v) dan arah sudut kemiringan (α) sesaat sebelum paket menyentuh tanah.',
      konsep:
        'Paket mengalami gerak setengah parabola: kecepatan horizontal v_x konstan 60 m/s, sedangkan kecepatan vertikal bertambah dipercepat gravitasi: v_y = √(2gh).',
      rumusDasar: [
        'v_x = 60\\text{ m/s}',
        'v_y = \\sqrt{2gh}',
        'v = \\sqrt{v_x^2 + v_y^2}',
        '\\tan\\alpha = \\frac{v_y}{v_x}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung komponen kecepatan vertikal akhir v_y',
          detail: 'Gunakan persamaan GLBB jatuh bebas dari ketinggian h = 180 m:',
          mathFormula: 'v_y = \\sqrt{2 \\cdot g \\cdot h} = \\sqrt{2 \\times 10 \\times 180} = \\sqrt{3.600} = 60\\text{ m/s}',
          result: 'v_y = 60 m/s (ke arah bawah)',
        },
        {
          title: 'Langkah 2: Menghitung kelajuan total resultan',
          detail: 'Gabungkan v_x dan v_y dengan teorema Pythagoras:',
          mathFormula: 'v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{60^2 + 60^2} = 60\\sqrt{2}\\text{ m/s}',
          result: 'v = 60√2 m/s',
        },
        {
          title: 'Langkah 3: Menentukan arah vektor kecepatan sesaat sebelum mendarat',
          detail: 'Hitung sudut kemiringan terhadap bidang horizontal:',
          mathFormula: '\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{60}{60} = 1 \\implies \\alpha = 45^\\circ',
          result: 'Arah 45° di bawah garis mendatar',
        },
      ],
      kesimpulan: 'Kelajuan paket adalah 60√2 m/s dengan arah membentuk sudut 45° di bawah garis mendatar.',
    },
    caraCepat: {
      trikNama: 'Trik Komponen Kembar Pythagoras (Segitiga 45°)',
      rumusPraktis: 'v_y = \\sqrt{2gh} = \\sqrt{3.600} = 60\\text{ m/s}',
      langkahCepat:
        'Kecepatan horizontal v_x = 60 m/s. Kecepatan jatuh vertikal v_y = √(2 x 10 x 180) = 60 m/s. Karena kedua komponen bernilai sama besar, resultannya langsung 60√2 m/s dan arahnya pasti tepat 45° di bawah garis mendatar.',
      kapanDigunakan: 'Proyektil horizontal dengan v_x dan v_y bernilai identik.',
      jawabanSingkat: 'v = 60√2 m/s, sudut 45° di bawah mendatar (Opsi A).',
    },
    speechScript: {
      soal: 'Soal nomor dua belas. Pesawat terbang mendatar enam puluh meter per sekon pada ketinggian seratus delapan puluh meter melepaskan paket bantuan. Kelajuan paket dan arah kecepatannya sesaat sebelum menyentuh tanah adalah?',
      pembahasan:
        'Kecepatan horizontal paket tetap konstan enam puluh meter per sekon. Kecepatan vertikal saat mendarat adalah akar dari dua dikali gravitasi dikali tinggi, yaitu akar dari dua kali sepuluh kali seratus delapan puluh, menghasilkan akar tiga ribu enam ratus yaitu enam puluh meter per sekon ke bawah. Karena kedua komponen kecepatan sama-sama enam puluh meter per sekon, maka kelajuan total resultannya adalah enam puluh akar dua meter per sekon, dengan sudut kemiringan tepat empat puluh lima derajat di bawah garis mendatar. Jawabannya adalah A.',
    },
  },
  {
    id: 13,
    type: 'multiple_choice',
    category: 'Gerak Parabola',
    originalNumber: 13,
    diagramId: 'persamaan-parabola',
    diagramTitle: 'Kurva lintasan parabola y = 0,8x - (1/50)x²',
    questionText:
      'Sebuah bola ditendang dari permukaan tanah datar sehingga lintasannya memenuhi persamaan y = 0,8x − (1/50)x², dengan x adalah jarak mendatar dan y adalah ketinggian, keduanya dalam satuan meter, diukur dari titik tendang. Berdasarkan persamaan lintasan tersebut, jangkauan mendatar bola dan ketinggian maksimum yang dicapainya berturut-turut adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '30 m dan 6,00 m' },
      { id: 'B', text: '40 m dan 8,00 m' },
      { id: 'C', text: '40 m dan 16,00 m' },
      { id: 'D', text: '50 m dan 10,00 m' },
      { id: 'E', text: '20 m dan 8,00 m' },
    ],
    variables: { b: 0.8, a: 1 / 50 },
    caraLambat: {
      diketahui: [
        'Persamaan lintasan: y(x) = 0,8·x - (1/50)·x²',
        'Bola ditendang dari permukaan tanah (y = 0 pada x = 0)',
        'Satuan x dan y dalam meter',
      ],
      ditanya: 'Jangkauan mendatar terjauh (X) dan ketinggian puncak maksimum (y_maks).',
      konsep:
        'Saat bola kembali menyentuh tanah pada ujung jangkauan, y = 0. Ketinggian maksimum terjadi tepat di tengah lintasan parabola simetris (x_p = X / 2).',
      rumusDasar: [
        'y(x) = 0 \\implies x \\left(0,8 - \\frac{1}{50}x\\right) = 0',
        'x_{puncak} = \\frac{X}{2}',
        'y_{maks} = y(x_{puncak})',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung jangkauan mendatar terjauh (X)',
          detail: 'Saat mendarat kembali ke tanah, y = 0:',
          mathFormula: '0,8x - \\frac{1}{50}x^2 = 0 \\implies x\\left(0,8 - \\frac{x}{50}\\right) = 0',
          result: 'x₁ = 0 (titik awal) atau x₂ = 0,8 × 50 = 40 meter. Jangkauan X = 40 m.',
        },
        {
          title: 'Langkah 2: Menentukan absis titik puncak',
          detail: 'Titik puncak berada tepat di sumbu simetri parabola:',
          mathFormula: 'x_{puncak} = \\frac{X}{2} = \\frac{40\\text{ m}}{2} = 20\\text{ m}',
          result: 'x_puncak = 20 meter',
        },
        {
          title: 'Langkah 3: Menghitung ketinggian maksimum (y_maks)',
          detail: 'Substitusikan x = 20 m ke dalam persamaan parabola:',
          mathFormula: 'y_{maks} = 0,8(20) - \\frac{1}{50}(20)^2 = 16 - \\frac{400}{50} = 16 - 8 = 8,00\\text{ m}',
          result: 'y_maks = 8,00 meter',
        },
      ],
      kesimpulan: 'Jangkauan mendatar bola adalah 40 m dan ketinggian maksimumnya adalah 8,00 m.',
    },
    caraCepat: {
      trikNama: 'Trik Hubungan Geometris Parabola',
      rumusPraktis: 'X = \\frac{b}{a} = \\frac{0,8}{1/50} = 40\\text{ m}, \\quad y_{maks} = \\frac{1}{4} b X',
      langkahCepat:
        'Bentuk y = b·x - a·x². Jangkauan mendatar X = b/a = 0,8 / (1/50) = 40 m. Tinggi maksimum y_maks = ¼ · b · X = ¼ × 0,8 × 40 = 8,00 m.',
      kapanDigunakan: 'Persamaan gerak proyektil kuadrat y = bx - ax².',
      jawabanSingkat: 'X = 40 m dan y_maks = 8,00 m (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor tiga belas. Sebuah bola ditendang memenuhi lintasan y sama dengan nol koma delapan x dikurang satu per lima puluh x kuadrat. Jangkauan mendatar dan ketinggian maksimum bola berturut-turut adalah?',
      pembahasan:
        'Faktorkan persamaannya: x dikali nol koma delapan dikurang x per lima puluh sama dengan nol. Didapatkan jangkauan x sama dengan nol koma delapan dikali lima puluh yaitu empat puluh meter. Titik puncak berada di x sama dengan dua puluh meter. Masukkan nilai dua puluh ke persamaan: nol koma delapan dikali dua puluh dikurang empat ratus per lima puluh, yaitu enam belas dikurang delapan sama dengan delapan meter. Jadi jawabannya empat puluh meter dan delapan koma nol nol meter.',
    },
  },
  {
    id: 14,
    type: 'multiple_choice',
    category: 'Gerak Melingkar',
    originalNumber: 14,
    diagramId: 'gambar-7',
    diagramTitle: 'Gambar 7 — Sistem penggerak sepeda (gir depan, rantai, gir belakang, dan roda)',
    questionText:
      'Sebuah sepeda memiliki gir depan (yang terhubung dengan pedal) berjari-jari 14 cm, gir belakang (yang satu poros dengan roda belakang) berjari-jari 7 cm, dan roda belakang berjari-jari 35 cm. Gir depan dan gir belakang dihubungkan oleh rantai yang tidak selip. Ketika pengemudi mengayuh sehingga gir depan berputar 60 rpm, kelajuan sepeda diukur terhadap tanah adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '2,2 m/s' },
      { id: 'B', text: '4,4 m/s' },
      { id: 'C', text: '6,6 m/s' },
      { id: 'D', text: '8,8 m/s' },
      { id: 'E', text: '13,2 m/s' },
    ],
    variables: { rFront: 14, rRear: 7, rWheel: 35, rpm: 60 },
    caraLambat: {
      diketahui: [
        'Jari-jari gir depan r₁ = 14 cm = 0,14 m',
        'Jari-jari gir belakang r₂ = 7 cm = 0,07 m',
        'Jari-jari roda belakang R = 35 cm = 0,35 m',
        'Frekuensi kayuhan gir depan n₁ = 60 rpm',
      ],
      ditanya: 'Kelajuan linear gerak sepeda terhadap tanah (v_sepeda).',
      konsep:
        'Hubungan roda-roda: Gir depan dan gir belakang dihubungkan rantai -> kecepatan linear tepi sama (v₁ = v₂). Gir belakang dan roda belakang seporos -> kecepatan sudut sama (ω₂ = ω_roda). Kelajuan sepeda sama dengan kecepatan linear tepi roda belakang: v = ω_roda · R.',
      rumusDasar: [
        '\\omega_1 = \\frac{60 \\times 2\\pi}{60} = 2\\pi\\text{ rad/s}',
        '\\omega_2 = \\omega_1 \\left(\\frac{r_1}{r_2}\\right)',
        'v = \\omega_2 \\cdot R',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung kecepatan sudut gir depan ω₁',
          detail: 'Ubah satuan dari rpm ke radian per sekon:',
          mathFormula: '\\omega_1 = 60 \\times \\frac{2\\pi\\text{ rad}}{60\\text{ s}} = 2\\pi\\text{ rad/s}',
          result: 'ω₁ = 2π rad/s (1 putaran per sekon)',
        },
        {
          title: 'Langkah 2: Menghitung kecepatan sudut gir belakang ω₂',
          detail: 'Karena dihubungkan oleh rantai:',
          mathFormula: '\\omega_2 = \\omega_1 \\times \\frac{14\\text{ cm}}{7\\text{ cm}} = 2\\pi \\times 2 = 4\\pi\\text{ rad/s}',
          result: 'ω₂ = 4π rad/s (2 putaran per sekon)',
        },
        {
          title: 'Langkah 3: Menghitung kelajuan linear sepeda',
          detail: 'Roda belakang seporos dengan gir belakang (ω_roda = 4π rad/s). Gunakan nilai pendekatan π = 22/7:',
          mathFormula: 'v = \\omega_{roda} \\cdot R = 4\\pi \\times 0,35\\text{ m} = 1,4\\pi = 1,4 \\times \\frac{22}{7} = 0,2 \\times 22 = 4,4\\text{ m/s}',
          result: 'v = 4,4 m/s',
        },
      ],
      kesimpulan: 'Kelajuan sepeda diukur terhadap tanah adalah 4,4 m/s.',
    },
    caraCepat: {
      trikNama: 'Rasio Gir & Keliling Roda',
      rumusPraktis: 'v = f_1 \\times \\left(\\frac{r_1}{r_2}\\right) \\times 2\\pi R',
      langkahCepat:
        '60 rpm = 1 putaran/detik. Rasio gir = 14 / 7 = 2 putaran/detik untuk roda. Keliling ban sepeda = 2 x (22/7) x 0,35 = 2,2 m. Kelajuan sepeda = 2 putaran/detik x 2,2 m = 4,4 m/s.',
      kapanDigunakan: 'Transmisi roda dan gir sepeda atau sepeda motor.',
      jawabanSingkat: '2 putaran/s x 2,2 m = 4,4 m/s (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor empat belas. Sepeda memiliki gir depan jari-jari empat belas senti, gir belakang tujuh senti, dan roda tiga puluh lima senti. Gir depan berputar enam puluh rpm. Berapakah kelajuan sepeda terhadap tanah?',
      pembahasan:
        'Enam puluh rpm sama dengan satu putaran per sekon. Rasio gir depan terhadap gir belakang adalah empat belas dibagi tujuh sama dengan dua kali. Maka roda berputar dua putaran per sekon. Keliling roda adalah dua dikali dua puluh dua per tujuh dikali nol koma tiga puluh lima meter sama dengan dua koma dua meter. Jadi kelajuan sepeda adalah dua dikali dua koma dua meter sama dengan empat koma empat meter per sekon.',
    },
  },
  {
    id: 15,
    type: 'multiple_choice',
    category: 'Gerak Melingkar',
    originalNumber: 15,
    diagramId: 'mobil-melingkar-putus',
    diagramTitle: 'Mobil mainan bergerak melingkar kemudian tali pengikat putus',
    questionText:
      'Sebuah mobil mainan bermassa 3 kg dikendalikan dari jarak jauh sehingga bergerak melingkar pada lantai datar kasar. Mobil menempuh lintasan berbentuk lingkaran berjari-jari 0,60 m dan bergerak dengan kelajuan konstan 3,0 m/s. Pada suatu saat tali pengikatnya (yang menghubungkan mobil ke tiang di pusat lingkaran) putus. Pernyataan yang benar tentang gerak mobil sesaat setelah tali putus adalah ....',
    correctOptionId: 'D',
    options: [
      {
        id: 'A',
        text: 'Mobil terus bergerak melingkar karena masih memiliki gaya sentripetal yang tersimpan di dalam mobil.',
      },
      {
        id: 'B',
        text: 'Mobil bergerak lurus menuju pusat lingkaran karena gaya sentripetalnya hilang.',
      },
      {
        id: 'C',
        text: 'Mobil bergerak lurus menjauhi pusat lingkaran searah jari-jari karena adanya gaya sentrifugal yang mendorongnya keluar.',
      },
      {
        id: 'D',
        text: 'Mobil bergerak lurus menyinggung lintasan (searah kecepatan sesaat) karena tidak ada lagi resultan gaya yang membelokkannya, sesuai Hukum I Newton.',
      },
      {
        id: 'E',
        text: 'Mobil langsung berhenti karena tidak ada gaya yang menariknya lagi.',
      },
    ],
    variables: { mass: 3, radius: 0.6, speed: 3 },
    caraLambat: {
      diketahui: [
        'Mobil mainan sedang bergerak melingkar beraturan dengan v = 3,0 m/s',
        'Tali memberikan gaya sentripetal F_s yang mengarah ke pusat lingkaran',
        'Tali pengikat tiba-tiba putus',
      ],
      ditanya: 'Analisis fisis arah dan bentuk lintasan gerak mobil sesaat setelah tali putus.',
      konsep:
        'Hukum I Newton (Kelembaman): Suatu benda akan mempertahankan keadaan diam atau gerak lurus beraturannya jika resultan gaya yang bekerja padanya bernilai nol (ΣF = 0). Gaya sentripetal bukanlah gaya yang tersimpan di dalam materi, melainkan gaya luar yang memaksa lintasan berbelok.',
      rumusDasar: [
        '\\vec{v}_{sesaat} = \\text{arah garis singgung lingkaran (tangensial)}',
        '\\Sigma F_{sentripetal} = 0 \\implies \\vec{a}_s = 0',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Mengidentifikasi fungsi tali sebelum putus',
          detail: 'Tegangan tali berfungsi sebagai gaya sentripetal yang membelokkan arah vektor kecepatan mobil menuju pusat lingkaran.',
          result: 'Tegangan tali membelokkan gerak mobil.',
        },
        {
          title: 'Langkah 2: Menganalisis kondisi saat tali putus',
          detail: 'Ketika tali putus, gaya penarik ke pusat lenyap seketika (F_sentripetal = 0).',
          result: 'Tidak ada lagi gaya yang memaksa mobil berbelok.',
        },
        {
          title: 'Langkah 3: Menerapkan Hukum Kelembaman (Inersia)',
          detail: 'Sesuai Hukum I Newton, karena tidak ada lagi gaya sentripetal, mobil akan meluncur lurus menurut vektor kecepatan terakhirnya, yaitu garis singgung lingkaran.',
          result: 'Mobil meluncur lurus menyinggung lingkaran (tangensial).',
        },
      ],
      kesimpulan:
        'Mobil bergerak lurus menyinggung lintasan lingkaran (searah kecepatan sesaat) karena tidak ada lagi resultan gaya sentripetal yang membelokkannya, sesuai Hukum I Newton.',
    },
    caraCepat: {
      trikNama: 'Konsep Inersia Tangensial',
      rumusPraktis: '\\vec{v} \\perp \\vec{r} \\quad (\\text{Arah Tangensial})',
      langkahCepat:
        'Vektor kecepatan gerak melingkar selalu menyinggung lingkaran. Begitu pemaksa belok (tali) putus, benda meluncur lurus searah kecepatannya saat itu (garis singgung). Tidak ada gaya sentrifugal nyata yang mendorong radial keluar.',
      kapanDigunakan: 'Segala fenomena benda terlepas saat bergerak melingkar.',
      jawabanSingkat: 'Bergerak lurus menyinggung lingkaran sesuai Hukum I Newton (Opsi D).',
    },
    speechScript: {
      soal: 'Soal nomor lima belas. Mobil mainan bergerak melingkar diikat tali ke tiang. Ketika tali tiba-tiba putus, pernyataan yang benar tentang gerak mobil sesaat setelah tali putus adalah?',
      pembahasan:
        'Sebelum putus, tegangan tali menyediakan gaya sentripetal yang membelokkan arah mobil. Kecepatan sesaat mobil selalu menyinggung lingkaran. Begitu tali putus, gaya sentripetal lenyap. Berdasarkan Hukum Pertama Newton tentang inersia, mobil mempertahankan arah geraknya dan meluncur lurus menyinggung lingkaran. Jawabannya adalah D.',
    },
  },
  {
    id: 16,
    type: 'multiple_choice',
    category: 'Gerak Melingkar',
    originalNumber: 16,
    tableData: {
      caption: 'Tabel 2 — Kecepatan sudut batu gerinda terhadap waktu',
      headers: ['t (sekon)', '0', '1', '2', '3', '4'],
      rows: [
        ['ω (rpm)', '240', '330', '420', '510', '600'],
      ],
    },
    questionText:
      'Seorang teknisi menguji sebuah batu gerinda berjari-jari 12 cm. Ia mencatat kecepatan sudut batu gerinda setiap sekon sejak mesin dinyalakan; hasilnya disajikan pada Tabel 2. Berdasarkan Tabel 2, banyak putaran yang ditempuh batu gerinda selama 4 sekon pertama adalah ....',
    correctOptionId: 'C',
    options: [
      { id: 'A', text: '14 putaran' },
      { id: 'B', text: '21 putaran' },
      { id: 'C', text: '28 putaran' },
      { id: 'D', text: '35 putaran' },
      { id: 'E', text: '56 putaran' },
    ],
    variables: { r: 12, omega0: 240, omega4: 600, tTotal: 4 },
    caraLambat: {
      diketahui: [
        'Jari-jari batu gerinda r = 12 cm (tidak mempengaruhi jumlah putaran sudut)',
        'Kecepatan sudut awal (t = 0 s): ω₀ = 240 rpm',
        'Kecepatan sudut akhir (t = 4 s): ω_t = 600 rpm',
        'Pola kenaikan konstan: Δω = +90 rpm per detik (GMBB teratur)',
      ],
      ditanya: 'Banyak putaran total (θ dalam putaran) selama 4 sekon pertama.',
      konsep:
        'Pada GMBB dengan percepatan sudut tetap, jumlah putaran sudut dapat dihitung menggunakan kecepatan sudut rata-rata: θ = ω_rata-rata × t.',
      rumusDasar: [
        '\\bar{\\omega} = \\frac{\\omega_0 + \\omega_t}{2}',
        '\\text{Konversi: } 1\\text{ rpm} = \\frac{1}{60}\\text{ putaran/sekon}',
        '\\theta = \\bar{\\omega} \\cdot t',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung kecepatan sudut rata-rata (dalam rpm)',
          detail: 'Rata-rata kecepatan sudut awal dan akhir:',
          mathFormula: '\\bar{\\omega} = \\frac{240\\text{ rpm} + 600\\text{ rpm}}{2} = 420\\text{ rpm}',
          result: 'ω_rata-rata = 420 rpm',
        },
        {
          title: 'Langkah 2: Mengonversi rpm ke satuan putaran per sekon (Hz)',
          detail: 'Satu menit sama dengan 60 sekon:',
          mathFormula: '\\bar{\\omega} = \\frac{420\\text{ putaran}}{60\\text{ sekon}} = 7\\text{ putaran/sekon}',
          result: 'ω_rata-rata = 7 putaran/sekon',
        },
        {
          title: 'Langkah 3: Menghitung banyak putaran selama 4 sekon',
          detail: 'Kalikan dengan selang waktu t = 4 sekon:',
          mathFormula: '\\theta = 7\\text{ putaran/sekon} \\times 4\\text{ sekon} = 28\\text{ putaran}',
          result: 'θ = 28 putaran',
        },
      ],
      kesimpulan: 'Banyak putaran yang ditempuh batu gerinda selama 4 sekon pertama adalah 28 putaran.',
    },
    caraCepat: {
      trikNama: 'Trik Luas Trapesium Putaran (Rata-rata Kecepatan)',
      rumusPraktis: '\\theta = \\left(\\frac{\\omega_0 + \\omega_t}{2 \\times 60}\\right) \\times t',
      langkahCepat:
        'Rata-rata 240 dan 600 adalah 420 rpm. Bagi 60 menjadi 7 putaran/detik. Kalikan 4 detik: 7 x 4 = 28 putaran.',
      kapanDigunakan: 'Menghitung perpindahan sudut pada GMBB dari data rpm.',
      jawabanSingkat: '420 rpm / 60 = 7 putaran/s -> 7 x 4 = 28 putaran (Opsi C).',
    },
    speechScript: {
      soal: 'Soal nomor enam belas. Kecepatan sudut gerinda bertambah beraturan dari dua ratus empat puluh rpm pada detik ke nol hingga enam ratus rpm pada detik ke empat. Berapa banyak putaran yang ditempuh selama empat sekon pertama?',
      pembahasan:
        'Rata-rata kecepatan sudutnya adalah dua ratus empat puluh ditambah enam ratus dibagi dua, yaitu empat ratus dua puluh rpm. Dibagi enam puluh menghasilkan tujuh putaran per sekon. Dalam empat sekon, total putaran yang ditempuh adalah tujuh dikali empat sama dengan dua puluh delapan putaran. Pilihan yang tepat adalah C.',
    },
  },
  {
    id: 17,
    type: 'multiple_choice',
    category: 'Gerak Melingkar',
    originalNumber: 17,
    diagramId: 'gambar-8',
    diagramTitle: 'Gambar 8 — Ember berisi air diputar pada lingkaran vertikal',
    questionText:
      'Seorang anak memutar sebuah ember yang berisi air pada lintasan lingkaran vertikal dengan jari-jari putaran 1,6 m (diukur dari poros putaran ke pusat massa air). Air akan tetap berada di dalam ember selama ember masih menekan air ketika melewati titik tertinggi, yaitu selama gaya normal air tidak menjadi negatif. Dengan g = 10 m/s², kelajuan minimum ember saat melewati titik tertinggi agar air tidak tumpah adalah ....',
    correctOptionId: 'B',
    options: [
      { id: 'A', text: '2,5 m/s' },
      { id: 'B', text: '4,0 m/s' },
      { id: 'C', text: '6,0 m/s' },
      { id: 'D', text: '8,0 m/s' },
      { id: 'E', text: '16,0 m/s' },
    ],
    variables: { radius: 1.6, g: 10 },
    caraLambat: {
      diketahui: [
        'Jari-jari lintasan vertikal R = 1,6 m',
        'Percepatan gravitasi g = 10 m/s²',
        'Syarat batas agar air tidak tumpah di titik tertinggi: gaya normal N ≥ 0',
      ],
      ditanya: 'Kelajuan minimum ember (v_min) di titik tertinggi agar air tidak tumpah.',
      konsep:
        'Di titik tertinggi lingkaran vertikal, gaya gravitasi (berat mg) dan gaya normal dasar ember (N) sama-sama berarah ke bawah menuju pusat lingkaran sebagai gaya sentripetal: ΣF_s = N + mg = m·v² / R.',
      rumusDasar: [
        'N + mg = \\frac{m v^2}{R}',
        '\\text{Kondisi batas: } N = 0 \\implies mg = \\frac{m v_{min}^2}{R}',
        'v_{min} = \\sqrt{g R}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menyusun persamaan gaya di titik tertinggi',
          detail: 'Pada titik teratas, berat air dan desakan ember mengarah ke pusat:',
          mathFormula: '\\Sigma F_r = N + mg = \\frac{m v^2}{R}',
          result: 'N = m (v²/R - g)',
        },
        {
          title: 'Langkah 2: Menetapkan kondisi batas kritis (N = 0)',
          detail: 'Batas minimum terjadi saat gaya kontak dasar ember bernilai nol (N = 0):',
          mathFormula: 'mg = \\frac{m v_{min}^2}{R} \\implies v_{min}^2 = g R',
          result: 'v_min = √(g R)',
        },
        {
          title: 'Langkah 3: Memasukkan nilai numerik',
          detail: 'Substitusikan g = 10 m/s² dan R = 1,6 m:',
          mathFormula: 'v_{min} = \\sqrt{10\\text{ m/s}^2 \\times 1,6\\text{ m}} = \\sqrt{16} = 4,0\\text{ m/s}',
          result: 'v_min = 4,0 m/s',
        },
      ],
      kesimpulan: 'Kelajuan minimum ember saat melewati titik tertinggi agar air tidak tumpah adalah 4,0 m/s.',
    },
    caraCepat: {
      trikNama: 'Rumus Kilat Kelajuan Kritis Lingkaran Vertikal',
      rumusPraktis: 'v_{min} = \\sqrt{g \\cdot R}',
      langkahCepat:
        'Langsung hitung akar dari g dikali R: √(10 x 1,6) = √16 = 4,0 m/s.',
      kapanDigunakan: 'Benda bergerak melingkar vertikal di titik tertinggi tanpa tali kendur atau cairan tumpah.',
      jawabanSingkat: 'v_min = √(10 x 1,6) = 4,0 m/s (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor tujuh belas. Ember berisi air diputar vertikal dengan jari-jari satu koma enam meter. Dengan gravitasi sepuluh meter per sekon kuadrat, kelajuan minimum di titik tertinggi agar air tidak tumpah adalah?',
      pembahasan:
        'Di titik puncak lingkaran vertikal, syarat batas air tidak tumpah adalah kelajuan minimum sama dengan akar dari percepatan gravitasi dikali jari-jari. Kalikan sepuluh dengan satu koma enam menghasilkan enam belas. Akar dari enam belas adalah empat koma nol meter per sekon. Pilihan yang tepat adalah B.',
    },
  },
  {
    id: 18,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 18,
    diagramId: 'bus-kota-penumpang',
    diagramTitle: 'Penumpang bus terdorong ke depan saat bus direm mendadak',
    questionText:
      'Sebuah bus kota melaju dengan kelajuan 50 km/jam di jalan lurus. Tiba-tiba seekor kucing menyeberang sehingga sopir menginjak rem dalam-dalam; bus berhenti dalam waktu singkat dan tubuh para penumpang yang berdiri terdorong ke arah depan. Analisis fisis yang paling tepat untuk menjelaskan peristiwa tersebut adalah ....',
    correctOptionId: 'E',
    options: [
      {
        id: 'A',
        text: 'Penumpang terdorong ke depan karena sandaran kursi memberikan gaya dorong ke arah depan saat bus direm.',
      },
      {
        id: 'B',
        text: 'Peristiwa itu merupakan pasangan aksi–reaksi antara bus dan tubuh penumpang sesuai Hukum III Newton.',
      },
      {
        id: 'C',
        text: 'Penumpang terdorong ke depan karena gaya gesek antara sepatu dan lantai bus lebih besar daripada gaya pengereman bus.',
      },
      {
        id: 'D',
        text: 'Bus mengalami percepatan yang searah dengan arah geraknya sehingga tubuh penumpang tertarik ke depan.',
      },
      {
        id: 'E',
        text: 'Tidak ada gaya mendatar ke depan yang mendorong penumpang; tubuh penumpang cenderung mempertahankan keadaan geraknya (inersia) sesuai Hukum I Newton, sementara bus diperlambat oleh gaya pengereman.',
      },
    ],
    variables: { speedKmh: 50 },
    caraLambat: {
      diketahui: [
        'Bus dan penumpang awalnya bergerak bersama dengan kelajuan 50 km/jam ke arah depan',
        'Bus mengalami gaya rem ke arah belakang (gaya gesek pengereman), sehingga bus diperlambat',
        'Tubuh penumpang bagian atas bebas dan tidak terikat kuat dengan bus',
      ],
      ditanya: 'Analisis konsep fisis penyebab penumpang terdorong ke depan.',
      konsep:
        'Hukum I Newton (Inersia / Kelembaman): Benda yang sedang bergerak cenderung terus bergerak dengan kecepatan konstan pada garis lurus kecuali ada resultan gaya luar yang memaksanya berubah. "Terdorong ke depan" sebenarnya hanyalah kecenderungan tubuh mempertahankan kecepatan 50 km/jam saat lantai bus di bawah kaki berhenti melambat.',
      rumusDasar: [
        '\\Sigma F = 0 \\implies \\vec{v} = \\text{konstan (Hukum I Newton)}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Meninjau kerangka acuan inersial (tanah)',
          detail: 'Awalnya seluruh tubuh penumpang memiliki kecepatan 50 km/jam ke arah depan.',
          result: 'v_awal = 50 km/jam',
        },
        {
          title: 'Langkah 2: Meninjau saat rem bekerja',
          detail: 'Gaya pengereman hanya bekerja langsung pada roda bus dan lantai bus. Tidak ada gaya kontak yang mendorong badan penumpang ke arah depan.',
          result: 'Gaya pengereman memperlambat bus ke belakang.',
        },
        {
          title: 'Langkah 3: Menganalisis kelembaman tubuh penumpang',
          detail: 'Kaki penumpang tertahan gesekan lantai bus, namun badan bagian atas mempertahankan gerak majunya karena inersia, sehingga badan condong ke depan.',
          result: 'Inersia tubuh mempertahankan kecepatan gerak.',
        },
      ],
      kesimpulan:
        'Tidak ada gaya mendatar ke depan yang mendorong penumpang; tubuh penumpang cenderung mempertahankan keadaan geraknya (inersia) sesuai Hukum I Newton, sementara bus diperlambat oleh gaya pengereman.',
    },
    caraCepat: {
      trikNama: 'Konsep Kelembaman Hukum I Newton',
      rumusPraktis: 'Inersia = \\text{Mempertahankan Keadaan Gerak Semula}',
      langkahCepat:
        'Kata kunci: Kendaraan direm mendadak -> penumpang terdorong ke depan karena mempertahankan laju semula (inersia). Ini adalah murni penerapan Hukum I Newton tanpa gaya gaib ke depan.',
      kapanDigunakan: 'Analisis konseptual fenomena kelembaman pada kendaraan.',
      jawabanSingkat: 'Penerapan Hukum I Newton (inersia tubuh). Jawaban E.',
    },
    speechScript: {
      soal: 'Soal nomor delapan belas. Sebuah bus melaju lima puluh kilometer per jam lalu direm mendadak. Mengapa tubuh penumpang yang berdiri terdorong ke arah depan?',
      pembahasan:
        'Secara fisis tidak ada gaya pendorong gaib ke depan. Tubuh penumpang awalnya bergerak lima puluh kilometer per jam. Ketika bus direm, lantai bus melambat, sedangkan tubuh penumpang mempertahankan keadaan gerak majunya karena inersia sesuai Hukum Pertama Newton. Pilihan yang benar adalah E.',
    },
  },
  {
    id: 19,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 19,
    diagramId: 'gambar-9',
    diagramTitle: 'Gambar 9 — Balok di atas bidang miring kasar',
    questionText:
      'Sebuah balok bermassa 8 kg mula-mula diam di atas bidang miring kasar yang membentuk sudut 37° terhadap horizontal (sin 37° = 0,6; cos 37° = 0,8). Koefisien gesek statis antara balok dan bidang adalah 0,45 dan koefisien gesek kinetisnya 0,35. Setelah ditahan sebentar, balok dilepaskan. Dengan g = 10 m/s², pernyataan dan perhitungan yang benar adalah ....',
    correctOptionId: 'B',
    options: [
      {
        id: 'A',
        text: 'Balok tetap diam karena gaya gesek statis maksimum (28,8 N) menahan berat balok.',
      },
      {
        id: 'B',
        text: 'Balok bergerak menuruni bidang dengan percepatan 3,2 m/s² karena komponen berat sejajar bidang (48 N) lebih besar daripada gesek statis maksimum (28,8 N).',
      },
      {
        id: 'C',
        text: 'Balok bergerak menuruni bidang dengan percepatan 2,4 m/s² karena koefisien gesek kinetisnya 0,35.',
      },
      {
        id: 'D',
        text: 'Balok bergerak menuruni bidang dengan percepatan 6,0 m/s² karena bidang dianggap licin.',
      },
      {
        id: 'E',
        text: 'Balok bergerak menaiki bidang dengan percepatan 4,8 m/s² karena gaya normal lebih besar dari berat.',
      },
    ],
    variables: { mass: 8, theta: 37, muS: 0.45, muK: 0.35, g: 10 },
    caraLambat: {
      diketahui: [
        'Massa balok m = 8 kg -> berat w = mg = 8 × 10 = 80 N',
        'Sudut kemiringan θ = 37° (sin 37° = 0,6; cos 37° = 0,8)',
        'Koefisien gesek statis μ_s = 0,45',
        'Koefisien gesek kinetis μ_k = 0,35',
        'Percepatan gravitasi g = 10 m/s²',
      ],
      ditanya: 'Status gerak balok (diam atau bergerak) dan besar percepatannya jika bergerak.',
      konsep:
        'Hitung komponen berat sejajar bidang w_x = mg sin θ dan gaya normal N = mg cos θ. Bandingkan w_x dengan gaya gesek statis maksimum f_s,maks = μ_s·N. Jika w_x > f_s,maks, balok meluncur menuruni bidang dan mengalami gaya gesek kinetis f_k = μ_k·N.',
      rumusDasar: [
        'w_x = mg \\sin\\theta',
        'N = mg \\cos\\theta',
        'f_{s,maks} = \\mu_s N',
        'f_k = \\mu_k N',
        'a = \\frac{w_x - f_k}{m}',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung komponen berat sejajar dan tegak lurus bidang',
          detail: 'Uraikan vektor gaya berat balok:',
          mathFormula: 'w_x = 80 \\times 0,6 = 48\\text{ N}, \\quad N = w_y = 80 \\times 0,8 = 64\\text{ N}',
          result: 'w_x = 48 N, N = 64 N',
        },
        {
          title: 'Langkah 2: Menghitung gaya gesek statis maksimum (f_s,maks)',
          detail: 'Gaya gesek penahan maksimum sebelum tergelincir:',
          mathFormula: 'f_{s,maks} = \\mu_s N = 0,45 \\times 64\\text{ N} = 28,8\\text{ N}',
          result: 'f_s,maks = 28,8 N',
        },
        {
          title: 'Langkah 3: Menentukan status gerak balok',
          detail: 'Bandingkan gaya peluncur w_x dengan gaya tahanan statis f_s,maks:',
          mathFormula: 'w_x (48\\text{ N}) > f_{s,maks} (28,8\\text{ N}) \\implies \\text{Balok MELUNCUR turun!}',
          result: 'Balok bergerak menuruni bidang.',
        },
        {
          title: 'Langkah 4: Menghitung gaya gesek kinetis f_k',
          detail: 'Saat benda bergerak meluncur, gesekan yang aktif adalah kinetis:',
          mathFormula: 'f_k = \\mu_k N = 0,35 \\times 64\\text{ N} = 22,4\\text{ N}',
          result: 'f_k = 22,4 N',
        },
        {
          title: 'Langkah 5: Menghitung percepatan menggunakan Hukum II Newton',
          detail: 'Terapkan ΣF = m·a sepanjang lereng bidang miring:',
          mathFormula: 'a = \\frac{w_x - f_k}{m} = \\frac{48\\text{ N} - 22,4\\text{ N}}{8\\text{ kg}} = \\frac{25,6}{8} = 3,2\\text{ m/s}^2',
          result: 'a = 3,2 m/s²',
        },
      ],
      kesimpulan:
        'Balok bergerak menuruni bidang dengan percepatan 3,2 m/s² karena komponen berat sejajar bidang (48 N) lebih besar daripada gesek statis maksimum (28,8 N).',
    },
    caraCepat: {
      trikNama: 'Uji Gerak Bidang Miring dan Rumus Ringkas a',
      rumusPraktis: 'a = g(\\sin 37^\\circ - \\mu_k \\cos 37^\\circ)',
      langkahCepat:
        'Uji gerak: w_x = 48 N > f_s,maks = 0,45 x 64 = 28,8 N (pasti meluncur!). Percepatannya: a = 10 x (0,6 - 0,35 x 0,8) = 10 x (0,6 - 0,28) = 10 x 0,32 = 3,2 m/s².',
      kapanDigunakan: 'Balok meluncur pada bidang miring kasar.',
      jawabanSingkat: 'Meluncur dengan a = 3,2 m/s² (Opsi B).',
    },
    speechScript: {
      soal: 'Soal nomor sembilan belas. Balok delapan kilogram di bidang miring tiga puluh tujuh derajat dengan koefisien gesek statis nol koma empat lima dan kinetis nol koma tiga lima dilepaskan. Bagaimana keadaan dan percepatan geraknya?',
      pembahasan:
        'Komponen berat peluncur sejajar bidang adalah delapan puluh dikali sinus tiga puluh tujuh derajat yaitu empat puluh delapan Newton. Gaya normalnya adalah enam puluh empat Newton. Gaya gesek statis maksimumnya adalah nol koma empat lima dikali enam puluh empat yaitu dua puluh delapan koma delapan Newton. Karena empat puluh delapan Newton lebih besar dari dua puluh delapan koma delapan Newton, balok pasti bergerak meluncur menuruni bidang. Gaya gesek kinetis saat meluncur adalah nol koma tiga lima dikali enam puluh empat sama dengan dua puluh dua koma empat Newton. Maka percepatannya adalah empat puluh delapan dikurang dua puluh dua koma empat dibagi delapan kilogram, menghasilkan tiga koma dua meter per sekon kuadrat. Jawabannya adalah B.',
    },
  },
  {
    id: 20,
    type: 'multiple_choice',
    category: 'Dinamika Gerak (Hukum Newton)',
    originalNumber: 20,
    diagramId: 'gambar-10',
    diagramTitle: 'Gambar 10 — Sistem balok, tali, dan katrol di atas meja kasar',
    questionText:
      'Balok A bermassa 2 kg terletak di atas meja datar yang permukaannya kasar dengan koefisien gesek kinetis 0,5. Balok A dihubungkan oleh tali ringan tidak mulur yang melewati katrol ideal (massa katrol dan gesekan poros diabaikan) ke balok B bermassa 8 kg yang menggantung bebas, seperti Gambar 10. Sistem dilepaskan dari keadaan diam dan g = 10 m/s². Besar tegangan tali selama sistem bergerak adalah ....',
    correctOptionId: 'C',
    options: [
      { id: 'A', text: '10 N' },
      { id: 'B', text: '18 N' },
      { id: 'C', text: '24 N' },
      { id: 'D', text: '32 N' },
      { id: 'E', text: '80 N' },
    ],
    variables: { mA: 2, mB: 8, muK: 0.5, g: 10 },
    caraLambat: {
      diketahui: [
        'Massa balok A (di meja) m_A = 2 kg',
        'Massa balok B (menggantung) m_B = 8 kg -> berat w_B = m_B·g = 8 × 10 = 80 N',
        'Koefisien gesek kinetis meja μ_k = 0,5',
        'Katrol ideal (tak bermassa dan licin)',
        'Percepatan gravitasi g = 10 m/s²',
      ],
      ditanya: 'Besar tegangan tali (T) selama sistem balok bergerak.',
      konsep:
        'Hukum II Newton pada sistem terhubung: Percepatan gerak a = (Gaya penggerak - Gaya penahan) / Total massa. Tegangan tali dihitung dari salah satu diagram benda bebas balok.',
      rumusDasar: [
        'f_k = \\mu_k \\cdot m_A \\cdot g',
        'a = \\frac{w_B - f_k}{m_A + m_B}',
        'T = w_B - m_B \\cdot a = m_A \\cdot a + f_k',
      ],
      langkahPenyelesaian: [
        {
          title: 'Langkah 1: Menghitung gaya gesek kinetis pada balok A',
          detail: 'Gaya normal balok A adalah N_A = m_A·g = 2 × 10 = 20 N:',
          mathFormula: 'f_k = \\mu_k N_A = 0,5 \\times 20\\text{ N} = 10\\text{ N}',
          result: 'f_k = 10 N',
        },
        {
          title: 'Langkah 2: Menghitung percepatan gerak sistem (a)',
          detail: 'Penggerak adalah beban w_B (80 N), penahan adalah gesekan f_k (10 N):',
          mathFormula: 'a = \\frac{w_B - f_k}{m_A + m_B} = \\frac{80\\text{ N} - 10\\text{ N}}{2\\text{ kg} + 8\\text{ kg}} = \\frac{70}{10} = 7\\text{ m/s}^2',
          result: 'Percepatan a = 7 m/s²',
        },
        {
          title: 'Langkah 3: Menghitung besar tegangan tali (T)',
          detail: 'Tinjau balok B yang bergerak turun ke bawah (w_B - T = m_B·a):',
          mathFormula: 'T = w_B - m_B \\cdot a = 80\\text{ N} - (8\\text{ kg} \\times 7\\text{ m/s}^2) = 80 - 56 = 24\\text{ N}',
          result: 'T = 24 N',
        },
      ],
      kesimpulan: 'Besar tegangan tali selama sistem bergerak adalah 24 N.',
    },
    caraCepat: {
      trikNama: 'Rumus Cepat Tegangan Tali Meja Katrol',
      rumusPraktis: 'T = m_A \\cdot a + f_k',
      langkahCepat:
        'Percepatan kilat: a = (80 - 10) / (2 + 8) = 7 m/s². Tegangan tali pada balok A: T = (2 kg x 7 m/s²) + 10 N = 14 + 10 = 24 N.',
      kapanDigunakan: 'Sistem balok meja horizontal ditarik balok gantung.',
      jawabanSingkat: 'a = 7 m/s² -> T = 2(7) + 10 = 24 N (Opsi C).',
    },
    speechScript: {
      soal: 'Soal nomor dua puluh. Balok A dua kilogram di atas meja kasar koefisien gesek kinetis nol koma lima dihubungkan katrol dengan balok B delapan kilogram yang menggantung. Berapakah besar tegangan tali selama sistem bergerak?',
      pembahasan:
        'Gaya gesek pada balok A adalah nol koma lima dikali dua puluh Newton sama dengan sepuluh Newton. Berat balok B adalah delapan puluh Newton. Percepatan sistem adalah selisih gaya dibagi massa total, yaitu delapan puluh dikurang sepuluh dibagi dua ditambah delapan, menghasilkan tujuh puluh dibagi sepuluh sama dengan tujuh meter per sekon kuadrat. Tinjau balok B: tegangan tali sama dengan delapan puluh dikurang delapan dikali tujuh, yaitu delapan puluh dikurang lima puluh enam menghasilkan dua puluh empat Newton. Pilihan yang benar adalah C.',
    },
  },
];
