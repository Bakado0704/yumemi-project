import { FlexBox } from "@/components/common";
import { prefectureData } from "@/data/prefectureData";

import InputItem from "./InputItem/InputItem";
import styles from "./PrefInputUnit.module.scss";
import { PrefInputProps } from "./PrefInputUnit.types";

const PrefInputUnit = ({ setPrefCodes }: PrefInputProps) => {
  const prefList = prefectureData;
  return (
    <FlexBox className={styles.prefContainer}>
      {prefList.map((prefData) => {
        return (
          <InputItem
            key={prefData.prefCode}
            pref={prefData}
            setPrefCodes={setPrefCodes}
          />
        );
      })}
    </FlexBox>
  );
};

export default PrefInputUnit;
