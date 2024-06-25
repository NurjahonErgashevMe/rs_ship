import React, { createRef, useEffect, useState } from "react";
import { createBrowserRouter, useLocation, useOutlet } from "react-router-dom";
import { Suspense } from "react";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Faq from "../../pages/Faq";
import Services from "../../pages/Services";
import ServicesDetails from "../../pages/ServicesDetails";
import Contact from "../../pages/Contact";
import NotFound from "../../pages/NotFound";

import TopBarProgress from "react-topbar-progress-indicator";

import { CSSTransition, SwitchTransition } from "react-transition-group";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTopRoute from "../../components/ScollToTopRoute";

const routes = [
  {
    path: "about",
    element: <About />,
    nodeRef: createRef(),
  },
  {
    path: "faq",
    element: <Faq />,
    nodeRef: createRef(),
  },
  {
    path: "services",
    element: <Services />,
    nodeRef: createRef(),
  },
  {
    path: "service/:id",
    element: <ServicesDetails />,
    nodeRef: createRef(),
  },
  {
    path: "contact",
    element: <Contact />,
    nodeRef: createRef(),
  },
  {
    path: "",
    element: <Home />,
    index: true,
    nodeRef: createRef(),
  },
  {
    path: "*",
    loader: () => <h2>LOADING...</h2>,
    element: <NotFound />,
    nodeRef: createRef(),
  },
];

export const router = createBrowserRouter(
  [
    {
      path: "/",
      loader: () => <h2>LOADING...</h2>,
      element: (
        <Suspense fallback={<h2>Loading...</h2>}>
          <Layout />
        </Suspense>
      ),
      children: routes,
    },
  ],
  {
    basename: "/",
  }
);

TopBarProgress.config({
  barColors: {
    0: "#ffc54f",
    "1.0": "#ffc54f",
  },
  shadowBlur: 5,
});

function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");

  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);
  return (
    <>
      {progress && <TopBarProgress />}
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {() => (
            <div ref={nodeRef} className="page">
              <ScrollToTopRoute />
              <Header />
              {currentOutlet}
              <Footer />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
