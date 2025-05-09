import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // ← pour redirection après connexion
import { FaUser, FaLock, FaPhone } from "react-icons/fa";

export default function ConnexionUtilisateur() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate(); // ← Hook pour rediriger

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Connexion réussie :", data);
        // Sauvegarde du token par exemple
        localStorage.setItem("token", data.token);
        navigate("/accueil");
      } else {
        alert(data.error || "Échec de la connexion");
      }

    } catch (err) {
      console.error("Erreur de connexion :", err);
      alert("Erreur de connexion au serveur");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Connexion Utilisateur</h2>
        <form onSubmit={handleLogin} className="space-y-4">

          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaUser className="text-red-500 mr-2" />
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
