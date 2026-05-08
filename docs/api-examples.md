# API Examples

## Create an offering

```http
POST /api/v1/offerings
Content-Type: application/json

{
  "assetType": "music-rights",
  "assetName": "Catalog Revenue Share 2026",
  "targetRaiseUsd": 250000
}
```

```json
{
  "id": "offering_demo_001",
  "status": "draft",
  "message": "Offering created in public showcase mode."
}
```

## Submit an investment

```http
POST /api/v1/investments
Content-Type: application/json

{
  "offeringId": "offering_demo_001",
  "investorWallet": "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "amount": 500
}
```

```json
{
  "status": "pending_signature",
  "network": "stellar-testnet",
  "message": "Transaction prepared. Production signing flow is not included in the public repository."
}
```

## Fetch a portfolio

```http
GET /api/v1/portfolio/GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

```json
{
  "walletAddress": "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "positions": [
    {
      "symbol": "MUSIC-DEMO-01",
      "units": 125
    }
  ]
}
```

