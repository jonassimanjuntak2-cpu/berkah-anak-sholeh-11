import React, { useState } from 'react';
import { ShuffledQuestion } from '../types/physics';
import { MathView } from './MathView';
import { Sparkles, Clock, CheckCircle2, Lightbulb, Compass, FileText } from 'lucide-react';

interface ExplanationCardProps {
  question: ShuffledQuestion;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({ question }) => {
  const [activeTab, setActiveTab] = useState<'lambat' | 'cepat'>('lambat');

  const { caraLambat, caraCepat } = question;

  return (
    <div className="mt-6 border border-slate-200 rounded-2xl bg-white shadow-xs overflow-hidden">
      {/* Tab Switcher */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/70 p-2 sm:px-4">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('lambat')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'lambat'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-blue-700" />
            <span>Cara Lambat (Lengkap)</span>
          </button>

          <button
            onClick={() => setActiveTab('cepat')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'cepat'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-800 hover:text-amber-900 hover:bg-amber-100/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>Cara Cepat (Trik Praktis)</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-500 hidden sm:block">
          Dua Metode Pembahasan Fisika
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {activeTab === 'lambat' ? (
          <div className="space-y-5 text-sm">
            {/* Diketahui & Ditanya */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>1. Diketahui</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700">
                  {caraLambat.diketahui.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-500 select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  <Compass className="w-3.5 h-3.5 text-rose-600" />
                  <span>2. Ditanyakan</span>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  {caraLambat.ditanya}
                </p>
              </div>
            </div>

            {/* Konsep Fisika */}
            <div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>3. Konsep & Prinsip Fisika</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed bg-amber-50/40 p-3 rounded-lg border border-amber-100">
                {caraLambat.konsep}
              </p>
            </div>

            {/* Rumus Dasar */}
            {caraLambat.rumusDasar.length > 0 && (
              <div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                  4. Rumus Dasar yang Digunakan
                </div>
                <div className="flex flex-wrap gap-2">
                  {caraLambat.rumusDasar.map((rumus, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-50/60 border border-blue-200/60 px-3 py-1.5 rounded-lg text-slate-900 text-xs font-serif"
                    >
                      <MathView math={rumus} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Langkah Perhitungan Bertahap */}
            <div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
                5. Langkah Perhitungan dan Substitusi Bertahap
              </div>
              <div className="space-y-3">
                {caraLambat.langkahPenyelesaian.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 transition-colors"
                  >
                    <div className="text-xs font-semibold text-slate-900 mb-1">
                      {step.title}
                    </div>
                    <p className="text-xs text-slate-600 mb-2 leading-relaxed">{step.detail}</p>
                    {step.mathFormula && (
                      <div className="bg-slate-50/90 p-2.5 rounded-lg border border-slate-200/70 overflow-x-auto text-xs font-serif text-slate-950">
                        <MathView math={step.mathFormula} block />
                      </div>
                    )}
                    {step.result && (
                      <div className="mt-2 text-xs font-semibold text-blue-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Hasil tahap: {step.result}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Kesimpulan */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>6. Kesimpulan & Jawaban Akhir</span>
              </div>
              <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                {caraLambat.kesimpulan}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-sm">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded-md bg-amber-600 text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-amber-950">
                  {caraCepat.trikNama}
                </h4>
              </div>

              <div className="mt-3 bg-white p-3 rounded-lg border border-amber-200/80">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  Rumus Praktis Kilat
                </span>
                <div className="text-sm font-semibold text-amber-900 font-serif">
                  <MathView math={caraCepat.rumusPraktis} block />
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-1">
                Langkah Cepat Substitusi
              </span>
              <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {caraCepat.langkahCepat}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                  Kapan Trik Ini Berlaku?
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {caraCepat.kapanDigunakan}
                </p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-[11px] font-bold text-emerald-800 uppercase block mb-1">
                  Hasil Akhir Cepat
                </span>
                <p className="text-xs font-semibold text-emerald-950 leading-relaxed">
                  {caraCepat.jawabanSingkat}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
