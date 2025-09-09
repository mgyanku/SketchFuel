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
const styles = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'styles', 'general.json'), 'utf8')).styles;
const prompts = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'prompts', 'general.json'), 'utf8')).prompts;

// Endpoint: returns all prompts
app.get('/prompts/all', (req, res) => {
  res.json(prompts);
});

// Endpoint: returns a random prompt with palette and style
app.get('/prompts/random', (req, res) => {
  const randomPrompt = randomItem(prompts);
  const randomPalette = randomItem(palettes);
  const randomStyle = randomItem(styles);

  const fullPrompt = `Draw a ${randomPrompt} using a ${randomPalette} color scheme in a ${randomStyle} style!`;

  res.json({ prompt: fullPrompt });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
