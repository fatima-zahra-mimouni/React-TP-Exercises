export default function Voyage({ voyage }) {
  return (
    <div >
      <img src={voyage.image} alt={voyage.nom} />

      <h3>{voyage.nom}</h3>

      <p>Continent : {voyage.continent}</p>
    </div>
  );
}

