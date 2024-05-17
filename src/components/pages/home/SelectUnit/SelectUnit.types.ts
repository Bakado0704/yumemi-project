import { Dispatch, SetStateAction } from "react";

export type SelectUnitProps = {
  sortKey: string;
  setSortKey: Dispatch<SetStateAction<string>>;
};
