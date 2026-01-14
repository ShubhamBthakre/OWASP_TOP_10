const express = require('express');
const app = express();

// VULNERABLE: Debug mode + detailed errors in production
app.set('env', 'development'); // ← This leaks stack traces!

app.get('/divide', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = a / b; // Crash on /0
  res.json({ result });
});

// Global error handler leaks everything
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Error: ${err.message}\n${err.stack}`); // ← Leaks paths, versions, etc.
});

app.listen(3000, () => console.log('Vulnerable debug server on 3000'));