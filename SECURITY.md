# Security Policy

## Supported Versions

| Version | Supported |
| --- | --- |
| 1.x | Yes |

## Reporting a Vulnerability

Please report security issues privately by emailing:

`ubaithsherif22@gmail.com`

Do not open a public issue for vulnerabilities involving secrets, authentication, deployment credentials, or dependency exploits.

## Security Practices

- Secrets must stay in `.env.local`, Vercel project settings, or GitHub Actions secrets.
- `GITHUB_TOKEN` is optional and should never be committed.
- Security headers are configured in `next.config.ts`.
- Dependency alerts are tracked with Dependabot.
- Public contributions should pass CI before merge.
