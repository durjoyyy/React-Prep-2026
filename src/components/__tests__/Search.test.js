import Body from "./../Body";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with search button and check res list", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(13);

  const searchButton = screen.getByRole("button", { name: /search/i });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {
    target: { value: "Biryani" },
  });
  fireEvent.click(searchButton);
  expect(searchButton).toBeInTheDocument();

  //screen should load 4 cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});
