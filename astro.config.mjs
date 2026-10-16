// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { SITE } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  // Todo el contenido es estático y en un solo idioma: prerenderizamos el sitio
  // completo. El adapter de Vercel se queda para imágenes y analytics, no para SSR.
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
