import { useEffect, useState } from "react";

import { GraphLayoutType } from "@/types/application/graphLayout.types";

export const useGraphData = (populationData: GraphLayoutType[]) => {
  const [graphLayout, setGraphLayout] = useState({
    graphWidth: 0,
    graphHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGraphLayout({
          graphWidth: window.innerWidth - 32,
          graphHeight: 300,
        });
      } else if (window.innerWidth <= 1080) {
        setGraphLayout({
          graphWidth: window.innerWidth - 80,
          graphHeight: 400,
        });
      } else {
        setGraphLayout({
          graphWidth: 1000,
          graphHeight: 500,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPrefectureNames = (data: {
    [key: string]: number | string;
  }): string[] => {
    return Object.keys(data).filter((key) => key !== "year");
  };

  const prefectureNames = getPrefectureNames(populationData[0]);

  return {
    graphLayout,
    prefectureNames,
  };
};
