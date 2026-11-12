
import { useState } from "react";

export default function TableTache({ listetaches }) {

  const [selected, setSelected] = useState(null);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Code Tâche</th>
            <th>Date Tâche</th>
            <th>Résumé</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {listetaches.map((t) => (
            <tr >
              <td>{t.Code}</td>
              <td>{t.Date}</td>
              <td>{t.Resume}</td>
              <td>
   <button onClick={() => setSelected(t)}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div>
           <h2>Details de la Taches</h2>
           <p>code:{selected.Code}</p>
           <p>Date:{selected.Date}</p>
           <p>Résumé:{selected.Resume}</p>
           <p>Durée:{selected.Durée} h</p>
        </div>
       
      )}
    </div>
  );
}


