
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

let dataFile = 'database.json';
let wishes = fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile)) : {};

app.post('/create-wish', (req, res) => {
  const name = req.body.name;
  const id = Math.random().toString(36).substring(2, 8);
  wishes[id] = name;
  fs.writeFileSync(dataFile, JSON.stringify(wishes));
  res.json({ link: `/wish.html?id=${id}` });
});

app.get('/get-name/:id', (req, res) => {
  const id = req.params.id;
  const name = wishes[id] || "Friend";
  res.json({ name });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
