# OWASP Top 10 (2025)

![OWASP Top 10 2025 Logo](https://owasp.org/Top10/2025/assets/TOP_10_logo_Final_Logo_Colour.png)

[![OWASP Top 10](https://img.shields.io/badge/OWASP-Top%2010%202025-blue)](https://owasp.org/Top10/)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

This repository covers the **OWASP Top 10 2025** — the most critical web application security risks.  
Each risk gets its own dedicated folder with detailed explanations, real-world examples, vulnerable code snippets, secure fixes, attack scenarios, and prevention guidance.

The goal: help developers, security professionals, and students understand and mitigate these risks effectively.

## The OWASP Top 10: 2025

| Rank | Risk Code & Name                                      | Short Description                                                                                       | Folder Link                                               |
|------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| 1    | A01:2025 - Broken Access Control                      | Failing to properly enforce access controls, allowing users to view or modify unauthorized resources.   | [A01-Broken-Access-Control](./A01-Broken-Access-Control) |
| 2    | A02:2025 - Security Misconfiguration                  | Improperly configured systems, defaults, error messages, or cloud permissions exposing vulnerabilities. | [A02-Security-Misconfiguration](./A02-Security-Misconfiguration) |
| 3    | A03:2025 - Software Supply Chain Failures             | Compromised third-party components, dependencies, or build pipelines introducing vulnerabilities.        | [A03-Software-Supply-Chain-Failures](./A03-Software-Supply-Chain-Failures) |
| 4    | A04:2025 - Cryptographic Failures                     | Weak encryption, poor key management, or outdated algorithms leading to data exposure.                   | [A04-Cryptographic-Failures](./A04-Cryptographic-Failures) |
| 5    | A05:2025 - Injection                                  | Untrusted input executed as code/commands (SQL, NoSQL, OS, etc.).                                        | [A05-Injection](./A05-Injection)                          |
| 6    | A06:2025 - Insecure Design                            | Fundamental design flaws lacking security controls (e.g., missing threat modeling).                    | [A06-Insecure-Design](./A06-Insecure-Design)              |
| 7    | A07:2025 - Authentication Failures                     | Weak or broken authentication mechanisms (credential stuffing, weak passwords, poor session management).| [A07-Authentication-Failures](./A07-Authentication-Failures) |
| 8    | A08:2025 - Software or Data Integrity Failures        | Failing to verify integrity of software/data (insecure deserialization, CI/CD pipeline issues).         | [A08-Software-or-Data-Integrity-Failures](./A08-Software-or-Data-Integrity-Failures) |
| 9    | A09:2025 - Security Logging and Alerting Failures     | Insufficient logging, monitoring, or alerting, hindering detection and response.                        | [A09-Security-Logging-and-Alerting-Failures](./A09-Security-Logging-and-Alerting-Failures) |
| 10   | A10:2025 - Mishandling of Exceptional Conditions      | Poor error/exception handling that leaks information or allows security bypasses.                       | [A10-Mishandling-of-Exceptional-Conditions](./A10-Mishandling-of-Exceptional-Conditions) |

## Folder Structure (Recommended)

Create a folder for each risk using the names above. Inside each folder, include:

- `README.md` — Detailed overview, CWE mappings, risk factors, attack scenarios
- `vulnerable/` — Example vulnerable code (in multiple languages if possible)
- `secure/` — Fixed/secure versions of the examples
- `prevention.md` — Best practices and mitigation steps
- `references.md` or links — Official OWASP page, additional resources, tools

Example:

A01-Broken-Access-Control/
├── README.md
├── vulnerable/
│   ├── java-example/
│   └── nodejs-example/
├── secure/
│   ├── java-fixed/
│   └── nodejs-fixed/
└── prevention.md



## Official Reference

- OWASP Top 10 2025: https://owasp.org/Top10/
- Individual risk pages: https://owasp.org/Top10/A01_2025-broken_access_control/ (replace with the corresponding slug)

## Contributing

Contributions are welcome!  
Add examples, improve explanations, include code in more languages (Python, Java, Node.js, Go, etc.), or suggest new resources.  
Just open a Pull Request.

## License

Content is licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/) to align with OWASP's licensing.