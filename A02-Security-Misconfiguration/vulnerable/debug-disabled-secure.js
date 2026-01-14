const express = require('express');
const app = express();

app.set('env', 'production'); // ← Hide detailed errors

// Custom error handler – safe for production
app.use((err, req, res, next) => {
  console.error(err); // Log privately
  res.status(500).json({ error: 'Internal Server Error' }); // Generic message
});

// Example endpoint
app.get('/divide', (req, res, next) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (b === 0) return next(new Error('Division by zero'));
  res.json({ result: a / b });
});

app.listen(3000, () => console.log('Secure production server on 3000'));