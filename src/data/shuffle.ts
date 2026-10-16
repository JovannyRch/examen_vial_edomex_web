import type { Question } from "../types";

/** Fisher-Yates. Devuelve una copia; no muta la entrada. */
export function shuffle<T>(items: readonly T[]): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export interface PreparedQuestion extends Question {
  /** Opciones ya barajadas, con el índice correcto recalculado. */
  shuffledOptions: string[];
  shuffledAnswer: number;
}

/**
 * Baraja las opciones de una pregunta. En el banco original la respuesta
 * correcta casi siempre es la primera, así que sin esto el examen sería trivial.
 */
export function prepare(question: Question): PreparedQuestion {
  const correct = question.options[question.answer];
  const shuffledOptions = shuffle(question.options);
  return {
    ...question,
    shuffledOptions,
    shuffledAnswer: shuffledOptions.indexOf(correct),
  };
}

/** Toma `count` preguntas al azar y las prepara para presentarlas. */
export function drawExam(pool: readonly Question[], count: number): PreparedQuestion[] {
  return shuffle(pool).slice(0, count).map(prepare);
}
