import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import { Spinner } from "flowbite-react";
import ErrorPage from "./Components/Pages/ErrorPage";
import EditProductPage from "./Components/Layout/Products/EditProductPage";
const Products = lazy(() => import("./Components/Pages/Products"));
const Users = lazy(() => import("./Components/Pages/Users"));
const AddProduct = lazy(() => import("./Components/Pages/AddProduct"));
const Inbox = lazy(() => import("./Components/Pages/Inbox"));
const Orders = lazy(() => import("./Components/Pages/Orders"));
import ChatPage from "./Components/Layout/Inbox/ChatPage";
import OrderDetails from "./Components/Pages/OrderDetails";
import ProductDetails from "./Components/Pages/ProductDetails";
import ProfilePage from "./Components/Pages/ProfilePage";
let route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },//Dashboard
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
      },//All Products
      {
        path: "product/:productId/edit",
        element: <EditProductPage />,
      },//Edit product
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },//PDP
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
      },//Add Product
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
      },//All Users
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
      },//All Inbox
      {
        path: "chats/:id",
        element: <ChatPage />,
      },//Chat Page
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
      },//All Orders
      {
        path: "order/:id",
        element: <OrderDetails />,
      },//Order Detail Page (ODP)
      {
        path: "user/profile",
        element: <ProfilePage />,
      },//Profile Edit 
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
