/**
 * `index.js`
 * 
 * This file sets up an Express.js server to handle API requests for fetching images from Pixabay.
 * It includes routes for fetching images based on a category
 * The server runs on port 5000 and uses environment variables for API keys.
 */


const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { spawn } = require('child_process');
require('dotenv').config();

const app = express();
const PORT = 5000;
const API_KEY = process.env.PIXABAY_API_KEY;


app.use(cors());
app.use(express.json());

app.get('/api/images', async (req, res) => {
    const { category, page = 1 } = req.query;
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${category}&page=${page}&per_page=9`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images from Pixabay' });
    }
});


