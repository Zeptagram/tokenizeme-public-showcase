import { config } from "../config.js";

const endpoints = [
  "POST /offerings",
  "GET /offerings/:offeringId",
  "POST /investments",
  "GET /portfolio/:walletAddress",
  "POST /webhooks/settlement",
];

export function publicApiSummary(): string {
  return [
    `API base URL: ${config.publicApiBaseUrl}`,
    "Public example endpoints:",
    ...endpoints.map((endpoint) => `- ${endpoint}`),
  ].join("\n");
}

