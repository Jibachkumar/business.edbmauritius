import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPermit from "./pages/SearchPermit.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import News from "./pages/News.jsx";
import FaqsAndNotice from "./pages/FaqsAndNotice.jsx";
import Licensing from "./pages/Licensing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/licensing",
        element: <Licensing />,
      },
      {
        path: "/searchpermits",
        element: <SearchPermit />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/faqs",
        element: <FaqsAndNotice />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
