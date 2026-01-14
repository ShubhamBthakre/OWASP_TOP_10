const express = require('express');
const cors = require('cors');
const app = express();

// VULNERABLE: Wildcard CORS with credentials
app.use(cors({
  origin: '*',
  credentials: true
}));

app.get('/private-data', (req, res) => {
  res.json({ secret: 'This should not be accessible from anywhere' });
});

app.listen(3000);