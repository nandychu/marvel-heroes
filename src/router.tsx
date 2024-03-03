import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

type Route = {
  label: string;
  path: string;
  element: Promise<React.FC>;
};

export const routes: Route[] = [
  {
    label: "Heroes",
    path: "/heroes",
    element: import("./pages/Heroes").then(({ HeroesPage }) => HeroesPage),
  },
  {
    label: "Description",
    path: "/description/:heroeId",
    element: import("./pages/HeroDescription").then(({ HeroDescriptionPage }) => HeroDescriptionPage),
  },
  {
    label: "Favorites",
    path: "/favs",
    element: import("./pages/Favs").then(({ FavsPage }) => FavsPage),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./layout").then(({ Layout }) => ({ Component: Layout })),
    children: routes.map((route) => ({
      path: route.path,
      lazy: () => route.element.then((Component) => ({ Component })),
    })),
  },
]);

export const Router = () => {
  return <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />;
};
