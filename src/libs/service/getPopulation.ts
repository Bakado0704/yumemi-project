import { prefectureData } from "@/data/prefectureData";
import { PopulationType } from "@/types/application/population.types";

import { fetchPopulationByPrefCode } from "../api/fetchPopulationByPrefCode";

export const getPopulation = async (
  prefCodes: number[]
): Promise<PopulationType[]> => {
  return Promise.all(
    prefCodes.map(async (prefCode) => {
      const prefName = prefectureData.find(
        (prefecture) => prefecture.prefCode === prefCode
      )?.prefName;
      const populationData = await fetchPopulationByPrefCode(prefCode);
      const filteredData = populationData?.data.filter(
        (data) => data.label === "総人口"
      );
      const prefData = filteredData?.[0].data;

      return {
        prefName,
        prefData,
      };
    })
  );
};
