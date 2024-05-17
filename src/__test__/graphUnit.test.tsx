/* eslint-disable */
import { render, screen } from "@testing-library/react";

import { GraphUnit } from "@/components/pages/home/GraphUnit";

test("is graph component exist?", () => {
  const isdummyDataExist = true;
  const dummyData = [
    { year: 2020, 北海道: 5000000, 青森県: 1200000 },
    { year: 2021, 北海道: 5100000, 青森県: 1180000 },
  ];
  render(
    <GraphUnit isDataExist={isdummyDataExist} populationData={dummyData} />
  );
  const hokkaidoLine = screen.getByText(/北海道/i);
  const aomoriLine = screen.getByText(/青森県/i);

  expect(hokkaidoLine).toBeInTheDocument();
  expect(aomoriLine).toBeInTheDocument();
});
