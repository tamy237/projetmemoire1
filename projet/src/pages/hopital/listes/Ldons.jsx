import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import NavBar from '../../navbar/NavBar';



function Ldons() {

    const [donneurs, setDonneurs] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "personnel") {
      alert("Accès réservé au personnel.");
      return;
    }

    axios.get("https://api.monsite.com/donneurs", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => setDonneurs(res.data))
    .catch((err) => console.error("Erreur lors du chargement des donneurs", err));
  }, []);

  
const exporterPDF = (donneurs) => {
    const doc = new jsPDF();
  
    // Titre
    doc.text("Liste des donneurs", 14, 10);
  
    // Tableau
    autoTable(doc, {
      startY: 20,
      head: [["Nom", "Date de naissance", "Téléphone", "Sexe", "Poids", "Lieu du don", "Groupe", "Date du don", "Statut"]],
      body: donneurs.map(d => [
        d.nom,
        d.dnaissance,
        d.tel,
        d.sexe,
        d.poids,
        d.lieudon,
        d.groupage,
        d.dateDon,
        d.statut || "Validé",
      ]),
    });
  
    // Sauvegarde du fichier
    doc.save("donneurs.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black text-white p-6">
      <NavBar/>
        <div className="flex items-center justify-between mb-6 mt-24">
            <h1 className="text-3xl font-bold">Liste des Donneurs</h1>
            <button
                onClick={exporterPDF}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
            >
                Exporter en PDF
            </button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md">
            <table className="min-w-full text-sm border-collapse">
                <thead>
                <tr className="bg-red-800 text-white">
                    <th className="p-2 border">Nom complet</th>
                    <th className="p-2 border">Date de Naissance</th>
                    <th className="p-2 border">Télephone</th>
                    <th className="p-2 border">Sexe</th>
                    <th className="p-2 border">Poids</th>
                    <th className="p-2 border">Lieu du don</th>
                    <th className="p-2 border">Groupage</th>
                    <th className="p-2 border">Date du don</th>
                    <th className="p-2 border">Statut</th>
                </tr>
                </thead>
                <tbody>
                {donneurs.map((d, index) => (
                    <tr key={index} className="hover:bg-red-900">
                    <td className="p-2 border">{d.nom}</td>
                    <td className="p-2 border">{d.dnaissance}</td>
                    <td className="p-2 border">{d.tel}</td>
                    <td className="p-2 border">{d.sexe}</td>
                    <td className="p-2 border">{d.poids}</td>
                    <td className="p-2 border">{d.lieudon}</td>
                    <td className="p-2 border">{d.groupage}</td>
                    <td className="p-2 border">{d.dateDon}</td>
                    <td className="p-2 border">{d.statut || "Validé"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
  </div>
  )
}

export default Ldons;
