import React, { useState, useEffect } from "react";
import DepthCarousel from "../ui/DepthCarousel";

const mockInstagram = [
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    alt: 'Aprende React'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    alt: 'Tips de Desarrollo'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    alt: 'Servicios Web'
  }
];

const InstagramFeed = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);

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
            alt: post.prunedCaption ? post.prunedCaption.substring(0, 30) + '...' : 'Instagram Post'
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

  return (
    <section className="instagram-section anim-scroll" style={{ padding: '80px 0', textAlign: 'center', overflow: 'hidden' }}>
      <h2 className="seo-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Mi Instagram</h2>
      <p className="subtitulo-premium" style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
        Sígueme para contenido educativo, tips de desarrollo y novedades de servicios.
      </p>
      
      <div style={{ height: '500px', position: 'relative', width: '100%', maxWidth: '100vw' }}>
        <DepthCarousel
          items={galleryItems}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection="right"
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={6}
          autoplay={false}
          loop
          cardWidth={300}
          cardHeight={380}
          radius={18}
          tint="#05060a"
          duration={700}
          ease="power3.out"
          autoplayDelay={3200}
          showControls
          showIndicators
          onItemClick={(item) => {
            if (item && item.link) {
              window.open(item.link, '_blank', 'noopener,noreferrer');
            }
          }}
        />
      </div>
    </section>
  );
};

export default InstagramFeed;
