import react from "react"
import { useState } from "react";
import { FaUser, FaPhone, FaMapMarkerAlt, FaTint,FaCalendarAlt, FaMastodon, FaWeight,FaHome, FaDonate,FaHandHoldingMedical,
    FaSignOutAlt,FaCalendarPlus
 } from 'react-icons/fa';
 import NavBar from '../../navbar/NavBar';



export default function FaireDon({ role }) {

  const [message, setMessage] = useState("");
  const [nom, setNom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  const [poids, setPoids] = useState("");
  const [lieu, setLieu] = useState("");
  const [groupeSanguin, setGroupeSanguin] = useState("");
  const [dateDisponibilite, setDateDisponibilite] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const donneur = {
  //     fullname,
  //     dateNaissance,
  //     telephone,
  //     sexe,
  //     poids,
  //     lieu,
  //     groupeSanguin,
  //     dateDisponibilite,
  //   };

    // Appel à une API ou stockage
  //   console.log("Données envoyées :", donneur);
  //   setMessage("Merci pour votre don ! Vous serez contacté sous peu.");

  // };
  const handleFairedemande = async () => {
    const token = localStorage.getItem("token");
  
    const payload = {
      nom: form.nom,
      sexe: form.sexe,
      age: form.age,
      telephone: form.telephone,
      lieu_de_soin: form.lieu_de_soin,
      groupe_sanguin: form.groupe_sanguin,
      date_besoin: form.date_besoin,
      date_derniere_transfusion: form.date_derniere_transfusion,
      quantity: form.quantity,
      reason: form.reason,
      centerId: form.centerId
    };
  
    try {
      const response = await axios.post("http://localhost:3001/api/demander_sang", payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      console.log(response.data);
      alert("Demande envoyée !");
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande :", error.response?.data || error.message);
      alert("Erreur : " + (error.response?.data?.error || error.message));
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex flex-col mt-14">

        <NavBar role={role} />

        {/* Navbar
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-red-700">Banque de Sang</h1>
          <nav className="hidden md:flex space-x-6 ml-10">
            <a href="/" className="flex items-center text-gray-700 hover:text-red-700">
              <FaHome className="mr-1" /> Accueil
            </a>
            <a href="/faire-don" className="flex items-center text-gray-700 hover:text-red-700">
              <FaDonate className="mr-1" /> Faire un Don
            </a>
            <a href="/demander-sang" className="flex items-center text-gray-700 hover:text-red-700">
              <FaHandHoldingMedical className="mr-1" /> Demander du Sang
            </a>
            <a href="/logout" className="flex items-center text-gray-700 hover:text-red-700">
              <FaSignOutAlt className="mr-1" /> Déconnexion
            </a>
          </nav>
        </div> */}

        {/* Info de connexion
        <div className="text-sm font-medium text-red-700">
          Connecté comme : <span className="font-bold">{role}</span>
        </div>
      </header> */}
        
        {/* Navbar simplifiée
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-red-700">Banque de Sang</h1>
        </header> */}

        {/* Contenu principal */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 mt-12">
            <p className="text-gray-700 text-2xl mb-4">
            Merci de vouloir sauver des vies 💖. Remplissez les informations nécessaires pour planifier votre don de sang.
            </p>
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
            onSubmit={handleFairedemande}>
            
            {/* Nom */}
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-900 flex items-center">
                <FaUser className="mr-2 text-red-600" /> Nom complet
                </label>
                <input 
                 type="text"
                 placeholder="Entrez votre nom"
                 value={nom}
                 onChange={(e) => setNom(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
                />
            </div>

             {/* Date de naissance */}
             <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-2 text-red-600" /> Date de Naissance
                </label>
                <input 
                type="date"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                placeholder="jj/mm/aaaa" 
                className="border border-gray-400 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
                />
            </div>

            {/* Téléphone */}
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaPhone className="mr-2 text-red-600" /> Numéro de téléphone
                </label>
                <input 
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Ex: 653160226" 
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
                />
            </div>

             {/* sexe */}
             <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaTint className="mr-2 text-red-600" /> Sexe
                </label>
                <select 
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
                >
                <option value="">Sélectionnez...</option>
                <option value="boy">Homme</option>
                <option value="girl">Femme</option>
                </select>
            </div>


             {/* Poids */}
             <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaWeight className="mr-2 text-red-600" /> Poids
                </label>
                <input 
                type="number"
                value={poids}
                onChange={(e) => setPoids(e.target.value)}
                min="50"
                max="150"
                placeholder="Veuillez entrer votre poids"
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
                />
            </div>

            {/* Lieu */}
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-600" /> Lieu de collecte
                </label>
                <input 
                type="text"
                value={lieu}
                onChange={(e) => setLieu(e.target.value)} 
                placeholder="Ville / Quartier" 
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
                />
            </div>

            {/* Groupe sanguin */}
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaTint className="mr-2 text-red-600" /> Groupe Sanguin
                </label>
                <select 
                 value={groupeSanguin}
                 onChange={(e) => setGroupeSanguin(e.target.value)}
                className="border border-gray-300 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
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

            {/* Date de disponibilité */}
            <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700 flex items-center">
                <FaCalendarAlt className="mr-2 text-red-600" /> Date de disponibilité
                </label>
                <input 
                  type="date"
                  value={dateDisponibilite}
                  onChange={(e) => setDateDisponibilite(e.target.value)}
                className="border border-gray-200 text-black p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                required
                />
                <FaCalendarPlus className="absolute right-3 top-3 text-red-400" />
            </div>

            {/* Bouton Soumettre */}
            <button 
                type="submit"
                
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
            >
                Valider ma demande
            </button>
            
            {message && <p className="text-green-600 mt-4">{message}</p>}

            </form>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
            © 2025 Banque de Sang - Tous droits réservés
        </footer>

    </div>
  )
}
