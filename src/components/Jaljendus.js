import React from "react";
import { useState } from "react";

function Jaljendus() {
  const [linn, muudaLinn] = useState("haapsalu");
  return (
    <div>
      <select onChange={(e) => muudaLinn(e.target.value)} data-testid="valik1">
        <option value="haapsalu">Haapsalu</option>
        <option value="narva">Narva</option>
        <option value="tallinn">Tallinn</option>
        <option value="tartu">Tartu</option>
      </select>{" "}
      <br />
      <br />
      <br />
      <span data-testid="vastus1">Valiti {linn.toUpperCase()}</span>
    </div>
  );
}
export default Jaljendus;
