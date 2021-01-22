import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import { Form } from "../Form";

test("the form is accessible", async () => {
  const { container, debug } = render(<Form />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});