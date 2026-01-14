const express = require('express');
const fetch = require('node-fetch'); // npm install node-fetch@2
const app = express();
app.use(express.json());

// No auth needed for this example

// VULNERABLE: Fetches any URL provided by user
app.post('/fetch-url', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).send('URL required');
  try {
    const response = await fetch(url);
    const text = await response.text();
    res.send(text.substring(0, 1000)); // Truncate for demo
  } catch (err) {
    res.status(500).send('Fetch failed');
  }
});

app.listen(3000, () => console.log('Vulnerable SSRF server on port 3000'));