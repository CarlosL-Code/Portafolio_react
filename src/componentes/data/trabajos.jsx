const trabajos = [
  {
    id: 1,
    categoria: "desarrollo-mobile",
    thumb: {
      url: "./assets/trabajos/trabajo-1.png",
      alt: "No Touch – Aplicación Móvil con Control por Voz",
    },
    info: {
      nombre: "No Touch – Aplicación Móvil con Control por Voz",
      categoria: "Java · Android · IA · Voz a Texto · IoT",
      contenido: (
        <>
          <p>
            Desarrollo de una aplicación móvil Android que permite encender y
            apagar una ampolleta mediante comandos de voz, facilitando la
            interacción del usuario sin necesidad de contacto físico con el
            dispositivo.
          </p>

          <p>
            La aplicación utiliza reconocimiento de voz y procesamiento básico
            de lenguaje natural para interpretar las órdenes del usuario,
            integrando inteligencia artificial para mejorar la precisión de los
            comandos. La comunicación con el sistema de encendido se realiza de
            forma eficiente y segura, demostrando un caso práctico de
            automatización e integración IoT.
          </p>

          <p>
            El proyecto fue desarrollado como una solución funcional orientada a
            la accesibilidad y comodidad del usuario, aplicando buenas prácticas
            de desarrollo móvil y pruebas de funcionamiento en un entorno real.
          </p>

          <img
            src="./assets/trabajos/trabajo-1.png"
            alt="Aplicación No Touch controlando ampolleta mediante voz"
          />
        </>
      ),
    },
  },

  {
    id: 2,
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/trabajo-2.png",
      alt: "Sistema de Monitoreo IoT para Orquídeas",
    },
    info: {
      nombre: "Sistema de Monitoreo Orquídeas",
      categoria:
        "Java · Spring Boot · REST API · MySQL · ESP32 · MQTT · Azure",
      contenido: (
        <>
          <p>
            Desarrollo de un sistema de monitoreo IoT orientado al cuidado de
            orquídeas, permitiendo la recolección y visualización de datos
            ambientales en tiempo real, como temperatura y humedad, obtenidos
            desde sensores conectados a un microcontrolador ESP32.
          </p>

          <p>
            El proyecto se estructuró separando completamente el backend y el
            frontend. El backend fue implementado mediante una API REST
            desarrollada en Java con Spring Boot, encargada de recibir, procesar
            y almacenar los datos en una base de datos MySQL.
          </p>

          <p>
            Para la comunicación entre los dispositivos IoT y el backend se
            utilizó el protocolo MQTT, gestionado mediante Node-RED, facilitando
            la suscripción, procesamiento y envío de los datos provenientes de
            los sensores.
          </p>

          <p>
            La API fue contenerizada y desplegada en la nube utilizando Azure,
            asegurando disponibilidad, escalabilidad básica y acceso remoto al
            sistema. El frontend web consume la API para mostrar los datos de
            forma clara e intuitiva a través de un dashboard interactivo.
          </p>

          <img
            src="./assets/trabajos/trabajo-2.png"
            alt="Dashboard web del sistema de monitoreo de orquídeas"
          />
        </>
      ),
    },
  },

  {
    id: 3,
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-3.png",
      alt: "Paveleads – Sitio Web y Soporte Técnico Internacional",
    },
    info: {
      nombre: "Paveleads – Sitio Web y Soporte Técnico Internacional",
      categoria: "WordPress · Soporte Web · DNS · SSL · Hosting",
      contenido: (
        <>
          <p>
            Soporte técnico y colaboración en el desarrollo del sitio web
            paveleads.com, orientado a servicios digitales y generación de
            leads. El trabajo incluyó la resolución de problemas de
            visualización del sitio en la región de México, donde la página no
            era accesible correctamente.
          </p>

          <p>
            Se realizó la revisión y configuración de registros DNS,
            actualización de la dirección IP y correcta asignación del servidor
            de hosting, asegurando que el dominio apuntara al servidor adecuado
            y restableciendo la disponibilidad del sitio en la región afectada.
          </p>

          <p>
            Además, se brindó apoyo en el desarrollo y ajustes del sitio en
            WordPress, contribuyendo a la mejora de su funcionamiento general y
            estabilidad en un entorno de producción internacional.
          </p>

          <img
            src="./assets/trabajos/trabajo-2.png"
            alt="Sitio web Paveleads funcionando correctamente"
          />
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
      nombre: "Sitio Web Informativo – Taller Mecánico",
      categoria: "WordPress · Diseño Web · Contacto Directo · Hosting",
      contenido: (
        <>
          <p>
            Desarrollo de un sitio web informativo para un taller mecánico,
            enfocado en presentar de forma clara sus servicios, experiencia y
            medios de contacto. El objetivo principal fue facilitar la conexión
            directa con los clientes, permitiendo consultas rápidas y acceso
            inmediato a información relevante del negocio.
          </p>

          <p>
            El proyecto incluyó la estructura completa del sitio, diseño
            responsivo, optimización de contenido y configuración básica de
            hosting y dominio, asegurando una presencia profesional y accesible
            en línea.
          </p>

          <img
            src="./assets/trabajos/trabajo-2.png"
            alt="Vista previa sitio web taller mecánico"
          />
        </>
      ),
    },
  },
];
export default trabajos;
