/** Configuración de sitio compartida por el layout, el sitemap y robots.txt. */
export const SITE = {
  name: "Examen Vial EdoMex",
  /** Dominio de producción. Cambiar aquí propaga a canonical, sitemap y robots. */
  url: "https://examenvialedomex.app",
  locale: "es_MX",
  lang: "es",
  author: "Jovanny Ramírez",
  description:
    "Practica gratis el examen teórico para la licencia de conducir del Estado de México 2026. Simulador oficial de 10 preguntas, guía de estudio y catálogo de señales de tránsito.",
} as const;

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jovasoft.examenvialedomex";

export const ADSENSE_CLIENT = "ca-pub-4665787383933447";

/**
 * IDs de bloque de AdSense por hueco. Se crean en el panel de AdSense
 * (Anuncios → Por unidad de anuncio → En el artículo) y se pegan aquí.
 * Un hueco vacío no pinta nada: es preferible a un contenedor muerto.
 */
export const AD_SLOTS = {
  /** Portada, entre el paso ② y el ③ del riel. */
  portada: "",
  /** Debajo del resultado del examen, nunca dentro del flujo de preguntas. */
  resultado: "",
  /** Entre bloques de preguntas en las páginas de tema. */
  guia: "",
  /** Bajo la ficha de una señal, antes de las señales relacionadas. */
  senal: "",
} as const;

/** Reglas del examen oficial, alineadas con lib/const/const.dart de la app. */
export const EXAM = {
  questions: 10,
  minutes: 5,
  passing: 6,
} as const;
