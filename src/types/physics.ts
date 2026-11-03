export type QuestionType = 'multiple_choice' | 'essay';

export type PhysicsCategory =
  | 'Vektor'
  | 'Kinematika Gerak Lurus'
  | 'Gerak Parabola'
  | 'Gerak Melingkar'
  | 'Dinamika Gerak (Hukum Newton)'
  | 'Kesetimbangan Benda Tegar'
  | 'Dinamika Rotasi';

export interface Option {
  id: string; // original id e.g. 'A', 'B', 'C', 'D', 'E'
  text: string;
  mathText?: string;
}

export interface ExplanationStep {
  title: string;
  detail: string;
  mathFormula?: string;
  result?: string;
}

export interface QuestionData {
  id: number; // 1 to 35
  type: QuestionType;
  category: PhysicsCategory;
  diagramId?: string; // 'gambar-1', etc.
  diagramTitle?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    caption: string;
  };
  originalNumber: number;
  questionText: string;
  subQuestions?: {
    id: string;
    text: string;
  }[];
  options?: Option[]; // For multiple choice
  correctOptionId?: string; // e.g. 'A'
  caraLambat: {
    diketahui: string[];
    ditanya: string;
    konsep: string;
    rumusDasar: string[];
    langkahPenyelesaian: ExplanationStep[];
    kesimpulan: string;
  };
  caraCepat: {
    trikNama: string;
    rumusPraktis: string;
    langkahCepat: string;
    kapanDigunakan: string;
    jawabanSingkat: string;
  };
  speechScript: {
    soal: string;
    pembahasan: string;
  };
  variables: Record<string, number | string>;
  isVaried?: boolean;
}

export interface ShuffledQuestion extends QuestionData {
  shuffledIndex: number;
  shuffledOptions?: {
    letter: string; // Displayed letter: A, B, C, D, E
    originalId: string;
    text: string;
    mathText?: string;
  }[];
  newCorrectLetter?: string;
}

export interface UserAnswer {
  questionId: number;
  selectedLetter?: string;
  essayAnswer?: string;
  isMarkedDoubtful?: boolean;
  isCorrect?: boolean;
}

export interface CategorySummary {
  category: PhysicsCategory;
  total: number;
  correct: number;
  percentage: number;
}
