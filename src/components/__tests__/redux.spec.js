import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import User from "@testing-library/user-event";

import { createStore } from "redux";
import { reducer } from "../reducer";

import { Counter } from "../Counter";
import { store } from "../store";

describe("<Counter />", () => {
  test("should increment", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const increment = screen.getByText("+");
    User.click(increment);

    expect(screen.getByLabelText("count")).toHaveTextContent("1");
  });

  test("with initial state", () => {
    const store = createStore(reducer, { count: 3 });
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.getByLabelText("count")).toHaveTextContent("3");
  });
});
