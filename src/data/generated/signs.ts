// GENERADO POR scripts/generate-data.mjs — NO EDITAR A MANO.
// Fuente: ~/Documents/apps/examen_vial_edomex_app_2025/lib/data
// Regenerar: node scripts/generate-data.mjs

import type { Sign, Question } from "../../types";

export const signs: Sign[] = [
  {
    "slug": "curva",
    "name": "Curva",
    "type": "preventiva",
    "description": "Se utiliza para indicar curvas a la derecha o izquierda que sean de menos de 90 grados.",
    "code": "SP-6",
    "image": "/senales/SP-6.svg"
  },
  {
    "slug": "curva-cerrada",
    "name": "Curva cerrada",
    "type": "preventiva",
    "description": "Se usa para indicar curvas a la derecha o izquierda con una curvatura mayor a 90 grados.",
    "code": "SP-7",
    "image": "/senales/SP-7.svg"
  },
  {
    "slug": "camino-sinuoso",
    "name": "Camino sinuoso",
    "type": "preventiva",
    "description": "Significa la presencia de dos o más curvas inversas en el camino.",
    "code": "SP-10",
    "image": "/senales/SP-10.svg"
  },
  {
    "slug": "curva-sinuosa",
    "name": "Curva sinuosa",
    "type": "preventiva",
    "description": "Esta señal de tránsito se usa para indicar dos vueltas continuas que van en dirección contraria.",
    "code": "SP-9",
    "image": "/senales/SP-9.svg"
  },
  {
    "slug": "contracurva",
    "name": "Contracurva",
    "type": "preventiva",
    "description": "Este señalamiento indica la presencia de dos curvas continuas en donde la primera de ellas es cerrada.",
    "code": "SP-8",
    "image": "/senales/SP-8.svg"
  },
  {
    "slug": "cruce",
    "name": "Cruce",
    "type": "preventiva",
    "description": "Advierte sobre el cruce de dos caminos. La línea más ancha señalará el camino principal mientras las más angosta es el camino secundario.",
    "code": "SP-11",
    "image": "/senales/SP-11.svg"
  },
  {
    "slug": "entronque",
    "name": "Entronque",
    "type": "preventiva",
    "description": "Esta señal indica la presencia de una calle que se empalma con la principal. La línea gruesa muestra el camino principal y la angosta el camino secundario en donde los autos deben ceder el paso.",
    "code": "SP-12",
    "image": "/senales/SP-12.svg"
  },
  {
    "slug": "bifurcacion",
    "name": "Bifurcación",
    "type": "preventiva",
    "description": "Advierte de la división del camino. La señal puede ser a la izquierda o a la derecha.",
    "code": "SP-14",
    "image": "/senales/SP-14.svg"
  },
  {
    "slug": "entronque-delta",
    "name": "Entronque delta",
    "type": "preventiva",
    "description": "Se utiliza para señalar una intersección de tres caminos. El camino principal será la línea más ancha, mientras los secundarios con una línea más angosta.",
    "code": "SP-13",
    "image": "/senales/SP-13.svg"
  },
  {
    "slug": "bifurcacion-en-y",
    "name": "Bifurcación en Y",
    "type": "preventiva",
    "description": "Esta señal de tránsito advierte sobre la bifurcación del camino. El camino principal será la línea más gruesa.",
    "code": "SP-15",
    "image": "/senales/SP-15.svg"
  },
  {
    "slug": "glorieta",
    "name": "Glorieta",
    "type": "preventiva",
    "description": "Advierte sobre la presencia de una glorieta en la que se encuentran al menos dos caminos.",
    "code": "SP-16",
    "image": "/senales/SP-16.svg"
  },
  {
    "slug": "incorporacion-de-transito",
    "name": "Incorporación de tránsito",
    "type": "preventiva",
    "description": "Este tipo de señalamiento avisa sobre la incorporación de tránsito que va en la misma dirección. La incorporación será por el lado que marque la línea más delgada.",
    "code": "SP-17",
    "image": "/senales/SP-17.svg"
  },
  {
    "slug": "doble-circulacion",
    "name": "Doble circulación",
    "type": "preventiva",
    "description": "El señalamiento se utiliza para marcar el cambio de circulación de un sólo sentido a circulación en doble sentido.",
    "code": "SP-18",
    "image": "/senales/SP-18.svg"
  },
  {
    "slug": "salida",
    "name": "Salida",
    "type": "preventiva",
    "description": "Indica la salida de un camino principal. La línea delgada indicará si la salida es por la izquierda o por la derecha.",
    "code": "SP-19",
    "image": "/senales/SP-19.svg"
  },
  {
    "slug": "reduccion-del-camino",
    "name": "Reducción del camino",
    "type": "preventiva",
    "description": "Advierte sobre la reducción de la anchura del camino. De forma inversa indica la ampliación del camino.",
    "code": "SP-20",
    "image": "/senales/SP-20.svg"
  },
  {
    "slug": "reduccion-del-camino-lateral",
    "name": "Reducción del camino lateral",
    "type": "preventiva",
    "description": "Señala la reducción del camino por alguno de los costados. El señalamiento indicará si la reducción es por la izquierda o por la derecha.",
    "code": "SP-21",
    "image": "/senales/SP-21.svg"
  },
  {
    "slug": "puente-levadizo",
    "name": "Puente levadizo",
    "type": "preventiva",
    "description": "Indica la presencia de un puente levadizo en el camino. Un puente levadizo puede desplazarse de forma horizontal para permitir el paso de embarcaciones.",
    "code": "SP-22",
    "image": "/senales/SP-22.svg"
  },
  {
    "slug": "trabajadores-en-el-camino",
    "name": "Trabajadores en el camino",
    "type": "preventiva",
    "description": "El señalamiento indica la presencia de trabajadores en el camino.",
    "code": "SPP-1",
    "image": "/senales/SPP-1.svg"
  },
  {
    "slug": "limite-de-anchura",
    "name": "Límite de anchura",
    "type": "preventiva",
    "description": "La señal se utiliza para indicar un camino estrecho que no permite la circulación de dos vehículos de forma simultánea. Suele ir acompañada de un tablero adicional que indica la anchura exacta del camino.",
    "code": "SP-24",
    "image": "/senales/SP-24.svg"
  },
  {
    "slug": "limite-de-altura",
    "name": "Límite de altura",
    "type": "preventiva",
    "description": "Indica el límite de espacio de forma vertical cuando es menor a 4.30 metros. Normalmente un segundo tablero indica la altura máxima.",
    "code": "SP-25",
    "image": "/senales/SP-25.svg"
  },
  {
    "slug": "corriente-de-agua",
    "name": "Corriente de agua",
    "type": "preventiva",
    "description": "Advierte sobre una corriente de agua baja por la cual se puede circular.",
    "code": "SP-26",
    "image": "/senales/SP-26.svg"
  },
  {
    "slug": "termina-pavimento",
    "name": "Termina pavimento",
    "type": "preventiva",
    "description": "Señala el fin del pavimento y la presencia de un camino de terracería.",
    "code": "SP-27",
    "image": "/senales/SP-27.svg"
  },
  {
    "slug": "superficie-derrapante",
    "name": "Superficie derrapante",
    "type": "preventiva",
    "description": "Esta señal de tránsito indicará un tramo de pavimento resbaladizo. Es una señal temporal.",
    "code": "SP-28A2",
    "image": "/senales/SP-28A2.svg"
  },
  {
    "slug": "pendiente-peligrosa",
    "name": "Pendiente peligrosa",
    "type": "preventiva",
    "description": "Advierte sobre un camino en descenso en el cual habrá que frenar constantemente.",
    "code": "SP-29B1",
    "image": "/senales/SP-29B1.svg"
  },
  {
    "slug": "zona-de-derrumbes",
    "name": "Zona de derrumbes",
    "type": "preventiva",
    "description": "Advierte sobre una zona en la cual pueden ocurrir derrumbes.",
    "code": "SP-30",
    "image": "/senales/SP-30.svg"
  },
  {
    "slug": "alto-proximo",
    "name": "Alto próximo",
    "type": "preventiva",
    "description": "Es una de las señales de tránsito preventivas menos conocidas pero muy usual. Advierte sobre una señal de alto cercana.",
    "code": "SP-31",
    "image": "/senales/SP-31.svg"
  },
  {
    "slug": "paso-peatonal",
    "name": "Paso peatonal",
    "type": "preventiva",
    "description": "Indica un camino con constante paso peatonal o un cruce peatonal en específico.",
    "code": "SP-32",
    "image": "/senales/SP-32.svg"
  },
  {
    "slug": "zona-escolar",
    "name": "Zona escolar",
    "type": "preventiva",
    "description": "Advierte sobre una zona de escuelas cercana para que el conductor reduzca su velocidad.",
    "code": "SP-33",
    "image": "/senales/SP-33.svg"
  },
  {
    "slug": "ganado",
    "name": "Ganado",
    "type": "preventiva",
    "description": "Indica la posibilidad de encontrar ganado en el camino.",
    "code": "SP-34",
    "image": "/senales/SP-34.svg"
  },
  {
    "slug": "cruce-de-ferrocarril",
    "name": "Cruce de ferrocarril",
    "type": "preventiva",
    "description": "Señala el cruce con vías de tren al mismo nivel del camino.",
    "code": "SP-35",
    "image": "/senales/SP-35.svg"
  },
  {
    "slug": "maquinaria-agricola",
    "name": "Maquinaria agrícola",
    "type": "preventiva",
    "description": "Se utiliza para marcar una zona de tránsito de maquinaria agrícola o un cruce específico de este tipo de vehículos.",
    "code": null,
    "image": null
  },
  {
    "slug": "semaforo",
    "name": "Semáforo",
    "type": "preventiva",
    "description": "Este señalamiento advierte sobre la presencia de un semáforo próximo, normalmente en cruces o en zonas donde no se espera hallarlos.",
    "code": "SP-37",
    "image": "/senales/SP-37.svg"
  },
  {
    "slug": "camino-dividido",
    "name": "Camino dividido",
    "type": "preventiva",
    "description": "Esta señal de tránsito advierte sobre la división del camino en dos.",
    "code": "SP-38",
    "image": "/senales/SP-38.svg"
  },
  {
    "slug": "ciclistas",
    "name": "Ciclistas",
    "type": "preventiva",
    "description": "Advierte sobre un camino frecuentado por ciclistas o un cruce específico de estos vehículos.",
    "code": "SP-39",
    "image": "/senales/SP-39.svg"
  },
  {
    "slug": "grava-suelta",
    "name": "Grava suelta",
    "type": "preventiva",
    "description": "Advierte sobre un tramo en donde hay tierra o grava en el camino.",
    "code": "SP-40",
    "image": "/senales/SP-40.svg"
  },
  {
    "slug": "alto",
    "name": "Alto",
    "type": "restrictiva",
    "description": "Es una de las señales de tránsito más conocidas. Se utiliza principalmente en entronques con gran afluencia, cruces urbanos con riesgo de accidentes, y en cruces con líneas férreas.",
    "code": "SR-6",
    "image": "/senales/SR-6.svg"
  },
  {
    "slug": "ceda-el-paso",
    "name": "Ceda el paso",
    "type": "restrictiva",
    "description": "Esta señal es una advertencia para los conductores para reducir su velocidad y ceder el paso siempre que sea necesario. Es ocupada en zonas de vasto tránsito de peatones y vehículos o en entronques con avenidas principales.",
    "code": "SR-7",
    "image": "/senales/SR-7.svg"
  },
  {
    "slug": "inspeccion",
    "name": "Inspección",
    "type": "restrictiva",
    "description": "Indica la presencia de autoridades de tránsito. Normalmente se usa para advertir sobre retenes de revisión.",
    "code": "SR-8",
    "image": "/senales/SR-8.svg"
  },
  {
    "slug": "velocidad-maxima",
    "name": "Velocidad máxima",
    "type": "restrictiva",
    "description": "Este tipo de señal de tránsito indica el límite de velocidad máximo para circular.",
    "code": "SR-9 (60)",
    "image": "/senales/SR-9 (60).svg"
  },
  {
    "slug": "vuelta-continua",
    "name": "Vuelta continua",
    "type": "restrictiva",
    "description": "Indica la posibilidad de dar la vuelta. Su uso es común en cruces. La señal puede marcar vuelta a la izquierda y derecha.",
    "code": "SR-10",
    "image": "/senales/SR-10.svg"
  },
  {
    "slug": "circulacion",
    "name": "Circulación",
    "type": "restrictiva",
    "description": "Muestra el sentido de la circulación. Se usa en entradas de calles a fin de evitar la invasión de carriles con circulación única.",
    "code": "SR-11A1",
    "image": "/senales/SR-11A1.svg"
  },
  {
    "slug": "no-rebasar",
    "name": "No rebasar",
    "type": "restrictiva",
    "description": "La señal de tránsito prohíbe a los conductores rebasar en la zona.",
    "code": "SR-18A2",
    "image": "/senales/SR-18A2.svg"
  },
  {
    "slug": "conservar-la-derecha",
    "name": "Conservar la derecha",
    "type": "restrictiva",
    "description": "Insta a los conductores de camiones a conservar su derecha a fin de dejar el carril izquierdo libre para los vehículos ligeros.",
    "code": "SR-11B1",
    "image": "/senales/SR-11B1.svg"
  },
  {
    "slug": "doble-circulacion-restrictiva",
    "name": "Doble circulación",
    "type": "restrictiva",
    "description": "Se utiliza para indicar cuando la circulación cambia de un sólo sentido a ambos. El señalamiento se coloca al inicio de la calle.",
    "code": "SR-14",
    "image": "/senales/SR-14.svg"
  },
  {
    "slug": "altura-restringida",
    "name": "Altura restringida",
    "type": "restrictiva",
    "description": "Este tipo de señal de tránsito se utiliza para indicar el límite de altura de vehículos para circular en un camino. Es ocupada en la entrada de puentes.",
    "code": "SR-15",
    "image": "/senales/SR-15.svg"
  },
  {
    "slug": "anchura-restringida",
    "name": "Anchura restringida",
    "type": "restrictiva",
    "description": "El señalamiento indica el límite de anchura de vehículos para circular en un camino.",
    "code": "SR-16",
    "image": "/senales/SR-16.svg"
  },
  {
    "slug": "peso-restringido",
    "name": "Peso restringido",
    "type": "restrictiva",
    "description": "Advierte sobre el peso máximo de los vehículos para circular en un camino.",
    "code": "SR-17",
    "image": "/senales/SR-17.svg"
  },
  {
    "slug": "uso-obligatorio-de-cinturon-de-seguridad",
    "name": "Uso obligatorio de cinturón de seguridad",
    "type": "restrictiva",
    "description": "Indica el uso obligatorio del cinturón de seguridad en la zona de todos los ocupantes del vehículo.",
    "code": "SR-34",
    "image": "/senales/SR-34.svg"
  },
  {
    "slug": "parada-prohibida",
    "name": "Parada prohibida",
    "type": "restrictiva",
    "description": "Se utiliza para indicar a conductores de transporte público la prohibición de subir o bajar pasaje en el lugar.",
    "code": "SR-19A1",
    "image": "/senales/SR-19A1.svg"
  },
  {
    "slug": "no-parar",
    "name": "No parar",
    "type": "restrictiva",
    "description": "La señal prohíbe a los vehículos detenerse. Se utiliza en avenidas de circulación rápida, así como en las entradas y salidas de emergencia.",
    "code": "SR-20",
    "image": "/senales/SR-20.svg"
  },
  {
    "slug": "estacionamiento",
    "name": "Estacionamiento",
    "type": "restrictiva",
    "description": "Indica que es posible estacionarse en el lugar. Va acompañada con las limitaciones de tiempo, horarios y días donde se puede estacionar.",
    "code": "SR-21",
    "image": "/senales/SR-21.svg"
  },
  {
    "slug": "prohibido-estacionarse",
    "name": "Prohibido estacionarse",
    "type": "restrictiva",
    "description": "Se utiliza en zonas en donde está prohibido estacionarse.",
    "code": "SR-22",
    "image": "/senales/SR-22.svg"
  },
  {
    "slug": "vuelta-a-la-derecha-prohibida",
    "name": "Vuelta a la derecha prohibida",
    "type": "restrictiva",
    "description": "Prohíbe la vuelta a la derecha ya sea por circulación contraria o condiciones del camino.",
    "code": "SR-23",
    "image": "/senales/SR-23.svg"
  },
  {
    "slug": "retorno-prohibido",
    "name": "Retorno prohibido",
    "type": "restrictiva",
    "description": "Indica que se prohíbe el retorno de autos por este cruce. Puede ser porque representa un peligro extra o causa problemas en el tránsito.",
    "code": "SR-25",
    "image": "/senales/SR-25.svg"
  },
  {
    "slug": "prohibido-seguir-de-frente",
    "name": "Prohibido seguir de frente",
    "type": "restrictiva",
    "description": "La señal de tránsito indica que se prohíbe seguir circulando de frente.",
    "code": "SR-26",
    "image": "/senales/SR-26.svg"
  },
  {
    "slug": "prohibido-el-paso-a-motocicletas-vehiculos-pesados-y-bicicletas",
    "name": "Prohibido el paso a motocicletas, vehículos pesados y bicicletas",
    "type": "restrictiva",
    "description": "Indica la prohibición de circular de estos vehículos en una zona. Puede aparecer de forma individual también.",
    "code": "SR-27",
    "image": "/senales/SR-27.svg"
  },
  {
    "slug": "prohibido-el-paso-a-maquinaria-agricola",
    "name": "Prohibido el paso a maquinaria agrícola",
    "type": "restrictiva",
    "description": "Prohíbe la circulación de maquinaria agrícola en una zona.",
    "code": "SR-29",
    "image": "/senales/SR-29.svg"
  },
  {
    "slug": "prohibido-el-paso-a-peatones",
    "name": "Prohibido el paso a peatones",
    "type": "restrictiva",
    "description": "Se usa en zonas en donde la afluencia de vehículos hace peligroso el cruce de peatones.",
    "code": "SR-31",
    "image": "/senales/SR-31.svg"
  },
  {
    "slug": "prohibido-usar-el-claxon",
    "name": "Prohibido usar el claxon",
    "type": "restrictiva",
    "description": "Indica que está prohibido usar el claxon en una zona.",
    "code": "SR-33",
    "image": "/senales/SR-33.svg"
  },
  {
    "slug": "primeros-auxilios",
    "name": "Primeros auxilios",
    "type": "informativa",
    "description": "Señal de servicio que indica la ubicación de un punto de primeros auxilios.",
    "code": "SIS-17",
    "image": "/senales/SIS-17.svg"
  },
  {
    "slug": "oficinas-de-informacion",
    "name": "Oficinas de información",
    "type": "informativa",
    "description": "Indica la ubicación de oficinas de información turística o de servicios.",
    "code": "SIS-14",
    "image": "/senales/SIS-14.svg"
  },
  {
    "slug": "caseta-telefonica",
    "name": "Caseta telefónica",
    "type": "informativa",
    "description": "Indica la ubicación de una caseta telefónica.",
    "code": "SIS-26",
    "image": "/senales/SIS-26.svg"
  },
  {
    "slug": "estacion-de-servicio",
    "name": "Estación de servicio",
    "type": "informativa",
    "description": "Indica la ubicación de una gasolinera o estación de servicio.",
    "code": "SIS-11",
    "image": "/senales/SIS-11.svg"
  },
  {
    "slug": "oficina-de-correos",
    "name": "Oficina de correos",
    "type": "informativa",
    "description": "Indica la ubicación de una oficina de correos.",
    "code": "SIS-40",
    "image": "/senales/SIS-40.svg"
  },
  {
    "slug": "taller-mecanico",
    "name": "Taller mecánico",
    "type": "informativa",
    "description": "Indica la ubicación de un taller mecánico.",
    "code": "SIS-16",
    "image": "/senales/SIS-16.svg"
  },
  {
    "slug": "banos",
    "name": "Baños",
    "type": "informativa",
    "description": "Indica la ubicación de baños o sanitarios públicos.",
    "code": "SIS-23",
    "image": "/senales/SIS-23.svg"
  },
  {
    "slug": "restaurantes",
    "name": "Restaurantes",
    "type": "informativa",
    "description": "Indica la ubicación de restaurantes o servicios de comida.",
    "code": "SIS-22",
    "image": "/senales/SIS-22.svg"
  },
  {
    "slug": "hospedaje",
    "name": "Hospedaje",
    "type": "informativa",
    "description": "Indica la ubicación de hoteles o servicios de hospedaje.",
    "code": "SIS-13",
    "image": "/senales/SIS-13.svg"
  },
  {
    "slug": "estacion-de-ferrocarriles",
    "name": "Estación de ferrocarriles",
    "type": "informativa",
    "description": "Indica la ubicación de una estación de tren.",
    "code": "SIS-10",
    "image": "/senales/SIS-10.svg"
  },
  {
    "slug": "fin-de-autopista",
    "name": "Fin de autopista",
    "type": "informativa",
    "description": "Indica el final de una autopista o vía rápida.",
    "code": null,
    "image": null
  },
  {
    "slug": "artesanias",
    "name": "Artesanías",
    "type": "informativa",
    "description": "Indica la ubicación de venta de artesanías.",
    "code": "SIT-2",
    "image": "/senales/SIT-2.svg"
  },
  {
    "slug": "zona-turistica",
    "name": "Zona turística",
    "type": "informativa",
    "description": "Indica una zona de atractivo turístico.",
    "code": null,
    "image": null
  },
  {
    "slug": "comedor-al-aire-libre",
    "name": "Comedor al aire libre",
    "type": "informativa",
    "description": "Indica la ubicación de un área de comedor al aire libre o picnic.",
    "code": "SIT-16",
    "image": "/senales/SIT-16.svg"
  },
  {
    "slug": "botes-de-basura",
    "name": "Botes de basura",
    "type": "informativa",
    "description": "Indica la ubicación de botes de basura o depósito de residuos.",
    "code": "SIS-7",
    "image": "/senales/SIS-7.svg"
  },
  {
    "slug": "volcan",
    "name": "Volcán",
    "type": "informativa",
    "description": "Indica un atractivo turístico: volcán.",
    "code": null,
    "image": null
  },
  {
    "slug": "parque-nacional",
    "name": "Parque nacional",
    "type": "informativa",
    "description": "Indica la ubicación de un parque nacional.",
    "code": "SIT-8",
    "image": "/senales/SIT-8.svg"
  },
  {
    "slug": "zona-de-acampar",
    "name": "Zona de acampar",
    "type": "informativa",
    "description": "Indica una zona designada para acampar.",
    "code": "SIS-5",
    "image": "/senales/SIS-5.svg"
  },
  {
    "slug": "juegos-infantiles",
    "name": "Juegos infantiles",
    "type": "informativa",
    "description": "Indica la ubicación de juegos infantiles o parque para niños.",
    "code": "SIT-37",
    "image": "/senales/SIT-37.svg"
  },
  {
    "slug": "pesca",
    "name": "Pesca",
    "type": "informativa",
    "description": "Indica una zona permitida para pesca.",
    "code": "SIT-43",
    "image": "/senales/SIT-43.svg"
  },
  {
    "slug": "excursion",
    "name": "Excursión",
    "type": "informativa",
    "description": "Indica una zona de excursión o senderismo.",
    "code": null,
    "image": null
  },
  {
    "slug": "monumento-religioso",
    "name": "Monumento religioso",
    "type": "informativa",
    "description": "Indica la ubicación de un monumento o sitio religioso.",
    "code": null,
    "image": null
  },
  {
    "slug": "sitio-historico",
    "name": "Sitio histórico",
    "type": "informativa",
    "description": "Indica la ubicación de un sitio de interés histórico.",
    "code": "SIT-7",
    "image": "/senales/SIT-7.svg"
  },
  {
    "slug": "cascada",
    "name": "Cascada",
    "type": "informativa",
    "description": "Indica un atractivo turístico: cascada.",
    "code": "SIT-4",
    "image": "/senales/SIT-4.svg"
  },
  {
    "slug": "buceo",
    "name": "Buceo",
    "type": "informativa",
    "description": "Indica una zona permitida para buceo.",
    "code": "SIT-23",
    "image": "/senales/SIT-23.svg"
  },
  {
    "slug": "playa",
    "name": "Playa",
    "type": "informativa",
    "description": "Indica la ubicación de una playa.",
    "code": "SIT-9",
    "image": "/senales/SIT-9.svg"
  },
  {
    "slug": "natacion",
    "name": "Natación",
    "type": "informativa",
    "description": "Indica una zona permitida para natación.",
    "code": "SIT-3",
    "image": "/senales/SIT-3.svg"
  },
  {
    "slug": "alpinismo",
    "name": "Alpinismo",
    "type": "informativa",
    "description": "Indica una zona de alpinismo o escalada.",
    "code": "SIT-40",
    "image": "/senales/SIT-40.svg"
  }
];

export const signQuizQuestions: Question[] = [
  {
    "id": 1001,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Curva",
      "Curva cerrada",
      "Camino sinuoso",
      "Contracurva"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se utiliza para indicar curvas a la derecha o izquierda que sean de menos de 90 grados.",
    "sign": "curva"
  },
  {
    "id": 1002,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Curva cerrada",
      "Curva",
      "Curva sinuosa",
      "Bifurcación"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se usa para indicar curvas a la derecha o izquierda con una curvatura mayor a 90 grados.",
    "sign": "curva-cerrada"
  },
  {
    "id": 1003,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Camino sinuoso",
      "Curva sinuosa",
      "Contracurva",
      "Curva"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Significa la presencia de dos o más curvas inversas en el camino.",
    "sign": "camino-sinuoso"
  },
  {
    "id": 1004,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Curva sinuosa",
      "Camino sinuoso",
      "Curva cerrada",
      "Contracurva"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Esta señal de tránsito se usa para indicar dos vueltas continuas que van en dirección contraria.",
    "sign": "curva-sinuosa"
  },
  {
    "id": 1005,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Contracurva",
      "Curva sinuosa",
      "Camino sinuoso",
      "Curva cerrada"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Este señalamiento indica la presencia de dos curvas continuas en donde la primera de ellas es cerrada.",
    "sign": "contracurva"
  },
  {
    "id": 1006,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Cruce",
      "Entronque",
      "Bifurcación",
      "Glorieta"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre el cruce de dos caminos. La línea más ancha señalará el camino principal mientras las más angosta es el camino secundario.",
    "sign": "cruce"
  },
  {
    "id": 1007,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Entronque",
      "Cruce",
      "Bifurcación",
      "Incorporación de tránsito"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Esta señal indica la presencia de una calle que se empalma con la principal. La línea gruesa muestra el camino principal y la angosta el camino secundario en donde los autos deben ceder el paso.",
    "sign": "entronque"
  },
  {
    "id": 1008,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Bifurcación",
      "Entronque",
      "Bifurcación en Y",
      "Salida"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte de la división del camino. La señal puede ser a la izquierda o a la derecha.",
    "sign": "bifurcacion"
  },
  {
    "id": 1009,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Entronque delta",
      "Bifurcación en Y",
      "Glorieta",
      "Cruce"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se utiliza para señalar una intersección de tres caminos. El camino principal será la línea más ancha, mientras los secundarios con una línea más angosta.",
    "sign": "entronque-delta"
  },
  {
    "id": 1010,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Bifurcación en Y",
      "Entronque delta",
      "Bifurcación",
      "Cruce"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Esta señal de tránsito advierte sobre la bifurcación del camino. El camino principal será la línea más gruesa.",
    "sign": "bifurcacion-en-y"
  },
  {
    "id": 1011,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Glorieta",
      "Cruce",
      "Entronque delta",
      "Doble circulación"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre la presencia de una glorieta en la que se encuentran al menos dos caminos.",
    "sign": "glorieta"
  },
  {
    "id": 1012,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Incorporación de tránsito",
      "Entronque",
      "Salida",
      "Doble circulación"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Este tipo de señalamiento avisa sobre la incorporación de tránsito que va en la misma dirección. La incorporación será por el lado que marque la línea más delgada.",
    "sign": "incorporacion-de-transito"
  },
  {
    "id": 1013,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Doble circulación",
      "Incorporación de tránsito",
      "Camino dividido",
      "Reducción del camino"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "El señalamiento se utiliza para marcar el cambio de circulación de un sólo sentido a circulación en doble sentido.",
    "sign": "doble-circulacion"
  },
  {
    "id": 1014,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Salida",
      "Incorporación de tránsito",
      "Bifurcación",
      "Entronque"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la salida de un camino principal. La línea delgada indicará si la salida es por la izquierda o por la derecha.",
    "sign": "salida"
  },
  {
    "id": 1015,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Reducción del camino",
      "Reducción del camino lateral",
      "Límite de anchura",
      "Termina pavimento"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre la reducción de la anchura del camino. De forma inversa indica la ampliación del camino.",
    "sign": "reduccion-del-camino"
  },
  {
    "id": 1016,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Reducción del camino lateral",
      "Reducción del camino",
      "Salida",
      "Incorporación de tránsito"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Señala la reducción del camino por alguno de los costados. El señalamiento indicará si la reducción es por la izquierda o por la derecha.",
    "sign": "reduccion-del-camino-lateral"
  },
  {
    "id": 1017,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Puente levadizo",
      "Superficie derrapante",
      "Pendiente peligrosa",
      "Trabajadores en el camino"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la presencia de un puente levadizo en el camino. Un puente levadizo puede desplazarse de forma horizontal para permitir el paso de embarcaciones.",
    "sign": "puente-levadizo"
  },
  {
    "id": 1018,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Trabajadores en el camino",
      "Zona escolar",
      "Paso peatonal",
      "Maquinaria agrícola"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "El señalamiento indica la presencia de trabajadores en el camino.",
    "sign": "trabajadores-en-el-camino"
  },
  {
    "id": 1019,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Límite de anchura",
      "Límite de altura",
      "Reducción del camino",
      "Puente levadizo"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "La señal se utiliza para indicar un camino estrecho que no permite la circulación de dos vehículos de forma simultánea. Suele ir acompañada de un tablero adicional que indica la anchura exacta del camino.",
    "sign": "limite-de-anchura"
  },
  {
    "id": 1020,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Límite de altura",
      "Límite de anchura",
      "Puente levadizo",
      "Túnel"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica el límite de espacio de forma vertical cuando es menor a 4.30 metros. Normalmente un segundo tablero indica la altura máxima.",
    "sign": "limite-de-altura"
  },
  {
    "id": 1021,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Corriente de agua",
      "Termina pavimento",
      "Superficie derrapante",
      "Zona de derrumbes"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre una corriente de agua baja por la cual se puede circular.",
    "sign": "corriente-de-agua"
  },
  {
    "id": 1022,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Termina pavimento",
      "Superficie derrapante",
      "Grava suelta",
      "Corriente de agua"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Señala el fin del pavimento y la presencia de un camino de terracería.",
    "sign": "termina-pavimento"
  },
  {
    "id": 1023,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Superficie derrapante",
      "Termina pavimento",
      "Grava suelta",
      "Pendiente peligrosa"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Esta señal de tránsito indicará un tramo de pavimento resbaladizo. Es una señal temporal.",
    "sign": "superficie-derrapante"
  },
  {
    "id": 1024,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Pendiente peligrosa",
      "Superficie derrapante",
      "Zona de derrumbes",
      "Curva cerrada"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre un camino en descenso en el cual habrá que frenar constantemente.",
    "sign": "pendiente-peligrosa"
  },
  {
    "id": 1025,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Zona de derrumbes",
      "Pendiente peligrosa",
      "Trabajadores en el camino",
      "Grava suelta"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre una zona en la cual pueden ocurrir derrumbes.",
    "sign": "zona-de-derrumbes"
  },
  {
    "id": 1026,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Alto próximo",
      "Semáforo",
      "Paso peatonal",
      "Zona escolar"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Es una de las señales de tránsito preventivas menos conocidas pero muy usual. Advierte sobre una señal de alto cercana.",
    "sign": "alto-proximo"
  },
  {
    "id": 1027,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Paso peatonal",
      "Zona escolar",
      "Alto próximo",
      "Ciclistas"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica un camino con constante paso peatonal o un cruce peatonal en específico.",
    "sign": "paso-peatonal"
  },
  {
    "id": 1028,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Zona escolar",
      "Paso peatonal",
      "Trabajadores en el camino",
      "Semáforo"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre una zona de escuelas cercana para que el conductor reduzca su velocidad.",
    "sign": "zona-escolar"
  },
  {
    "id": 1029,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Ganado",
      "Maquinaria agrícola",
      "Ciclistas",
      "Paso peatonal"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la posibilidad de encontrar ganado en el camino.",
    "sign": "ganado"
  },
  {
    "id": 1030,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Cruce de ferrocarril",
      "Trabajadores en el camino",
      "Semáforo",
      "Maquinaria agrícola"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Señala el cruce con vías de tren al mismo nivel del camino.",
    "sign": "cruce-de-ferrocarril"
  },
  {
    "id": 1031,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Maquinaria agrícola",
      "Ganado",
      "Trabajadores en el camino",
      "Ciclistas"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se utiliza para marcar una zona de tránsito de maquinaria agrícola o un cruce específico de este tipo de vehículos.",
    "sign": "maquinaria-agricola"
  },
  {
    "id": 1032,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Semáforo",
      "Alto próximo",
      "Cruce",
      "Trabajadores en el camino"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Este señalamiento advierte sobre la presencia de un semáforo próximo, normalmente en cruces o en zonas donde no se espera hallarlos.",
    "sign": "semaforo"
  },
  {
    "id": 1033,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Camino dividido",
      "Doble circulación",
      "Bifurcación",
      "Reducción del camino"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Esta señal de tránsito advierte sobre la división del camino en dos.",
    "sign": "camino-dividido"
  },
  {
    "id": 1034,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Ciclistas",
      "Maquinaria agrícola",
      "Paso peatonal",
      "Ganado"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre un camino frecuentado por ciclistas o un cruce específico de estos vehículos.",
    "sign": "ciclistas"
  },
  {
    "id": 1035,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Grava suelta",
      "Superficie derrapante",
      "Termina pavimento",
      "Zona de derrumbes"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre un tramo en donde hay tierra o grava en el camino.",
    "sign": "grava-suelta"
  },
  {
    "id": 1036,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Alto",
      "Ceda el paso",
      "Inspección",
      "No circular"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Es una de las señales de tránsito más conocidas. Se utiliza principalmente en entronques con gran afluencia, cruces urbanos con riesgo de accidentes, y en cruces con líneas férreas.",
    "sign": "alto"
  },
  {
    "id": 1037,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Ceda el paso",
      "Alto",
      "Inspección",
      "Reducción del camino"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Esta señal es una advertencia para los conductores para reducir su velocidad y ceder el paso siempre que sea necesario. Es ocupada en zonas de vasto tránsito de peatones y vehículos o en entronques con avenidas principales.",
    "sign": "ceda-el-paso"
  },
  {
    "id": 1038,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Inspección",
      "Alto",
      "Ceda el paso",
      "No circular"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la presencia de autoridades de tránsito. Normalmente se usa para advertir sobre retenes de revisión.",
    "sign": "inspeccion"
  },
  {
    "id": 1039,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Velocidad máxima",
      "No rebasar",
      "Alto",
      "Inspección"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Este tipo de señal de tránsito indica el límite de velocidad máximo para circular.",
    "sign": "velocidad-maxima"
  },
  {
    "id": 1040,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Vuelta continua",
      "Vuelta prohibida",
      "Circulación",
      "Retorno prohibido"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la posibilidad de dar la vuelta. Su uso es común en cruces. La señal puede marcar vuelta a la izquierda y derecha.",
    "sign": "vuelta-continua"
  },
  {
    "id": 1041,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Circulación",
      "Vuelta continua",
      "Doble circulación",
      "Conservar la derecha"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Muestra el sentido de la circulación. Se usa en entradas de calles a fin de evitar la invasión de carriles con circulación única.",
    "sign": "circulacion"
  },
  {
    "id": 1042,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "No rebasar",
      "Velocidad máxima",
      "Conservar la derecha",
      "Alto"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "La señal de tránsito prohíbe a los conductores rebasar en la zona.",
    "sign": "no-rebasar"
  },
  {
    "id": 1043,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Conservar la derecha",
      "Circulación",
      "No rebasar",
      "Vuelta continua"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Insta a los conductores de camiones a conservar su derecha a fin de dejar el carril izquierdo libre para los vehículos ligeros.",
    "sign": "conservar-la-derecha"
  },
  {
    "id": 1044,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Doble circulación",
      "Circulación",
      "Camino dividido",
      "Conservar la derecha"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se utiliza para indicar cuando la circulación cambia de un sólo sentido a ambos. El señalamiento se coloca al inicio de la calle.",
    "sign": "doble-circulacion-restrictiva"
  },
  {
    "id": 1045,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Altura restringida",
      "Anchura restringida",
      "Peso restringido",
      "Límite de altura"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Este tipo de señal de tránsito se utiliza para indicar el límite de altura de vehículos para circular en un camino. Es ocupada en la entrada de puentes.",
    "sign": "altura-restringida"
  },
  {
    "id": 1046,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Anchura restringida",
      "Altura restringida",
      "Peso restringido",
      "Límite de anchura"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "El señalamiento indica el límite de anchura de vehículos para circular en un camino.",
    "sign": "anchura-restringida"
  },
  {
    "id": 1047,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Peso restringido",
      "Altura restringida",
      "Anchura restringida",
      "Velocidad máxima"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Advierte sobre el peso máximo de los vehículos para circular en un camino.",
    "sign": "peso-restringido"
  },
  {
    "id": 1048,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Uso obligatorio de cinturón de seguridad",
      "Parada prohibida",
      "No parar",
      "Inspección"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica el uso obligatorio del cinturón de seguridad en la zona de todos los ocupantes del vehículo.",
    "sign": "uso-obligatorio-de-cinturon-de-seguridad"
  },
  {
    "id": 1049,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Parada prohibida",
      "No parar",
      "Prohibido estacionarse",
      "Alto"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se utiliza para indicar a conductores de transporte público la prohibición de subir o bajar pasaje en el lugar.",
    "sign": "parada-prohibida"
  },
  {
    "id": 1050,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "No parar",
      "Parada prohibida",
      "Prohibido estacionarse",
      "Alto"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "La señal prohíbe a los vehículos detenerse. Se utiliza en avenidas de circulación rápida, así como en las entradas y salidas de emergencia.",
    "sign": "no-parar"
  },
  {
    "id": 1051,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Estacionamiento",
      "Prohibido estacionarse",
      "No parar",
      "Parada prohibida"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica que es posible estacionarse en el lugar. Va acompañada con las limitaciones de tiempo, horarios y días donde se puede estacionar.",
    "sign": "estacionamiento"
  },
  {
    "id": 1052,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Prohibido estacionarse",
      "Estacionamiento",
      "No parar",
      "Parada prohibida"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se utiliza en zonas en donde está prohibido estacionarse.",
    "sign": "prohibido-estacionarse"
  },
  {
    "id": 1053,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Vuelta a la derecha prohibida",
      "Retorno prohibido",
      "Prohibido seguir de frente",
      "Vuelta continua"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Prohíbe la vuelta a la derecha ya sea por circulación contraria o condiciones del camino.",
    "sign": "vuelta-a-la-derecha-prohibida"
  },
  {
    "id": 1054,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Retorno prohibido",
      "Vuelta a la derecha prohibida",
      "Prohibido seguir de frente",
      "No circular"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica que se prohíbe el retorno de autos por este cruce. Puede ser porque representa un peligro extra o causa problemas en el tránsito.",
    "sign": "retorno-prohibido"
  },
  {
    "id": 1055,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Prohibido seguir de frente",
      "Retorno prohibido",
      "Vuelta a la derecha prohibida",
      "Alto"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "La señal de tránsito indica que se prohíbe seguir circulando de frente.",
    "sign": "prohibido-seguir-de-frente"
  },
  {
    "id": 1056,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Prohibido el paso a motocicletas, vehículos pesados y bicicletas",
      "Prohibido el paso a maquinaria agrícola",
      "Prohibido el paso a peatones",
      "No circular"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la prohibición de circular de estos vehículos en una zona. Puede aparecer de forma individual también.",
    "sign": "prohibido-el-paso-a-motocicletas-vehiculos-pesados-y-bicicletas"
  },
  {
    "id": 1057,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Prohibido el paso a maquinaria agrícola",
      "Prohibido el paso a motocicletas, vehículos pesados y bicicletas",
      "Prohibido el paso a peatones",
      "Maquinaria agrícola"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Prohíbe la circulación de maquinaria agrícola en una zona.",
    "sign": "prohibido-el-paso-a-maquinaria-agricola"
  },
  {
    "id": 1058,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Prohibido el paso a peatones",
      "Paso peatonal",
      "Zona escolar",
      "Prohibido usar el claxon"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Se usa en zonas en donde la afluencia de vehículos hace peligroso el cruce de peatones.",
    "sign": "prohibido-el-paso-a-peatones"
  },
  {
    "id": 1059,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Prohibido usar el claxon",
      "Prohibido el paso a peatones",
      "Zona escolar",
      "No parar"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica que está prohibido usar el claxon en una zona.",
    "sign": "prohibido-usar-el-claxon"
  },
  {
    "id": 1060,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Primeros auxilios",
      "Oficinas de información",
      "Taller mecánico",
      "Baños"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Señal de servicio que indica la ubicación de un punto de primeros auxilios.",
    "sign": "primeros-auxilios"
  },
  {
    "id": 1061,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Oficinas de información",
      "Primeros auxilios",
      "Caseta telefónica",
      "Oficina de correos"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de oficinas de información turística o de servicios.",
    "sign": "oficinas-de-informacion"
  },
  {
    "id": 1062,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Caseta telefónica",
      "Oficinas de información",
      "Oficina de correos",
      "Primeros auxilios"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de una caseta telefónica.",
    "sign": "caseta-telefonica"
  },
  {
    "id": 1063,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Estación de servicio",
      "Taller mecánico",
      "Restaurantes",
      "Hospedaje"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de una gasolinera o estación de servicio.",
    "sign": "estacion-de-servicio"
  },
  {
    "id": 1064,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Oficina de correos",
      "Oficinas de información",
      "Caseta telefónica",
      "Primeros auxilios"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de una oficina de correos.",
    "sign": "oficina-de-correos"
  },
  {
    "id": 1065,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Taller mecánico",
      "Estación de servicio",
      "Baños",
      "Restaurantes"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de un taller mecánico.",
    "sign": "taller-mecanico"
  },
  {
    "id": 1066,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Baños",
      "Restaurantes",
      "Hospedaje",
      "Taller mecánico"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de baños o sanitarios públicos.",
    "sign": "banos"
  },
  {
    "id": 1067,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Restaurantes",
      "Baños",
      "Hospedaje",
      "Comedor al aire libre"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de restaurantes o servicios de comida.",
    "sign": "restaurantes"
  },
  {
    "id": 1068,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Hospedaje",
      "Restaurantes",
      "Baños",
      "Zona turística"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de hoteles o servicios de hospedaje.",
    "sign": "hospedaje"
  },
  {
    "id": 1069,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Estación de ferrocarriles",
      "Cruce de ferrocarril",
      "Fin de autopista",
      "Hospedaje"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de una estación de tren.",
    "sign": "estacion-de-ferrocarriles"
  },
  {
    "id": 1070,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Fin de autopista",
      "Estación de ferrocarriles",
      "Termina pavimento",
      "Reducción del camino"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica el final de una autopista o vía rápida.",
    "sign": "fin-de-autopista"
  },
  {
    "id": 1071,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Artesanías",
      "Zona turística",
      "Sitio histórico",
      "Restaurantes"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de venta de artesanías.",
    "sign": "artesanias"
  },
  {
    "id": 1072,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Zona turística",
      "Artesanías",
      "Sitio histórico",
      "Parque nacional"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica una zona de atractivo turístico.",
    "sign": "zona-turistica"
  },
  {
    "id": 1073,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Comedor al aire libre",
      "Restaurantes",
      "Zona de acampar",
      "Zona turística"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de un área de comedor al aire libre o picnic.",
    "sign": "comedor-al-aire-libre"
  },
  {
    "id": 1074,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Botes de basura",
      "Baños",
      "Comedor al aire libre",
      "Zona de acampar"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de botes de basura o depósito de residuos.",
    "sign": "botes-de-basura"
  },
  {
    "id": 1075,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Volcán",
      "Parque nacional",
      "Zona turística",
      "Alpinismo"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica un atractivo turístico: volcán.",
    "sign": "volcan"
  },
  {
    "id": 1076,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Parque nacional",
      "Zona turística",
      "Zona de acampar",
      "Excursión"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de un parque nacional.",
    "sign": "parque-nacional"
  },
  {
    "id": 1077,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Zona de acampar",
      "Parque nacional",
      "Comedor al aire libre",
      "Excursión"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica una zona designada para acampar.",
    "sign": "zona-de-acampar"
  },
  {
    "id": 1078,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Juegos infantiles",
      "Zona escolar",
      "Parque nacional",
      "Zona de acampar"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de juegos infantiles o parque para niños.",
    "sign": "juegos-infantiles"
  },
  {
    "id": 1079,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Pesca",
      "Natación",
      "Buceo",
      "Playa"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica una zona permitida para pesca.",
    "sign": "pesca"
  },
  {
    "id": 1080,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Excursión",
      "Alpinismo",
      "Zona de acampar",
      "Parque nacional"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica una zona de excursión o senderismo.",
    "sign": "excursion"
  },
  {
    "id": 1081,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Monumento religioso",
      "Sitio histórico",
      "Zona turística",
      "Artesanías"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de un monumento o sitio religioso.",
    "sign": "monumento-religioso"
  },
  {
    "id": 1082,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Sitio histórico",
      "Monumento religioso",
      "Zona turística",
      "Artesanías"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de un sitio de interés histórico.",
    "sign": "sitio-historico"
  },
  {
    "id": 1083,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Cascada",
      "Natación",
      "Zona turística",
      "Parque nacional"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica un atractivo turístico: cascada.",
    "sign": "cascada"
  },
  {
    "id": 1084,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Buceo",
      "Natación",
      "Pesca",
      "Playa"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica una zona permitida para buceo.",
    "sign": "buceo"
  },
  {
    "id": 1085,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Playa",
      "Natación",
      "Buceo",
      "Cascada"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica la ubicación de una playa.",
    "sign": "playa"
  },
  {
    "id": 1086,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Natación",
      "Buceo",
      "Playa",
      "Pesca"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica una zona permitida para natación.",
    "sign": "natacion"
  },
  {
    "id": 1087,
    "text": "¿Qué señal de tránsito es esta?",
    "options": [
      "Alpinismo",
      "Excursión",
      "Volcán",
      "Parque nacional"
    ],
    "answer": 0,
    "category": "senales",
    "explanation": "Indica una zona de alpinismo o escalada.",
    "sign": "alpinismo"
  }
];
