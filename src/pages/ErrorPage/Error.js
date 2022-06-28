import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Router/coordinator";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Error Page</p>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
    </div>
  );
}
