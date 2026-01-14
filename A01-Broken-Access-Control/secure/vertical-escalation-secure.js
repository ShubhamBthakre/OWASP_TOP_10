// Same setup as above (copy the requires, app, SECRET, users, generateToken, auth)

// VULNERABLE: Admin endpoint hidden in UI but no server-side role check
app.delete('/admin/delete-user/:id', auth, (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('User not found');
  users.splice(index, 1);
  res.send('User deleted');
});

app.listen(3000, () => console.log('Vulnerable vertical escalation server on port 3000'));