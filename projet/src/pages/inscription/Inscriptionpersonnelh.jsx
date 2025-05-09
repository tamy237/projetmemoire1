import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaPhone, FaTint } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function InscriptionUtilisateur() {
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("utilisateur");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);
  

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, password, role, phone, bloodType }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Inscription réussie", data);

        // Redirection selon le rôle
        if (role === "personnel") {
          navigate("/personnelHopital");
        } else {
          navigate("/accueil");
        }
      } else {
        alert(data.error || "Échec de l'inscription");
      }
    } catch (err) {
      console.error("Erreur d'inscription :", err);
      alert("Erreur d'inscription au serveur");
    }
    console.log({
      fullname,
      email,
      password,
      role,
      phone,
      bloodType
    });
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Inscription</h2>

        <form onSubmit={handleRegister} className="space-y-4">

          {/* Sélection du rôle */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Rôle</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
              required
            >
              <option value="">Sélectionner un rôle</option>
              <option value="utilisateur">Utilisateur (donneur)</option>
              <option value="personnel">Personnel médical</option>
            </select>
          </div>

          {/* Nom */}
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaUser className="text-red-500 mr-2" />
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full outline-none"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaUser className="text-red-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Mot de passe */}
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaLock className="text-red-500 mr-2" />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Téléphone */}
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaPhone className="text-red-500 mr-2" />
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              className="w-full outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Groupe sanguin (obligatoire seulement pour les donneurs) */}
          {role === "utilisateur" && (
  <div className="flex flex-col">
    <label className="mb-2 font-semibold text-gray-700 flex items-center">
      <FaTint className="mr-2 text-red-600" /> Groupe Sanguin
    </label>
    <select
      value={bloodType}
      onChange={(e) => setBloodType(e.target.value)}
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
)}


          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
          >
            S'inscrire
          </button>
          <Link to="/connexionU" onClick={() => setMenuOpen(false)} className="text-red-900 hover:text-amber-600">
          <span>Vous avez deja un compte? cliquez Ici</span>
            </Link>
        </form>
      </div>
    </div>
  );
}
