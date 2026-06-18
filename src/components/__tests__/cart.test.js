import ResMenu from "./../ResMenu";
import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../../../utils/mockData";
import { Provider } from "react-redux";
import appStore from "./../../../utils/appStore";
import Header from "./../Header";
import { MemoryRouter } from "react-router-dom";
import Cart from "./../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA.resData);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <Header />
          <ResMenu />
          <Cart />
        </Provider>
        ,
      </MemoryRouter>,
    ),
  );
  const accordianHeader = screen.getByText("Food - Fries (2)");

  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems).toHaveLength(2);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart- 1")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart- 2")).toBeInTheDocument();
  expect(screen.getAllByTestId("cartItem")).toHaveLength(2);
  const clearBtn=screen.getByText("Clear Cart");
  fireEvent.click(clearBtn);
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
