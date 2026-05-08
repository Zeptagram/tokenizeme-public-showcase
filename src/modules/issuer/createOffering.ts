export type CreateOfferingInput = {
  assetId: string;
  assetType: "music-rights" | "rwa";
  issuerWallet: string;
  targetRaiseUsd: number;
};

export type CreateOfferingResult = {
  offeringId: string;
  status: "draft";
  message: string;
};

export function createOffering(
  input: CreateOfferingInput,
): CreateOfferingResult {
  return {
    offeringId: `offering_${input.assetId}`,
    status: "draft",
    message:
      "Public showcase placeholder. The production workflow includes compliance and contract orchestration steps not exposed here.",
  };
}

