import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from '../../navbar/NavBar';

 function Ajoutdon() {
        const [donneur, setDonneur] = useState({
          nom: "",
          prenom: "",
          groupe: "",
          poids: "",
          dateDon: "",
        });
        const navigate = useNavigate();
      
        const handleChange = (e) => {
          setDonneur({ ...donneur, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (donneur.poids < 50 || donneur.poids > 150) {
            alert("Le poids doit être compris entre 50 et 150 kg.");
            return;
          }
      
          axios.post("https://api.monsite.com/donneurs", donneur, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then(() => {
            alert("Donneur ajouté avec succès !");
            navigate("/liste-donneurs");
          })
          .catch((err) => {
            console.error("Erreur:", err);
            alert("Erreur lors de l'enregistrement.");
          });
        };
  return (
<div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-gray-900 text-white p-8">
  <NavBar/>
        <h1 className="text-3xl font-bold mb-6 mt-24">Ajouter un Donneur</h1>
        <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-4"
        >
            <div>
            <label className="block mb-1 text-gray-800">Nom complet</label>
            <input
                name="nom"
                value={donneur.nom}
                onChange={handleChange}
                required
                pattern="^[A-Za-z\s\-]+$"
                className="w-full p-2 rounded bg-gray-800 text-white border"
                placeholder="Ex: Mbappe"
            />
            </div>

            <div>
            <label className="block mb-1 text-gray-800">Date de Naissance</label>
            <input
                type="date"
                name="dateDon"
                value={donneur.dnaissance}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border"
            />
            </div>

            <div>
            <label className="block mb-1 text-gray-800">Téléphone</label>
            <input
                name="tel"
                type="tel"
                value={donneur.telephone}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border"
                placeholder="Ex: 653160226"
            />
            </div>

            <div>
            <label className="block mb-1 text-gray-800">Sexe</label>
            <select
                name="sexe"
                value={donneur.sexe}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border"
            >
                <option value="">Sélectionner</option>
                <option value="man">Homme</option>
                <option value="woman">Femme</option>
            </select>
            </div>

            <div>
            <label className="block mb-1 text-gray-800">Poids (kg)</label>
            <input
                name="poids"
                type="number"
                value={donneur.poids}
                onChange={handleChange}
                required
                min="50"
                max="150"
                className="w-full p-2 rounded bg-gray-800 text-white border"
            />
            </div>

            <div>
            <label className="block mb-1 text-gray-800">Lieu du Don</label>
            <input
                name="lieudon"
                type="text"
                value={donneur.lieudon}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border"
            />
            </div>

            <div>
            <label className="block mb-1 text-gray-800">Groupe sanguin</label>
            <select
                name="groupe"
                value={donneur.groupe}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border"
            >
                <option value="">Sélectionner</option>
                <option value="A+">A+</option>
                <option value="A−">A−</option>
                <option value="B+">B+</option>
                <option value="B−">B−</option>
                <option value="AB+">AB+</option>
                <option value="AB−">AB−</option>
                <option value="O+">O+</option>
                <option value="O−">O−</option>
            </select>
            </div>

            <div>
            <label className="block mb-1 text-gray-800">Date du don</label>
            <input
                type="date"
                name="dateDon"
                value={donneur.dateDon}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border"
            />
            </div>

            <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded shadow"
            >
            Enregistrer
            </button>
        </form>
    </div> 
     )
}

export default Ajoutdon;