# Workflow

## Issuer lifecycle

1. Issuer creates an asset record and submits metadata
2. Backend validates the request and checks off-chain prerequisites
3. Soroban contract invocation is prepared
4. Offering is created and made available to investors
5. Settlement and ownership state are synchronized back to the platform

## Investor lifecycle

1. Investor reviews an offering
2. Investor submits an allocation request
3. Transaction is prepared and signed through the wallet flow
4. Settlement outcome is recorded and reflected in the portfolio view

## Why this split matters

This model keeps blockchain logic verifiable while preserving operational flexibility for compliance, metadata management, and product UX.

