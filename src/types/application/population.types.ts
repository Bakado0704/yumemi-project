export type PopulationType = {
  prefName: string;
  prefData: {
    year: number;
    value: number;
  }[];
};

export type GraphLayoutType = {
  year: number;
  [key: string]: number;
};
