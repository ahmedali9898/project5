import React from "react";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
