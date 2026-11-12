export default  function Medecin(props){
    return(
        <div>
            <h1>{props.nom}</h1>
              <p>{props.Spécialité}</p>
                <p>{props.Adresse}</p>
                  <p>{props.Tèl}</p>
        </div>
    )

}