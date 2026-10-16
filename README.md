# Examen Vial EdoMex (web)

Simulador gratuito del examen teórico de licencia de conducir del Estado de México,
guía por temas y catálogo de señales. Sitio estático en Astro 7 + islas React 19 +
Tailwind 4, desplegado en Vercel. Contexto de producto en [`PRODUCT.md`](./PRODUCT.md).

## Comandos

| Comando                          | Acción                                              |
| :------------------------------- | :-------------------------------------------------- |
| `pnpm install`                   | Instala dependencias                                |
| `pnpm dev`                       | Servidor local en `localhost:4321`                  |
| `pnpm build`                     | `astro check` + build de producción en `dist/`      |
| `pnpm preview`                   | Sirve el build                                      |
| `pnpm test`                      | Tests de datos y barajado (vitest)                  |
| `node scripts/generate-data.mjs` | Regenera `src/data/generated/` desde la app Flutter |

## Estructura

- `src/pages/` — `/`, `/examen`, `/quiz-senales`, `/guia`, `/guia/[tema]`,
  `/senales`, `/senales/[slug]`, `/guia-de-manejo-pdf`, `/privacidad`.
- `src/components/Simulador.tsx` — única isla React: examen y quiz (con o sin cronómetro).
- `src/data/generated/` — **no editar a mano**; la app Flutter es la fuente de verdad.
- `src/data/index.ts` — categorías, tipos de señal y filtros (omite preguntas de señales sin arte oficial).
- `src/config.ts` — dominio, reglas del examen y IDs de AdSense (`AD_SLOTS`, vacíos hasta crearlos en el panel).
