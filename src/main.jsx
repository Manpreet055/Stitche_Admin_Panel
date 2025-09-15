import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import Products from "./Components/Pages/Products";
import Settings from "./Components/Pages/Settings";
import { Spinner } from "flowbite-react";
import ErrorPage from "./Components/Pages/ErrorPage";

const Users = lazy(() => import("./Components/Pages/Users"));
const AddProduct = lazy(() => import("./Components/Pages/AddProduct"));
const Inbox = lazy(() => import("./Components/Pages/Inbox"));

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
                <Spinner size="xl" />
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
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-xl blur-bg p-10 rounded flex-col w-full h-screen">
                <Spinner size="xl" />
                Loading...
              </div>
            }
          >
            <Users />
          </Suspense>
        ),
      },
      {
        path: "inbox",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-xl blur-bg p-10 rounded flex-col w-full h-screen">
                <Spinner size="xl" />
                Loading...
              </div>
            }
          >
            <Inbox />
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
