import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from '../../navbar/NavBar';

 function AjoutCollecte() {
    const [collecte, setCollecte] = useState({
        type: "",
        date: "",
        heure: "",
        lieu: "",
        cts: "",
        associations: "",
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setCollecte({ ...collecte, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://api.monsite.com/collectes", collecte, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(() => {
          alert("Collecte ajoutée avec succès !");
          navigate("/liste-collectes");
        })
        .catch((err) => {
          console.error(err);
          alert("Erreur lors de l'ajout.");
        });
      };
    
  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white p-8">
    <NavBar/>
      <h1 className="text-3xl font-bold mb-6 mt-20">Ajouter une Collecte de Sang</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-4"
      >
        <div>
          <label className="block mb-1 text-gray-800">Type de collecte</label>
          <select
            name="type"
            value={collecte.type}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 text-white border"
          >
            <option value="">Sélectionner</option>
            <option value="mobile">Mobile</option>
            <option value="fixe">Fixe</option>
            <option value="exceptionnelle">Exceptionnelle</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-800">Date</label>
          <input
            type="date"
            name="date"
            value={collecte.date}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 text-white border"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-800">Heure</label>
          <input
            type="time"
            name="heure"
            value={collecte.heure}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 text-white border"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-800">Lieu</label>
          <input
            type="text"
            name="lieu"
            value={collecte.lieu}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 text-white border"
            placeholder="Hôpital Laquintinie, etc."
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-800">CTS organisateur</label>
          <input
            type="text"
            name="cts"
            value={collecte.cts}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-800 text-white border"
            placeholder="CTS Bonanjo"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-800">Associations participantes</label>
          <textarea
            name="associations"
            value={collecte.associations}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 rounded bg-gray-800 text-white border"
            placeholder="Association A, B, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded shadow"
        >
          Enregistrer la collecte
        </button>
      </form>
    </div>  )
}
export default AjoutCollecte;

