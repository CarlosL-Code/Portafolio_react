const trabajos = [
  {
    id: 11,
    tipo: "proyecto",
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/cmms.png",
      alt: "Sistema CMMS",
    },
    info: {
      nombre: "Sistema de Gestin (CMMS)",
      categoria: "Software  Mantenimiento  Gestin",
      descripcion_corta: "Sistema de gestin de mantenimiento computarizado para optimizar la planificacin de rdenes de trabajo.",
      tags: ["SOFTWARE", "MANTENIMIENTO"],
      link: "https://youtu.be/MaIk5ZEa8oQ",
      textoBoton: "Ver Proyecto",
    },
  },
  {
    id: 12,
    tipo: "proyecto",
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/inventario.png", 
      alt: "Gestor de Inventario de Existencias",
    },
    info: {
      nombre: "Gestor de Inventario de Existencias",
      categoria: "Software  Inventario  Produccin",
      descripcion_corta: "Sistema avanzado de gestin de inventario para el control de materia prima, recetas y alertas automatizadas.",
      tags: ["SOFTWARE", "INVENTARIO"],
      link: "https://youtu.be/auZgoE2BTnk",
      textoBoton: "Ver Proyecto",
    },
  },
  {
    id: 7,
    tipo: "proyecto",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-1.png",
      alt: "E-commerce Confites San Juliǭn",
    },
    info: {
      nombre: "E-commerce Confites San Juliǭn",
      categoria: "E-commerce  Shopify  SEO",
      descripcion_corta: "Desarrollo de tienda online completa utilizando Shopify, con funcionalidades personalizadas y estrategias de SEO.",
      tags: ["E-COMMERCE", "SHOPIFY", "SEO"],
      link: "https://confitessanjulian.cl",
      textoBoton: "Ver Proyecto",
    },
  },
  {
    id: 13,
    tipo: "sitio-web",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/hmcmotors.png",
      alt: "Sitio Web HMC Motors",
    },
    info: {
      nombre: "Sitio Web HMC Automotora",
      categoria: "Web  Catǭlogo Automotriz",
      descripcion_corta: "Desarrollo de sitio web corporativo y catǭlogo para concesionaria automotriz, incluyendo servicio continuo de carga de inventario.",
      tags: ["DESARROLLO WEB", "CAT?LOGO"],
      link: "https://hmcautomotora.cl",
      textoBoton: "Ver Sitio Web",
    },
  },
  {
    id: 14,
    tipo: "sitio-web",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/gimnasio-elixir.png",
      alt: "Sitio Web Elixir Gym",
    },
    info: {
      nombre: "Sitio Web Elixir Gym",
      categoria: "Web  Creacin de Contenido",
      descripcion_corta: "Sitio web para gimnasio con muestra de instalaciones y planes. Incluye servicio integral de creacin de contenido audiovisual.",
      tags: ["DESARROLLO WEB", "CONTENIDO AUDIOVISUAL"],
      link: "https://web-gym-elixir.vercel.app/",
      textoBoton: "Ver Sitio Web",
    },
  },
  {
    id: 1,
    tipo: "proyecto",
    categoria: "desarrollo-mobile",
    thumb: {
      url: "./assets/trabajos/trabajo-1.png",
      alt: "No Touch Aplicacion Movil con Control por Voz",
    },
    info: {
      nombre: "App Android con control por voz",
      categoria: "Java  Android  IA  IoT",
      descripcion_corta: "Aplicacin Android orientada a accesibilidad capaz de ejecutar acciones mediante comandos de voz e integracin con IoT.",
      tags: ["JAVA", "ANDROID", "IA", "IOT"],
      link: "https://github.com/CarlosL-Code/App-Mobile-No-Touch",
      textoBoton: "Ver Proyecto",
    },
  },
  {
    id: 2,
    tipo: "proyecto",
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/trabajo-2.jpg",
      alt: "Sistema de Monitoreo IoT para Orqudeas",
    },
    info: {
      nombre: "Sistema IoT de monitoreo",
      categoria: "Spring Boot  REST API  MQTT  ESP32",
      descripcion_corta: "Sistema de monitoreo ambiental orientado al control de temperatura y humedad en tiempo real con sensores IoT.",
      tags: ["SPRING BOOT", "MQTT", "ESP32", "NODE-RED"],
      link: "https://github.com/CarlosL-Code/monitoreo-backend",
      textoBoton: "Ver Proyecto",
    },
  },
  {
    id: 8,
    tipo: "proyecto",
    categoria: "desarrollo-software",
    thumb: {
      url: "./assets/trabajos/automatizacion.png",
      alt: "Automatizacin Kame ERP",
    },
    info: {
      nombre: "Automatizacin facturas ERP",
      categoria: "Automatizacin  Flujos de trabajo",
      descripcion_corta: "Automatizacin inteligente para procesar e imprimir facturas automǭticamente directamente desde correos del ERP.",
      tags: ["AUTOMATIZACION", "WORKFLOWS"],
      link: "https://github.com/CarlosL-Code", 
      textoBoton: "Ver Proyecto",
    },
  },
  {
    id: 3,
    tipo: "sitio-web",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-3.png",
      alt: "PAVELEADS Agency",
    },
    info: {
      nombre: "Soporte y estabilizacin web",
      categoria: "WordPress  DNS  SSL  Hosting",
      descripcion_corta: "Soporte tǸcnico y estabilizacin de sitio corporativo en produccin para la agencia internacional PAVELEADS.",
      tags: ["WORDPRESS", "SOPORTE"],
      link: "https://paveleads.com/",
      textoBoton: "Ver Sitio Configurado",
    },
  },
  {
    id: 4,
    tipo: "sitio-web",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-4.png",
      alt: "Sitio Web Carserv",
    },
    info: {
      nombre: "Sitio web Carserv",
      categoria: "WordPress  Diseo Web",
      descripcion_corta: "Sitio web para taller mecǭnico en Temuco, enfocado en mejorar la presencia digital y el contacto con clientes.",
      tags: ["WORDPRESS", "DISE'O WEB"],
      link: "https://carserv.cl",
      textoBoton: "Ver Sitio Web",
    },
  },
  {
    id: 20,
    tipo: "proyecto",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/acerca-de-1.jpg", /* Placeholder using existing image */
      alt: "Portafolio Personal",
    },
    info: {
      nombre: "Portafolio Personal",
      categoria: "React  Vite  UI/UX",
      descripcion_corta: "Desarrollo de este mismo portafolio interactivo, enfocado en rendimiento y animaciones fluidas.",
      tags: ["REACT", "VITE", "UI/UX"],
      link: "https://carloslozanodev.com/",
      textoBoton: "Ver Proyecto",
    },
  },
  {
    id: 15,
    tipo: "demo",
    categoria: "desarrollo-software",
    thumb: {
      url: "https://via.placeholder.com/600x400/0B1121/38BDF8?text=CRM+Personal+Trainer", /* Placeholder */
      alt: "CRM Personal Trainer Demo",
    },
    info: {
      nombre: "CRM Personal Trainer",
      categoria: "Demo  CRM  Gestin",
      descripcion_corta: "Prototipo de CRM orientado a entrenadores personales para la gestin de alumnos, rutinas y seguimientos.",
      tags: ["DEMO", "CRM", "WEB APP"],
      link: "https://impulso-coach-crm-demo.vercel.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 16,
    tipo: "demo",
    categoria: "desarrollo-software",
    thumb: {
      url: "https://via.placeholder.com/600x400/0B1121/38BDF8?text=Sistema+Tickets", /* Placeholder */
      alt: "Levanta tu Ticket Demo",
    },
    info: {
      nombre: "Sistema Levantamiento de Tickets",
      categoria: "Demo  Helpdesk  Soporte",
      descripcion_corta: "Plataforma de demostracin para la gestin y seguimiento de tickets de soporte y requerimientos.",
      tags: ["DEMO", "HELPDESK", "WEB APP"],
      link: "https://levanta-tu-ticket.vercel.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 17,
    tipo: "demo",
    categoria: "desarrollo-web",
    thumb: {
      url: "https://via.placeholder.com/600x400/0B1121/38BDF8?text=Barberia+Barcelona", /* Placeholder */
      alt: "Barbera Barcelona Demo",
    },
    info: {
      nombre: "Web Barbera Barcelona",
      categoria: "Demo  Sitio Web  Reservas",
      descripcion_corta: "Propuesta de diseo web para barbera con integracin de servicios y catǭlogo de estilos.",
      tags: ["DEMO", "WEB", "UI/UX"],
      link: "https://barberia-barcelona.vercel.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 18,
    tipo: "demo",
    categoria: "desarrollo-web",
    thumb: {
      url: "https://via.placeholder.com/600x400/0B1121/38BDF8?text=Dr+Saravia", /* Placeholder */
      alt: "Dr. Saravia Oftalmlogo Demo",
    },
    info: {
      nombre: "Web Oftalmologa",
      categoria: "Demo  Salud  Profesional",
      descripcion_corta: "Demo de sitio web profesional para consulta mǸdica oftalmolgica.",
      tags: ["DEMO", "WEB", "SALUD"],
      link: "https://dr-jaime-saravia-gallardo-oftalm-lo.vercel.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 19,
    tipo: "demo",
    categoria: "desarrollo-web",
    thumb: {
      url: "https://via.placeholder.com/600x400/0B1121/38BDF8?text=Web+Floreria", /* Placeholder */
      alt: "Web Florera Demo",
    },
    info: {
      nombre: "Catǭlogo Web Florera",
      categoria: "Demo  Catǭlogo  Tienda",
      descripcion_corta: "Prototipo de catǭlogo online para venta de arreglos florales y regalos.",
      tags: ["DEMO", "CAT?LOGO"],
      link: "https://web-floreria.vercel.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 21,
    tipo: "demo",
    categoria: "desarrollo-web",
    thumb: {
      url: "https://via.placeholder.com/600x400/0B1121/38BDF8?text=Carlos+Barber", /* Placeholder */
      alt: "Carlos Barber Demo",
    },
    info: {
      nombre: "Web Carlos Barber Studio",
      categoria: "Demo  Landing Page",
      descripcion_corta: "Demo de landing page moderna para estudio de barbera.",
      tags: ["DEMO", "LANDING PAGE"],
      link: "https://carlos-barber-studio.vercel.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 22,
    tipo: "demo",
    categoria: "desarrollo-web",
    thumb: {
      url: "https://via.placeholder.com/600x400/0B1121/38BDF8?text=Holland", /* Placeholder */
      alt: "Holland Demo",
    },
    info: {
      nombre: "Web Holland Three",
      categoria: "Demo  Agencia",
      descripcion_corta: "Prototipo conceptual de pǭgina web para agencia o estudio creativo.",
      tags: ["DEMO", "AGENCIA"],
      link: "https://holland-three.vercel.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 6,
    tipo: "demo",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-6.png",
      alt: "Sistema de pedidos con QR y WhatsApp para restaurante chino",
    },
    info: {
      nombre: "App Pedidos Restaurante",
      categoria: "Next.js  React  TypeScript  Tailwind CSS",
      descripcion_corta: "Plataforma web orientada a pedidos en mesa mediante cdigo QR y envo automǭtico va WhatsApp.",
      tags: ["DEMO", "NEXT.JS", "TAILWIND"],
      link: "https://pagina-para-restaurante.netlify.app/",
      textoBoton: "Ver Demo",
    },
  },
  {
    id: 5,
    tipo: "demo",
    categoria: "desarrollo-web",
    thumb: {
      url: "./assets/trabajos/trabajo-5.png",
      alt: "Landing Page Pizzeria Proyecto Conceptual",
    },
    info: {
      nombre: "Landing page Pizzera",
      categoria: "HTML  Tailwind CSS  UX/UI",
      descripcion_corta: "Proyecto conceptual de demostracin comercial para negocios gastronmicos, optimizado para conversiones mviles.",
      tags: ["DEMO", "HTML", "TAILWIND"],
      link: "https://pizzeria-landing-demo-qmmq.vercel.app/index.html",
      textoBoton: "Ver Demo",
    }
  }
];

export default trabajos;
