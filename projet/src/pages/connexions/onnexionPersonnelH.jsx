import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaUserShield, FaLock,FaUser,FaPhone } from "react-icons/fa";

export default function ConnexionPersonnelH() {
  const [ name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Envoi vers l'API pour le personnel médical
    console.log("Connexion personnel médical", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Connexion Personnel Médical</h2>
        <form onSubmit={handleLogin} className="space-y-4">

            <div className="flex items-center border border-gray-300 p-2 rounded-lg">
                        <FaUser className="text-red-500 mr-2" />
                        <input
                          type="name"
                          placeholder="Nom complet"
                          className="w-full outline-none"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
             </div>

          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaUserShield className="text-blue-500 mr-2" />
            <input
              type="email"
              placeholder="Email professionnel"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 p-2 rounded-lg">
            <FaLock className="text-blue-500 mr-2" />
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
                        placeholder="Numéro de télephone"
                        className="w-full outline-none"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
          
                      </div>
             <Link to="/personnelHopital" onClick={() => setMenuOpen(false)} className="text-red-900 hover:text-amber-600">
                  <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
                >
                  Se connecter
                </button>             
             </Link>
        </form>
      </div>
    </div>
  );
}
