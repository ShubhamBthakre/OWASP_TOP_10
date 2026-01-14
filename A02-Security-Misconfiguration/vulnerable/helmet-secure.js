const express = require('express');
const helmet = require('helmet'); // npm install helmet
const app = express();

// SECURE: Apply security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"]
    }
  },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
}));

app.get('/api/user', (req, res) => {
  res.json({ name: 'Alice', email: 'alice@example.com' });
});

app.listen(3000);