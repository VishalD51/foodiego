import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import RestaurantCard from "../../component/RestaurantCard";
import MOCK_DATA from "../resCardMock.json";
import { BrowserRouter } from "react-router-dom";

it("Should render Restaurantcard with props Data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard restData={MOCK_DATA} />
    </BrowserRouter>
  );

  const resName = screen.getByText("Pizza Hut");
  expect(resName).toBeInTheDocument();
});
