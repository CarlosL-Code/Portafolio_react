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
    id: 6,
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-6.png",
      alt: "Sistema de pedidos con QR y WhatsApp para restaurante chino",
    },
    info: {
      nombre: "Sistema de pedidos que incluye WhatsApp para restaurante chino",
      categoria: "Next.js · React · TypeScript · Tailwind CSS · Framer Motion",
      github: "https://pagina-para-restaurante.netlify.app/",
      contenido: (
        <>
         <p>
          Plataforma web profesional desarrollada con Next.js para restaurantes
          de comida china, orientada a pedidos en mesa mediante código QR y envío
          automático del pedido vía WhatsApp.
        </p>
        <p>
          El sistema permite que el cliente escanee un código QR desde su mesa,
          acceda al menú digital, seleccione múltiples platos, controle
          cantidades y envíe el pedido completo directamente al WhatsApp del
          restaurante.
        </p>
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
  {
    id: 7,
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-1.png",
      alt: "E-commerce Confites San Julián",
    },
    info: {
      nombre: "E-commerce Confites San Julián",
      categoria: "E-commerce · Shopify · SEO",
      github: null,
      contenido: (
        <>
          <p>
            <strong>Problema:</strong> La empresa necesitaba modernizar completamente su presencia digital
            mediante una tienda online profesional para escalar sus ventas.
          </p>
          <p>
            <strong>Solución:</strong> Diseñé y desarrollé un e-commerce completo utilizando Shopify,
            creando funcionalidades personalizadas sin recurrir a temas premium
            costosos.
          </p>
          <p><strong>Mi participación:</strong></p>
          <ul>
            <li>Personalización profunda de Shopify mediante Liquid.</li>
            <li>Programación de componentes visuales propios (HTML, CSS, JS).</li>
            <li>Implementación de estrategias SEO técnico.</li>
          </ul>
        </>
      ),
    },
  },
  {
    id: 8,
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/trabajo-2.png",
      alt: "Automatización Kame ERP",
    },
    info: {
      nombre: "Automatización de impresión de facturas Kame ERP",
      categoria: "Automatización · Flujos de trabajo",
      github: null,
      contenido: (
        <>
          <p>
            <strong>Problema:</strong> El proceso de recepción e impresión de facturas enviadas desde
            el sistema Kame ERP debía realizarse de manera manual, consumiendo
            tiempo.
          </p>
          <p>
            <strong>Solución:</strong> Desarrollé una automatización inteligente capaz de identificar
            únicamente los correos provenientes del ERP y enviar las facturas automáticamente a impresión.
          </p>
          <p><strong>Resultado:</strong> Reducción del 100% de las tareas manuales de impresión.</p>
        </>
      ),
    },
  },
  {
    id: 9,
    categoria: "desarrollo-web", /* Contenido visual */
    thumb: {
      url: "./assets/trabajos/trabajo-3.png",
      alt: "Contenido Audiovisual San Julián",
    },
    info: {
      nombre: "Contenido Audiovisual para Confites San Julián",
      categoria: "Marketing Digital · IA · Audiovisual",
      github: null,
      contenido: (
        <>
          <p>
            <strong>Problema:</strong> La empresa presentaba deficiencias en su imagen corporativa en
            redes sociales y necesitaba contenido dinámico y atractivo.
          </p>
          <p>
            <strong>Solución:</strong> Implementación de una estrategia de creación continua de contenido
            audiovisual moderno, apalancándose en Inteligencia Artificial.
          </p>
          <p><strong>Mi participación:</strong></p>
          <ul>
            <li>Dirección y toma de fotografía de productos.</li>
            <li>Edición profesional de imágenes y video.</li>
          </ul>
        </>
      ),
    },
  },
  {
    id: 10,
    categoria: "desarrollo-software", /* Redes / Infraestructura */
    thumb: {
      url: "./assets/trabajos/trabajo-4.png",
      alt: "Infraestructura Cámaras Dahua",
    },
    info: {
      nombre: "Configuración de infraestructura de cámaras Dahua",
      categoria: "Redes · Soporte IT · Infraestructura",
      github: null,
      contenido: (
        <>
          <p>
            <strong>Problema:</strong> La empresa requería visualizar y gestionar sus cámaras de 
            seguridad IP (Dahua) de forma remota y segura.
          </p>
          <p>
            <strong>Solución:</strong> Configuración de red avanzada para permitir el ruteo seguro
            de la señal de las cámaras IP entre ambas infraestructuras.
          </p>
          <p><strong>Mi participación:</strong></p>
          <ul>
            <li>Investigación de topología de red existente.</li>
            <li>Configuración de dispositivos (routers/NVR).</li>
          </ul>
        </>
      ),
    },
  }
];

export default trabajos;
