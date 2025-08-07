import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import RestaurantMenu from "../../component/RestaurantMenu";
import MOCK_DATA from "../mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "../AppStore";
import Cart from "../../component/Cart";
import Header from "../../component/Header";

window.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await waitFor(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (14)");
  expect(accordionHeader).toBeInTheDocument();
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("item").length).toBe(14);
  expect(screen.getByText("Cart - 0")).toBeInTheDocument();
  const items = screen.getAllByTestId("item");
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - 1")).toBeInTheDocument();
});
