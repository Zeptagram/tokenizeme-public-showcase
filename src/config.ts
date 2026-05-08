export const config = {
  appName: "TokenizeMe Public Showcase",
  network: process.env.STELLAR_NETWORK ?? "testnet",
  rpcUrl: process.env.SOROBAN_RPC_URL ?? "https://soroban-testnet.stellar.org",
  horizonUrl:
    process.env.HORIZON_URL ?? "https://horizon-testnet.stellar.org",
  publicApiBaseUrl:
    process.env.PUBLIC_API_BASE_URL ?? "http://localhost:4000/api/v1",
};

