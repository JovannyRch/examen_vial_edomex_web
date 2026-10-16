/** Categorías temáticas del banco de preguntas (espejo de QuestionCategory en la app). */
export type CategoryId =
  | "senales"
  | "circulacion"
  | "multas"
  | "seguridad"
  | "vehiculo"
  | "prioridades";

export interface Question {
  id: number;
  text: string;
  /** Opciones en su orden original; se barajan al presentarlas. */
  options: string[];
  /** Índice de la opción correcta dentro de `options`. */
  answer: number;
  category: CategoryId;
  explanation?: string;
  /** Slug de la señal ilustrada, si la pregunta lleva imagen. */
  sign?: string;
}

export type SignType = "preventiva" | "restrictiva" | "informativa";

export interface Sign {
  slug: string;
  name: string;
  type: SignType;
  description: string;
  /** Código del Manual de Señalización Vial (SICT), p. ej. "SP-6". */
  code: string | null;
  /** Ruta al SVG oficial en /public, o null si aún no tenemos arte. */
  image: string | null;
}
