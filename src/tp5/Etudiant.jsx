
export default function Etudiant(props) {
    return (
        <div>
            <h1>{props.nom}</h1>
            <p>{props.filiere}</p>
            <p>{props.ville}</p>
        </div>
    );
}
