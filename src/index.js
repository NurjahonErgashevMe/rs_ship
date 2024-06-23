import React from "react";
import ReactDOM from "react-dom";
// import SimpleReactLightbox from "simple-react-lightbox";
// import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/routes";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <SimpleReactLightbox> */}
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </SimpleReactLightbox> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
