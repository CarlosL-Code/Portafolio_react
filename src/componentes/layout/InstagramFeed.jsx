import React, { useState, useEffect } from "react";
import DepthCarousel from "../ui/DepthCarousel";
import StrokeText from "../ui/StrokeText";
import "./InstagramFeed.css";

const mockInstagram = [
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    alt: 'Aprende React',
    caption: 'Descubre los mejores tips para dominar React y llevar tus habilidades al siguiente nivel.'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    alt: 'Tips de Desarrollo',
    caption: 'Estructura tus proyectos como un profesional. Evita estos errores comunes al empezar.'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    alt: 'Servicios Web',
    caption: 'Una página web rápida y optimizada puede duplicar tus ventas en un mes. Contáctame.'
  }
];

const InstagramFeed = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('https://feeds.behold.so/PRgVp5gmR44u9PcPQA87')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (data && data.posts && Array.isArray(data.posts)) {
          const formatted = data.posts.map(post => ({
            image: post.sizes?.large?.mediaUrl || post.mediaUrl,
            link: post.permalink,
            alt: post.prunedCaption ? post.prunedCaption.substring(0, 30) + '...' : 'Instagram Post',
            caption: post.prunedCaption || 'Visita mi perfil para leer más.'
          }));
          setInstagramPosts(formatted);
        } else {
          setInstagramPosts(mockInstagram);
        }
      })
      .catch(err => {
        console.error("Error al obtener Instagram, usando datos simulados:", err);
        setInstagramPosts(mockInstagram);
      });
  }, []);

  const galleryItems = instagramPosts.length > 0 ? instagramPosts : mockInstagram;
  const activePost = galleryItems[activeIndex] || galleryItems[0];

  return (
    <section className="aprendizaje-section anim-scroll" id="aprendizaje">
      <div className="aprendizaje-container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Lado Izquierdo: Galería */}
        <div className="aprendizaje-galeria">
          <DepthCarousel
            items={galleryItems}
            depth={180}
            spread={70}
            tilt={20}
            tiltDirection="left"
            perspective={1200}
            visibleCards={4}
            falloff={0.15}
            blur={4}
            autoplay={false}
            loop
            cardWidth={280}
            cardHeight={360}
            radius={18}
            tint="#05060a"
            duration={700}
            ease="power3.out"
            autoplayDelay={3200}
            showControls
            showIndicators={false}
            onChange={(idx) => setActiveIndex(idx)}
            onItemClick={(item) => {
              if (item && item.link) {
                window.open(item.link, '_blank', 'noopener,noreferrer');
              }
            }}
          />
        </div>

        {/* Lado Derecho: Información Dinámica */}
        <div className="aprendizaje-info">
          <div style={{ width: '100%', maxWidth: '400px', marginBottom: '10px' }}>
            <StrokeText
              text="Aprendizaje"
              fontSize={72}
              strokeWidth={1.5}
              strokeColor="var(--primario)"
              fillColor="currentColor"
              trigger="scroll"
            />
          </div>
          <h3 className="subtitulo-premium">Valor que transforma tu negocio</h3>
          
          <div className="aprendizaje-dinamico">
            <p className="aprendizaje-texto">
              {activePost?.caption}
            </p>
            <button 
              className="boton btn-primario btn-aprendizaje"
              onClick={() => window.open(activePost?.link, '_blank', 'noopener,noreferrer')}
            >
              Leer publicación completa &rarr;
            </button>
          </div>
          
          <p className="aprendizaje-nota">
            * Desliza el carrusel para descubrir más contenido. <br/>
            Si estás en PC, puedes hacer scroll libremente en esta zona derecha.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;
