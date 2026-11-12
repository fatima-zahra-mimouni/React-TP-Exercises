
import Info from "./infos";
import ListDR from "./listeD";
import TableTache from "./TableTache";

import {
  Employe,
  types,
  projets,
  Taches
} from "./data";

function App() {

  const elements = {Employe, types,  projets };
    
  return (
    <div>
      <Info
        nom="MOHAMED HASSAN"
        code="TY678" />

      <ListDR elements={elements} />

      <TableTache listetaches={Taches} />

      <h4>
        Total des heures travaillées :
        {Taches.reduce((total, t) => total + t.Durée, 0)}
        heures
      </h4>
    </div>
  );
}

export default App;
