import Entete from "./Entete";
import ListeVetements from "./ListeVetements";
import { vetements } from "./data";

export default function App() {

  return (
    <div>

      <Entete titre="Boutique Mode - Choix des Tailles" />

      <ListeVetements vetements={vetements} />

      <h3>Nombre total : {vetements.length}</h3>

    </div>
  );
}
