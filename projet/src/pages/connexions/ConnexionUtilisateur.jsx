import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function ConnexionUtilisateur() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);


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
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Connexion</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
          >
            Se connecter
          </button>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="text-red-900 hover:text-amber-600">
          <span>Vous n'avez pas encore de compte?cliquez Ici</span>
            </Link>
        </form>
      </div>
    </div>
  );
}
