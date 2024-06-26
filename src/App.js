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
        form={{
          scrollToFirstError: true,
          requiredMark: false,
        }}
        theme={{
          token: {
            colorPrimary: primaryColor,
            borderRadius: 10,
            fontSize: 15,
            fontFamily: "Font Awesome 5 Pro",
          },
          components: {
            Select: {
              controlHeight: 40,
              fontSizeIcon: 18,
            },
            Input: {
              controlHeight: 40,
              fontSizeIcon: 18,
            },
            DatePicker: {
              controlHeight: 40,
              fontSizeIcon: 18,
            },
            Form: {
              labelFontSize: 18,
              fontWeightStrong: 500,
            },
            Button: {
              fontSize: 18,
              controlHeight: 40,
            },
            Space: {
              controlOutlineWidth: "100%",
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
