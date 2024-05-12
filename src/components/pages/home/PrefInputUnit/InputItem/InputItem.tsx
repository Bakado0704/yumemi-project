import { useState } from "react";

import classNames from "classnames";

import { FlexBox, Typography } from "@/components/common";

import styles from "./InputItem.module.scss";
import { PrefInputProps } from "./InputItem.types";

const InputItem = ({ pref, setPrefCodes }: PrefInputProps) => {
  const [checked, setChecked] = useState(false);

  const onChange = (prefCode: number) => {
    setPrefCodes((prev) => {
      if (prev.includes(prefCode)) {
        return prev.filter((code) => code !== prefCode);
      }
      return [...prev, prefCode];
    });
    setChecked((state) => !state);
  };

  return (
    <FlexBox
      gap="0.4rem"
      alignItems="center"
      justifyContent="center"
      className={classNames(
        styles.checkboxContainer,
        checked && styles.checkboxContainerActive
      )}
      onClick={() => onChange(pref.prefCode)}
    >
      <div
        className={classNames(
          styles.checkbox,
          checked && styles.checkboxActive
        )}
      />
      <Typography className={styles.prefName}>{pref.prefName}</Typography>
    </FlexBox>
  );
};

export default InputItem;
