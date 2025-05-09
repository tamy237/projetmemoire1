import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Control_don() {
  const [step, setStep] = useState(0); // 0 = question, 1 = saisie ID
  const [donorId, setDonorId] = useState("");
  const navigate = useNavigate();

  const handleChoice = (response) => {
    if (response === "yes") {
      setStep(1); // Affiche le champ ID
    } else {
      navigate("/faire-un-don");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux stocker l'ID ou l'envoyer à l'API
    localStorage.setItem("donor_id", donorId); // Temporaire pour test
    navigate(`/ancien-donneur/${donorId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {step === 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Avez-vous déjà donné du sang avec notre plateforme ?</h2>
            <div className="flex justify-around">
              <button
                onClick={() => handleChoice("yes")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Oui
              </button>
              <button
                onClick={() => handleChoice("no")}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Non
              </button>
            </div>
          </>
        )}

        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Entrez votre identifiant de donneur</h3>
            <input
              type="text"
              value={donorId}
              onChange={(e) => setDonorId(e.target.value)}
              placeholder="ID Donneur"
              required
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Continuer
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Control_don;