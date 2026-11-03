import React, { useState } from 'react';
import { ShuffledQuestion, UserAnswer } from '../types/physics';
import { StimulusDiagram } from './StimulusDiagram';
import { MathView } from './MathView';
import { AudioNarratorBar } from './AudioNarratorBar';
import { ExplanationCard } from './ExplanationCard';
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  RotateCcw,
  Sparkles,
  CheckCircle,
  HelpCircle,
  BookOpen,
} from 'lucide-react';

interface MultipleChoiceViewProps {
  questions: ShuffledQuestion[];
  currentIndex: number;
  userAnswers: Record<number, UserAnswer>;
  onSelectOption: (questionId: number, letter: string) => void;
  onToggleDoubtful: (questionId: number) => void;
  onNavigate: (index: number) => void;
  onFinish: () => void;
  onReshuffle: () => void;
  isExamMode: boolean;
  onOpenFormulaModal: () => void;
}

export const MultipleChoiceView: React.FC<MultipleChoiceViewProps> = ({
  questions,
  currentIndex,
  userAnswers,
  onSelectOption,
  onToggleDoubtful,
  onNavigate,
  onFinish,
  onReshuffle,
  isExamMode,
  onOpenFormulaModal,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showNavGrid, setShowNavGrid] = useState(false);

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const currentAnswer = userAnswers[currentQ.id];
  const selectedLetter = currentAnswer?.selectedLetter;
  const isDoubtful = currentAnswer?.isMarkedDoubtful;
  const isAnswered = Boolean(selectedLetter);

  const totalQuestions = questions.length;
  const answeredCount = Object.values(userAnswers).filter((a) => a.selectedLetter).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Top Session Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              {currentQ.category}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs font-medium text-slate-600">
              Soal {currentIndex + 1} dari {totalQuestions}
            </span>
            {currentQ.isVaried && (
              <span className="text-[10px] text-amber-700 font-semibold bg-amber-100/60 px-2 py-0.5 rounded">
                Variasi Angka
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleDoubtful(currentQ.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
                isDoubtful
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${isDoubtful ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span>{isDoubtful ? 'Ragu-ragu' : 'Tandai Ragu'}</span>
            </button>

            <button
              onClick={onReshuffle}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
              title="Acak ulang nomor soal dan opsi jawaban"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Acak Sesi Baru</span>
            </button>

            <button
              onClick={onOpenFormulaModal}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100/70 flex items-center gap-1.5"
              title="Buka kumpulan rumus Fisika"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Buku Rumus</span>
            </button>

            <button
              onClick={() => setShowNavGrid(!showNavGrid)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              Daftar Soal ({answeredCount}/{totalQuestions})
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-amber-600 h-full transition-all duration-300"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Navigator Grid Drawer (collapsible) */}
      {showNavGrid && (
        <div className="mb-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Navigasi Cepat Soal
            </span>
            <div className="flex items-center gap-4 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900" /> Terjawab
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Ragu-ragu
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" /> Kosong
              </span>
            </div>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
            {questions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const isCurr = idx === currentIndex;
              let bg = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

              if (ans?.isMarkedDoubtful) {
                bg = 'bg-amber-100 border-amber-300 text-amber-900 font-bold';
              } else if (ans?.selectedLetter) {
                bg = 'bg-slate-900 border-slate-900 text-white font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onNavigate(idx);
                    setShowNavGrid(false);
                  }}
                  className={`py-2 rounded-lg text-xs font-medium border transition-all flex flex-col items-center justify-center ${bg} ${
                    isCurr ? 'ring-2 ring-amber-600 ring-offset-2' : ''
                  }`}
                >
                  <span>{idx + 1}</span>
                  {ans?.selectedLetter && (
                    <span className="text-[9px] opacity-80">{ans.selectedLetter}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-xs">
        {/* Stimulus Diagram if available */}
        {currentQ.diagramId && (
          <StimulusDiagram
            diagramId={currentQ.diagramId}
            title={currentQ.diagramTitle}
            variables={currentQ.variables}
          />
        )}

        {/* Table Data if available */}
        {currentQ.tableData && (
          <div className="my-5 overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <caption className="text-xs font-semibold text-slate-700 italic pb-2 text-center">
                {currentQ.tableData.caption}
              </caption>
              <thead className="bg-slate-100/80 text-slate-800">
                <tr>
                  {currentQ.tableData.headers.map((hdr, hIdx) => (
                    <th key={hIdx} className="border border-slate-200 px-3 py-2 text-center font-bold">
                      {hdr}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentQ.tableData.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="border border-slate-200 px-3 py-2 text-center font-mono">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Question Text */}
        <div className="mb-6">
          <div className="text-xs text-slate-400 font-bold uppercase mb-1">
            Soal No. {currentIndex + 1} (PDF Ref #{currentQ.originalNumber})
          </div>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-normal">
            {currentQ.questionText}
          </p>
        </div>

        {/* Audio Narrator Bar */}
        <AudioNarratorBar
          soalSpeech={currentQ.speechScript.soal}
          pembahasanSpeech={currentQ.speechScript.pembahasan}
          className="mb-6"
        />

        {/* Multiple Choice Options */}
        <div className="space-y-3 mb-6">
          {currentQ.shuffledOptions?.map((opt) => {
            const isSelected = selectedLetter === opt.letter;
            return (
              <button
                key={opt.letter}
                onClick={() => onSelectOption(currentQ.id, opt.letter)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3.5 group cursor-pointer ${
                  isSelected
                    ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-800'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}
                >
                  {opt.letter}
                </div>
                <div className="text-xs sm:text-sm font-medium leading-relaxed pt-0.5">
                  {opt.text}
                </div>
              </button>
            );
          })}
        </div>

        {/* Practice Mode: Toggle Explanation */}
        {!isExamMode && (
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-amber-50 hover:bg-amber-100/60 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{showExplanation ? 'Sembunyikan Pembahasan' : 'Lihat Pembahasan Matematis'}</span>
            </button>

            {selectedLetter && (
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                  selectedLetter === currentQ.newCorrectLetter
                    ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                    : 'text-rose-700 bg-rose-50 border border-rose-200'
                }`}
              >
                {selectedLetter === currentQ.newCorrectLetter
                  ? 'Jawaban Anda Tepat!'
                  : `Kunci Benar: ${currentQ.newCorrectLetter}`}
              </span>
            )}
          </div>
        )}

        {/* Dual Explanation Card */}
        {showExplanation && <ExplanationCard question={currentQ} />}
      </div>

      {/* Navigation Buttons */}
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
          <span>Sebelumnya</span>
        </button>

        <div className="flex items-center gap-3">
          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={() => {
                onNavigate(currentIndex + 1);
                setShowExplanation(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onFinish}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Selesai & Evaluasi</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
