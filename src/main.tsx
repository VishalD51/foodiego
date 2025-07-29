import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./component/Header.tsx";
import Body from "./component/Body.tsx";
import AboutUs from "./component/AboutUs.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ConatctUs from "./component/ContactUs.js";
import Error from "./component/Error.tsx";
import RestaurantMenu from "./component/RestaurantMenu.tsx";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore.ts";
import Cart from "./component/Cart.tsx";
const AppLayout = () => (
  <Provider store={AppStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
  </Provider>
);

const Grocery = lazy(() => import("./component/Grocery.tsx"));

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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={route} />
);
