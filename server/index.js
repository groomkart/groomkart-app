// server/index.js
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: Date.now() });
});

app.get('/api/services', (req, res) => {
  // temporary static data
  res.json([
    { id: 1, title: 'Haircut', price: 250 },
    { id: 2, title: 'Shave', price: 120 },
    { id: 3, title: 'Facial', price: 400 }
  ]);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on ${port}`));
