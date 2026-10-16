# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 + islas React 19 + Tailwind 4, salida estática desplegada en Vercel.
Elegido para reflejar `tablas_de_verdad_calculadora` (tablasdeverdad.app), el
otro sitio del autor, ya probado en producción con este mismo stack y hosting.

## Users

Personas que van a tramitar o renovar su licencia de conducir en el Estado de
México y tienen que aprobar el examen teórico. Llegan casi siempre desde una
búsqueda en el teléfono ("examen de manejo edomex", "guía de manejo edomex pdf",
"señales de tránsito"), con poco tiempo, a veces días u horas antes de su cita
en el módulo. Mayoritariamente Android de gama media y datos móviles.

## Product Purpose

Dejar que cualquiera practique el examen teórico del EdoMex gratis desde el
navegador, sin instalar nada, y que llegue a su cita sabiendo si ya está listo.
La web tiene dos trabajos: ser la mejor respuesta pública a esas búsquedas
(tráfico orgánico monetizado con AdSense) y ser el canal de descarga de la app
Android, donde vive la monetización principal.

## Positioning

El banco de preguntas es el de la guía oficial del EdoMex, ya depurado y
categorizado por la app: 62 preguntas de guía y 87 de señales, cada una con su
explicación. El catálogo de señales usa los SVG oficiales del Manual de
Señalización Vial (SICT), en dominio público, servidos desde nuestro dominio.
Eso es contenido que un sitio genérico de "tests de manejo" no tiene.

## Operating Context

- Uso en móvil, de pie o en transporte, sesiones cortas y a veces repetidas.
- El examen real: 10 preguntas, 6 aciertos para aprobar, 5 minutos.
- El usuario suele buscar también el PDF de la guía oficial.
- La app Android existente (`com.jovasoft.examenvialedomex`) ya cubre progreso,
  racha, repaso espaciado, áreas débiles, logros y modo Pro.

## Capabilities and Constraints

- **La web practica; la app recuerda.** El sitio deja hacer exámenes y quizzes
  sin límite, pero no guarda progreso, racha, áreas débiles ni repaso espaciado.
  Esa asimetría es deliberada: es lo que hace valiosa la instalación, y el
  usuario la descubre al terminar un examen, no por un muro.
- Contenido generado desde la app Flutter (`scripts/generate-data.mjs`). La app
  es la fuente de verdad; la web nunca edita preguntas a mano.
- Un solo idioma: español de México.
- Sitio estático: sin backend, sin cuentas, sin base de datos.
- Presupuesto de rendimiento estricto (Android de gama media, datos móviles).

## Brand Commitments

Nombre: **Examen Vial EdoMex**, el mismo de la app en Play Store. Identidad
heredada de la app para que el anuncio, la web y la ficha de Play Store se
reconozcan como lo mismo: verde primario `#58CC02`, azul `#1CB0F6`, naranja
`#FF9600`, rojo `#FF4B4B`, morado `#CE82FF`; superficies claras `#F7F7F7` /
`#FFFFFF` y oscuras `#1B1B2F` / `#262640`. Logo en
`../examen_vial_edomex_app_2025/assets/logo.png`.

## Evidence on Hand

- 62 preguntas de guía con explicación, categorizadas en 6 temas.
- 87 señales de tránsito con nombre, tipo y descripción; 81 con su SVG oficial
  del Manual de Señalización Vial (SICT), dominio público, en `public/senales/`.
  Seis siguen sin arte oficial: Maquinaria agrícola, Fin de autopista, Zona
  turística, Volcán, Excursión, Monumento religioso.
- Guía oficial en PDF: https://jovannyrch.github.io/politicas/public/guia_manejo.pdf
- Ficha de Play Store del autor.
- **No hay** cifras de descargas, calificaciones, reseñas ni testimonios
  confirmados. No se inventan ni se insinúan.

## Product Principles

1. **Practicar antes que registrarse.** Nada se interpone entre llegar y
   responder la primera pregunta: ni cuenta, ni modal, ni descarga.
2. **La app se gana, no se impone.** El valor de instalar se muestra en el
   momento en que el usuario lo echa de menos; nunca se cobra con fricción.
3. **El contenido oficial se respeta y se acredita.** Las preguntas provienen de
   la guía de la Secretaría de Movilidad del EdoMex; las señales, del Manual de
   Señalización Vial. Ni se reescriben para sonar mejor ni se presentan como
   propias.
4. **Rápido en un teléfono malo con datos malos.** Cada decisión visual paga su
   costo en bytes o no entra.
5. **Los anuncios no pisan el estudio.** AdSense vive entre bloques de
   contenido, jamás dentro del flujo de una pregunta ni en el resultado.

## Accessibility & Inclusion

Público general y de edad mixta, a menudo con prisa y bajo estrés. Objetivos
firmes: contraste AA en todo texto, objetivos táctiles de 44px o más, el examen
completamente operable con teclado, y la corrección de una respuesta nunca
comunicada solo por color.
