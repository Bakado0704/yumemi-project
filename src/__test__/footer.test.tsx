/* eslint-disable */
import { render, screen } from "@testing-library/react";

import { NavFooter } from "@/components/pages/common/NavFooter";

test("is footer component exist?", () => {
  render(<NavFooter />);
  const heading = screen.getByText(/created by Hiroki Kado/i);
  expect(heading).toBeInTheDocument();
});
