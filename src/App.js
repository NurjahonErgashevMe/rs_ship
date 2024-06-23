import { RouterProvider } from "react-router-dom";
import React from "react";

import { router } from "./shared/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
