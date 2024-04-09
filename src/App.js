import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ProductInfo from "./pages/productInfo";

function App() {
  const [id, setId] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard setId={setId} />} />
        <Route path={`/product/${id}`} element={<ProductInfo id={id} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
