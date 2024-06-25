import React from "react";
import ReactDOM from "react-dom";
// import SimpleReactLightbox from "simple-react-lightbox";
import App from "./App";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals();
