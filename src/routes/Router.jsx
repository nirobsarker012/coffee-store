import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffe from "../components/UpdateCoffe";
import CardDetails from "../components/CardDetails";

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
        path: "/coffees/:jodu",
        Component: CardDetails,
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffe,
      },
    ],
  },
]);
