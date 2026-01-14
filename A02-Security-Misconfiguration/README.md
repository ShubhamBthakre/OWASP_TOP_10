# A02:2025 - Security Misconfiguration

**Rank:** #2 in OWASP Top 10 2025 (up from #5 in 2021)  
**Official Page:** [A02:2025 - Security Misconfiguration](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)

## Overview

Security misconfiguration occurs when application servers, frameworks, libraries, databases, cloud services, or infrastructure are left insecure due to:

- Insecure default settings
- Incomplete or improper configurations
- Open cloud storage / overly permissive IAM roles
- Verbose error messages exposing stack traces / paths / versions
- Missing or weak security headers
- Unremoved sample/test applications or default accounts
- Directory listing enabled
- Unnecessary services/ports open

**Prevalence:** Extremely high — **~100%** of applications tested in 2025 had at least one misconfiguration  
**Detectability:** Easy  
**Exploitability:** Easy to average  
**Technical Impact:** Severe (full server compromise, data exposure, lateral movement)

**Key CWEs:**
- CWE-16: Configuration
- CWE-611: Improper Restriction of XML External Entity Reference
- CWE-798: Use of Hard-coded Credentials
- CWE-200: Exposure of Sensitive Information to an Unauthorized Actor
- CWE-918: SSRF (sometimes overlaps)
- CWE-287: Improper Authentication (default creds)

## Common Vulnerabilities & Examples

1. **Verbose Error Messages** — Stack traces, paths, library versions leaked in production
2. **Missing Security Headers** — No CSP, X-Frame-Options, HSTS, etc.
3. **Dangerous CORS** — `Access-Control-Allow-Origin: *` with credentials
4. **Default Accounts/Credentials** — admin/admin still active
5. **Directory Listing** — `/static/` shows all files
6. **Cloud Misconfigs** — Public S3 buckets, open security groups, overly permissive IAM
7. **Debug Mode Enabled** — Express `app.set('env', 'development')` in prod
8. **Unpatched / Sample Apps** — Old admin consoles or phpMyAdmin left running

## Attack Scenarios

- **Scenario #1**: Attacker hits `/error` endpoint → gets full stack trace with paths, versions → crafts exploit for known vulnerable library.
- **Scenario #2**: CORS `*` + credentials → malicious site steals authenticated API responses from victims.
- **Scenario #3**: Directory listing on `/backup/` → attacker downloads `.env`, source code backups.
- **Scenario #4**: Cloud storage bucket public → millions of user records leaked (classic S3 breach).

## Folder Contents

- `vulnerable/` — Dangerous configurations in Node.js/Express
- `secure/` — Hardened, production-ready setups
- `prevention.md` — Practical checklist

## References

- Official OWASP A02:2025 → https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/
- OWASP Secure Headers → https://owasp.org/www-project-secure-headers/
- Helmet.js (Express) → https://helmetjs.github.io/
- Node.js Security Best Practices → https://nodejs.org/en/learn/getting-started/security-best-practices
- Express Production Best Practices → https://expressjs.com/en/advanced/best-practice-security.html

This folder is part of the [OWASP_TOP_10](https://github.com/[your-username]/OWASP_TOP_10) repository.