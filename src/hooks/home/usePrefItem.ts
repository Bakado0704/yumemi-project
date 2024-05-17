import { Dispatch, SetStateAction, useState } from "react";

export const usePrefItem = (
  setPrefCodes: Dispatch<SetStateAction<number[]>>
) => {
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

  return {
    checked,
    onChange,
  };
};
