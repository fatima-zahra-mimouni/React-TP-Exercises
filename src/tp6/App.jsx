
import { useState } from "react";
import Entete from "./Entete";
import { listeEtudiants, listefilieres } from "./data.jsx";

export default function App() {

    const [etudiants, setEtudiants] = useState(listeEtudiants);

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [filiere, setFiliere] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");

    const [recherche, setRecherche] = useState("");

    // Ajouter un étudiant
    const ajouterEtudiant=(e)=>{
        e.preventDefault();

        const nouveau = {
            id: Date.now(),
            nom,
            prenom,
            filiere,
            dateNaissance,
            email,
            note: Number(note)
        };

        setEtudiants([...etudiants, nouveau]);

        // Vider le formulaire
        setNom("");
        setPrenom("");
        setFiliere("");
        setDateNaissance("");
        setEmail("");
        setNote("");
    }

    // Supprimer un étudiant
    const supprimerEtudiant=(id) =>{
        const nouvelleListe = etudiants.filter(
            x => x.id !== id
        );

        setEtudiants(nouvelleListe);
    }

    // Rechercher par filière
    const resultat = etudiants.filter(
        x => recherche === "" || x.filiere === recherche
    );

    // Compter les étudiants ayant une note supérieure à 10
    const nombre = etudiants.filter(
        x => x.note > 10
    ).length;

    return (
        <div>

            <Entete Entete="Gestion des Etudiants" />

            <h2>Ajouter un étudiant</h2>

            <form onSubmit={ajouterEtudiant}>

                Nom :
                <input
                    type="text"
                    value={nom}
                    onChange={e => setNom(e.target.value)}
                    required
                />

                <br /><br />

                Prénom :
                <input
                    type="text"
                    value={prenom}
                    onChange={e => setPrenom(e.target.value)}
                    required
                />

                <br /><br />

                Date de naissance :
                <input
                    type="date"
                    value={dateNaissance}
                    onChange={e => setDateNaissance(e.target.value)}
                    required
                />

                <br /><br />

                Email :
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                Note :
                <input
                    type="number"
                    min="0"
                    max="20"
                    step="0.01"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    required
                />

                <br /><br />

                Filière :
                <select
                    value={filiere}
                    onChange={e => setFiliere(e.target.value)}
                    required
                >
                    <option value="">Choisir une filière</option>

                    {listefilieres.map(f => (
                        <option value={f}>
                            {f}
                        </option>
                    ))}
                </select>

                <br /><br />

                <button type="submit">
                    Ajouter
                </button>

            </form>

            <hr />

            <h2>Liste des étudiants</h2>

            {/* Filtrer par filière */}
            <label>Rechercher par filière : </label>

            <select
                value={recherche}
                onChange={e => setRecherche(e.target.value)}
            >
                <option value="">Toutes les filières</option>

                {listefilieres.map(f => (
                    <option value={f}>{f}
                        
                    </option>
                ))}
            </select>

            <br /><br />

            {/* Tableau des étudiants */}
            <table border="1" cellPadding="8">

                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Filière</th>
                        <th>Date Naissance</th>
                        <th>Email</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {resultat.map(x => (
                        <tr key={x.id}>

                            <td>{x.nom}</td>
                            <td>{x.prenom}</td>
                            <td>{x.filiere}</td>
                            <td>{x.dateNaissance}</td>
                            <td>{x.email}</td>
                            <td>{x.note}</td>

                            <td>

                                <button
                                    type="button"
                                    onClick={() => supprimerEtudiant(x.id)}
                                >
                                    Supprimer
                                </button>
                            </td>

                        </tr>
                    ))}

                    {resultat.length === 0 && (
                        <tr>
                            <td colSpan="7">
                                Aucun étudiant trouvé.
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

            <h3>
                Nombre des étudiants ayant une note supérieure à 10 :
                {" "}{nombre}
            </h3>

            <h3>
                Nombre total des étudiants : {etudiants.length}
            </h3>

        </div>
    );
}
