import { FlexBox } from "@/components/common";
import { GraphUnit } from "@/components/pages/home/GraphUnit";
import { PrefInputUnit } from "@/components/pages/home/PrefInputUnit";
import { SelectUnit } from "@/components/pages/home/SelectUnit";
import { usePopulationData } from "@/hooks/home/usePopulationData";

const Home = () => {
  const { populationData, isDataExist, sortKey, setPrefCodes, setSortKey } =
    usePopulationData();

  return (
    <FlexBox flexDirection="column">
      <PrefInputUnit setPrefCodes={setPrefCodes} />
      <SelectUnit sortKey={sortKey} setSortKey={setSortKey} />
      <GraphUnit isDataExist={isDataExist} populationData={populationData} />
    </FlexBox>
  );
};

export default Home;
