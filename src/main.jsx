import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import { Spinner } from "flowbite-react";
import ErrorPage from "./Components/Pages/ErrorPage";
import EditProductPage from "./Components/Pages/Products/EditProductPage";
const Products = lazy(() => import("./Components/Pages/Products/Products"));
const Users = lazy(() => import("./Components/Pages/Users"));
const Inbox = lazy (()=>import("./Components/Pages/Inbox/Inbox"))
import AddProduct from "./Components/Pages/Products/AddProduct";
const Orders = lazy(() => import("./Components/Pages/Orders/Orders"));
import ChatPage from "./Components/Pages/Inbox/ChatPage";
import OrderDetails from "./Components/Pages/Orders/OrderDetails";
import ProductDetails from "./Components/Pages/Products/ProductDetails";
import EditProfilePage from "./Components/Pages/EditProfilePage";

let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      }, //Dashboard
      {
        path: "products",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-xl blur-bg p-10 rounded flex-col w-full h-screen">
                <Spinner size="xl" />
                Loading...
              </div>
            }
          >
            <Products />
          </Suspense>
        ),
      }, //All Products
      {
        path: "products/:productId/edit",
        element: <EditProductPage />,
      }, //Edit product
      {
        path: "products/:productId",
        element: <ProductDetails />,
      }, //PDP
      {
        path: "products/add",
        element: <AddProduct />,
      }, //Add Product
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
      }, //All Users
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
      }, //All Inbox
      {
        path: "inbox/chats/:id",
        element: <ChatPage />,
      }, //Chat Page
      {
        path: "orders",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-xl blur-bg p-10 rounded flex-col w-full h-screen">
                <Spinner size="xl" />
                Loading...
              </div>
            }
          >
            <Orders />
          </Suspense>
        ),
      }, //All Orders
      {
        path: "orders/:id",
        element: <OrderDetails />,
      }, //Order Detail Page (ODP)
      {
        path: "user/profile",
        element: <EditProfilePage />,
      }, //Profile Edit
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
