import { FlexBox, LeftBorderTitle, Typography } from "@/components/common";

import { Graph } from "./Graph";
import styles from "./GraphUnit.module.scss";
import { GraphUnitType } from "./GraphUnit.types";

const GraphUnit = ({ populationData, isDataExist }: GraphUnitType) => {
  return (
    <FlexBox flexDirection="column" gap="2rem" className={styles.container}>
      <div className={styles.bg} />
      <LeftBorderTitle title="グラフ" />
      {isDataExist ? (
        <Graph populationData={populationData} />
      ) : (
        <Typography>データが選択されていません</Typography>
      )}
    </FlexBox>
  );
};

export default GraphUnit;
