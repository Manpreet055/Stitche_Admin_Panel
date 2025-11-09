import React from "react";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";
const EditProfilePage = lazy(() => import("./Pages/EditProfilePage"));
const AddProduct = lazy(() => import("./Pages/Products/AddProduct"));
const ChatPage = lazy(() => import("./Pages/Inbox/ChatPage"));
const OrderDetails = lazy(() => import("./Pages/Orders/OrderDetails"));
const ProductDetails = lazy(() => import("./Pages/Products/ProductDetails"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Users = lazy(() => import("./Pages/Users/Users"));
const EditProductPage = lazy(() => import("./Pages/Products/EditProductPage"));
const Inbox = lazy(() => import("./Pages/Inbox/Inbox"));
const Orders = lazy(() => import("./Pages/Orders/Orders"));
const SearchItems = lazy(() => import("./Pages/SearchItems"));
const UserDetails = lazy(() => import("./Pages/Users/UserDetails"));

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
        path: "search",
        element: (
          <Suspense>
            <SearchItems />
          </Suspense>
        ),
      }, //Search Page
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
        element: (
          <Suspense>
            <EditProductPage />
          </Suspense>
        ),
      }, //Edit product
      {
        path: "products/:productId",
        element: (
          <Suspense>
            <ProductDetails />
          </Suspense>
        ),
      }, //PDP
      {
        path: "products/add",
        element: (
          <Suspense>
            <AddProduct />
          </Suspense>
        ),
      }, //Add Product
      {
        path: "users/:userId",
        element: (
          <Suspense>
            <UserDetails />
          </Suspense>
        ),
      }, //All Users
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
        element: (
          <Suspense>
            <ChatPage />
          </Suspense>
        ),
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
        element: (
          <Suspense>
            <OrderDetails />
          </Suspense>
        ),
      }, //Order Detail Page (ODP)
      {
        path: "profile",
        element: (
          <Suspense>
            <EditProfilePage />
          </Suspense>
        ),
      }, //Profile Edit
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
