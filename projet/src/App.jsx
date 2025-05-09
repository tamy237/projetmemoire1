import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminBoard from './pages/adminpages/AdminBoard'
import Vue1 from './pages/entrée/vue1'
import FaireDon from './pages/utilisateur/Donsutilisateur/FaireDon'
import DemanderSang from './pages/utilisateur/Donsutilisateur/DemanderSang';
import Hpersonel from './pages/hopital/donsHopital/Hpersonnel';
import Accueil from './pages/accueil/Accueil';
import Acc1 from './pages/accueil/Acc1';
import Ldons from './pages/hopital/listes/Ldons';
import Ajoutdon from './pages/hopital/ajouts/Ajoutdon';
import AjoutCollecte from './pages/hopital/ajouts/AjoutCollecte';
import Lcollectes from './pages/hopital/listes/Lcollectes';
import Historiqdem from './pages/hopital/historique demandes/Historiqdem.jsx/Historiqdem';
import Lieucollecte from './pages/lieucollecte/Lieucollecte';
import Statsdon from './pages/hopital/statistiques/Statsdon';
import Appeldonneurs from './pages/hopital/aappeldonneur/Appeldonneurs';
import ConnexionPersonnelH from './pages/connexions/onnexionPersonnelH';
import ConnexionUtilisateur from './pages/connexions/ConnexionUtilisateur';
import Controle_don from './pages/utilisateur/control_don/control_don';
import Cartedon from './pages/hopital/donsHopital/carte-donneurs/Cartedon';
import InscriptionUtilisateur from './pages/inscription/Inscriptionpersonnelh';
import BloodRequests from './pages/Notifications/BloodResquests';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path="/notifications" element={<BloodRequests />} />
      <Route path="/register" element={<InscriptionUtilisateur />} />
        <Route path="/cartedonneur" element={<Cartedon />} />
        <Route path="/fairedon" element={<Controle_don />} />
        <Route path="/faire-un-don" element={<FaireDon role="donneur" />} />
        <Route path="/connexionH" element={<ConnexionPersonnelH />} />
        <Route path="/connexionU" element={<ConnexionUtilisateur />} />
        <Route path="/appeldon" element={<Appeldonneurs />} />
        <Route path="/statistiques" element={<Statsdon />} />
        <Route path="/lieudecollecte" element={<Lieucollecte />} />
        <Route path="/historique_demancdes" element={<Historiqdem />} />
        <Route path="/listecollecte" element={<Lcollectes />} />
        <Route path="/" element={<AjoutCollecte />} /> 
        <Route path="ajouterdonneurH" element={<Ajoutdon />} />
        <Route path="/listedonneurs" element={<Ldons />} />
        <Route path="/test" element={<Acc1 />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/personnelHopital" element={<Hpersonel />} />
        <Route path="/admin" element={<AdminBoard />} />
        <Route path="/premiere" element={<Vue1 />} />
        <Route path="/controle_don" element={<FaireDon />} />
        <Route path="/demander_sang" element={<DemanderSang/>} />
      </Routes>
    </Router>
  )
}

export default App
