import { useEffect, useState } from "react";

import { getPopulation } from "@/libs/service/getPopulation";
import { GraphLayoutType } from "@/types/application/graphLayout.types";

export const usePopulationData = () => {
  const [sortKey, setSortKey] = useState<string>("総人口");
  const [populationData, setPopulationData] = useState<GraphLayoutType[]>([]);
  const [prefCodes, setPrefCodes] = useState<number[]>([]);

  useEffect(() => {
    getPopulation(prefCodes, sortKey).then(setPopulationData);
  }, [prefCodes, sortKey]);

  const filteredData = populationData.map((data) => {
    return Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== "year")
    );
  });
  const isDataExist =
    filteredData.length > 0 && Object.keys(filteredData[0]).length > 0;

  return {
    populationData,
    isDataExist,
    sortKey,
    setPrefCodes,
    setSortKey,
  };
};
