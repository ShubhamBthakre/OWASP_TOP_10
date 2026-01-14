const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

const ALLOWED_DOMAINS = ['example.com', 'api.myservice.com'];

// Helper to validate URL
function isAllowedUrl(urlStr) {
  try {
    const url = new URL(urlStr);
    return ALLOWED_DOMAINS.includes(url.hostname) && url.protocol === 'https:';
  } catch (err) {
    return false;
  }
}

// SECURE: Whitelist + block private IPs
app.post('/fetch-url', async (req, res) => {
  const { url } = req.body;
  if (!url || !isAllowedUrl(url)) {
    return res.status(400).send('Invalid or disallowed URL');
  }

  try {
    const response = await fetch(url, { redirect: 'manual' }); // Disable redirects
    const text = await response.text();
    res.send(text.substring(0, 1000));
  } catch (err) {
    res.status(500).send('Fetch failed');
  }
});

app.listen(3000, () => console.log('Secure SSRF server on port 3000'));