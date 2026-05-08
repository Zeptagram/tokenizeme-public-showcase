# Security Model

## Public repository policy

This repository is intentionally limited to public-safe materials.

It does not include:

- secrets or signing keys
- production environment files
- private deployment logic
- internal admin automation
- restricted business logic

## Why the production repository is private

The production codebase contains infrastructure details, operational safeguards, compliance-sensitive workflows, and proprietary implementation choices that should not be exposed publicly. Maintaining a separate public showcase reduces attack surface while still allowing technical review.

## Review posture

Reviewers should treat this repository as a transparent technical overview, not as a complete production mirror.

