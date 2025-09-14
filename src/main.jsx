import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import Products from "./Components/Pages/Products";
import Settings from "./Components/Pages/Settings";
import Users from "./Components/Pages/Users"
import Inbox from "./Components/Pages/Inbox";
import { Spinner } from "flowbite-react";
import ErrorPage from "./Components/Pages/ErrorPage";

const AddProduct = lazy(() =>
  import("./Components/Pages/AddProduct")
);
let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/add",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-xl blur-bg p-10 rounded flex-col w-full h-screen">
                <Spinner size="xl"/>
                Loading...
              </div>
            }
          >
            <AddProduct />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "inbox",
        element: <Inbox />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
