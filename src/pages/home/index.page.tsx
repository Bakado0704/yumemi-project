import { useEffect, useState } from "react";

import { FlexBox, LeftBorderTitle } from "@/components/common";
import { PrefInputUnit } from "@/components/pages/home/PrefInputUnit";
import { getPopulation } from "@/libs/service/getPopulation";
import { PopulationType } from "@/types/application/population.types";

import styles from "./page.module.scss";

const Home = () => {
  const [populationData, setPopulationData] = useState<PopulationType[]>();
  const [prefCodes, setPrefCodes] = useState<number[]>([]);

  useEffect(() => {
    if (prefCodes.length > 0) {
      getPopulation(prefCodes).then(setPopulationData);
    }
  }, [prefCodes]);

  console.log(populationData);

  return (
    <FlexBox flexDirection="column" gap="2rem">
      <FlexBox
        flexDirection="column"
        gap="2rem"
        className={styles.prefContainer}
      >
        <LeftBorderTitle title="都道府県" />
        <PrefInputUnit setPrefCodes={setPrefCodes} />
      </FlexBox>
    </FlexBox>
  );
};

export default Home;
