const express = require('express');
const cors = require('cors');
const app = express();

// SECURE: Tight CORS policy
app.use(cors({
  origin: 'https://trusted-frontend.com', // ← Only your domain!
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/private-data', (req, res) => {
  res.json({ secret: 'Safe from cross-origin attacks' });
});

app.listen(3000);