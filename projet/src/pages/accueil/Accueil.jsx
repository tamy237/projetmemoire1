import React from 'react'
import { FaHandHoldingHeart, FaTint, FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import NavBar from '../navbar/NavBar';

 function Accueil() {
    
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      };

      
  return (
    <div className="pt-24 px-4 md:px-10 min-h-screen bg-pink-50 overflow-x-hidden mt-16">
        <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-pink-700 mb-10 text-center"
        >
        🎉 Bienvenue sur votre Espace Donneur
        </motion.h2>
        <NavBar/>


        <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
            visible: {
            transition: {
                staggerChildren: 0.2
            }
            }
        }}
        >
        {/* Faire un Don */}
        <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-400 to-pink-600 p-6 text-white">
            <Link to="/fairedon" className="flex flex-col items-center space-y-4">
            <FaHandHoldingHeart className="text-5xl" />
            <h3 className="text-2xl font-bold">Faire un Don</h3>
            <p className="text-center text-sm opacity-90">Participez et sauvez des vies aujourd'hui.</p>
            </Link>
            <span className="absolute top-3 right-3 bg-white text-pink-600 font-bold text-xs px-2 py-1 rounded-full shadow-lg animate-bounce">Urgent</span>
        </motion.div>

        {/* Demander du Sang */}
        <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-400 to-red-600 p-6 text-white">
            <Link to="/demander_sang" className="flex flex-col items-center space-y-4">
            <FaTint className="text-5xl" />
            <h3 className="text-2xl font-bold">Demander du Sang</h3>
            <p className="text-center text-sm opacity-90">Faites une demande pour un proche en besoin.</p>
            </Link>
            <span className="absolute top-3 right-3 bg-white text-red-600 font-bold text-xs px-2 py-1 rounded-full shadow-lg animate-pulse">Besoin</span>
        </motion.div>

        {/* Mes Rendez-vous */}
        <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }} className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 p-6 text-white">
            <Link to="/mes-rendez-vous" className="flex flex-col items-center space-y-4">
            <FaRegCalendarAlt className="text-5xl" />
            <h3 className="text-2xl font-bold">Mes Rendez-vous</h3>
            <p className="text-center text-sm opacity-90">Suivez vos dons programmés.</p>
            </Link>
            <span className="absolute top-3 right-3 bg-white text-indigo-600 font-bold text-xs px-2 py-1 rounded-full shadow-lg animate-pulse">À venir</span>
        </motion.div>
        </motion.div>

        <div className="mt-12 text-center">
        <Link to="/premiere" className="text-pink-600 hover:underline text-lg font-semibold">
            ⬅️ Déconnexion
        </Link>
        </div>
  </div>
  )
}

export default Accueil;

