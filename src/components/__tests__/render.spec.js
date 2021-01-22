import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { FavoriteNumber } from "../FavoriteNumber";

// function render(ui) {
//   const container = document.createElement("div");
//   ReactDOM.render(ui, container);

//   return { container };
// }

// RENDER
describe("RENDER <FavoriteNumber />", () => {
  test('#1 renders a number input with a label "Favorite Number"', () => {
    const container = document.createElement("div");
    ReactDOM.render(<FavoriteNumber />, container);

    // console.log(container.innerHTML);
    expect(container.querySelector("input").type).toBe("number");
    expect(container.querySelector("label").textContent).toBe(
      "Favorite Number"
    );
  });

  test('#2 renders a number input with a label "Favorite Number"', () => {
    const { container } = render(<FavoriteNumber />);
    // console.log(container.innerHTML);
    expect(container.querySelector("input").type).toBe("number");
    expect(container.querySelector("label").textContent).toBe(
      "Favorite Number"
    );
  });

  test('#3 renders a number input with a label "Favorite Number"', () => {
    const { container } = render(<FavoriteNumber />);
    // console.log(container.innerHTML);
    expect(container.querySelector("input").type).toBe("number");
    expect(container.querySelector("label").textContent).toBe(
      "Favorite Number"
    );
  });
});
