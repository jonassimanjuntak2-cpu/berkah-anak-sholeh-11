import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { ShuffledQuestion, UserAnswer } from '../types/physics';
import { evaluateSession } from '../utils/physicsEngine';
import { soundNarrator } from '../utils/soundAndTTS';
import { ExplanationCard } from './ExplanationCard';
import {
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  Volume2,
  BarChart2,
  Home,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { BatikDivider } from './BatikDecorations';

interface ResultsViewProps {
  questions: ShuffledQuestion[];
  userAnswers: Record<number, UserAnswer>;
  onRestart: () => void;
  onHome: () => void;
  onOpenFormulaModal: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  questions,
  userAnswers,
  onRestart,
  onHome,
  onOpenFormulaModal,
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  const evaluation = evaluateSession(questions, userAnswers);

  const motivationalSpeech = `Alhamdulillah latihan telah selesai. Dari ${evaluation.totalQuestions} soal pilihan ganda, Anda telah mencoba mengerjakan ${evaluation.attempted} soal dan berhasil menjawab benar sebanyak ${evaluation.correctCount} soal, dengan persentase capaian ${evaluation.percentage} persen. Teruslah bersemangat mempelajari konsep dan rumus Fisika. Setiap ikhtiar dan latihan akan membawa pemahaman yang semakin mendalam.`;

  useEffect(() => {
    if (evaluation.percentage >= 60) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [evaluation.percentage]);

  const handlePlayVoice = () => {
    soundNarrator.speak(motivationalSpeech);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Score Summary Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg text-center relative overflow-hidden mb-8">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          Hasil Evaluasi Latihan
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
          BERKAH ANAK SOLEH KELAS XI
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
          Ringkasan capaian pemahaman konsep dan keterampilan berhitung matematis Fisika SMA.
        </p>

        {/* Big Score Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
              Dikerjakan
            </span>
            <div className="text-2xl font-black text-slate-900 font-mono">
              {evaluation.attempted} / {evaluation.totalQuestions}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-[11px] font-semibold text-emerald-700 uppercase block mb-1">
              Jawaban Benar
            </span>
            <div className="text-2xl font-black text-emerald-800 font-mono">
              {evaluation.correctCount}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
            <span className="text-[11px] font-semibold text-rose-700 uppercase block mb-1">
              Jawaban Salah
            </span>
            <div className="text-2xl font-black text-rose-800 font-mono">
              {evaluation.incorrectCount}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-[11px] font-semibold text-amber-800 uppercase block mb-1">
              Persentase
            </span>
            <div className="text-2xl font-black text-amber-900 font-mono">
              {evaluation.percentage}%
            </div>
          </div>
        </div>

        {/* Audio Teacher Feedback Button */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handlePlayVoice}
            className="px-4 py-2 rounded-xl bg-amber-100/70 hover:bg-amber-200/80 text-amber-900 text-xs font-semibold flex items-center gap-2 transition-colors border border-amber-300"
          >
            <Volume2 className="w-4 h-4 text-amber-700" />
            <span>Dengarkan Evaluasi & Motivasi Guru</span>
          </button>

          <button
            onClick={onRestart}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mulai Sesi Acak Baru</span>
          </button>

          <button
            onClick={onHome}
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4 text-slate-500" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>
      </div>

      {/* Category Mastery Breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs mb-8">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-amber-700" />
          <span>Penguasaan Materi per Topik Pembelajaran</span>
        </h3>

        <div className="space-y-3.5">
          {evaluation.categoryBreakdown.map((cat, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">{cat.category}</span>
                <span className="font-mono text-slate-600">
                  {cat.correct} dari {cat.total} benar ({cat.percentage}%)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    cat.percentage >= 75
                      ? 'bg-emerald-600'
                      : cat.percentage >= 50
                      ? 'bg-amber-600'
                      : 'bg-rose-500'
                  }`}
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BatikDivider className="my-8" />

      {/* Question by Question Detailed Review */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <span>Daftar Soal & Kunci Pembahasan Lengkap</span>
          </h3>
          <span className="text-xs text-slate-500">
            Klik soal untuk membuka pembahasan cara cepat dan lambat
          </span>
        </div>

        {questions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns?.selectedLetter === q.newCorrectLetter;
          const isAnswered = Boolean(userAns?.selectedLetter);
          const isExpanded = expandedQuestionId === q.id;

          return (
            <div
              key={q.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs transition-all hover:border-slate-300"
            >
              <div
                onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                className="flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : isAnswered ? (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] mb-1">
                      <span className="font-bold text-slate-800">Soal No. {idx + 1}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{q.category}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-amber-800 font-medium">Ref PDF #{q.originalNumber}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-900 font-medium line-clamp-2">
                      {q.questionText}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <span className="text-slate-600">
                        Jawaban Anda:{' '}
                        <strong className="font-mono text-slate-900">
                          {userAns?.selectedLetter || 'Tidak dijawab'}
                        </strong>
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-emerald-800 font-semibold">
                        Kunci Jawaban:{' '}
                        <strong className="font-mono text-emerald-900">
                          {q.newCorrectLetter}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-1.5 text-slate-400 hover:text-slate-700">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <ExplanationCard question={q} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
