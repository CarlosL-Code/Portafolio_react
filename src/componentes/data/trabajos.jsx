const trabajos = [
  {
    id: 11,
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/cmms.png",
      alt: "Sistema CMMS",
    },
    info: {
      nombre: "Sistema de Gestión (CMMS)",
      categoria: "Software · Mantenimiento · Gestión",
      descripcion_corta: "Sistema de gestión de mantenimiento computarizado para optimizar la planificación de órdenes de trabajo.",
      tags: ["SOFTWARE", "MANTENIMIENTO"],
      link: "https://youtube.com", /* Placeholder Video */
      contenido: null,
    },
  },
  {
    id: 12,
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/inventario.png", 
      alt: "Gestor de Inventario de Existencias",
    },
    info: {
      nombre: "Gestor de Inventario de Existencias",
      categoria: "Software · Inventario · Producción",
      descripcion_corta: "Sistema avanzado de gestión de inventario para el control de materia prima, recetas y alertas automatizadas.",
      tags: ["SOFTWARE", "INVENTARIO"],
      link: "https://youtube.com", /* Placeholder Video */
      contenido: null,
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
      descripcion_corta: "Desarrollo de tienda online completa utilizando Shopify, con funcionalidades personalizadas y estrategias de SEO.",
      tags: ["E-COMMERCE", "SHOPIFY", "SEO"],
      link: "https://confitessanjulian.cl",
      contenido: null,
    },
  },
  {
    id: 13,
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/hmc-motors.png", /* Imagen pendiente de subir */
      alt: "Sitio Web HMC Motors",
    },
    info: {
      nombre: "Sitio Web HMC Automotora",
      categoria: "Web · Catálogo Automotriz",
      descripcion_corta: "Desarrollo de sitio web corporativo y catálogo para concesionaria automotriz, incluyendo servicio continuo de carga de inventario.",
      tags: ["DESARROLLO WEB", "CATÁLOGO"],
      link: "https://hmcautomotora.cl",
      contenido: null,
    },
  },
  {
    id: 14,
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/elixir-gym.png", /* Imagen pendiente de subir */
      alt: "Sitio Web Elixir Gym",
    },
    info: {
      nombre: "Sitio Web Elixir Gym",
      categoria: "Web · Creación de Contenido",
      descripcion_corta: "Sitio web para gimnasio con muestra de instalaciones y planes. Incluye servicio integral de creación de contenido audiovisual.",
      tags: ["DESARROLLO WEB", "CONTENIDO AUDIOVISUAL"],
      link: "#", /* Placeholder para la URL de Elixir Gym */
      contenido: null,
    },
  },
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
      descripcion_corta: "Aplicación Android orientada a accesibilidad capaz de ejecutar acciones mediante comandos de voz e integración con IoT.",
      tags: ["JAVA", "ANDROID", "IA", "IOT"],
      link: "https://github.com/CarlosL-Code/App-Mobile-No-Touch",
      contenido: null,
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
      nombre: "Sistema de pedidos para restaurante",
      categoria: "Next.js · React · TypeScript · Tailwind CSS",
      descripcion_corta: "Plataforma web orientada a pedidos en mesa mediante código QR y envío automático vía WhatsApp.",
      tags: ["NEXT.JS", "REACT", "TAILWIND"],
      link: "https://pagina-para-restaurante.netlify.app/",
      contenido: null,
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
      descripcion_corta: "Sistema de monitoreo ambiental orientado al control de temperatura y humedad en tiempo real con sensores IoT.",
      tags: ["SPRING BOOT", "MQTT", "ESP32"],
      link: "https://github.com/CarlosL-Code/monitoreo-backend",
      contenido: null,
    },
  },
  {
    id: 8,
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/automatizacion.png",
      alt: "Automatización Kame ERP",
    },
    info: {
      nombre: "Automatización facturas Kame ERP",
      categoria: "Automatización · Flujos de trabajo",
      descripcion_corta: "Automatización inteligente para procesar e imprimir facturas automáticamente directamente desde correos del ERP.",
      tags: ["AUTOMATIZACIÓN", "WORKFLOWS"],
      link: "https://github.com/CarlosL-Code", 
      contenido: null,
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
      nombre: "Soporte y estabilización web",
      categoria: "WordPress · DNS · SSL · Hosting",
      descripcion_corta: "Soporte técnico y estabilización de sitio corporativo en producción para la agencia internacional PAVELEADS.",
      tags: ["WORDPRESS", "DNS", "SSL"],
      link: "https://paveleads.com/",
      contenido: null,
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
      nombre: "Sitio web informativo Carserv",
      categoria: "WordPress · Diseño Web",
      descripcion_corta: "Sitio web para taller mecánico en Temuco, enfocado en mejorar la presencia digital y el contacto con clientes.",
      tags: ["WORDPRESS", "DISEÑO WEB"],
      link: "https://carserv.cl",
      contenido: null,
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
      nombre: "Landing page comercial para pizzería",
      categoria: "HTML · Tailwind CSS · UX/UI",
      descripcion_corta: "Proyecto conceptual de demostración comercial para negocios gastronómicos, optimizado para conversiones móviles.",
      tags: ["HTML", "TAILWIND", "UX/UI"],
      link: "https://pizzeria-landing-demo-qmmq.vercel.app/index.html",
      contenido: null,
    },
  }
];

export default trabajos;
