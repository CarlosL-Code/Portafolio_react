const trabajos = [
  {
    id: 1,
    categoria: "desarrollo-mobile",
    thumb: {
      url: "./assets/trabajos/trabajo-1.png",
      alt: "No Touch – Aplicación Móvil con Control por Voz",
    },
    info: {
      nombre: "Aplicación móvil Android con control por voz",
      categoria: "Java · Android · IA · IoT",
      github: "https://github.com/CarlosL-Code/App-Mobile-No-Touch",
      contenido: (
        <>
          <p>
            Proyecto académico enfocado en accesibilidad y automatización.
            Se desarrolló una aplicación Android capaz de ejecutar acciones
            mediante comandos de voz, como encender o apagar dispositivos.
          </p>

          <ul>
            <li>Aplicación desarrollada en Android Studio con Java</li>
            <li>Reconocimiento de voz con procesamiento de palabras clave</li>
            <li>Integración con microcontroladores e IoT</li>
          </ul>
        </>
      ),
    },
  },

  {
    id: 2,
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/trabajo-2.jpg",
      alt: "Sistema de Monitoreo IoT para Orquídeas",
    },
    info: {
      nombre: "Sistema IoT para monitoreo de orquídeas",
      categoria: "Spring Boot · REST API · MQTT · ESP32",
      github: "https://github.com/CarlosL-Code/monitoreo-backend",
      contenido: (
        <>
          <p>
            Sistema de monitoreo ambiental para cultivos, orientado al control
            de temperatura y humedad en tiempo real mediante sensores IoT.
          </p>

          <ul>
            <li>Backend REST desarrollado con Spring Boot</li>
            <li>Comunicación MQTT con ESP32</li>
            <li>Visualización de datos en tiempo real</li>
          </ul>
        </>
      ),
    },
  },

  {
    id: 3,
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-3.png",
      alt: "PAVELEADS Agency",
    },
    info: {
      nombre: "Soporte y estabilización web — PAVELEADS Agency",
      categoria: "WordPress · DNS · SSL · Hosting",
      github: "https://paveleads.com/",
      contenido: (
        <>
          <p>
            Trabajo de soporte técnico y estabilización de sitio web corporativo
            en producción para una empresa con operación internacional.
          </p>

          <ul>
            <li>Corrección de errores DNS y certificados SSL</li>
            <li>Optimización de hosting y redirecciones</li>
            <li>Soporte técnico continuo</li>
          </ul>
        </>
      ),
    },
  },

  {
    id: 4,
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-4.png",
      alt: "Sitio Web Carserv",
    },
    info: {
      nombre: "Sitio web informativo — Carserv",
      categoria: "WordPress · Diseño Web · Contacto Directo",
      github: "https://carserv.cl",
      contenido: (
        <>
          <p>
            Desarrollo de sitio web informativo para taller mecánico en Temuco,
            enfocado en mejorar la presencia digital y el contacto con clientes.
          </p>

          <ul>
            <li>Diseño web responsivo y claro</li>
            <li>Integración con WhatsApp y Google Maps</li>
            <li>Corrección de problemas técnicos y SSL</li>
          </ul>
        </>
      ),
    },
  },
  {
  id: 5,
  categoria: "desarrollo-web",
  thumb: {
    url: "./assets/trabajos/trabajo-5.png",
    alt: "Landing Page Pizzería — Proyecto Conceptual",
  },
  info: {
    nombre: "Landing page comercial para pizzería (demo)",
    categoria: "HTML · Tailwind CSS · UX/UI · Responsive Design",
    github: "https://pizzeria-landing-demo-qmmq.vercel.app/index.html",
    contenido: (
      <>
        <p>
          Proyecto conceptual de landing page desarrollado como demostración
          comercial para negocios gastronómicos, enfocado en conversión,
          experiencia de usuario y diseño responsive.
        </p>

        <ul>
          <li>Diseño moderno orientado a negocios locales</li>
          <li>Maquetación semántica con HTML y Tailwind CSS</li>
          <li>Optimización para dispositivos móviles</li>
          <li>Estructura preparada para SEO y escalabilidad</li>
        </ul>
      </>
    ),
  },
},
];

export default trabajos;
