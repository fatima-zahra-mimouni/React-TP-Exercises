import { useState } from "react";
import { voyages } from "./data";
import Entete from "./Entete";
import Galerie from "./Galerie";

export default function App() {

  // Définir le filtre initial
  const [filtre, setFiltre] = useState("Tous");

  // Filtrer les voyages
  const voyagesFiltres = voyages.filter((v) => {
    return filtre === "Tous" || v.continent === filtre;
  });

  return (
    <div className="app">

      <Entete titre="Galerie de voyages" />

      {/* Boutons de filtrage */}
      <div>
        <button onClick={() => setFiltre("Tous")}>
          Tous
        </button>

        <button onClick={() => setFiltre("Afrique")}>
          Afrique
        </button>

        <button onClick={() => setFiltre("Europe")}>
          Europe
        </button>

        <button onClick={() => setFiltre("Asie")}>
          Asie
        </button>
      </div>

      {/* Afficher la galerie */}
      <Galerie voyages={voyagesFiltres} />

    </div>
  );
}

 