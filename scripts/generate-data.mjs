/**
 * Genera src/data/generated/*.ts a partir de los bancos de preguntas de la app
 * Flutter. La app sigue siendo la fuente de verdad del contenido; la web solo
 * lo importa para que ambas nunca se desincronicen a mano.
 *
 * Uso: node scripts/generate-data.mjs [ruta-a-la-app-flutter]
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { parseQuestions, parseSignTypes } from "./dart-parser.mjs";
import { readFileSync } from "node:fs";

const APP =
  process.argv[2] ?? "/Users/jova/Documents/apps/examen_vial_edomex_app_2025";
const DATA = `${APP}/lib/data`;
const OUT = "src/data/generated";

const signCodes = JSON.parse(readFileSync("scripts/sign-codes.json", "utf8"));

/** "Curva cerrada" -> "curva-cerrada" */
const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const TIPO_SINGULAR = {
  preventivas: "preventiva",
  restrictivas: "restrictiva",
  informativas: "informativa",
};

const correctOf = (q) => q.options.find((o) => o.id === q.correctOptionId).text;
const categoryOf = (q) => q.category.__enum.replace("QuestionCategory.", "");

// ── Catálogo de señales ────────────────────────────────────────────────────
const signQuestions = parseQuestions(`${DATA}/traffic_signs_questions_generator.dart`);
const guideQuestions = parseQuestions(`${DATA}/data.dart`);
const typesByUrl = parseSignTypes(`${DATA}/traffic_signs_questions_generator.dart`);

const signsByUrl = new Map();
for (const q of signQuestions) {
  if (!q.imagePath || signsByUrl.has(q.imagePath)) continue;
  const name = correctOf(q);
  const tipoPlural = typesByUrl[q.imagePath];
  const key = `${tipoPlural}/${name}`;
  const code = signCodes[key] ?? null;
  signsByUrl.set(q.imagePath, {
    slug: slugify(name),
    name,
    type: TIPO_SINGULAR[tipoPlural],
    description: q.explanation ?? "",
    code,
    image: code ? `/senales/${code}.svg` : null,
  });
}

// Los slugs alimentan URLs (/senales/<slug>): tienen que ser únicos.
const bySlug = new Map();
for (const sign of signsByUrl.values()) {
  if (bySlug.has(sign.slug)) {
    sign.slug = `${sign.slug}-${sign.type}`;
  }
  bySlug.set(sign.slug, sign);
}

// ── Preguntas ──────────────────────────────────────────────────────────────
/** Convierte una Question de Dart al modelo de la web (respuesta por índice). */
function toWebQuestion(q, { signSlugOf }) {
  const answer = q.options.findIndex((o) => o.id === q.correctOptionId);
  return {
    id: q.id,
    text: q.text.trim(),
    options: q.options.map((o) => o.text),
    answer,
    category: categoryOf(q),
    ...(q.explanation ? { explanation: q.explanation } : {}),
    ...(q.imagePath && signSlugOf(q.imagePath) ? { sign: signSlugOf(q.imagePath) } : {}),
  };
}

const signSlugOf = (url) => signsByUrl.get(url)?.slug ?? null;

const examQuestions = guideQuestions.map((q) => toWebQuestion(q, { signSlugOf }));
const signQuiz = signQuestions.map((q) => toWebQuestion(q, { signSlugOf }));

// ── Escritura ──────────────────────────────────────────────────────────────
const banner = `// GENERADO POR scripts/generate-data.mjs — NO EDITAR A MANO.
// Fuente: ${DATA.replace(process.env.HOME ?? "", "~")}
// Regenerar: node scripts/generate-data.mjs\n`;

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

writeFileSync(
  `${OUT}/questions.ts`,
  `${banner}
import type { Question } from "../../types";

export const examQuestions: Question[] = ${JSON.stringify(examQuestions, null, 2)};
`,
);

writeFileSync(
  `${OUT}/signs.ts`,
  `${banner}
import type { Sign, Question } from "../../types";

export const signs: Sign[] = ${JSON.stringify([...bySlug.values()], null, 2)};

export const signQuizQuestions: Question[] = ${JSON.stringify(signQuiz, null, 2)};
`,
);

const sinArte = [...bySlug.values()].filter((s) => !s.image);
console.log(`preguntas de guía: ${examQuestions.length}`);
console.log(`señales: ${bySlug.size} (${sinArte.length} sin imagen oficial)`);
console.log(`preguntas de señales: ${signQuiz.length}`);
if (sinArte.length) console.log("sin imagen:", sinArte.map((s) => s.name).join(", "));
