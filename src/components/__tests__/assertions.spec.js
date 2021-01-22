import React from "react";
import { screen, render } from "@testing-library/react";

import { FavoriteNumber } from "../FavoriteNumber";

// https://github.com/testing-library/jest-dom

describe("ASSERTIONS <FavoriteNumber />", () => {
  test('#1 renders a number input with a label "Favorite Number"', () => {
    const { container } = render(<FavoriteNumber />);

    // ## error in selector
    // expect(container.querySelector("nput").type).toBe("number");

    expect(container.querySelector("input")).toHaveAttribute("type", "number");

    expect(container.querySelector("label")).toHaveTextContent(
      "Favorite Number"
    );
  });

  test("#2 false positive breaking the code without breaking the test", () => {
    render(<FavoriteNumber />);

    // change the label associated with the input
    // queries from screen @testing-library/react

    const input = screen.getByLabelText(/favorite number/i);

    expect(input).toHaveAttribute("type", "number");
  });
});
