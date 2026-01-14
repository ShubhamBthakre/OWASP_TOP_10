// Same setup

// SECURE: Explicit role check
app.delete('/admin/delete-user/:id', auth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Forbidden: Admin only');
  }

  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('User not found');
  // Optional: prevent self-deletion or other business rules
  users.splice(index, 1);
  res.send('User deleted');
});

app.listen(3000, () => console.log('Secure vertical escalation server on port 3000'));