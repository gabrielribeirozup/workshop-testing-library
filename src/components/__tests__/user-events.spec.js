import React from "react";
import { screen, render } from "@testing-library/react";
import User from "@testing-library/user-event";

import { FavoriteNumber } from "../FavoriteNumber";

// https://testing-library.com/docs/ecosystem-user-event/
// https://testing-library.com/docs/react-testing-library/api#rerender

describe("USER EVENT <FavoriteNumber />", () => {
  test("#1 render", () => {
    const { debug } = render(<FavoriteNumber />);
    const input = screen.getByLabelText(/favorite number/i);

    User.type(input, "10");
    expect(screen.getByRole("alert")).toHaveTextContent(
      /the number is invalid/i
    );
  });

  test("#2 rerender", () => {
    const { debug, rerender } = render(<FavoriteNumber />);
    const input = screen.getByLabelText(/favorite number/i);

    User.type(input, "10");
    expect(screen.getByRole("alert")).toHaveTextContent(
      /the number is invalid/i
    );

    rerender(<FavoriteNumber max={10} />);

    // expect(screen.getByRole("alert")).toBeNull();
    // expect(screen.queryByRole("alert")).toBeNull();
  });
});
