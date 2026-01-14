// secure/debug-disabled-secure.js
const express = require('express');
const app = express();

// IMPORTANT: Force production environment (hides detailed error messages)
app.set('env', 'production');

// Optional: trust proxy if behind reverse proxy/load balancer (e.g. nginx, Cloudflare)
app.set('trust proxy', 1);

// Middleware to parse JSON
app.use(express.json());

// Example route that could crash
app.get('/divide', (req, res, next) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return next(new Error('Invalid numbers'));
  }

  if (b === 0) {
    return next(new Error('Division by zero is not allowed'));
  }

  res.json({ result: a / b });
});

// Secure global error handler - NEVER leak stack traces to client
app.use((err, req, res, next) => {
  // Log the real error privately (to console, file, or monitoring system)
  console.error('Error occurred:', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    time: new Date().toISOString()
  });

  // Return generic, safe response to the client
  const status = err.status || 500;
  res.status(status).json({
    error: status === 500 ? 'Internal Server Error' : err.message,
    // Never include technical details
  });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Secure production server running on port ${PORT} (debug mode DISABLED)`);
});