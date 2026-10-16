/**
 * Parser mínimo de literales Dart, suficiente para leer los bancos de preguntas
 * de la app Flutter (`lib/data/*.dart`) sin depender de Dart ni de un toolchain.
 * Entiende strings con escapes y concatenación por adyacencia, números,
 * listas, enums y constructores con argumentos nombrados.
 */
import { readFileSync } from "node:fs";

function skipWs(s, i) {
  for (;;) {
    while (i < s.length && /\s/.test(s[i])) i++;
    if (s.startsWith("//", i)) {
      while (i < s.length && s[i] !== "\n") i++;
      continue;
    }
    if (s.startsWith("/*", i)) {
      i = s.indexOf("*/", i) + 2;
      continue;
    }
    return i;
  }
}

function readString(s, i) {
  const q = s[i];
  let out = "";
  i++;
  while (i < s.length) {
    const c = s[i];
    if (c === "\\") {
      const n = s[i + 1];
      out += n === "n" ? "\n" : n === "t" ? "\t" : n;
      i += 2;
      continue;
    }
    if (c === q) return [out, i + 1];
    out += c;
    i++;
  }
  throw new Error("string sin cerrar en " + i);
}

function readValue(s, i) {
  i = skipWs(s, i);
  const c = s[i];
  if (c === "'" || c === '"') {
    let [str, j] = readString(s, i);
    // concatenación por adyacencia: 'a' 'b'
    for (;;) {
      const k = skipWs(s, j);
      if (s[k] === "'" || s[k] === '"') {
        const [more, m] = readString(s, k);
        str += more;
        j = m;
      } else break;
    }
    return [str, j];
  }
  if (c === "[") {
    const items = [];
    i++;
    for (;;) {
      i = skipWs(s, i);
      if (s[i] === "]") return [items, i + 1];
      const [v, j] = readValue(s, i);
      items.push(v);
      i = skipWs(s, j);
      if (s[i] === ",") i++;
    }
  }
  // identificador / llamada / número
  let j = i;
  while (j < s.length && /[A-Za-z0-9_.]/.test(s[j])) j++;
  const ident = s.slice(i, j);
  const k = skipWs(s, j);
  if (s[k] === "(") {
    const [args, m] = readArgs(s, k);
    return [{ __ctor: ident, ...args }, m];
  }
  if (/^-?\d+(\.\d+)?$/.test(ident)) return [Number(ident), j];
  if (ident === "true" || ident === "false") return [ident === "true", j];
  if (ident === "null") return [null, j];
  return [{ __enum: ident }, j];
}

function readArgs(s, i) {
  // s[i] === "("
  const out = {};
  i++;
  for (;;) {
    i = skipWs(s, i);
    if (s[i] === ")") return [out, i + 1];
    let j = i;
    while (j < s.length && /[A-Za-z0-9_]/.test(s[j])) j++;
    const name = s.slice(i, j);
    const k = skipWs(s, j);
    if (s[k] !== ":") throw new Error("esperaba argumento nombrado en " + i);
    const [v, m] = readValue(s, k + 1);
    out[name] = v;
    i = skipWs(s, m);
    if (s[i] === ",") i++;
  }
}


/** Extrae todos los `Question(...)` de un archivo .dart como objetos planos. */
export function parseQuestions(path) {
  const src = readFileSync(path, "utf8");
  const questions = [];
  let i = 0;
  for (;;) {
    const at = src.indexOf("Question(", i);
    if (at === -1) break;
    // Evita `List<Question>`, `trafficSignsQuestions`, etc.
    const before = src[at - 1];
    if (before && /[A-Za-z0-9_<]/.test(before)) {
      i = at + 1;
      continue;
    }
    const [args, end] = readArgs(src, at + "Question".length);
    questions.push(args);
    i = end;
  }
  return questions;
}

/**
 * Los archivos Dart agrupan las señales con comentarios de sección
 * (`// SEÑALES PREVENTIVAS ...`). Devuelve url de imagen -> tipo.
 */
export function parseSignTypes(path) {
  const src = readFileSync(path, "utf8");
  const types = {};
  let current = null;
  for (const line of src.split("\n")) {
    const section = line.match(/\/\/\s*SEÑALES\s+([A-ZÁÉÍÓÚÑ]+)/i);
    if (section) current = section[1].toLowerCase();
    const url = line.match(/'(https:\/\/[^']+)'/);
    if (url && current) types[url[1]] = current;
  }
  return types;
}
