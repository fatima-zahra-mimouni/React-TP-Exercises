
import { useState } from 'react';
import { utilisateurs, roles } from './data';
import Titre from './Titre';

export default function App() {

    const [users, setUsers] = useState(utilisateurs);

    const [roleRecherche, setRoleRecherche] = useState('');
    const [roleFiltre, setRoleFiltre] = useState('');

    const [nom, setNom] = useState('');
    const [role, setRole] = useState('Normal');

    // Rechercher
    const rechercher = () => {
        setRoleFiltre(roleRecherche);
    };

    // Filtrer
    const utilisateursFiltres = users.filter((u) => {
        return u.role === roleFiltre || roleFiltre === '';
    });

    // Ajouter
    const ajouter = (e) => {
        e.preventDefault();

        const nouveau = {
            id: Date.now(),
            nom: nom,
            role: role,
            etat: false
        };

        setUsers([...users, nouveau]);

        setNom('');
        setRole('Normal');
        setRoleRecherche('');
        setRoleFiltre('');
    };

    // Supprimer
    const supprimerEtudiant = (id) => {
        const nouvelleListe = users.filter((u) => u.id !== id);
        setUsers(nouvelleListe);
    };

    // Nombre des utilisateurs validés
    const nombreValides = users.filter(
        (u) => u.etat === true
    ).length;

    return (
        <div>

            {/* Liste des utilisateurs */}

            <Titre texte="Liste des utilisateurs" />

            <select
                value={roleRecherche}
                onChange={(e) => setRoleRecherche(e.target.value)}
            >
                <option value="">Tous les rôles</option>

                {roles.map((r) => (
                    <option key={r} value={r}>
                        {r}
                    </option>
                ))}
            </select>

            <button
                type="button"
                onClick={rechercher}
            >
                Rechercher
            </button>

            {/* Tableau */}

            <table border="1">
                <thead>
                    <tr>
                        <th>Nom Complet</th>
                        <th>Rôle</th>
                        <th>État</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {utilisateursFiltres.map((u) => (
                        <tr key={u.id}>
                            <td>{u.nom}</td>

                            <td>{u.role}</td>

                            <td>
                                {u.etat === true ? 'validé' : 'en cours'}
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={() => supprimerEtudiant(u.id)}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Nombre des utilisateurs validés */}

            <p>
                Le nombre des utilisateurs validés : {nombreValides}
            </p>

            {/* Formulaire */}

            <Titre texte="Nouvel utilisateur" />

            <form onSubmit={ajouter}>

                <div>
                    <label>Nom complet :</label>

                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>

                <br />

                <div>
                    <p>Rôle</p>

                    {roles.map((r) => (
                        <div key={r}>
                            <input
                                type="radio"
                                name="role"
                                value={r}
                                checked={role === r}
                                onChange={(e) => setRole(e.target.value)}
                            />

                            <label>{r}</label>
                        </div>
                    ))}
                </div>

                <br />

                <button type="submit">
                    Ajouter
                </button>

            </form>

        </div>
    );
}
