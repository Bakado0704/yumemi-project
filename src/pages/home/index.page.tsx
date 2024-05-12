import { useEffect, useState } from "react";

import { getPopulation } from "@/libs/service/getPopulation";
import { PopulationType } from "@/types/application/population.types";

const Home = () => {
  const [populationData, setPopulationData] = useState<PopulationType[]>();
  console.log(populationData);

  useEffect(() => {
    const prefCodes = [1, 13, 40, 47];
    if (prefCodes.length > 0) {
      getPopulation(prefCodes).then(setPopulationData);
    }
  }, []);

  return <p>Hello Yumemi san</p>;
};

export default Home;
