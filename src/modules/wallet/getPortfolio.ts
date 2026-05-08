export type PortfolioPosition = {
  symbol: string;
  units: number;
  category: "fractional-ownership" | "platform-balance";
};

export function getPortfolio(walletAddress: string): PortfolioPosition[] {
  if (!walletAddress) {
    return [];
  }

  return [
    {
      symbol: "MUSIC-DEMO-01",
      units: 125,
      category: "fractional-ownership",
    },
    {
      symbol: "XLM",
      units: 42,
      category: "platform-balance",
    },
  ];
}

