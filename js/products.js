const PRODUCTS = [
//-------------------------BASICAS------------------------
  {
    id: "camara videollamada",
    name: "Cámara Videollamada",
    price: 79,
    category: "Basicas",
    subCategory: "Interiores",
    type: "camera",
    image: "imagenes/Basicas Interiores/Cámara Pantalla.jpg",
    highlights: [
      "Calidad: 2MP (Zoom x6)", 
      "LEDs: 4 Infrarrojo / 4 a color", 
      "Compatibilidad: WiFi 2.4G", 
      "Alarma: Seguimiento y alarma sirena", 
      "Audio: Micrófono y Altavoz", 
      "Memoria: Expandible hasta 256GB"

    ]
  },
  {
  id: "camara-interior",
  name: "Cámara Interior",
  price: 59,
  category: "Basicas",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Basicas Interiores/Cámara interior.jpg",
  highlights: [
   "Calidad: 2MP (Zoom x6)", 
      "LEDs: 4 Infrarrojo / 4 a color", 
      "Compatibilidad: WiFi 2.4G", 
      "Alarma: Seguimiento y alarma sirena", 
      "Audio: Micrófono y Altavoz", 
      "Memoria: Expandible hasta 256GB"
  ]
},
{
  id: "camara interior dual",
  name: "Cámara Interior Dual",
  price: 89,
  category: "Basicas",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Basicas Interiores/Interior Dual.jpg",
  highlights: [
    "Calidad: 2MP +2MP (Zoom x6)",
    "LEDs: 4 Infrarrojo / 6 a color",
    "Compatibilidad: WiFi 2.4G",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB"
  ]
},
{
  id: "camara foco",
  name: "Cámara Foco",
  price: 59,
  category: "Basicas",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Basicas Interiores/Cámara Foco.jpg",
  highlights: [
    "Calidad: 2MP (Zoom x6)",
    "LEDs: 4 Infrarrojo / 4 a color",
    "Compatibilidad: Conexión WiFi 2.4G",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB"
  ]
},
{
  id: "camara mini espia",
  name: "Cámara Mini Espía",
  price: 169,
  category: "Basicas",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Basicas Interiores/MINI ESPÍA.jpg",
  highlights: [
    "Calidad: 3MP",
    "Zoom: Digital x6",
    "LEDs: 6 Infrarrojo",
    "Compatibilidad: Chip 4G",
    "Alarma: Detección de movimiento",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 128GB",
    "Alcance de visión: Hasta 20m"
  ]
},

{
  id: "camara-exterior-a6",
  name: "A6",
  price: 79,
  category: "Basicas",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Basicas Exteriores/A6.jpg",
  highlights: [
    "Calidad: 3MP (Zoom x6)",
    "LEDs: 4 Infrarrojo / 4 a color",
    "Compatibilidad: WiFi 2.4G / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB"
  ]
},
{
  id: "camara-exterior-a32",
  name: "A32",
  price: 109,
  category: "Basicas",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Basicas Exteriores/A32.jpg",
  highlights: [
    "Calidad: 3MP + 3MP (Zoom x6)",
    "LEDs: 4 Infrarrojo / 8 a color",
    "Compatibilidad: WiFi 2.4G / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB"
  ]
},
{
  id: "camara-exterior-a31",
  name: "A31",
  price: 109,
  category: "Basicas",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Basicas Exteriores/A31.jpg",
  highlights: [
    "Calidad: 3MP + 3MP (Zoom x6)",
    "LEDs: 4 Infrarrojo / 8 a color",
    "Compatibilidad: WiFi 2.4G / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB"
  ]
},
{
  id: "camara-pulpo-digital",
  name: "Pulpo Digital",
  price: 149,
  category: "Basicas",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Basicas Exteriores/PULPO DIGITAL.jpg",
  highlights: [
    "Calidad: 3MP + 3MP + 3MP (Digital x10)",
    "LEDs: 14 Infrarrojo / 14 a color",
    "Compatibilidad: WiFi 2.4G / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB",
    "Alcance Visión: Hasta 50m"
  ]
},

//-------------------------IMOU------------------------

{
  id: "imou-ranger-2-pro",
  name: "Ranger 2 Pro",
  price: 159,
  category: "Imou",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Imou/RANGER 2 PRO.jpg",
  highlights: [
  "Calidad: 5MP (Zoom x8) / 3K",
  "Visión Nocturna: LED + Infrarrojo",
  "Movimiento: Seguimiento y PTZ",
  "Detección: Movimiento y sonido",
  "Audio: Micrófono y Altavoz",
  "Memoria: Expandible hasta 512GB"
]
},
{
  id: "imou-ranger-2-dual",
  name: "Ranger 2 Dual",
  price: 219,
  category: "Imou",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Imou/RANGER 2 DUAL.jpg",
  highlights: [
    "Calidad: 5MP + 5MP (Zoom x8)",
    "Visión Nocturna: 3 Luces LED / Infrarrojo",
    "Compatibilidad: WiFi 2.4G / 5G / Cable de Red",
    "Movimiento: Seguimiento y PTZ",
    "Detección: Incluye Algoritmo IA",
    "Audio: Micrófono y Altavoz",
    "Llamada: Llamadas en 1 toque y Gestos",
    "Memoria: Expandible hasta 512GB"
  ]
},

{
  id: "imou-bulb-cam",
  name: "Bulb Cam",
  price: 179,
  category: "Imou",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Imou/BULB CAM.jpg",
  highlights: [
    "Calidad: 5MP (Zoom x8)",
    "Visión Nocturna: A color / Blanco y Negro",
    "Compatibilidad: WiFi 2.4G",
    "Memoria: Expandible hasta 512GB",
    "Movimiento: Seguimiento automático",
    "Alarma: Sirena integrada",
    "Audio: Micrófono y Altavoz",
    "Iluminación: Con planificador"
  ]
},
{
  id: "imou-ranger-mini",
  name: "Ranger Mini",
  price: 159,
  category: "Imou",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Imou/RANGER MINI.jpg",
  highlights: [
  "Calidad: 5MP (Zoom x8 / 3K)",
  "Visión Nocturna: Blanco y Negro",
  "Compatibilidad: WiFi 2.4G / Cable de Red",
  "Memoria: Expandible hasta 512GB",
  "Alarma: Sirena integrada",
  "Movimiento: Seguimiento y PTZ",
  "Detección: Movimiento y sonido anormal",
  "Audio: Micrófono y Altavoz"
  ]
},
{
  id: "imou-aurora-poe",
  name: "Aurora",
  price: 239,
  category: "Imou",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Imou/AURORA.jpg",
  highlights: [
    "Calidad: 6MP (3K+)",
    "LEDs: 2 Luces LED / 4 Infrarrojos / Aurora",
    "Compatibilidad: WiFi 2.4G / 5G / Cable de Red / POE",
    "Alarma: Seguimiento y alarma sirena 125dB",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 512GB",
    "Resistencia: Resistente a lluvias"
  ]
},
{
  id: "imou-cruiser-doble",
  name: "Cruiser Dual",
  price: 279,
  category: "Imou",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Imou/CRUISER DUAL.jpg",
  highlights: [
    "Calidad: 5MP + 5MP (Zoom x8)",
    "Visión Nocturna: 6 Luces LED / 6 Infrarrojos",
    "Compatibilidad: WiFi 2.4G / Cable de Red",
    "Memoria: Expandible hasta 512GB",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Protección: Resistencia a lluvias"
  ]
},

{
  id: "imou-cruiser-triple",
  name: "Cruiser Triple",
  price: 329,
  category: "Imou",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Imou/CRUISER TRIPLE.jpg",
  highlights: [
    "Calidad: 5MP + 3MP + 3MP (Zoom x8)",
    "Visión Nocturna: 8 Luces LED / 8 Infrarrojos",
    "Compatibilidad: WiFi 2.4G / Cable de Red",
    "Memoria: 2 Ranuras para memorias 512GB",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Protección: Resistencia a lluvias"
  ]
},

{
  id: "imou-cruiser-sc",
  name: "Cruiser SC",
  price: 199,
  category: "Imou",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Imou/CRUISER SC 5MP.jpg",
  highlights: [
    "Calidad: 5MP / 3K (Zoom x8)",
    "Visión Nocturna: 4 Luces LED / 4 Infrarrojos",
    "Compatibilidad: WiFi 2.4G / 5G / Cable de Red / POE",
    "Memoria: Expandible hasta 512GB",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Protección: Resistencia a lluvias"
  ]
},
{
  id: "imou-cruiser-sc-4k",
  name: "Cruiser SC 4K",
  price: 219,
  category: "Imou",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Imou/CRUISER SC.jpg",
  highlights: [
    "Calidad: 8MP / 4K (Zoom x8)",
    "Visión Nocturna: 4 Luces LED / 4 Infrarrojos",
    "Compatibilidad: WiFi 2.4G / 5G / Cable de Red / POE",
    "Memoria: Expandible hasta 512GB",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Protección: Resistencia a lluvias"
  ]
},
{
  id: "imou-cruiser-z",
  name: "Cruiser Z",
  price: 279,
  category: "Imou",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Imou/CRUISER Z.jpg",
  highlights: [
    "Calidad: 5MP / 3K (Zoom Óptico x12)",
    "Visión Nocturna: 2 Luces LED / 2 Infrarrojos",
    "Compatibilidad: WiFi 2.4G / Cable de Red",
    "Memoria: Expandible hasta 512GB",
    "Alarma: Seguimiento y alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Protección: Resistencia a lluvias"
  ]
},
//-------------------------TAPO------------------------

  {
  id: "tapo-c500",
  name: "Tapo C500",
  price: 159,
  category: "Tapo",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Tapo/TAPO C500.jpg",
  highlights: [
    "Calidad: 1080P Full HD",
    "Zoom: Digital x4",
    "LEDs: 2 Infrarrojo / 2 a color",
    "Compatibilidad: WiFi 2.4Ghz",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 512GB"
  ]
},
{
  id: "tapo-c520-ws",
  name: "Tapo C520 WS",
  price: 199,
  category: "Tapo",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Tapo/TAPO C520.jpg",
  highlights: [
    "Calidad: 2K QHD",
    "Zoom: Digital x4",
    "LEDs: 2 Infrarrojo / 2 a color",
    "Compatibilidad: WiFi 2.4Ghz",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 512GB"
  ]
},




{
  id: "tapo-c211",
  name: "Tapo C211",
  price: 115,
  category: "Tapo",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Tapo/TAPO C211.jpg",
  highlights: [
    "Calidad: 3MP / 2K",
    "Zoom: Digital x4",
    "Iluminación: Visión Infrarroja",
    "Compatibilidad: WiFi 2.4Ghz",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 512GB"
  ]
},
{
  id: "tapo-c210",
  name: "Tapo C210",
  price: 115,
  category: "Tapo",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Tapo/TAPO C210.jpg",
  highlights: [
    "Calidad: 3MP 2K",
    "Zoom: Digital x4",
    "Iluminación: Visión Infrarroja",
    "Compatibilidad: WiFi 2.4Ghz",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 512GB"
  ]
},

{
  id: "tapo-c201",
  name: "Tapo C201",
  price: 99,
  category: "Tapo",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Tapo/TAPO C201.jpg",
  highlights: [
    "Calidad: 1080P HD",
    "Zoom: Digital x4",
    "Iluminación: Visión Infrarroja",
    "Compatibilidad: WiFi 2.4Ghz",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 512GB"
  ]
},

{
  id: "tapo-c200",
  name: "Tapo C200",
  price: 99,
  category: "Tapo",
  subCategory: "Interiores",
  type: "camera",
  image: "imagenes/Tapo/TAPO C200.jpg",
  highlights: [
    "Calidad: 1080P HD",
    "Zoom: Digital x4",
    "Iluminación: Visión Infrarroja",
    "Compatibilidad: WiFi 2.4Ghz",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 512GB"
  ]
},


//-------------------------EXTRAS------------------------
 {
  id: "wireless-nvr-imou",
  name: "NVR IMOU",
  price: 189,
  category: "Extras",
  subCategory: "Varios",
  type: "extra",
  image: "extras/NVR IMOU.jpg",
  highlights: [
    "Canales: Hasta 10 canales",
    "Protocolo: ONVIF",
    "Audio: Conversación bidireccional",
    "Conectividad: Inalámbrica",
    "Compresión: Inteligente H.265",
    "Decodificación: Full HD",
    "Resolución Máxima: Hasta 8MP"
  ]
},

  {
  id: "tapo-enchufe",
  name: "Tapo Enchufe",
  price: 29,
  category: "Extras",
  subCategory: "Varios",
  type: "extra",
  image: "imagenes/Tapo/ENCHUFE INTELIGENTE TAPO.jpg",
  highlights: [
    "Control: Desde el celular",
    "Programación: Temporizador",
    "Vinculación: Alexa y Google Assistant",
    "Compatibilidad: WiFi 2.4Ghz",
    "Diseño: Compacto",
    "Configuración: No requiere concentrador"
  ]
},
//-------------------------LARGO ALCANCE------------------------

{
  id: "camara-exterior-t6",
  name: "T6",
  price: 159,
  category: "Largo Alcance",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Largo Alcance/Cámara T6.jpg",
  highlights: [
    "Calidad: 3MP + 3MP",
    "Zoom: Digital x6 / Óptico x8",
    "LEDs: 8 Infrarrojo / 8 a color",
    "Compatibilidad: WiFi 2.4Ghz / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Alcance Visión: Hasta 150m"
  ]
},
{
  id: "camara-exterior-policia",
  name: "Exterior Policía",
  price: 159,
  category: "Largo Alcance",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Largo Alcance/QQ9.jpg",
  highlights: [
    "Calidad: 3MP + 3MP",
    "Zoom: Digital x6 / Óptico x8",
    "LEDs: 10 Infrarrojo / 9 a color",
    "Compatibilidad: WiFi 2.4Ghz / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Alcance Visión: Hasta 150m"
  ]
},
{
  id: "camara-pulpo-optico",
  name: "Pulpo Óptico",
  price: 199,
  category: "Largo Alcance",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Largo Alcance/Cámara Pulpo.jpg",
  highlights: [
    "Calidad: 3MP + 3MP + 3MP",
    "Zoom: Digital x10 / Óptico x10",
    "LEDs: 8 Infrarrojo / 8 a color",
    "Compatibilidad: WiFi 2.4Ghz / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma sirena",
    "Audio: Micrófono y Altavoz",
    "Alcance Visión: Hasta 180m"
  ]
},

{
  id: "camara-kraken",
  name: "Kraken",
  price: 229,
  category: "Largo Alcance",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Largo Alcance/Cámara Kraken.jpg",
  highlights: [
    "Calidad: 3MP + 3MP + 3MP + 3MP",
    "Zoom: Digital x10 / Óptico x10",
    "LEDs: 10 Infrarrojo / 10 a color",
    "Compatibilidad: WiFi 2.4Ghz / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Alcance Visión: Hasta 180m"
  ]
},
{
  id: "camara-titan-pro",
  name: "Titán Pro",
  price: 329,
  category: "Largo Alcance",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Largo Alcance/Titan pro.jpg",
  highlights: [
    "Calidad: 4MP + 4MP + 4MP + 4MP",
    "Zoom: Digital x10 / Óptico x10",
    "LEDs: 15 Infrarrojo / 15 a color",
    "Compatibilidad: WiFi 2.4Ghz / Cable de Red",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Alcance Visión: Hasta 150m"
  ]
},
{
  id: "camara-ojo-de-dios",
  name: "Ojo de Dios",
  price: 389,
  category: "Largo Alcance",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Largo Alcance/OJO DE DIOS WIFI.jpg",
  highlights: [
    "Zoom: Digital x6 / Óptico x50",
    "LEDs: 10 Infrarrojo / 10 a color",
    "Compatibilidad: WiFi 2.4Ghz",
    "Alcance Visión: Hasta 800m",
    "Resistencia: Soporta lluvias y humedad",
    "Alarma: Sirena",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB"
  ]
},



//-------------------------LARGO ALCANCE------------------------




{
  id: "camara-solar-wifi-y6-4k",
  name: "Y6",
  price: 459,
  category: "Solar Wi-Fi",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Solar Wi-Fi/SOLAR Y6.jpg",
  highlights: [
    "Calidad: 4K",
    "Zoom: Digital x4",
    "LEDs: 4 Infrarrojo / 4 a color",
    "Conexión: WiFi 2.4Ghz",
    "Sensor: Seguimiento Automático",
    "Alarma: Sirena y Botón de Pánico",
    "Audio: Micrófono y Altavoz",
    "Encendido: Al detectar movimiento / 24Hrs"
  ]
},
{
  id: "camara-solar-doble-lente",
  name: "Solar Doble Lente",
  price: 149,
  category: "Solar Wi-Fi",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Solar Wi-Fi/Exterior solar Dual.jpg",
  highlights: [
    "Calidad: 3MP + 3MP (Zoom x8)",
    "LEDs: 12 Infrarrojo / 12 a color",
    "Compatibilidad: WiFi 2.4Ghz",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Alarma personalizada",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 128GB",
    "Alimentación: Solar / Alámbrico Tipo C"
  ]
},
{
  id: "camara-pulpo-solar-digital",
  name: "Pulpo Solar Digital",
  price: 289,
  category: "Solar Wi-Fi",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Solar Wi-Fi/PULPO SOLAR.jpg",
  highlights: [
    "Calidad: 3MP + 3MP + 3MP",
    "Zoom: Digital x10",
    "LEDs: 14 Infrarrojo / 14 a color",
    "Compatibilidad: WiFi 2.4Ghz / 5Ghz",
    "Resistencia: Lluvia, polvo o humedad",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Alcance Visión: Hasta 50m"
  ]
},
{
  id: "camara-solar-doble-lente",
  name: "Solar Doble Lente",
  price: 179,
  category: "Solar Wi-Fi",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Solar Wi-Fi/SOLAR DOBLE PANEL.jpg",
  highlights: [
    "Calidad: 3MP + 3MP (Zoom x8)",
    "Visión Nocturna: 12 Infrarrojo / 12 a color",
    "Conexión: WiFi 2.4Ghz",
    "Resistencia: Lluvia y humedad",
    "Alarma: Personalizada",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 128GB",
    "Energía: Solar / Alámbrica Tipo C"
  ]
},



//-------------------------SOLAR CHIP------------------------


{
  id: "camara-chip-rambo",
  name: "Chip Rambo",
  price: 269,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/CHIP RAMBO.jpg",
  highlights: [
    "Calidad: 3MP (Zoom x8)",
    "LEDs: 6 Infrarrojo / 6 a color",
    "Conectividad: Tarjeta SIM 4G",
    "Resistencia: Lluvia y polvo",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB",
    "Encendido: Al detectar movimiento"
  ]
},

{
  id: "camara-solar-chip",
  name: "Chip Icsee",
  price: 259,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/CHIP ICSEE.jpg",
  highlights: [
    "Calidad: 3MP (Zoom x8)",
    "LEDs: 6 Infrarrojo / 6 a color",
    "Conectividad: Tarjeta SIM 4G",
    "Resistencia: Lluvia y polvo",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB",
    "Encendido: Al detectar movimiento"
  ]
},
{
  id: "camara-chip-lite",
  name: "Chip Lite",
  price: 269,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/CHIP LITE.jpg",
  highlights: [
    "Calidad: 3MP (Zoom x8)",
    "LEDs: 4 Infrarrojo / 4 a color",
    "Conectividad: Tarjeta SIM 4G",
    "Resistencia: Lluvia y polvo",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB",
    "Encendido: Al detectar movimiento"
  ]
},
{
  id: "camara-chip-coloso",
  name: "Chip Coloso",
  price: 349,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/COLOSO.jpg",
  highlights: [
    "Calidad: 3MP (Zoom x8)",
    "LEDs: 6 Infrarrojo / 4 a color",
    "Conectividad: Tarjeta SIM 4G",
    "Resistencia: Lluvia, polvo y golpes",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Memoria: Expandible hasta 256GB",
    "Encendido: Al detectar movimiento"
  ]
},
{
  id: "camara-chip-dual-icsee",
  name: "Chip Dual IcSee",
  price: 289,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/A31 solar.jpg",
  highlights: [
    "Calidad: 3MP + 3MP",
    "Zoom: Digital x6",
    "LEDs: 4 Infrarrojo / 4 a color",
    "Conectividad: Tarjeta SIM 4G",
    "Resistencia: Lluvia, polvo y golpes",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Encendido: Al detectar movimiento"
  ]
},
{
  id: "camara-chip-dual",
  name: "Chip Dual",
  price: 379,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/Solar chip Dual.jpg",
  highlights: [
    "Calidad: 3MP + 3MP",
    "Zoom: Digital x8",
    "LEDs: 2 Infrarrojo / 4 a color",
    "Compatibilidad: Tarjeta SIM 4G",
    "Resistencia: Lluvia, polvo y golpes",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Encendido: Al detectar movimiento"
  ]
},
{
  id: "camara-chip-solar-t6",
  name: "Chip Solar T6",
  price: 429,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/SOLAR CHIP T6.jpg",
  highlights: [
    "Calidad: 3MP + 3MP",
    "Zoom: Digital x8 / Óptico x15",
    "LEDs: 10 Infrarrojo / 10 a color",
    "Compatibilidad: Tarjeta SIM 4G",
    "Alcance: Hasta 400m",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Encendido: Al detectar movimiento"
  ]
},
{
  id: "camara-ojo-de-dios-x36",
  name: "Ojo de Dios x36",
  price: 649,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/OJO DE DIOS.jpg",
  highlights: [
    "Calidad: 3MP + 3MP",
    "Zoom: Digital x10 / Óptico x36",
    "LEDs: 12 Infrarrojo / 12 a color",
    "Compatibilidad: Tarjeta SIM 4G",
    "Alcance: Hasta 800m",
    "Alarma: Seguimiento y Alarma",
    "Audio: Micrófono y Altavoz",
    "Encendido: Al detectar movimiento"
  ]
},
{
  id: "camara-chip-y5-x40",
  name: "Y5",
  price: 889,
  category: "Solar Chip",
  subCategory: "Exteriores",
  type: "camera",
  image: "imagenes/Chip Solar/CHIP Y5.jpg",
  highlights: [
    "Calidad: 4K",
    "Zoom: Digital x10 / Óptico x40",
    "LEDs: 12 Infrarrojo / 12 a color",
    "Conectividad: Tarjeta SIM 4G",
    "Alcance: Hasta 600m",
    "Sensor: Seguimiento Automático",
    "Alarma: Sirena y Botón de Pánico",
    "Audio: Micrófono y Altavoz"
  ]
},



];
