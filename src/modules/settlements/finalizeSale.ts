export type SettlementSummary = {
  offeringId: string;
  settlementStatus: "pending" | "complete";
  investorCount: number;
};

export function finalizeSale(offeringId: string): SettlementSummary {
  return {
    offeringId,
    settlementStatus: "pending",
    investorCount: 0,
  };
}

