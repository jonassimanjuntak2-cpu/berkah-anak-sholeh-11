import React from 'react';
import { Play, Sparkles, BookOpen, Layers, CheckCircle, Volume2, ShieldCheck } from 'lucide-react';
import { BatikKawungPattern, BatikDivider, BatikCornerOrnament } from './BatikDecorations';
import { soundNarrator } from '../utils/soundAndTTS';

interface WelcomeScreenProps {
  onStartExam: (mode: 'practice_mc' | 'exam_all' | 'essay_only') => void;
  onOpenFormulaModal: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartExam,
  onOpenFormulaModal,
}) => {
  const welcomeSpeech =
    'Selamat datang di BERKAH ANAK SOLEH KELAS XI. Mari belajar Fisika dengan penuh semangat. Pahami konsepnya secara mendalam, teliti dalam menghitung, dan jangan takut mencoba. Seluruh data numerik pada latihan ini telah diperbarui agar Anda dapat melatih pemahaman konsep murni tanpa bergantung pada hafalan angka. Silakan pilih latihan pilihan ganda atau esai untuk memulai.';

  const handlePlayGreeting = () => {
    soundNarrator.speak(welcomeSpeech);
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between py-6">
      <BatikKawungPattern className="absolute inset-0 -z-10" opacity={0.035} />

      {/* Hero Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Banner Card */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-900/10 bg-white shadow-xl">
          <BatikCornerOrnament position="top-left" />
          <BatikCornerOrnament position="top-right" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Content (7 cols) */}
            <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                  Fisika SMA Kelas XI
                </span>
                <span className="text-xs text-slate-400 font-medium">·</span>
                <span className="text-xs text-slate-500 font-medium">Semester Ganjil</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
                BERKAH ANAK SOLEH KELAS XI
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium mb-4 leading-relaxed">
                Platform Latihan dan Pemahaman Fisika Interaktif
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Dilengkapi sistem pengacakan soal dan opsi jawaban yang dinamis, audio narator suara Bahasa Indonesia ramah guru Fisika, diagram stimulus terstandar, serta pembahasan matematis dua metode: <strong className="text-slate-900">Cara Lambat Lengkap</strong> dan <strong className="text-amber-800">Cara Cepat Trik Praktis</strong>.
              </p>

              {/* Narrator Greeting Button */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={handlePlayGreeting}
                  className="px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-900 font-semibold text-xs flex items-center gap-2 transition-all shadow-2xs"
                >
                  <Volume2 className="w-4 h-4 text-amber-700" />
                  <span>Dengarkan Sambutan Guru Fisika</span>
                </button>

                <button
                  onClick={onOpenFormulaModal}
                  className="px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-2 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-blue-700" />
                  <span>Kumpulan Rumus Fisika</span>
                </button>
              </div>

              {/* Anti-Leak Badge */}
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                    <span>Bank Soal Baru & Anti-Bocor</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-200/70 text-emerald-900 font-extrabold uppercase">
                      Aktif
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-800 mt-0.5 leading-relaxed">
                    Seluruh perhitungan numerik telah dirombak dengan angka baru yang proporsional dan konsisten secara Fisika. Konteks cerita, stimulus diagram, dan metode penyelesaian tetap 100% setia pada naskah kurikulum.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media (5 cols) */}
            <div className="relative lg:col-span-5 min-h-[260px] lg:min-h-full bg-slate-100 flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
              <img
                src="/src/assets/images/hero_physics_batik_1793688520069.jpg"
                alt="Laboratorium Fisika Berkah Anak Soleh Kelas XI"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  Laboratorium Fisika Interaktif
                </span>
                <span className="text-slate-200 text-[11px]">
                  30 Soal Pilihan Ganda + 5 Soal Esai Analitis
                </span>
              </div>
            </div>
          </div>
        </div>

        <BatikDivider className="my-10" />

        {/* Practice Mode Selection Section */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Pilih Mode Belajar & Latihan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Setiap sesi latihan menggunakan sistem pengacakan urutan soal dan posisi opsi jawaban otomatis dengan kunci yang selalu tervalidasi secara matematis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Pilihan Ganda */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Latihan Pilihan Ganda (30 Soal)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Kerjakan 30 soal pilihan ganda dengan acakan urutan nomor dan acakan opsi A-B-C-D-E. Pembahasan cara lambat dan cepat langsung tersedia per soal.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500 mb-6">
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Vektor</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Kinematika</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Parabola</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Dinamika</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded">Rotasi</span>
                </div>
              </div>

              <button
                onClick={() => onStartExam('practice_mc')}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Mulai Pilihan Ganda</span>
              </button>
            </div>

            {/* Card 2: Esai & Uraian */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Latihan Soal Esai (5 Soal)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Asah penalaran matematis mendalam untuk 5 soal uraian kompleks (penyeberangan kapal, pengereman mobil, tikungan datar, katrol bidang miring, silinder menggelinding).
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500 mb-6">
                  <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded">Diagram Vektor</span>
                  <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded">Uraian Newton</span>
                  <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded">Kekekalan Energi</span>
                </div>
              </div>

              <button
                onClick={() => onStartExam('essay_only')}
                className="w-full py-2.5 px-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Mulai Soal Esai</span>
              </button>
            </div>

            {/* Card 3: Simulasi Ujian Mandiri */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Simulasi Ujian Mandiri
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Uji kesiapan pemahaman Fisika Anda dengan pengerjaan terintegrasi. Pembahasan dan skor evaluasi komprehensif akan ditampilkan di akhir simulasi.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500 mb-6">
                  <span className="bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded">Evaluasi Nilai</span>
                  <span className="bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded">Analisis Topik</span>
                  <span className="bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded">Umpan Balik</span>
                </div>
              </div>

              <button
                onClick={() => onStartExam('exam_all')}
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Mulai Simulasi Ujian</span>
              </button>
            </div>
          </div>
        </div>

        {/* Learning Topic Distribution */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Cakupan Materi Pembelajaran Fisika Kelas XI</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {[
              { title: 'Vektor', count: '4 Soal' },
              { title: 'Kinematika Lurus', count: '5 Soal' },
              { title: 'Gerak Parabola', count: '4 Soal' },
              { title: 'Gerak Melingkar', count: '4 Soal' },
              { title: 'Hukum Newton', count: '8 Soal' },
              { title: 'Kesetimbangan', count: '4 Soal' },
              { title: 'Dinamika Rotasi', count: '6 Soal' },
            ].map((topic, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-semibold text-slate-800">{topic.title}</div>
                <div className="text-[11px] text-amber-800 font-bold mt-1">{topic.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
