import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./component/Header.tsx";
import Body from "./component/Body.tsx";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
