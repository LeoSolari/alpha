import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insumos from "./pages/Insumos";
import Inventario from "./pages/Inventario";
import Error from "./pages/Error";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import reducers from "./reducers";
import { legacy_createStore as createStore } from "redux";

import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/insumos" element={<Insumos />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="*" element={<Error />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
