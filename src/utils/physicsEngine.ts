import { QuestionData, ShuffledQuestion, UserAnswer, CategorySummary, PhysicsCategory } from '../types/physics';

/**
 * Pure physics calculation utilities
 */

// Soal 1: Rentang resultan dua vektor gaya
export function calculateVectorResultantRange(f1: number, f2: number): { min: number; max: number } {
  return {
    min: Math.abs(f1 - f2),
    max: f1 + f2,
  };
}

// Soal 3: Penyeberangan sungai tegak lurus arus
export function calculateRiverCrossing(width: number, vBoat: number, vCurrent: number) {
  const time = width / vBoat;
  const drift = vCurrent * time;
  const displacement = Math.sqrt(width * width + drift * drift);
  const vResultant = Math.sqrt(vBoat * vBoat + vCurrent * vCurrent);
  return { time, drift, displacement, vResultant };
}

// Soal 5: GLBB trapesium & perlambatan
export function calculateTrapezoidDistance(t1: number, t2: number, tTotal: number, vMax: number) {
  // t1: percepatan (0 -> t1), t2: akhir kecepatan konstan, tTotal: berhenti
  const distAcc = 0.5 * t1 * vMax;
  const distConst = (t2 - t1) * vMax;
  const distDec = 0.5 * (tTotal - t2) * vMax;
  const totalDistance = distAcc + distConst + distDec;
  const deceleration = vMax / (tTotal - t2);
  return { totalDistance, deceleration };
}

// Soal 6 & 32: Jarak reaksi dan pengereman total
export function calculateStoppingDistance(v0Kmh: number, reactionTime: number, deceleration: number) {
  const v0Ms = (v0Kmh * 1000) / 3600;
  const sReaction = v0Ms * reactionTime;
  const sBraking = (v0Ms * v0Ms) / (2 * deceleration);
  const sTotal = sReaction + sBraking;
  return { v0Ms, sReaction, sBraking, sTotal };
}

// Soal 8: Kecepatan relatif pada eskalator
export function calculateEscalatorCombinedTime(tPerson: number, tEscalator: number): number {
  return (tPerson * tEscalator) / (tPerson + tEscalator);
}

// Soal 9: Jarak terjauh dua mobil GLBB vs GLB
export function calculateMaxCatchDistance(aA: number, vB: number) {
  const time = vB / aA;
  const distB = vB * time;
  const distA = 0.5 * aA * time * time;
  const maxDistance = distB - distA;
  return { time, distB, distA, maxDistance };
}

// Soal 10: Ketinggian semprotan air damkar
export function calculateWaterSprayHeight(v0: number, sinTheta: number, cosTheta: number, distance: number, g = 10) {
  const v0x = v0 * cosTheta;
  const v0y = v0 * sinTheta;
  const time = distance / v0x;
  const height = v0y * time - 0.5 * g * time * time;
  return { time, height, v0x, v0y };
}

// Soal 14: Transmisi gir sepeda dan kelajuan
export function calculateBicycleSpeed(rFrontCm: number, rRearCm: number, rWheelCm: number, rpmFront: number) {
  const omegaFront = (rpmFront * 2 * Math.PI) / 60;
  const omegaRear = omegaFront * (rFrontCm / rRearCm);
  const speed = omegaRear * (rWheelCm / 100);
  return { omegaFront, omegaRear, speed };
}

// Soal 17: Kelajuan minimum ember vertikal
export function calculateMinVerticalCircleSpeed(radius: number, g = 10) {
  return Math.sqrt(g * radius);
}

// Soal 19 & 34: Gerak pada bidang miring dengan gesekan
export function calculateInclinedPlaneMotion(mass: number, thetaDeg: number, muS: number, muK: number, g = 10) {
  const thetaRad = (thetaDeg * Math.PI) / 180;
  const sinVal = Math.sin(thetaRad);
  const cosVal = Math.cos(thetaRad);
  const weight = mass * g;
  const wParallel = weight * sinVal;
  const normal = weight * cosVal;
  const fStaticMax = muS * normal;
  const willMove = wParallel > fStaticMax;
  let acceleration = 0;
  if (willMove) {
    const fKinetic = muK * normal;
    acceleration = (wParallel - fKinetic) / mass;
  }
  return { weight, wParallel, normal, fStaticMax, willMove, acceleration };
}

// Soal 20: Katrol meja kasar dan balok gantung
export function calculateTablePulleySystem(mA: number, mB: number, muK: number, g = 10) {
  const fK = muK * mA * g;
  const wB = mB * g;
  const a = (wB - fK) / (mA + mB);
  const tension = wB - mB * a;
  return { acceleration: a, tension, fK, wB };
}

// Soal 24: Balok bertumpuk gaya horizontal
export function calculateMaxStackedBlockForce(mA: number, mB: number, muS: number, g = 10) {
  const aMax = muS * g;
  const fMax = (mA + mB) * aMax;
  return { aMax, fMax };
}

// Soal 27: Katrol silinder bermassa
export function calculateMassivePulleyTension(mPulley: number, mLoad: number, g = 10) {
  const a = (mLoad * g) / (mLoad + 0.5 * mPulley);
  const tension = 0.5 * mPulley * a;
  return { acceleration: a, tension };
}

// Soal 35: Silinder pejal menggelinding menuruni bidang miring
export function calculateRollingCylinderSpeed(height: number, g = 10) {
  // v = sqrt((4/3) * g * h) for solid cylinder (k = 0.5)
  const raw = Math.sqrt((4 / 3) * g * height);
  return Math.round(raw * 100) / 100;
}

/**
 * Fisher-Yates array shuffling
 */
export function shuffleArray<T>(array: T[], seed?: number): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Prepares a newly randomized practice session:
 * - Shuffles order of Multiple Choice questions
 * - Shuffles order of Options (A, B, C, D, E) for every question
 * - Automatically finds the new position of the correct answer and assigns newCorrectLetter!
 * - Shuffles Essay questions as well!
 */
export function prepareShuffledSession(
  mcQuestions: QuestionData[],
  essayQuestions: QuestionData[]
): {
  shuffledMc: ShuffledQuestion[];
  shuffledEssay: ShuffledQuestion[];
} {
  const alphabet = ['A', 'B', 'C', 'D', 'E'];

  // Shuffle multiple choice questions
  const randomizedMc = shuffleArray(mcQuestions);
  const shuffledMc: ShuffledQuestion[] = randomizedMc.map((q, qIndex) => {
    if (!q.options || q.options.length === 0) {
      return {
        ...q,
        shuffledIndex: qIndex + 1,
      };
    }

    // Shuffle options for this question
    const randomizedOptions = shuffleArray(q.options);
    let newCorrectLetter = 'A';

    const shuffledOptions = randomizedOptions.map((opt, optIndex) => {
      const letter = alphabet[optIndex] || String.fromCharCode(65 + optIndex);
      if (opt.id === q.correctOptionId) {
        newCorrectLetter = letter;
      }
      return {
        letter,
        originalId: opt.id,
        text: opt.text,
        mathText: opt.mathText,
      };
    });

    return {
      ...q,
      shuffledIndex: qIndex + 1,
      shuffledOptions,
      newCorrectLetter,
    };
  });

  // Shuffle essay questions
  const randomizedEssay = shuffleArray(essayQuestions);
  const shuffledEssay: ShuffledQuestion[] = randomizedEssay.map((q, qIndex) => ({
    ...q,
    shuffledIndex: qIndex + 1,
  }));

  return { shuffledMc, shuffledEssay };
}

/**
 * Evaluates session score and category mastery breakdown
 */
export function evaluateSession(
  shuffledMc: ShuffledQuestion[],
  userAnswers: Record<number, UserAnswer>
): {
  totalQuestions: number;
  attempted: number;
  correctCount: number;
  incorrectCount: number;
  percentage: number;
  categoryBreakdown: CategorySummary[];
} {
  let correctCount = 0;
  let attempted = 0;
  const categoryMap: Record<PhysicsCategory, { total: number; correct: number }> = {
    'Vektor': { total: 0, correct: 0 },
    'Kinematika Gerak Lurus': { total: 0, correct: 0 },
    'Gerak Parabola': { total: 0, correct: 0 },
    'Gerak Melingkar': { total: 0, correct: 0 },
    'Dinamika Gerak (Hukum Newton)': { total: 0, correct: 0 },
    'Kesetimbangan Benda Tegar': { total: 0, correct: 0 },
    'Dinamika Rotasi': { total: 0, correct: 0 },
  };

  shuffledMc.forEach((q) => {
    const userAns = userAnswers[q.id];
    categoryMap[q.category].total += 1;

    if (userAns && userAns.selectedLetter) {
      attempted += 1;
      if (userAns.selectedLetter === q.newCorrectLetter) {
        correctCount += 1;
        categoryMap[q.category].correct += 1;
      }
    }
  });

  const totalQuestions = shuffledMc.length;
  const incorrectCount = attempted - correctCount;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const categoryBreakdown: CategorySummary[] = (Object.keys(categoryMap) as PhysicsCategory[])
    .filter((cat) => categoryMap[cat].total > 0)
    .map((cat) => ({
      category: cat,
      total: categoryMap[cat].total,
      correct: categoryMap[cat].correct,
      percentage: Math.round((categoryMap[cat].correct / categoryMap[cat].total) * 100),
    }));

  return {
    totalQuestions,
    attempted,
    correctCount,
    incorrectCount,
    percentage,
    categoryBreakdown,
  };
}
