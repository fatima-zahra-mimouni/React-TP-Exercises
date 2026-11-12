import { useState } from "react";

function VetementItem({v}) {

  

  const [taille, setTaille] = useState(v.tailles[0]);

  return (
    <div>
      <h3>{v.nom}</h3>

      <p>Prix : {v.prix} DH</p>

      <p>Tailles disponibles :</p>

      {v.tailles.map((t) => (
        <button onClick={() => setTaille(t)}>
          {t}
        </button>
      ))}

      <p>Taille choisie : {taille}</p>
    </div>
  );
}

export default VetementItem;


