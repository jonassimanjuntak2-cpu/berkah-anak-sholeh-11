import { QuestionData } from '../types/physics';
import { MC_QUESTIONS_PART_1 } from './mcQuestionsPart1';
import { MC_QUESTIONS_PART_2 } from './mcQuestionsPart2';
import { MC_QUESTIONS_PART_3 } from './mcQuestionsPart3';
import { ESSAY_QUESTIONS } from './essayQuestions';

/**
 * BANK SOAL LATIHAN FISIKA KELAS XI — VERSI REMODEL LENGKAP (ANTI-BOCOR)
 * Seluruh soal perhitungan dan data numerik telah dirombak dengan angka baru yang
 * konsisten, presisi, dan proporsional secara Fisika sehingga aman dibagikan kepada siswa.
 */
export const ALL_MC_QUESTIONS: QuestionData[] = [
  ...MC_QUESTIONS_PART_1,
  ...MC_QUESTIONS_PART_2,
  ...MC_QUESTIONS_PART_3,
];

export const ALL_ESSAY_QUESTIONS: QuestionData[] = [...ESSAY_QUESTIONS];

/**
 * Returns the active question bank. Both sets use pristine remodeled numbers.
 */
export function getVariedQuestions(): { mc: QuestionData[]; essay: QuestionData[] } {
  return {
    mc: ALL_MC_QUESTIONS,
    essay: ALL_ESSAY_QUESTIONS,
  };
}
