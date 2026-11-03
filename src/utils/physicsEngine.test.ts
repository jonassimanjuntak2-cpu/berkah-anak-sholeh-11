import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateVectorResultantRange,
  calculateRiverCrossing,
  calculateTrapezoidDistance,
  calculateStoppingDistance,
  calculateEscalatorCombinedTime,
  calculateMaxCatchDistance,
  calculateWaterSprayHeight,
  calculateBicycleSpeed,
  calculateMinVerticalCircleSpeed,
  calculateTablePulleySystem,
  calculateMaxStackedBlockForce,
  calculateMassivePulleyTension,
  calculateRollingCylinderSpeed,
  prepareShuffledSession,
  evaluateSession,
} from './physicsEngine';
import { QuestionData } from '../types/physics';

test('calculateVectorResultantRange produces correct bounds for anti-leak Q1 (25 N and 60 N)', () => {
  const range = calculateVectorResultantRange(25, 60);
  assert.equal(range.min, 35);
  assert.equal(range.max, 85);
  // 90 N is outside [35, 85], so it is impossible!
  assert.equal(90 > range.max, true);
});

test('calculateRiverCrossing computes exact perpendicular displacement for anti-leak Q3 (160 m, 8 m/s, 6 m/s)', () => {
  const res = calculateRiverCrossing(160, 8, 6);
  assert.equal(res.time, 20);
  assert.equal(res.drift, 120);
  assert.equal(res.displacement, 200);
  assert.equal(res.vResultant, 10);
});

test('calculateTrapezoidDistance computes distance and deceleration for anti-leak Q5', () => {
  const res = calculateTrapezoidDistance(10, 35, 45, 30);
  assert.equal(res.totalDistance, 1050);
  assert.equal(res.deceleration, 3);
});

test('calculateStoppingDistance computes reaction and braking distances for anti-leak Q6', () => {
  // 72 km/h = 20 m/s, t_reaksi = 0.7 s, a = 5 m/s^2
  const res = calculateStoppingDistance(72, 0.7, 5);
  assert.equal(res.v0Ms, 20);
  assert.equal(res.sReaction, 14);
  assert.equal(res.sBraking, 40);
  assert.equal(res.sTotal, 54);
});

test('calculateEscalatorCombinedTime computes 30 seconds for anti-leak Q8 (90 s & 45 s)', () => {
  const time = calculateEscalatorCombinedTime(90, 45);
  assert.equal(time, 30);
});

test('calculateMaxCatchDistance calculates peak separation for anti-leak Q9 (a=3 m/s^2, v=12 m/s)', () => {
  const res = calculateMaxCatchDistance(3, 12);
  assert.equal(res.time, 4);
  assert.equal(res.maxDistance, 24);
});

test('calculateWaterSprayHeight calculates water stream height for anti-leak Q10 (v0=30 m/s, theta=53, x=36 m)', () => {
  const res = calculateWaterSprayHeight(30, 0.8, 0.6, 36, 10);
  assert.equal(res.time, 2);
  assert.equal(res.height, 28);
});

test('calculateBicycleSpeed computes linear speed for anti-leak Q14 (rFront=14, rRear=7, R=35, 60 rpm)', () => {
  const res = calculateBicycleSpeed(14, 7, 35, 60);
  const roundedSpeed = Math.round(res.speed * 10) / 10;
  assert.equal(roundedSpeed, 4.4);
});

test('calculateMinVerticalCircleSpeed calculates non-spill condition for anti-leak Q17 (R=1.6 m)', () => {
  const vMin = calculateMinVerticalCircleSpeed(1.6, 10);
  assert.equal(vMin, 4.0);
});

test('calculateTablePulleySystem computes acceleration and tension for anti-leak Q20 (mA=2, mB=8, muK=0.5)', () => {
  const res = calculateTablePulleySystem(2, 8, 0.5, 10);
  assert.equal(res.acceleration, 7);
  assert.equal(res.tension, 24);
});

test('calculateMaxStackedBlockForce computes maximum push force for anti-leak Q24 (mA=3, mB=6, muS=0.5)', () => {
  const res = calculateMaxStackedBlockForce(3, 6, 0.5, 10);
  assert.equal(res.aMax, 5);
  assert.equal(res.fMax, 45);
});

test('calculateMassivePulleyTension computes cylinder pulley tension for anti-leak Q27 (M=4, m=6)', () => {
  const res = calculateMassivePulleyTension(4, 6, 10);
  assert.equal(res.acceleration, 7.5);
  assert.equal(res.tension, 15.0);
});

test('calculateRollingCylinderSpeed computes cylinder rolling speed for anti-leak Q35 (h=4.8 m)', () => {
  const speed = calculateRollingCylinderSpeed(4.8, 10);
  assert.equal(speed, 8.0);
});

test('prepareShuffledSession maintains questions and re-maps answer key without losing questions', () => {
  const dummyQuestions: QuestionData[] = [
    {
      id: 1,
      type: 'multiple_choice',
      category: 'Vektor',
      originalNumber: 1,
      questionText: 'Test question 1',
      correctOptionId: 'B',
      options: [
        { id: 'A', text: 'Opt A' },
        { id: 'B', text: 'Opt B' },
        { id: 'C', text: 'Opt C' },
        { id: 'D', text: 'Opt D' },
        { id: 'E', text: 'Opt E' },
      ],
      caraLambat: {
        diketahui: [],
        ditanya: '',
        konsep: '',
        rumusDasar: [],
        langkahPenyelesaian: [],
        kesimpulan: '',
      },
      caraCepat: {
        trikNama: '',
        rumusPraktis: '',
        langkahCepat: '',
        kapanDigunakan: '',
        jawabanSingkat: '',
      },
      speechScript: { soal: '', pembahasan: '' },
      variables: {},
    },
    {
      id: 2,
      type: 'multiple_choice',
      category: 'Kinematika Gerak Lurus',
      originalNumber: 2,
      questionText: 'Test question 2',
      correctOptionId: 'A',
      options: [
        { id: 'A', text: 'Opt 2A' },
        { id: 'B', text: 'Opt 2B' },
      ],
      caraLambat: {
        diketahui: [],
        ditanya: '',
        konsep: '',
        rumusDasar: [],
        langkahPenyelesaian: [],
        kesimpulan: '',
      },
      caraCepat: {
        trikNama: '',
        rumusPraktis: '',
        langkahCepat: '',
        kapanDigunakan: '',
        jawabanSingkat: '',
      },
      speechScript: { soal: '', pembahasan: '' },
      variables: {},
    },
  ];

  const session = prepareShuffledSession(dummyQuestions, []);
  assert.equal(session.shuffledMc.length, 2);

  const q1 = session.shuffledMc.find((q) => q.id === 1)!;
  assert.ok(q1);
  assert.ok(q1.newCorrectLetter);

  // Check that whichever letter was assigned as newCorrectLetter corresponds to original 'B'
  const matchedOpt = q1.shuffledOptions?.find((opt) => opt.letter === q1.newCorrectLetter);
  assert.equal(matchedOpt?.originalId, 'B');

  // Test evaluation
  const answers = {
    1: { questionId: 1, selectedLetter: q1.newCorrectLetter },
    2: { questionId: 2, selectedLetter: 'Z' }, // wrong
  };
  const evalResult = evaluateSession(session.shuffledMc, answers);
  assert.equal(evalResult.totalQuestions, 2);
  assert.equal(evalResult.attempted, 2);
  assert.equal(evalResult.correctCount, 1);
  assert.equal(evalResult.incorrectCount, 1);
  assert.equal(evalResult.percentage, 50);
});
