/* eslint-disable */
import { render, screen } from "@testing-library/react";

import { NavHeader } from "../components/pages/common/NavHeader";

test("is header component exist?", () => {
  render(<NavHeader />);
  const heading = screen.getByText(/都道府県別の人口推移グラフ/i);
  expect(heading).toBeInTheDocument();
});
