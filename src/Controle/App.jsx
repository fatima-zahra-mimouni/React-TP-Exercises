
import React, { useState } from 'react';
import Title from './Title.jsx';
import { specialites, medecins } from './data.jsx';
import Medecin from './medecin.jsx';

export default function App() {
    const [specialite, setSpecialite] = useState('');

    const mee = medecins.filter(
        x => x.Spécialité === specialite);
    

    return (
        <div>
            <Title Title="Liste des medecins" />

            
            <label>Choisir une spécialité :</label>
            <select value={specialite} onChange={(e) => setSpecialite(e.target.value)}>
           <option value="">Choisir</option>

                {specialites.map((x) => (
                    <option  value={x}>{x}</option>
                    
                ))}
            </select>

            {mee.map((x) => (
                <Medecin
                    nom={x.nom}
                    Spécialité={x.Spécialité}
                    Adresse={x.Adresse}
                    Tèl={x.Tèl}
                />
            ))}
        </div>
    );
}
