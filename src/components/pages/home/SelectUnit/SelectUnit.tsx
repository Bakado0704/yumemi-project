import { FlexBox, LeftBorderTitle } from "@/components/common";
import { Select } from "@/components/common/Select";

import styles from "./SelectUnit.module.scss";
import { SelectUnitProps } from "./SelectUnit.types";

const SelectUnit = ({ sortKey, setSortKey }: SelectUnitProps) => {
  const options = [
    { id: "0", value: "総人口" },
    {
      id: "1",
      value: "年少人口",
    },
    {
      id: "2",
      value: "生産年齢人口",
    },
    {
      id: "3",
      value: "老年人口",
    },
  ];

  return (
    <FlexBox flexDirection="column" gap="2rem" className={styles.container}>
      <div className={styles.bg} />
      <LeftBorderTitle title="種別" />
      <Select
        options={options}
        value={sortKey}
        onChange={(event) => {
          const { value } = event.target;
          setSortKey(value);
        }}
      />
    </FlexBox>
  );
};

export default SelectUnit;
