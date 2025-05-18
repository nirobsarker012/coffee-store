import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router";
import ContextProvider from "./contexts/ContextProvider";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
