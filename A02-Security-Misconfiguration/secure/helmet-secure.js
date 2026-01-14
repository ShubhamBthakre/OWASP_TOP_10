// secure/helmet-secure.js
const express = require('express');
const helmet = require('helmet'); // npm install helmet

const app = express();

// Apply Helmet with reasonable secure defaults + some customization
app.use(
  helmet({
    // Recommended secure CSP (adjust according to your needs)
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'strict-dynamic'", "'nonce-randomNonceHere'"], // or use hashes
        styleSrc: ["'self'", "'unsafe-inline'"], // remove unsafe-inline in perfect world
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'", 'https://api.trusted-service.com'],
        frameAncestors: ["'none'"], // replaces X-Frame-Options
        upgradeInsecureRequests: [], // forces HTTPS
      },
    },

    // Very important headers
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    hsts: {
      maxAge: 31536000,           // 1 year
      includeSubDomains: true,
      preload: true,
    },
    noSniff: true,                  // X-Content-Type-Options: nosniff
    frameguard: { action: 'deny' }, // X-Frame-Options: DENY
    hidePoweredBy: true,            // Remove X-Powered-By header
    permittedCrossDomainPolicies: { policy: 'none' },
  })
);

// Simple protected route
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Ashwin',
    email: 'example@secure.app',
    message: 'This response is protected with security headers',
  });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Secure server with Helmet running on port ${PORT}`);
});


// npm install helmet