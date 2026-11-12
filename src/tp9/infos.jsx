export default function Info(props) {
  return (
    <div>
      <h3>Responsable connecté : {props.nom}</h3>
      <h3>Code : {props.code}</h3>
    </div>
  );
}

