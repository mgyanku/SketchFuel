const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

// Function to pick a random item from an array
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Load palettes, styles, and prompts once at startup
const palettes = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'colors', 'general.json'), 'utf8')).palettes;
const mood = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'moods', 'general.json'), 'utf8')).moods;
const prompts = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'prompts', 'general.json'), 'utf8')).prompts;
const hexcodes = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'hexcodes', 'general.json'), 'utf8')).palettes;

// Endpoint: returns all prompts
app.get('/prompts/all', (req, res) => {
  res.json(prompts);
});

// Endpoint: returns a random prompt with palette and style
app.get('/prompts/random', (req, res) => {
  const randomPrompt = randomItem(prompts);
  const randomPalette = randomItem(palettes);
  const randomMood = randomItem(mood);

  const fullPrompt = `Draw a ${randomPrompt} using a ${randomPalette} color scheme with a ${randomMood} feeling!`;

  res.json({ prompt: fullPrompt });
});

app.get('/hexcodes/all', (req, res) => {
  res.json(hexcodes);
});

app.get('/hexcodes/random', (req, res) => {
  res.json(randomItem(hexcodes));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
