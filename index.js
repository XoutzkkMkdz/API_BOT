const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/frase', (req, res) => {
  fs.readFile('./frases.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ erro: 'Erro ao ler arquivo de frases' });

    const json = JSON.parse(data);
    const frases = json.frases;
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    res.json({ frase: fraseAleatoria });
  });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
