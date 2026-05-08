type SettlementWebhook = {
  offeringId: string;
  txHash: string;
  status: "success" | "failed";
};

export function handleSettlementWebhook(payload: SettlementWebhook): string {
  return `Received settlement update for ${payload.offeringId} with status ${payload.status}.`;
}

