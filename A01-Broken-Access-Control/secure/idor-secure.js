const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET = 'secret-key';

// Fake DB
const users = [
  { id: 1, username: 'alice', email: 'alice@example.com', role: 'user' },
  { id: 2, username: 'bob', email: 'bob@example.com', role: 'user' },
  { id: 999, username: 'admin', email: 'admin@example.com', role: 'admin' }
];

// Helper to generate JWT (simulate login)
function generateToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, SECRET);
}

// Auth middleware (just verifies token, no further checks)
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
}

// VULNERABLE: No ownership check → IDOR
app.get('/profile/:id', auth, (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);  // Anyone can view any profile by changing :id
});

app.listen(3000, () => console.log('Vulnerable IDOR server running on port 3000'));