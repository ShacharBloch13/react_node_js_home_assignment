const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;
const API_KEY = process.env.PIXABAY_API_KEY;

app.use(cors());

app.get('/api/images', async (req, res) => {
    const { category, page = 1 } = req.query;
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${category}&page=${page}&per_page=9`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images from Pixabay' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
