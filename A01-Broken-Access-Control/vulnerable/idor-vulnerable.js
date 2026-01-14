// Same setup as vulnerable idor (requires, app, SECRET, users, generateToken, auth)

// SECURE: Enforce ownership (or admin bypass)
app.get('/profile/:id', auth, (req, res) => {
  const requestedId = parseInt(req.params.id);
  const user = users.find(u => u.id === requestedId);
  if (!user) return res.status(404).send('User not found');

  // Ownership check
  if (req.user.id !== requestedId && req.user.role !== 'admin') {
    return res.status(403).send('Forbidden: You can only view your own profile');
  }

  res.json(user);
});

app.listen(3000, () => console.log('Secure IDOR server on port 3000'));