import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";
import EditProductPage from "./Pages/Products/EditProductPage";
import AddProduct from "./Pages/Products/AddProduct";
import ChatPage from "./Pages/Inbox/ChatPage";
import OrderDetails from "./Pages/Orders/OrderDetails";
import ProductDetails from "./Pages/Products/ProductDetails";
import EditProfilePage from "./Pages/EditProfilePage";
const Users = lazy(() => import("./Pages/Users"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Inbox = lazy(() => import("./Pages/Inbox/Inbox"));
const Orders = lazy(() => import("./Pages/Orders/Orders"));

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
          <Suspense>
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
          <Suspense>
            <Users />
          </Suspense>
        ),
      }, //All Users
      {
        path: "inbox",
        element: (
          <Suspense>
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
          <Suspense>
            <Orders />
          </Suspense>
        ),
      }, //All Orders
      {
        path: "orders/:id",
        element: <OrderDetails />,
      }, //Order Detail Page (ODP)
      {
        path: "profile",
        element: <EditProfilePage />,
      }, //Profile Edit
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
