import { Dispatch, SetStateAction } from "react";

import { PrefectureType } from "@/types/application/prefecture.types";

export type PrefInputProps = {
  pref: PrefectureType;
  setPrefCodes: Dispatch<SetStateAction<number[]>>;
};
