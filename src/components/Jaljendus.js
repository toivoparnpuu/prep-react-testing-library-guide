import React from "react";
import { useState } from "react";

function Jaljendus() {
  const [linn, muudaLinn] = useState("haapsalu");
  const [teave, muudaTeave] = useState("puudub");

  async function  kysiAndmed(linnakood){
    const yhendus=await fetch(`https://www.tlu.ee/~jaagup/veeb1/raamistikud/${linnakood}.txt`);
    const text=await yhendus.text();
    muudaTeave(text);
  }
  React.useEffect(() => {
    kysiAndmed(linn);
  }, [linn]);

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
      <span data-testid="vastus1">Valiti {linn}</span>
      <div data-testid="vastus2">{teave} </div>
    </div>
  );
}
export default Jaljendus;
