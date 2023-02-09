import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ProductListing from "./containers/components/ProductListing";
import ProductDetail from "./containers/components/ProductDetail";
import BaseLayout from "./containers/layouts/baseLayout";
import MainLayout from "./containers/layouts/mainLayout";
import NotFound from "./containers/components/NotFound";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
