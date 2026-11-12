import Voyage from "./Voyage";

function Galerie({ voyages }) {
  return (
    <div >
      {voyages.map((v) => (
        <Voyage  voyage={v} />
      ))}
    </div>
  );
}

export default Galerie;