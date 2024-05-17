/* eslint-disable */
import { render, screen } from "@testing-library/react";

import { SelectUnit } from "@/components/pages/home/SelectUnit";

test("is select component exist?", () => {
  const sortKey = "default";
  const setSortKey = jest.fn();
  render(<SelectUnit sortKey={sortKey} setSortKey={setSortKey} />);

  const totalPopulation = screen.getByText(/総人口/i);
  const youngPopulation = screen.getByText(/年少人口/i);
  const workingAgePopulation = screen.getByText(/生産年齢人口/i);
  const elderlyPopulation = screen.getByText(/老年人口/i);

  expect(totalPopulation).toBeInTheDocument();
  expect(youngPopulation).toBeInTheDocument();
  expect(workingAgePopulation).toBeInTheDocument();
  expect(elderlyPopulation).toBeInTheDocument();
});
