import React from 'react'
import { FaTint, FaUserMd, FaPlusCircle, FaListAlt, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import NavBar from '../../navbar/NavBar';



export default function Hpersonel() {
  return (
    <div className="pt-24 px-4 md:px-10 min-h-screen bg-red-50">
      <NavBar/>
      <h2 className="text-4xl font-bold text-red-700 mb-10 text-center mt-8">
        🎯 Espace Personnel de l'Hôpital
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Ajouter un Donneur */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-red-400 to-pink-500 p-6 text-white">
          <Link to="/ajouterdonneurH" className="flex flex-col items-center space-y-4">
            <FaPlusCircle className="text-5xl" />
            <h3 className="text-2xl font-bold">Ajouter un Donneur</h3>
            <p className="text-center text-sm opacity-90">Enregistrer facilement un nouveau donneur.</p>
          </Link>
        </motion.div>

        {/* Voir les Demandes */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-white">
          <Link to="/historique_demancdes" className="flex flex-col items-center space-y-4">
            <FaListAlt className="text-5xl" />
            <h3 className="text-2xl font-bold">Voir les Demandes</h3>
            <p className="text-center text-sm opacity-90">Suivre les besoins urgents en sang.</p>
          </Link>
        </motion.div>

        {/* Gérer le Stock */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-400 to-indigo-600 p-6 text-white">
          <Link to="/gestion-stock" className="flex flex-col items-center space-y-4">
            <FaTint className="text-5xl" />
            <h3 className="text-2xl font-bold">Gérer le Stock</h3>
            <p className="text-center text-sm opacity-90">Contrôler la disponibilité du sang.</p>
          </Link>
        </motion.div>

        {/* Suivi des Collectes */}
        <motion.div whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-green-400 to-teal-600 p-6 text-white">
          <Link to="/listecollecte" className="flex flex-col items-center space-y-4">
            <FaChartBar className="text-5xl" />
            <h3 className="text-2xl font-bold">Suivi des Collectes</h3>
            <p className="text-center text-sm opacity-90">Voir les opérations de dons programmées.</p>
          </Link>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/connexionH" className="text-red-600 hover:underline text-lg font-semibold">
          ⬅️ Retour à l'Accueil
        </Link>
      </div>
  </div>
  )
}
