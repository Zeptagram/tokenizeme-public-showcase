# Architecture

## Design goals

- Keep asset issuance understandable for issuers and reviewers
- Separate public-safe documentation from production implementation details
- Use Soroban for verifiable ownership and sale lifecycle logic
- Keep compliance and operations in the backend orchestration layer

## High-level system

```text
Client Apps
    |
    v
Public API Layer
    |
    +--> Issuer / investor workflows
    +--> Compliance orchestration
    +--> Metadata and reporting
    |
    v
Soroban Contract Layer
    |
    v
Stellar Network
```

## Public-facing components in this repository

- `src/services/publicApi.ts`
- `src/services/sorobanGateway.ts`
- `examples/`
- `openapi/openapi.public.yaml`

## Private production components intentionally omitted

- deployment automation
- privileged admin operations
- compliance scoring logic
- private service credentials
- infrastructure topology and observability internals

