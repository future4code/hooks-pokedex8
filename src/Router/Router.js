import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetalhesPage from "../pages/Detalhes/Detalhes";
import PokedexPage from "../pages/Pokedex/Pokedex";
import Error from "../pages/ErrorPage/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detalhes/:namepokemon" element={<DetalhesPage />} />
        <Route path="/pokedex/" element={<PokedexPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
