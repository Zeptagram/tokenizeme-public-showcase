import { config } from "../config.js";

type SorobanOperation = {
  step: string;
  purpose: string;
};

const flow: SorobanOperation[] = [
  {
    step: "Prepare offering request",
    purpose: "Validate issuer, metadata, and compliance prerequisites off-chain.",
  },
  {
    step: "Build contract invocation",
    purpose: "Prepare a public-safe representation of the Soroban transaction payload.",
  },
  {
    step: "Submit transaction",
    purpose: "Send the signed transaction to the configured Soroban RPC endpoint.",
  },
  {
    step: "Observe settlement",
    purpose: "Read transaction state and mirror the outcome into application services.",
  },
];

export function describeSorobanFlow(): string {
  const lines = [
    `Soroban network: ${config.network}`,
    `RPC endpoint: ${config.rpcUrl}`,
    `Horizon endpoint: ${config.horizonUrl}`,
    "Illustrative Soroban interaction flow:",
    ...flow.map((item, index) => `${index + 1}. ${item.step}: ${item.purpose}`),
  ];

  return lines.join("\n");
}

