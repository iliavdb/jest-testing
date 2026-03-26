import { calculateTotalScore, calculatePercentage, isPassed, getGrade, countWrongAnswers } from './quizScore';

describe('Quiz Score', () => {
  let quizAnswers;

  beforeEach(() => {
    quizAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ];
  });

  // VOORBEELD
  test('VOORBEELD: calculateTotalScore telt punten op', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 15 }
    ];
    expect(calculateTotalScore(answers)).toBe(25);
  });

  test('calculatePercentage berekent juiste percentage', () => {
    expect(calculatePercentage(quizAnswers)).toBe(80);
  });

  test('isPassed geeft true bij 60% of hoger', () => {
    expect(isPassed(quizAnswers)).toBe(true);
  });

  test('isPassed geeft false bij lager dan 60%', () => {
    const lowScoreAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: false, points: 0 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: true, points: 10 }
    ]; // 2 van 4 goed = 50%

    expect(isPassed(lowScoreAnswers)).toBe(false);
  });

  test('getGrade geeft Excellent bij 90%+', () => {
    const excellentAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ]; // 100%

    expect(getGrade(excellentAnswers)).toBe('Excellent');
  });

  test('getGrade geeft Goed bij 75-89%', () => {
    expect(getGrade(quizAnswers)).toBe('Goed'); // 80%
  });

  test('countWrongAnswers telt foute antwoorden', () => {
    expect(countWrongAnswers(quizAnswers)).toBe(1);
  });

});