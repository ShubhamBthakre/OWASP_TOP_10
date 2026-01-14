# Prevention Checklist - A02:2025 Security Misconfiguration

Use this during setup, CI/CD, code review, and deployment.

### General Hardening
- [ ] **Disable Debug/Development Mode** in production (Express: `app.set('env', 'production')`)
- [ ] **Never expose stack traces/errors** to clients — use generic "Internal Server Error" messages
- [ ] **Remove sample/test applications**, default users, backup files, and admin consoles
- [ ] **Disable directory listing** on web servers (nginx/Apache/Express static)
- [ ] **Change ALL default credentials** — databases, admin panels, cloud services

### Security Headers (Use Helmet.js in Express)
- [ ] **Content-Security-Policy** (CSP) — restrict sources of scripts/styles
- [ ] **X-Content-Type-Options: nosniff**
- [ ] **X-Frame-Options: DENY** or SAMEORIGIN
- [ ] **Strict-Transport-Security** (HSTS) — force HTTPS
- [ ] **X-XSS-Protection** (legacy, but still useful)
- [ ] **Referrer-Policy: strict-origin-when-cross-origin**

### CORS Configuration
- [ ] **Never use wildcard `*`** in production
- [ ] **Explicitly list allowed origins**
- [ ] **Set `credentials: true` only when really needed** (and combine with tight origins)

### Cloud & Infrastructure
- [ ] **Scan IaC** (Terraform, CloudFormation, K8s manifests) with tools like Checkov, tfsec
- [ ] **Least privilege IAM roles** — no wildcard permissions
- [ ] **Block public access** on S3 buckets, databases, etc.
- [ ] **Enable logging & monitoring** of config changes (CloudTrail, Config)

### Operations & Deployment
- [ ] **Automate secure baselines** — use Docker hardening, CIS benchmarks
- [ ] **Regular config audits** — tools like Trivy, ScoutSuite for cloud
- [ ] **Environment separation** — different configs for dev/staging/prod
- [ ] **Dependency scanning** — but remember this overlaps with A03

### Testing
- [ ] **Run automated scanners** — OWASP ZAP, Nuclei, Nikto for misconfigs
- [ ] **Check headers** with securityheaders.com or observatory.mozilla.org
- [ ] **Verify production behavior** — never trust "it works in dev"

### Quick Express Wins
- [ ] `npm install helmet express-rate-limit`
- [ ] Use `morgan` for logging (combined format) but no sensitive data
- [ ] Rate limit APIs to prevent brute-force on misconfigured endpoints