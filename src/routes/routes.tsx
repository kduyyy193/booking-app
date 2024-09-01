import Fallback from "components/Fallback";
import DefaultLayout from "layouts/DefaultLayout";
import GuestLayout from "layouts/GuestLayout";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import routerLinks from "./routerLinks";

const User = lazy(() => import("pages/User"));
const Notfound = lazy(() => import("pages/NotFound"));
const BookATable = lazy(() => import("pages/Booking/BookATable"));
const CustomerInfomation = lazy(() => import("pages/Booking/CustomerInfomation"));
const ReviewSummary = lazy(() => import("pages/Booking/ReviewSummary"));
const Reserved = lazy(() => import("pages/Booking/Reserved"));

interface IRoute {
  id: string;
  path: string;
  element: JSX.Element;
  children?: IRoute[];
  accessRoles?: string[];
}

const ROUTES: IRoute[] = [
  {
    id: "a1312acc-fd64-49a9-ad60-500cbd69836e",
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        id: "b9e86a11-665f-47dd-90b5-eb6d1074b7c4",
        path: "/",
        element: <BookATable />,
      },
      {
        id: "b9e86a11-665f-47dd-90b5-eb6d1074b7c5",
        path: routerLinks("customerInfomation"),
        element: <CustomerInfomation />,
      },
      {
        id: "b9e86a11-665f-47dd-90b5-eb6d1074b7c99",
        path: routerLinks("reviewSummary"),
        element: <ReviewSummary />,
      },
      {
        id: "b9e86a11-665f-47dd-9bb5-eb6d10ggb7c99",
        path: routerLinks("reservation"),
        element: <Reserved />,
      },
    ],
  },
  {
    id: "5",
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        id: "acbdfdaa-e864-4e00-8157-bb29b40f208d",
        path: "/",
        element: <User />,
      },
    ],
  },
  {
    id: "notFound",
    path: "*",
    element: <Notfound />,
  },
];

export default function AppRoutes() {
  const renderRoute = (route: IRoute) => {
    return (
      <Route
        key={route.id}
        path={route.path}
        element={<React.Suspense fallback={<Fallback />}>{route.element}</React.Suspense>}
      >
        {route.children
          ? route.children.map((item) => {
              return renderRoute(item);
            })
          : null}
      </Route>
    );
  };

  return (
    <React.Suspense fallback={<Fallback />}>
      <Routes>
        {ROUTES.map((item) => {
          return renderRoute(item);
        })}
      </Routes>
    </React.Suspense>
  );
}
