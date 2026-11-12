
export default function ListDR({ elements }) {
  return (
    <div>
      <label>Type :</label>
      <select>
        {elements.types.map((t) => (
          <option value={t}>{t}</option>
        ))}
      </select>

      <br /><br />

      <label>Projet :</label>
      <select>
        {elements.projets.map((p) => (
          <option value={p}>{p}</option>
        ))}
      </select>

      <br /><br />

      <label>Employé :</label>
      <select>
        {elements.Employe.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <br /><br />
    </div>
  );

}


