import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primeicons/primeicons.css";
import store from "./stores/store";
import { Provider } from "react-redux";
import PokedexView from "./view/PokedexView.jsx";
import PokemonDetail from "./view/PokemonDetail.jsx";
import FavouritePokemonView from "./view/FavouritePokemonView.jsx";
import About from "./view/About.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokedexView />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pokedex",
    element: <FavouritePokemonView />,
  },
  {
    path: "/pokedex/:name",
    element: <PokemonDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
