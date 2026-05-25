export enum EcosystemType {
  ID = "id",
  HUB = "hub",
  PRO = "pro",
}

type EcosystemState = {
  ecosystemType: EcosystemType;
};

const ecosystemState: EcosystemState = {
  ecosystemType: EcosystemType.HUB,
};

export function useEcosystemStore<T>(selector: (state: EcosystemState) => T): T {
  return selector(ecosystemState);
}
