import { FlexBox, LeftBorderTitle } from "@/components/common";
import { prefectureData } from "@/data/prefectureData";

import InputItem from "./InputItem/InputItem";
import styles from "./PrefInputUnit.module.scss";
import { PrefInputProps } from "./PrefInputUnit.types";

const PrefInputUnit = ({ setPrefCodes }: PrefInputProps) => {
  return (
    <FlexBox flexDirection="column" gap="2rem" className={styles.container}>
      <LeftBorderTitle title="都道府県" />
      <FlexBox className={styles.prefContainer}>
        {prefectureData.map((prefData) => {
          return (
            <InputItem
              key={prefData.prefCode}
              pref={prefData}
              setPrefCodes={setPrefCodes}
            />
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default PrefInputUnit;
