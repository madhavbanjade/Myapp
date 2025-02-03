import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS


const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(<App />);
