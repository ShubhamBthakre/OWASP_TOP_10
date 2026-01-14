// secure/cors-secure.js
const express = require('express');
const cors = require('cors'); // npm install cors

const app = express();

// VERY STRICT CORS configuration
app.use(
  cors({
    origin: [
      'https://your-frontend-domain.com',
      'https://staging.your-frontend-domain.com',
      'http://localhost:5173', // only for local dev - remove in production!
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,               // only if you really need cookies/auth headers
    maxAge: 86400,                   // cache preflight 24 hours
    optionsSuccessStatus: 204,
  })
);

// Protected API endpoint
app.get('/api/private-data', (req, res) => {
  res.json({
    secret: 'This data is only accessible from allowed origins',
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Secure CORS server running on port ${PORT}`);
});

// npm install cors