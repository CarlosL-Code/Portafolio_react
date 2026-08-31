require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Almacenamos los posts en caché por 1 hora para no exceder los límites de la API de Instagram
let cache = {
    data: null,
    lastFetch: 0
};

app.get('/api/instagram', async (req, res) => {
    const now = Date.now();
    
    // Si tenemos datos en caché y no ha pasado 1 hora (3600000 ms)
    if (cache.data && (now - cache.lastFetch) < 3600000) {
        return res.json(cache.data);
    }

    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!token) {
        return res.status(500).json({ error: 'INSTAGRAM_ACCESS_TOKEN no configurado en el servidor' });
    }

    try {
        // Obtenemos los medios del usuario
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`;
        const response = await axios.get(url);
        
        // Filtramos y formateamos para el frontend
        const posts = response.data.data
            .filter(post => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' || post.media_type === 'VIDEO')
            .slice(0, 10) // Tomar los últimos 10 posts
            .map(post => ({
                id: post.id,
                image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
                link: post.permalink,
                text: post.caption ? post.caption.split('\n')[0].substring(0, 30) + '...' : 'Instagram Post'
            }));

        cache.data = posts;
        cache.lastFetch = now;
        
        res.json(posts);
    } catch (error) {
        console.error('Error fetching from Instagram API:', error.response?.data || error.message);
        res.status(500).json({ error: 'Error al comunicarse con la API de Instagram' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor de Instagram proxy escuchando en el puerto ${PORT}`);
});
