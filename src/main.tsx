import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./component/Header.tsx";
import Body from "./component/Body.tsx";
import AboutUs from "./component/AboutUs.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ConatctUs from "./component/ContactUs.tsx";
import Error from "./component/Error.tsx";
import RestaurantMenu from "./component/RestaurantMenu.tsx";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ConatctUs /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
