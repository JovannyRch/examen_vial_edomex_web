import type { CategoryId, Question, Sign, SignType } from "../types";
import { examQuestions } from "./generated/questions";
import { signs, signQuizQuestions as signQuizAll } from "./generated/signs";

export { examQuestions, signs };

/**
 * Preguntas de señales que se pueden jugar. Las que piden identificar una señal
 * sin arte oficial (ver `Sign.image`) se omiten: sin figura la pregunta no tiene sentido.
 */
export const signQuizQuestions: Question[] = signQuizAll.filter(
  (q) => !q.sign || signs.find((s) => s.slug === q.sign)?.image,
);
export type { CategoryId, Question, Sign, SignType };

export interface Category {
  id: CategoryId;
  /** Slug de URL: /guia/<slug> */
  slug: string;
  label: string;
  emoji: string;
  /** Frase de apoyo para la tarjeta y la meta description de la categoría. */
  blurb: string;
}

export const categories: Category[] = [
  {
    id: "senales",
    slug: "senales-de-transito",
    label: "Señales de Tránsito",
    emoji: "🚦",
    blurb:
      "Preventivas, restrictivas e informativas: cómo distinguirlas y qué significa cada una.",
  },
  {
    id: "circulacion",
    slug: "circulacion",
    label: "Circulación",
    emoji: "🚗",
    blurb: "Velocidades permitidas, rebases, carriles y reglas de circulación en el EdoMex.",
  },
  {
    id: "multas",
    slug: "multas-y-sanciones",
    label: "Multas y Sanciones",
    emoji: "⚖️",
    blurb: "Infracciones más comunes, puntos de licencia y sanciones del reglamento.",
  },
  {
    id: "seguridad",
    slug: "seguridad-vial",
    label: "Seguridad Vial",
    emoji: "🛡️",
    blurb: "Cinturón, casco, alcohol al volante y distancias de seguridad.",
  },
  {
    id: "vehiculo",
    slug: "vehiculo-y-documentos",
    label: "Vehículo y Documentos",
    emoji: "📋",
    blurb: "Licencia, tarjeta de circulación, verificación y documentos obligatorios.",
  },
  {
    id: "prioridades",
    slug: "prioridades-y-accidentes",
    label: "Prioridades y Accidentes",
    emoji: "🚨",
    blurb: "Quién pasa primero, vehículos de emergencia y qué hacer ante un accidente.",
  },
];

export const categoryById = (id: CategoryId) =>
  categories.find((c) => c.id === id)!;

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const questionsByCategory = (id: CategoryId) =>
  examQuestions.filter((q) => q.category === id);

export const signTypes: { id: SignType; label: string; plural: string; blurb: string }[] = [
  {
    id: "preventiva",
    label: "Preventiva",
    plural: "Preventivas",
    blurb:
      "Rombo amarillo con símbolo negro. Advierten de un peligro o una condición del camino más adelante.",
  },
  {
    id: "restrictiva",
    label: "Restrictiva",
    plural: "Restrictivas",
    blurb:
      "Fondo blanco con anillo rojo (y el alto octagonal). Imponen una obligación o una prohibición.",
  },
  {
    id: "informativa",
    label: "Informativa",
    plural: "Informativas",
    blurb:
      "Fondo azul o verde con símbolo blanco. Guían al conductor hacia servicios, destinos y sitios de interés.",
  },
];

export const signsByType = (type: SignType) => signs.filter((s) => s.type === type);

export const signBySlug = (slug: string) => signs.find((s) => s.slug === slug);

/** Señales con arte oficial; las demás se ocultan del catálogo visual. */
export const illustratedSigns = signs.filter((s) => s.image);
