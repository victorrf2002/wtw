const express = require("express");
const fetch = require("node-fetch");
const app = express();
const path = require("path");
const port = 3000;

// app.use(express.static('../script/main.js'))

//  Middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "../")));

//  API Key
const key = 'a2b8af37466283fe470ff2d6ee8699fc';

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

//  Fetch weather data endpoint
app.get('/api/weather', async (req, res) => {
    const { lat, lon, units } = req.query;

    if (!lat || !lon || !units) {
        return (res.status(400).json({ error: 'Missing parameters' }));
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});