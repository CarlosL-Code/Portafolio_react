import axios from 'axios';

// Caché en memoria (válida mientras la instancia serverless esté caliente)
let cache = {
    data: null,
    lastFetch: 0
};

export default async function handler(req, res) {
    const now = Date.now();
    
    // Habilitar CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Si tenemos datos en caché y no ha pasado 1 hora (3600000 ms)
    if (cache.data && (now - cache.lastFetch) < 3600000) {
        return res.status(200).json(cache.data);
    }

    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!token) {
        return res.status(500).json({ error: 'INSTAGRAM_ACCESS_TOKEN no configurado en Vercel' });
    }

    try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`;
        const response = await axios.get(url);
        
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
        
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching from Instagram API:', error.response?.data || error.message);
        res.status(500).json({ error: 'Error al comunicarse con la API de Instagram' });
    }
}
