/**
 * Descarga los SVG oficiales de las señales desde Wikimedia Commons.
 *
 * Son obra del Gobierno de México (Manual de Señalización Vial y Dispositivos
 * de Seguridad, SICT) y están en dominio público, por eso podemos servirlas
 * desde nuestro propio dominio en vez de enlazar en caliente a un tercero.
 *
 * Uso: node scripts/import-signs.mjs
 * Lee scripts/sign-codes.json (tipo/nombre -> código oficial) y escribe
 * public/senales/<código>.svg. Es idempotente: no vuelve a bajar lo existente.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "public/senales";
const API = "https://commons.wikimedia.org/w/api.php";
const UA = "examen-vial-edomex-web/0.1 (importador de señales de dominio público)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(params) {
  const u = new URL(API);
  for (const [k, v] of Object.entries({ format: "json", ...params })) u.searchParams.set(k, v);
  for (let attempt = 0; ; attempt++) {
    const r = await fetch(u, { headers: { "User-Agent": UA } });
    if (r.ok) return r.json();
    // Commons devuelve 429 con bastante facilidad: reintento con backoff.
    if ((r.status === 429 || r.status >= 500) && attempt < 6) {
      await sleep(2000 * 2 ** attempt);
      continue;
    }
    throw new Error(`${r.status} ${u}`);
  }
}

/** upload.wikimedia.org también limita por ritmo; mismo backoff que la API. */
async function download(url) {
  for (let attempt = 0; attempt < 7; attempt++) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.ok) return Buffer.from(await r.arrayBuffer());
    if (r.status !== 429 && r.status < 500) return null;
    await sleep(3000 * 2 ** attempt);
  }
  return null;
}

const codes = JSON.parse(readFileSync("scripts/sign-codes.json", "utf8"));
const wanted = [...new Set(Object.values(codes).filter(Boolean))];
mkdirSync(OUT_DIR, { recursive: true });

const missing = wanted.filter((c) => !existsSync(join(OUT_DIR, `${c}.svg`)));
console.log(`${wanted.length} señales mapeadas, ${missing.length} por descargar`);

// Commons guarda los archivos como "MX road sign <código>.svg", salvo SPP-1
// que sigue el mismo patrón pero con mayúscula distinta en algunos casos.
const titleFor = (code) => `File:MX road sign ${code}.svg`;

for (let i = 0; i < missing.length; i += 25) {
  const batch = missing.slice(i, i + 25);
  const j = await api({
    action: "query",
    prop: "imageinfo",
    iiprop: "url",
    titles: batch.map(titleFor).join("|"),
  });
  for (const p of Object.values(j.query.pages)) {
    const code = p.title.replace(/^File:MX road sign /, "").replace(/\.svg$/, "");
    const url = p.imageinfo?.[0]?.url;
    if (!url) {
      console.warn(`  ✗ ${code}: no encontrado en Commons`);
      continue;
    }
    const svg = await download(url);
    if (!svg) {
      console.warn(`  ✗ ${code}: no se pudo descargar`);
      continue;
    }
    writeFileSync(join(OUT_DIR, `${code}.svg`), svg);
    console.log(`  ✓ ${code}`);
    await sleep(400);
  }
  await sleep(1000);
}
