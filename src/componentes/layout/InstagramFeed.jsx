import React, { useState, useEffect } from "react";
import CircularGallery from "../ui/CircularGallery";

const mockInstagram = [
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    text: 'Aprende React'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    text: 'Tips de Desarrollo'
  },
  {
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.instagram.com/carloslozano.dev/',
    text: 'Servicios Web'
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
            text: post.prunedCaption ? post.prunedCaption.substring(0, 30) + '...' : 'Instagram Post'
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
      
      <div style={{ height: '500px', position: 'relative', width: '100%', maxWidth: '100vw', left: '50%', transform: 'translateX(-50%)' }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          font="bold 30px Orbitron, sans-serif"
          scrollSpeed={2}
          items={galleryItems}
        />
      </div>
    </section>
  );
};

export default InstagramFeed;
