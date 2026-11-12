import { useState } from "react";
import Title from "../tp5/title";
import { etudiants, filieres } from './data.jsx';
import Etudiant from "./Etudiant.jsx";
export default function App(){

    const [filiere,setFilieres]= useState('');
    const Etu = etudiants.filter(x => x.filiere === filiere);

    return(
        <div>
        <Title Title=" Liste des étudiants"/> 


        <label>Choisir une filière :</label>
        <select value={filiere}onChange={(e) => setFilieres(e.target.value)}>

            <option value="">Choisir</option>
            {filieres.map((x) => (
                <option value={x}>{x}</option>
            ))}
        </select>

        {Etu.map((x) => (
             <Etudiant
             nom={x.nom}
             filiere={x.filiere}
             ville={x.ville}
             /> 
        )
    )}
        </div>
    );
}