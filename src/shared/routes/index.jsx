import React, { createRef, useEffect, useState } from "react";
import { createBrowserRouter, useLocation, useOutlet } from "react-router-dom";
import { Suspense } from "react";

import Home1 from "../../pages/Home1";
import Home2 from "../../pages/Home2";
import Home3 from "../../pages/Home3";
import About from "../../pages/About";
import Team from "../../pages/Team";
import Faq from "../../pages/Faq";
import Projects from "../../pages/Projects";
import Services from "../../pages/Services";
import ServicesDetails from "../../pages/ServicesDetails";
import ProjectDetails from "../../pages/ProjectDetails";
import News from "../../pages/News";
import NewsDetails from "../../pages/NewsDetails";
import Contact from "../../pages/Contact";

import TopBarProgress from "react-topbar-progress-indicator";

import { CSSTransition, SwitchTransition } from "react-transition-group";

const routes = [
  {
    path: "home-2",
    element: <Home2 />,
    nodeRef: createRef(),
  },
  {
    path: "home-3",
    element: <Home3 />,
    nodeRef: createRef(),
  },
  {
    path: "about",
    element: <About />,
    nodeRef: createRef(),
  },
  {
    path: "team",
    element: <Team />,
    nodeRef: createRef(),
  },
  {
    path: "faq",
    element: <Faq />,
    nodeRef: createRef(),
  },
  {
    path: "projects",
    element: <Projects />,
    nodeRef: createRef(),
  },
  {
    path: "services",
    element: <Services />,
    nodeRef: createRef(),
  },
  {
    path: "services-details",
    element: <ServicesDetails />,
    nodeRef: createRef(),
  },
  {
    path: "project-details",
    element: <ProjectDetails />,
    nodeRef: createRef(),
  },
  {
    path: "news",
    element: <News />,
    nodeRef: createRef(),
  },
  {
    path: "news-details",
    element: <NewsDetails />,
    nodeRef: createRef(),
  },
  {
    path: "contact",
    element: <Contact />,
    nodeRef: createRef(),
  },
  {
    path: "",
    element: <Home1 />,
    index: true,
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
    {
      path: "*",
      loader: () => <h2>LOADING...</h2>,
      element: <h1>error</h1>,
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
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
