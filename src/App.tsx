/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ALL_MC_QUESTIONS, ALL_ESSAY_QUESTIONS } from './data/allQuestions';
import { prepareShuffledSession } from './utils/physicsEngine';
import { ShuffledQuestion, UserAnswer } from './types/physics';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MultipleChoiceView } from './components/MultipleChoiceView';
import { EssayView } from './components/EssayView';
import { ResultsView } from './components/ResultsView';
import { FormulaSheetModal } from './components/FormulaSheetModal';
import { BookOpen, RotateCcw, Sparkles } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'mc' | 'essay' | 'results'>('welcome');
  const [isExamMode, setIsExamMode] = useState(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);

  // Active questions in session (shuffled)
  const [shuffledMc, setShuffledMc] = useState<ShuffledQuestion[]>([]);
  const [shuffledEssay, setShuffledEssay] = useState<ShuffledQuestion[]>([]);

  // Current question indexes
  const [currentMcIndex, setCurrentMcIndex] = useState(0);
  const [currentEssayIndex, setCurrentEssayIndex] = useState(0);

  // User answers map: questionId -> UserAnswer
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});

  // Initialize or re-shuffle session with new anti-leak numbers
  const initializeSession = useCallback(() => {
    const prepared = prepareShuffledSession(ALL_MC_QUESTIONS, ALL_ESSAY_QUESTIONS);
    setShuffledMc(prepared.shuffledMc);
    setShuffledEssay(prepared.shuffledEssay);
    setCurrentMcIndex(0);
    setCurrentEssayIndex(0);
    setUserAnswers({});
  }, []);

  useEffect(() => {
    initializeSession();

    // Support autostart query param for ultra-mode verification
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        setCurrentScreen('mc');
      }
    }
  }, [initializeSession]);

  const handleStartExam = (mode: 'practice_mc' | 'exam_all' | 'essay_only') => {
    if (mode === 'essay_only') {
      setCurrentScreen('essay');
      setCurrentEssayIndex(0);
    } else {
      setIsExamMode(mode === 'exam_all');
      setCurrentScreen('mc');
      setCurrentMcIndex(0);
    }
  };

  const handleSelectOption = (questionId: number, letter: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        questionId,
        selectedLetter: letter,
      },
    }));
  };

  const handleToggleDoubtful = (questionId: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        questionId,
        isMarkedDoubtful: !prev[questionId]?.isMarkedDoubtful,
      },
    }));
  };

  const handleSaveEssayAnswer = (questionId: number, text: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        questionId,
        essayAnswer: text,
      },
    }));
  };

  const handleReshuffleSession = () => {
    initializeSession();
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand & Identity */}
          <div
            onClick={() => setCurrentScreen('welcome')}
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 leading-tight">
                BERKAH ANAK SOLEH
              </div>
              <div className="text-[10px] text-amber-800 font-bold uppercase tracking-wider">
                Fisika Kelas XI SMA
              </div>
            </div>
          </div>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setCurrentScreen('welcome')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentScreen === 'welcome' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-1' : ''
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => {
                setCurrentScreen('mc');
                setCurrentMcIndex(0);
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentScreen === 'mc' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-1' : ''
              }`}
            >
              Pilihan Ganda
            </button>
            <button
              onClick={() => {
                setCurrentScreen('essay');
                setCurrentEssayIndex(0);
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentScreen === 'essay' ? 'text-slate-900 font-bold border-b-2 border-slate-900 pb-1' : ''
              }`}
            >
              Soal Esai
            </button>
            <button
              onClick={() => setIsFormulaModalOpen(true)}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              <span>Buku Rumus</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {currentScreen === 'welcome' ? (
              <button
                onClick={() => handleStartExam('practice_mc')}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-2xs cursor-pointer"
              >
                Mulai Belajar
              </button>
            ) : (
              <button
                onClick={handleReshuffleSession}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
                title="Acak nomor soal dan posisi opsi jawaban baru"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Acak Sesi</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main View Router */}
      <main className="flex-1">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStartExam={handleStartExam}
            onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
          />
        )}

        {currentScreen === 'mc' && shuffledMc.length > 0 && (
          <MultipleChoiceView
            questions={shuffledMc}
            currentIndex={currentMcIndex}
            userAnswers={userAnswers}
            onSelectOption={handleSelectOption}
            onToggleDoubtful={handleToggleDoubtful}
            onNavigate={(idx) => setCurrentMcIndex(idx)}
            onFinish={() => setCurrentScreen('results')}
            onReshuffle={handleReshuffleSession}
            isExamMode={isExamMode}
            onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
          />
        )}

        {currentScreen === 'essay' && shuffledEssay.length > 0 && (
          <EssayView
            questions={shuffledEssay}
            currentIndex={currentEssayIndex}
            userAnswers={userAnswers}
            onSaveAnswer={handleSaveEssayAnswer}
            onNavigate={(idx) => setCurrentEssayIndex(idx)}
            onFinish={() => setCurrentScreen('welcome')}
            onReshuffle={handleReshuffleSession}
            onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsView
            questions={shuffledMc}
            userAnswers={userAnswers}
            onRestart={() => {
              initializeSession();
              setCurrentScreen('mc');
            }}
            onHome={() => setCurrentScreen('welcome')}
            onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
          />
        )}
      </main>

      {/* Physics Formula Cheat Sheet Modal */}
      <FormulaSheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      {/* Quiet Educational Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">BERKAH ANAK SOLEH KELAS XI</span>
            <span className="text-slate-300">·</span>
            <span>Platform Latihan dan Pemahaman Fisika SMA</span>
          </div>
          <div className="text-slate-400 text-[11px]">
            Estetika Batik Nusantara Modern · Dominan Putih · KaTeX Rendering
          </div>
        </div>
      </footer>
    </div>
  );
}
