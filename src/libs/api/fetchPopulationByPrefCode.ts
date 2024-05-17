import { parsePopulationData } from "@/types/resas/polulation.types";

export const fetchPopulationByPrefCode = async (prefCode: number) => {
  const apiKey = "dhJrdoXdS2bSS7IJqmz0LkEmwXVfMZA3EH5Squqj";
  const baseUrl = "https://opendata.resas-portal.go.jp";
  const url = `${baseUrl}/api/v1/population/composition/perYear?prefCode=${prefCode}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Response not successful: " + response.statusText);
    }

    const data = await response.json();
    const parsedData = parsePopulationData(data).result;
    return parsedData;
  } catch (error) {
    console.error("Error fetching prefectures:", error);
  }
};
