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
      categoria: "Java · Android · IA · Voz a Texto · IoT",
      github: "https://github.com/CarlosL-Code/App-Mobile-No-Touch",
      contenido: (
        <>
          <p>
            Aplicación móvil desarrollada para Android, enfocada en
            accesibilidad y automatización mediante comandos de voz. Permite el
            encendido y apagado de funciones a través de reconocimiento de voz,
            integrándose con dispositivos IoT para mejorar la interacción sin
            contacto y la experiencia del usuario.
          </p>

          <ul>
            <li>Encendido y apagado por comandos de voz</li>
            <li>Reconocimiento de voz con IA</li>
            <li>Integración con dispositivos IoT</li>
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
      nombre: "Sistema de monitoreo IoT para cultivo de orquídeas",
      categoria: "Java · Spring Boot · REST API · MySQL · ESP32 · MQTT · Azure",
      github: "https://github.com/CarlosL-Code/monitoreo-backend",
      contenido: (
        <>
          <p>
            Sistema IoT orientado al monitoreo de variables ambientales críticas
            para el cultivo de orquídeas. Permite la supervisión en tiempo real
            de condiciones como temperatura y humedad, facilitando la toma de
            decisiones para el cuidado óptimo de las plantas.
          </p>

          <ul>
            <li>Sensores conectados a ESP32</li>
            <li>Backend REST con Spring Boot</li>
            <li>Comunicación MQTT</li>
            <li>Despliegue en Azure</li>
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
      alt: "https://paveleads.com/",
    },
    info: {
      nombre: "Sitio web corporativo y soporte técnico — PAVELE Agency",
      categoria: "WordPress · Soporte Web · DNS · SSL · Hosting",
      github: "https://github.com/tuusuario/monitoreo-orquideas",
      contenido: (
        <>
          <p>
            Desarrollo y publicación de un sitio web corporativo en WordPress
            para PAVELE Agency. El proyecto incluyó la implementación del sitio,
            configuración técnica, dominio y ajustes de DNS, además de soporte
            técnico continuo para garantizar su correcto funcionamiento.
          </p>

          <ul>
            <li>Corrección de problemas DNS</li>
            <li>Configuración de hosting</li>
            <li>Soporte y ajustes en WordPress</li>
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
      alt: "Sitio Web Informativo para Taller Mecánico",
    },
    info: {
      nombre: "Sitio web informativo — Taller mecánico en Temuco",
      categoria: "WordPress · Diseño Web · Contacto Directo · Hosting",
      github: "https://github.com/tuusuario/monitoreo-orquideas",
      contenido: (
        <>
          <p>
            Sitio web informativo desarrollado en WordPress para un taller
            mecánico en Temuco, Chile. El proyecto estuvo enfocado en mejorar la
            presencia digital del negocio y facilitar el contacto con clientes
            mediante integración con WhatsApp, Google Maps y formularios de
            contacto.
          </p>

          <ul>
            <li>Diseño responsivo</li>
            <li>Presentación clara de servicios</li>
            <li>Contacto directo con clientes</li>
          </ul>
        </>
      ),
    },
  },
];

export default trabajos;
