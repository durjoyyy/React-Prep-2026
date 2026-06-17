import Header from "../Header";
import appStore from "./../../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should Load Header Component with a login Button", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );

  //const loginButton=screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" });
  const themeButton = screen.getByRole("button", { name: /Change Theme/i });
  expect(themeButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

it("Should Header Component with a Cart", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );

  const cartItems = screen.getByText("Cart- 0");
  expect(cartItems).toBeInTheDocument();
});

it("Should Header Component with 0 Cart Items", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );

  const cartItems = screen.getByText("Cart- 0");
  const cartItemsRegex = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
  expect(cartItemsRegex).toBeInTheDocument();
});



it("Should Change Login Button to Logout on Click", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>,
  );


  const loginButton=screen.getByRole('button',{name:"Login"});
  fireEvent.click(loginButton);
  const logoutButton=screen.getByRole('button',{name:"Logout"});

  
  expect(logoutButton).toBeInTheDocument();

});



