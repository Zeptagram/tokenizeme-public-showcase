type ContractInvocationPreview = {
  contract: string;
  method: string;
  arguments: Record<string, string | number>;
};

export function buildInvestmentPreview(
  offeringId: string,
  investorWallet: string,
  amount: number,
): ContractInvocationPreview {
  return {
    contract: "PUBLIC_CONTRACT_REFERENCE",
    method: "invest",
    arguments: {
      offeringId,
      investorWallet,
      amount,
    },
  };
}

