# A01:2025 - Broken Access Control

![Broken Access Control](https://owasp.org/Top10/assets/TOP_10_logo_Final_Logo_Colour.png)

**Rank:** #1 in OWASP Top 10 2025  
**Official Page:** [A01:2025 - Broken Access Control](https://owasp.org/Top10/A01_2025-broken_access_control/)

## Overview

Broken Access Control remains the **#1 most critical web application security risk** in 2025. Attackers exploit flaws in access control mechanisms to perform actions or access data beyond their intended permissions. This includes:

- Viewing or modifying other users' data (horizontal privilege escalation)
- Performing admin-level actions as a normal user (vertical privilege escalation)
- Bypassing restrictions via URL manipulation, API parameter tampering, or missing server-side checks
- Server-Side Request Forgery (SSRF) is now consolidated into this category (moved from its own entry in previous versions)

Real-world impact: Data breaches, account takeovers, unauthorized admin access, and regulatory violations (GDPR, HIPAA, etc.).

**Prevalence:** Very high  
**Detectability:** Average  
**Exploitability:** High  
**Technical Impact:** Severe

**Mapped CWEs (Common Weakness Enumerations):**
- CWE-862: Missing Authorization
- CWE-863: Incorrect Authorization
- CWE-276: Incorrect Default Permissions
- CWE-732: Incorrect Permission Assignment for Critical Resource
- CWE-918: Server-Side Request Forgery (SSRF)
- Others: CWE-22 (Path Traversal), CWE-639 (Authorization Bypass Through User-Controlled Key), etc.

## Description & Common Vulnerabilities

Access control enforces policy so users cannot act outside their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of data, or performing business functions outside the user's limits.

Common issues include:

1. **Insecure Direct Object References (IDOR)**  
   Exposing internal object references (e.g., user IDs, file paths) without checking ownership.

2. **Missing Function-Level Access Control**  
   No server-side checks for privileged actions (relying only on UI hiding buttons/menus).

3. **Vertical Privilege Escalation**  
   Normal user accessing admin functions.

4. **Horizontal Privilege Escalation**  
   User A accessing User B's resources.

5. **Force Browsing / Missing Path Controls**  
   Accessing hidden/authenticated endpoints without checks.

6. **CORS Misconfiguration**  
   Allowing unauthorized origins to access sensitive APIs.

7. **Server-Side Request Forgery (SSRF)**  
   Application fetches remote resources without validating user-supplied URLs (e.g., internal metadata endpoints in cloud environments).

8. **Parameter Tampering / Mass Assignment**  
   Modifying hidden fields or API parameters to elevate privileges.

## Attack Scenarios

### Scenario #1: Classic IDOR
An application uses predictable IDs in URLs: `https://example.com/user/123/profile`.  
An attacker changes the ID to `456` and views another user's profile because the server doesn't verify ownership.

### Scenario #2: Vertical Escalation
A non-admin user sends a POST request to `/admin/delete-user` (hidden from UI) — server processes it without role checks.

### Scenario #3: SSRF (Cloud Metadata Theft)
User submits a URL to an image processing feature: `http://169.254.169.254/latest/meta-data/iam/security-credentials/`.  
Server fetches internal AWS metadata, exposing temporary credentials to the attacker.

### Scenario #4: CORS Misconfig
API allows `Access-Control-Allow-Origin: *` with credentials. Attacker's site makes authenticated requests on behalf of logged-in victims.

## How to Prevent (Best Practices)

1. **Deny by Default**  
   Implement a single, centralized access control mechanism that explicitly allows actions.

2. **Enforce Record Ownership**  
   Always verify that the authenticated user owns or has explicit permission for the resource.

3. **Server-Side Only**  
   Never trust client-side controls (hidden fields, UI hiding, client-side checks).

4. **Principle of Least Privilege**  
   Users/roles should have only necessary permissions.

5. **Use Proven Frameworks**  
   Leverage built-in access control in Spring Security, Django Guardian, ASP.NET Identity, etc.

6. **Validate on Every Request**  
   Especially for state-changing endpoints (POST, PUT, DELETE).

7. **For SSRF**  
   - Validate/whitelist allowed domains/protocols
   - Disable redirects
   - Use allow-lists for internal IPs

8. **Logging & Monitoring**  
   Log all access control failures and alert on anomalies.

9. **Rate Limiting**  
   Apply to sensitive endpoints to prevent brute-force probing.

10. **Testing**  
    Use tools like OWASP ZAP, Burp Suite, or automated scanners with auth matrices.

## Folder Contents

- `vulnerable/` — Vulnerable code examples (IDOR, missing checks, SSRF)
- `secure/` — Fixed/secure implementations
- `prevention.md` — Detailed mitigation checklist
- `references.md` — Links to OWASP, CWEs, tools, and real-world breaches

## References

- Official OWASP Top 10 A01:2025: https://owasp.org/Top10/A01_2025-broken_access_control/
- OWASP Cheat Sheet: [Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- OWASP Cheat Sheet: [Access Control](https://cheatsheetseries.owasp.org/cheatsheets/Access_Control_Cheat_Sheet.html)
- OWASP Cheat Sheet: [SSRF Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
- Real-world examples: Capital One breach (SSRF), various IDOR bugs on HackerOne

---

This folder is part of the [OWASP_TOP_10](https://github.com/[your-username]/OWASP_TOP_10) repository. Contributions welcome!