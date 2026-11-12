import VetementItem from "./VetementItem";

function ListeVetements(props) {

  return (
    <div>
      {props.vetements.map((v) => (
        <VetementItem v={v} />
      ))}
    </div>
  );
}

export default ListeVetements;


