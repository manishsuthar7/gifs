import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import { Children } from "react"
import GifPage from "./page/single-gif"
import Category from "./page/category"
import Search from "./page/search"
import AppLayout from "./layout/app-layout"

import Home from "./page/home"
import GifProvider from "./context/gif-context";
import Favorites from "./page/favorites";


const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:category',
        element: <Category />
      },
      {
        path: '/search/:query',
        element: <Search />
      },
      {
        path: '/:type/:slug',
        element: <GifPage />
      },
      {
        path: '/favorites',
        element: <Favorites />
      }
    ]
  }
])

const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App
