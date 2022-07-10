import React from "react";
import { GlobalStatePoke } from "./global/GlobalStatePoke";
import Router from "./Router/Router";

export default function App() {
  return (
    <GlobalStatePoke>
      <Router />
    </GlobalStatePoke>
  );
}
