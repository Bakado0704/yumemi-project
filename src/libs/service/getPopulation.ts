import { prefectureData } from "@/data/prefectureData";
import {
  GraphLayoutType,
  PopulationType,
} from "@/types/application/population.types";

import { fetchPopulationByPrefCode } from "../api/fetchPopulationByPrefCode";

export const getPopulation = async (
  prefCodes: number[],
  sortKey: string
): Promise<GraphLayoutType[]> => {
  const years = [1970, 1980, 1990, 2000, 2010, 2020];
  const sortedCodes = prefCodes.sort((a, b) => a - b);

  const populationDataByCodes: PopulationType[] = await Promise.all(
    sortedCodes.map(async (prefCode) => {
      const prefName =
        prefectureData.find((prefecture) => prefecture.prefCode === prefCode)
          ?.prefName || "";

      const data = await fetchPopulationByPrefCode(prefCode);
      const filteredDataBySortKey = data?.data.filter(
        (data) => data.label === sortKey
      );
      const prefData = years.map((year) => {
        const yearData = filteredDataBySortKey?.[0].data.find(
          (data) => data.year === year
        );
        return {
          year,
          value: yearData ? yearData.value : 0,
        };
      });

      return {
        prefName,
        prefData,
      };
    })
  );

  const graphData: GraphLayoutType[] = years.map((year) => ({ year }));

  populationDataByCodes.forEach((populationData) => {
    const { prefName, prefData } = populationData;
    prefData.forEach(({ year, value }) => {
      const yearEntry = graphData.find((entry) => entry.year === year);
      if (yearEntry && value !== null) {
        yearEntry[prefName] = value;
      }
    });
  });

  return graphData;
};
