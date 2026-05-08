type OfferingResponse = {
  id: string;
  assetName: string;
  status: "draft" | "active" | "closed";
};

export async function fetchOffering(
  baseUrl: string,
  offeringId: string,
): Promise<OfferingResponse> {
  const response = await fetch(`${baseUrl}/offerings/${offeringId}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as OfferingResponse;
}

