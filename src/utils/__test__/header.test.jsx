import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../component/Header";
import { Provider } from "react-redux";
import AppStore from "../AppStore";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";

it("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with Cart - 0", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("Cart - 0");
  expect(loginButton).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
