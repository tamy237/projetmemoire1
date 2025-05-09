import React, { useState } from 'react';
import {
  FaUser, FaPhone, FaMapMarkerAlt, FaTint, FaCalendarAlt,
  FaHome, FaDonate, FaHandHoldingMedical, FaSignOutAlt, FaSortNumericUp
} from 'react-icons/fa';
import NavBar from '../../navbar/NavBar';

export default function DemanderSang({ role }) {
  const [nom, setNom] = useState("");
  const [sexe, setSexe] = useState("");
  const [age, setAge] = useState("");
  const [telephone, setTelephone] = useState("");
  const [lieu_de_soin, setLieuDeSoin] = useState("");
  const [groupe_sanguin, setGroupeSanguin] = useState("");
  const [date_besoin, setDateBesoin] = useState("");
  const [date_derniere_transfusion, setDateDerniereTransfusion] = useState("");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");
  const [centerId, setCenterId] = useState("");
  const [message, setMessage] = useState("");

  const handleFairedemande = async (e) => {
    e.preventDefault(); // ← indispensable pour empêcher le rechargement de la page
  
    try {
      const payload = {
        nom,
        sexe,
        age,
        telephone,
        lieu_de_soin,
        groupe_sanguin,
        date_besoin,
        date_derniere_transfusion,
        quantity,
        reason,
        centerId,
        userId: JSON.parse(localStorage.getItem("user"))?.id // ou autre méthode selon ton projet
      };
  
      const response = await fetch("http://localhost:3001/api/demander_sang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur inconnue");
      }
  
      const data = await response.json();
      console.log(data);
      alert("Demande envoyée !");
      setMessage("Demande envoyée avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande :", error.message);
      setMessage("Erreur : " + error.message);
    }
  };
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex flex-col">
      <NavBar role={role} />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mt-16">Formulaire de Demande de Sang</h2>

        <form
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 mt-6"
          onSubmit={handleFairedemande}
        >
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaUser className="mr-2 text-red-600" /> Nom complet du patient
            </label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Entrez le nom du patient"
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaTint className="mr-2 text-red-600" /> Sexe
            </label>
            <select
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            >
              <option value="">Sélectionnez...</option>
              <option value="man">Homme</option>
              <option value="lady">Femme</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaPhone className="mr-2 text-red-600" /> Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Ex: 25 ans"
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaPhone className="mr-2 text-red-600" /> Téléphone
            </label>
            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Ex: 653160226"
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-600" /> Lieu de soin
            </label>
            <input
              type="text"
              value={lieu_de_soin}
              onChange={(e) => setLieuDeSoin(e.target.value)}
              placeholder="Nom de l'hôpital"
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaTint className="mr-2 text-red-600" /> Groupe sanguin
            </label>
            <select
              value={groupe_sanguin}
              onChange={(e) => setGroupeSanguin(e.target.value)}
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            >
              <option value="">Sélectionnez...</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaCalendarAlt className="mr-2 text-red-600" /> Date de besoin
            </label>
            <input
              type="date"
              value={date_besoin}
              onChange={(e) => setDateBesoin(e.target.value)}
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaCalendarAlt className="mr-2 text-red-600" /> Dernière transfusion
            </label>
            <input
              type="date"
              value={date_derniere_transfusion}
              onChange={(e) => setDateDerniereTransfusion(e.target.value)}
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaSortNumericUp className="mr-2 text-red-600" /> Quantité
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                    <FaHome className="mr-2 text-red-600" /> Centre de soin
                </label>
                <input
                    type="text"
                    value={centerId}
                    onChange={(e) => setCenterId(e.target.value)}
                    placeholder="Nom du centre de soin"
                    className="border border-gray-300 p-3 text-gray-800 rounded-lg"
                    required
                />
            </div>
            <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700 flex items-center">
              <FaDonate className="mr-2 text-red-600" /> Raison de la demande
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="border border-gray-300 p-3 text-gray-800 rounded-lg"
              required
            >
              <option value="">Sélectionnez...</option>
              <option value="emergency">Urgence</option>
              <option value="tranfusion">Transfusion</option>
              <option value="autres">Autres</option>
              
            </select>
          </div>


          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Envoyer ma demande
          </button>

          {message && <p className="text-green-600 font-medium mt-4">{message}</p>}
        </form>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 Banque de Sang - Tous droits réservés
      </footer>
    </div>
  );
}
