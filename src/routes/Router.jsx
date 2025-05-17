import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffe from "../components/UpdateCoffe";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "addCoffe",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee",
        Component: UpdateCoffe,
      },
    ],
  },
]);
