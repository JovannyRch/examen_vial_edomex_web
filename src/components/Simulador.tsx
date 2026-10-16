import { useCallback, useEffect, useRef, useState } from "react";

/** Pregunta ya barajada y con la imagen resuelta; lo único que cruza a la isla. */
export interface PreguntaIsla {
  id: number;
  text: string;
  options: string[];
  answer: number;
  explanation?: string;
  image?: string;
  imageAlt?: string;
}

interface Props {
  /** Preguntas ya barajadas en el cliente a partir de este banco. */
  banco: PreguntaIsla[];
  total: number;
  /** Aciertos para aprobar. */
  aprobar: number;
  /** Minutos del cronómetro; 0 = sin cronómetro. */
  minutos: number;
  titulo: string;
  playStoreUrl: string;
  /** Ruta del otro modo de práctica, ofrecida al terminar. */
  otraRuta: { href: string; label: string };
}

type Fase = "inicio" | "jugando" | "fin";

interface Respuesta {
  elegida: number | null;
}

function barajar<T>(xs: readonly T[]): T[] {
  const o = xs.slice();
  for (let i = o.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [o[i], o[j]] = [o[j], o[i]];
  }
  return o;
}

/** Revuelve las opciones y recalcula el índice correcto. */
function preparar(p: PreguntaIsla): PreguntaIsla {
  const correcta = p.options[p.answer];
  const options = barajar(p.options);
  return { ...p, options, answer: options.indexOf(correcta) };
}

const mmss = (s: number) =>
  `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

const LETRAS = ["A", "B", "C", "D", "E"];

export default function Simulador({
  banco,
  total,
  aprobar,
  minutos,
  titulo,
  playStoreUrl,
  otraRuta,
}: Props) {
  const [fase, setFase] = useState<Fase>("inicio");
  const [preguntas, setPreguntas] = useState<PreguntaIsla[]>([]);
  const [i, setI] = useState(0);
  const [respuestas, setRespuestas] = useState<Respuesta[]>([]);
  const [restante, setRestante] = useState(minutos * 60);
  const enunciado = useRef<HTMLHeadingElement>(null);

  const empezar = useCallback(() => {
    setPreguntas(barajar(banco).slice(0, total).map(preparar));
    setRespuestas([]);
    setI(0);
    setRestante(minutos * 60);
    setFase("jugando");
  }, [banco, total, minutos]);

  // Cronómetro: se detiene al salir de "jugando" y al llegar a cero termina el examen.
  useEffect(() => {
    if (fase !== "jugando" || minutos === 0) return;
    const id = setInterval(() => setRestante((r) => r - 1), 1000);
    return () => clearInterval(id);
  }, [fase, minutos]);

  useEffect(() => {
    if (fase === "jugando" && minutos > 0 && restante <= 0) setFase("fin");
  }, [restante, fase, minutos]);

  // Al cambiar de pregunta o de fase, el foco va al enunciado (teclado y lector de pantalla).
  useEffect(() => {
    if (fase !== "inicio") enunciado.current?.focus();
  }, [i, fase]);

  const actual = preguntas[i];
  const respondida = respuestas[i] !== undefined;

  const elegir = (n: number) => {
    if (respondida) return;
    setRespuestas((r) => {
      const c = r.slice();
      c[i] = { elegida: n };
      return c;
    });
  };

  const siguiente = () => {
    if (i + 1 >= preguntas.length) setFase("fin");
    else setI(i + 1);
  };

  if (fase === "inicio") {
    return (
      <div className="ficha p-6 text-center">
        <h1 className="text-3xl font-black tracking-tight text-balance">{titulo}</h1>
        <p className="mx-auto mt-3 max-w-md text-tinta-suave text-pretty">
          {total} preguntas al azar con las respuestas revueltas.
          {minutos > 0
            ? ` Tienes ${minutos} minutos y se aprueba con ${aprobar} aciertos, igual que el examen real.`
            : " Sin cronómetro: a tu ritmo."}{" "}
          Después de cada respuesta ves la correcta y por qué.
        </p>
        <button
          type="button"
          onClick={empezar}
          className="boton boton-verde anillo-contraste mt-6 w-full max-w-sm text-lg"
        >
          Empezar
        </button>
      </div>
    );
  }

  if (fase === "fin") {
    const hechas = preguntas.map((p, k) => ({ p, e: respuestas[k]?.elegida ?? null }));
    const aciertos = hechas.filter(({ p, e }) => e === p.answer).length;
    const paso = aciertos >= aprobar;
    const falladas = hechas.filter(({ p, e }) => e !== p.answer);
    const tiempoAgotado = minutos > 0 && restante <= 0;

    return (
      <div>
        <div className="ficha p-6 text-center" role="status">
          <p className="text-sm font-extrabold tracking-widest text-tinta-suave uppercase">
            {paso ? "Aprobado" : "Todavía no"}
          </p>
          <p className="cifras mt-1 text-6xl font-black tracking-tight">
            {aciertos}
            <span className="text-3xl text-tinta-tenue">/{preguntas.length}</span>
          </p>
          <p className="mx-auto mt-3 max-w-md text-tinta-suave text-pretty">
            {paso
              ? `Pasarías el examen: necesitas ${aprobar} y sacaste ${aciertos}.`
              : `Necesitas ${aprobar} aciertos para pasar y sacaste ${aciertos}. Repasa lo que fallaste abajo y vuelve a intentarlo.`}
            {tiempoAgotado && " Se acabó el tiempo."}
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={empezar}
              className="boton boton-verde anillo-contraste flex-1"
            >
              Otro simulacro
            </button>
            <a href={otraRuta.href} className="boton boton-hueco flex-1">
              {otraRuta.label}
            </a>
          </div>
        </div>

        <div className="ficha mt-6 p-5">
          <h2 className="text-xl font-black tracking-tight">
            Esta página no se acuerda de ti
          </h2>
          <p className="mt-2 text-tinta-suave text-pretty">
            Al recargar empiezas de cero. La app guarda tu historial, detecta en qué
            fallas y te repite esas preguntas hasta que las domines, incluso sin
            internet.
          </p>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener"
            className="boton boton-azul anillo-contraste mt-4 w-full"
          >
            Descargar en Google Play
          </a>
        </div>

        {falladas.length > 0 && (
          <section className="mt-8" aria-labelledby="repaso">
            <h2 id="repaso" className="text-2xl font-black tracking-tight">
              Para repasar ({falladas.length})
            </h2>
            <ol className="mt-4 space-y-3">
              {falladas.map(({ p, e }) => (
                <li key={p.id} className="ficha p-4">
                  <p className="font-extrabold text-pretty">{p.text}</p>
                  {p.image && (
                    <img
                      src={p.image}
                      alt="Señal de tránsito"
                      width={96}
                      height={96}
                      className="mt-2 size-24 object-contain"
                    />
                  )}
                  <p className="mt-2 text-sm">
                    <span className="font-extrabold">Tu respuesta: </span>
                    {e === null ? "sin contestar" : p.options[e]}
                  </p>
                  <p className="text-sm">
                    <span className="font-extrabold text-verde-hondo dark:text-verde">
                      Correcta:{" "}
                    </span>
                    {p.options[p.answer]}
                  </p>
                  {p.explanation && (
                    <p className="mt-2 text-sm text-tinta-suave text-pretty">
                      {p.explanation}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>
    );
  }

  // fase === "jugando"
  const elegida = respuestas[i]?.elegida ?? null;
  const poco = minutos > 0 && restante <= 60;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="cifras text-sm font-extrabold text-tinta-suave">
          Pregunta {i + 1} de {preguntas.length}
        </p>
        {minutos > 0 && (
          <p
            className={`cifras text-lg font-black ${poco ? "text-rojo-hondo" : ""}`}
            aria-label={`Tiempo restante ${mmss(Math.max(restante, 0))}`}
          >
            {mmss(Math.max(restante, 0))}
          </p>
        )}
      </div>
      <div
        className="mb-6 h-2 rounded-full bg-lienzo-hondo"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={preguntas.length}
        aria-valuenow={i + (respondida ? 1 : 0)}
        aria-label="Avance"
      >
        <div
          className="h-full rounded-full bg-verde transition-[width]"
          style={{ width: `${((i + (respondida ? 1 : 0)) / preguntas.length) * 100}%` }}
        />
      </div>

      <h2
        ref={enunciado}
        tabIndex={-1}
        className="text-2xl leading-snug font-black tracking-tight text-balance outline-none"
      >
        {actual.text}
      </h2>
      {actual.image && (
        <div className="placa mx-auto mt-4 w-40 border-2 border-linde">
          <img src={actual.image} alt={actual.imageAlt ?? "Señal de tránsito"} width={144} height={144} />
        </div>
      )}

      <ul className="mt-5 space-y-2">
        {actual.options.map((op, n) => {
          const esCorrecta = n === actual.answer;
          const esElegida = n === elegida;
          let marca = "";
          let estado = "";
          if (respondida) {
            if (esCorrecta) {
              marca = "border-verde-hondo bg-verde/15";
              estado = "Correcta";
            } else if (esElegida) {
              marca = "border-rojo-hondo bg-rojo/15";
              estado = "Incorrecta";
            } else marca = "opacity-60";
          }
          return (
            <li key={op}>
              <button
                type="button"
                onClick={() => elegir(n)}
                disabled={respondida}
                aria-disabled={respondida}
                className={`ficha flex min-h-14 w-full items-center gap-3 p-3 text-left font-bold transition-transform enabled:hover:-translate-y-0.5 disabled:cursor-default ${marca}`}
              >
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-lg bg-lienzo-hondo text-sm font-black"
                  aria-hidden="true"
                >
                  {LETRAS[n]}
                </span>
                <span className="flex-1 text-pretty">{op}</span>
                {estado && (
                  <span className="shrink-0 text-xs font-black tracking-wide uppercase">
                    {esCorrecta ? "✓ " : "✗ "}
                    {estado}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {respondida && (
        <div className="mt-5" aria-live="polite">
          {actual.explanation && (
            <p className="ficha p-4 text-sm text-tinta-suave text-pretty">
              {actual.explanation}
            </p>
          )}
          <button
            type="button"
            onClick={siguiente}
            className="boton boton-verde anillo-contraste mt-4 w-full text-lg"
            autoFocus
          >
            {i + 1 >= preguntas.length ? "Ver resultado" : "Siguiente"}
          </button>
        </div>
      )}
    </div>
  );
}
