import { ForwardedRef, forwardRef } from "react";

import { FlexBox } from "../FlexBox";

import styles from "./Select.module.scss";

import type { SelectProps } from "./Select.types";

const Select = forwardRef(
  <T extends string | undefined>(
    props: SelectProps<T>,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    const { initialOption, options, ...selectProps } = props;
    return (
      <FlexBox width="100%" flexDirection="column" gap="0.8rem">
        <select ref={ref} className={styles.select} {...selectProps}>
          {initialOption && (
            <option hidden value={initialOption.value}>
              {initialOption.value}
            </option>
          )}
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </FlexBox>
    );
  }
);

export default Select;
