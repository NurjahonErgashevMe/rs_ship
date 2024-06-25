import { RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";

import { router } from "./shared/routes";

import AOS from "aos";
import "aos/dist/aos.css";

import loc from "antd/locale/en_US";
import { ConfigProvider } from "antd";

import { primaryColor } from "./shared/defaultStyles";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <ConfigProvider
        locale={loc}
        theme={{
          token: {
            colorPrimary: primaryColor,
            borderRadius: 10,
            padding : 10,
            fontSize : 15,
            
          },
          components: {
            Input: {
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
