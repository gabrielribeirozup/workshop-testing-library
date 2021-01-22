import { render, screen, waitFor } from "@testing-library/react";
import User from "@testing-library/user-event";

import { StarWarsLoader } from "../StarWarsLoader";
import { getPerson as mockGetPerson } from "../api";

jest.mock("../api");

test("should show the first search result", async () => {
  const searchTerm = "Luke Skywalker";
  mockGetPerson.mockResolvedValueOnce({ results: [{ name: searchTerm }] });
  const { debug } = render(<StarWarsLoader />);
  const { getByLabelText, getByText, queryByText } = screen;

  const input = getByLabelText(/name/i);
  const button = getByText(/search/i);
  User.type(input, searchTerm);
  User.click(button);

  await waitFor(() => expect(mockGetPerson).toHaveBeenCalledWith(searchTerm));
  await waitFor(() => expect(mockGetPerson).toHaveBeenCalledTimes(1));

  await waitFor(() => expect(queryByText(`Hello ${searchTerm}`)).toBeVisible());
});
