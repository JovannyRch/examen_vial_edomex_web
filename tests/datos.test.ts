import { describe, expect, it } from "vitest";
import { categories, examQuestions, signBySlug, signQuizQuestions, signs } from "../src/data";
import { drawExam, prepare, shuffle } from "../src/data/shuffle";

describe("banco de preguntas", () => {
  const todas = [...examQuestions, ...signQuizQuestions];

  it("tiene ids únicos", () => {
    expect(new Set(todas.map((q) => q.id)).size).toBe(todas.length);
  });

  it("cada pregunta tiene respuesta válida y opciones sin repetir", () => {
    for (const q of todas) {
      expect(q.answer, `id ${q.id}`).toBeGreaterThanOrEqual(0);
      expect(q.answer, `id ${q.id}`).toBeLessThan(q.options.length);
      expect(new Set(q.options).size, `id ${q.id}`).toBe(q.options.length);
    }
  });

  it("cada categoría referenciada existe y tiene preguntas", () => {
    for (const c of categories) {
      expect(examQuestions.some((q) => q.category === c.id), c.id).toBe(true);
    }
  });

  it("las señales referenciadas existen y tienen imagen", () => {
    for (const q of todas.filter((q) => q.sign)) {
      const s = signBySlug(q.sign!);
      expect(s, `id ${q.id}`).toBeDefined();
      expect(s!.image, `id ${q.id}`).toBeTruthy();
    }
  });

  it("los slugs de señales son únicos", () => {
    expect(new Set(signs.map((s) => s.slug)).size).toBe(signs.length);
  });
});

describe("barajado", () => {
  it("shuffle no muta y conserva los elementos", () => {
    const xs = [1, 2, 3, 4, 5];
    const out = shuffle(xs);
    expect(xs).toEqual([1, 2, 3, 4, 5]);
    expect([...out].sort()).toEqual(xs);
  });

  it("prepare mantiene la respuesta correcta apuntando al mismo texto", () => {
    for (const q of examQuestions) {
      const p = prepare(q);
      expect(p.shuffledOptions[p.shuffledAnswer]).toBe(q.options[q.answer]);
      expect([...p.shuffledOptions].sort()).toEqual([...q.options].sort());
    }
  });

  it("drawExam devuelve la cantidad pedida sin repetir", () => {
    const e = drawExam(examQuestions, 10);
    expect(e).toHaveLength(10);
    expect(new Set(e.map((q) => q.id)).size).toBe(10);
  });
});

describe("quiz de señales", () => {
  it("omite las preguntas cuya señal no tiene arte oficial", () => {
    expect(signQuizQuestions.length).toBeGreaterThan(0);
    expect(signQuizQuestions.every((q) => !q.sign || signBySlug(q.sign)?.image)).toBe(true);
  });
});
