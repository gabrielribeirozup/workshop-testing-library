import React from "react";
import { screen, render } from "@testing-library/react";

import { FavoriteNumber } from "../FavoriteNumber";

describe("DEBUG <FavoriteNumber />", () => {
  test("#1 render", () => {
    const { debug } = render(<FavoriteNumber />);
    const input = screen.getByLabelText(/favorite number/i);

    // debug();
    //debug(input)
    expect(input).toHaveAttribute("type", "number");
  });
});
