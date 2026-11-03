import React, { useState } from 'react';
import { ShuffledQuestion, UserAnswer } from '../types/physics';
import { StimulusDiagram } from './StimulusDiagram';
import { AudioNarratorBar } from './AudioNarratorBar';
import { ExplanationCard } from './ExplanationCard';
import { ChevronLeft, ChevronRight, CheckCircle2, RotateCcw, Sparkles, BookOpen } from 'lucide-react';

interface EssayViewProps {
  questions: ShuffledQuestion[];
  currentIndex: number;
  userAnswers: Record<number, UserAnswer>;
  onSaveAnswer: (questionId: number, text: string) => void;
  onNavigate: (index: number) => void;
  onFinish: () => void;
  onReshuffle: () => void;
  onOpenFormulaModal: () => void;
}

export const EssayView: React.FC<EssayViewProps> = ({
  questions,
  currentIndex,
  userAnswers,
  onSaveAnswer,
  onNavigate,
  onFinish,
  onReshuffle,
  onOpenFormulaModal,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const currentAnswer = userAnswers[currentQ.id]?.essayAnswer || '';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Top Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Soal Esai Analitis
          </span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs font-medium text-slate-600">
            Nomor {currentIndex + 1} dari {questions.length} (Ref PDF #{currentQ.originalNumber})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onReshuffle}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
            title="Acak ulang urutan soal esai"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Acak Urutan</span>
          </button>

          <button
            onClick={onOpenFormulaModal}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100 flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Buku Rumus</span>
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        {/* Stimulus */}
        {currentQ.diagramId && (
          <StimulusDiagram
            diagramId={currentQ.diagramId}
            title={currentQ.diagramTitle}
            variables={currentQ.variables}
          />
        )}

        {/* Question Text */}
        <div className="mb-6">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1.5">
            Naskah Perintah Soal Uraian
          </div>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed whitespace-pre-line font-normal">
            {currentQ.questionText}
          </p>
        </div>

        {/* Audio Narrator Bar */}
        <AudioNarratorBar
          soalSpeech={currentQ.speechScript.soal}
          pembahasanSpeech={currentQ.speechScript.pembahasan}
          className="mb-6"
        />

        {/* Essay Answer Scratchpad */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
            Lembar Jawaban & Langkah Pengerjaan Anda:
          </label>
          <textarea
            value={currentAnswer}
            onChange={(e) => onSaveAnswer(currentQ.id, e.target.value)}
            rows={6}
            placeholder="Tuliskan besaran yang diketahui, rumus yang Anda pilih, langkah substitusi angka, dan jawaban akhir Anda di sini..."
            className="w-full p-4 text-xs sm:text-sm text-slate-800 border border-slate-200 rounded-xl focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none transition-all resize-y font-sans leading-relaxed bg-slate-50/50"
          />
          <div className="mt-1.5 flex justify-between text-[11px] text-slate-400">
            <span>Gunakan kalkulator saku jika diperlukan.</span>
            <span>{currentAnswer.length} karakter</span>
          </div>
        </div>

        {/* Toggle Solution */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1.5 py-1.5 px-3.5 rounded-lg bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>
              {showExplanation ? 'Sembunyikan Pembahasan Matematis' : 'Buka Pembahasan Lengkap & Cara Cepat'}
            </span>
          </button>
        </div>

        {/* Dual Explanation */}
        {showExplanation && <ExplanationCard question={currentQ} />}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          onClick={() => {
            if (currentIndex > 0) {
              onNavigate(currentIndex - 1);
              setShowExplanation(false);
            }
          }}
          disabled={currentIndex === 0}
          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Nomor Sebelumnya</span>
        </button>

        <div className="flex items-center gap-3">
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => {
                onNavigate(currentIndex + 1);
                setShowExplanation(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Nomor Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onFinish}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Selesai Seluruh Esai</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
