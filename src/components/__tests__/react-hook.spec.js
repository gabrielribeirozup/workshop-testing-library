import { render, act } from "@testing-library/react";
import { useCounter } from "../useCounter";

describe("useCounter Hook", () => {
  test("should increment/decrement", () => {
    // useCounter();

    let counter;
    function TestComponent() {
      counter = useCounter();
      return null;
    }

    render(<TestComponent />);

    expect(counter.count).toBe(0);
    // counter.increment();
    act(() => counter.increment());
    expect(counter.count).toBe(1);

    act(() => counter.decrement());
    expect(counter.count).toBe(0);
  });
});
