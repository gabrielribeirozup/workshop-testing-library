import "whatwg-fetch";
import { render, screen, waitFor } from "@testing-library/react";
import User from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { StarWarsLoader } from "../StarWarsLoader";

const searchTerm = "Luke Skywalker";

const server = setupServer(
  rest.get(`https://swapi.dev/api/people/`, (req, res, ctx) => {
    return res(ctx.json({ results: [{ name: searchTerm }] }));
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("should show the first search result", async () => {
  const { debug } = render(<StarWarsLoader />);
  const { getByLabelText, getByText, queryByText } = screen;

  const input = getByLabelText(/name/i);
  const button = getByText(/search/i);
  User.type(input, searchTerm);
  User.click(button);

  await waitFor(() => expect(queryByText(`Hello ${searchTerm}`)).toBeVisible());
});
