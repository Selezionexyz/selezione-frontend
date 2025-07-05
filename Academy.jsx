import React, { useState } from "react";

const modules = [
  { id: 1, titre: "Fondamentaux du Luxe", description: "Module 1" },
  { id: 2, titre: "Fonctionnement des Marques", description: "Module 2" },
  { id: 3, titre: "Marketing & Positionnement", description: "Module 3" },
  { id: 4, titre: "Lancer son activité", description: "Module 4" },
  { id: 5, titre: "Création de contenu & influence", description: "Module 5" },
  { id: 6, titre: "Logistique, gestion & SAV", description: "Module 6" },
];

export default function Academy() {
  const [moduleActif, setModuleActif] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white p-6 font-[Outfit]">
      <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">
        🎓 SELEZIONE ACADEMY
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {modules.map((mod) => (
          <button
            key={mod.id}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              moduleActif === mod.id
                ? "bg-cyan-500 text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setModuleActif(mod.id)}
          >
            {mod.titre}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-4xl mx-auto mt-4">
        {moduleActif === 1 && <p>📘 Contenu du Module 1 à intégrer ici...</p>}
        {moduleActif === 2 && <p>📗 Contenu du Module 2 à intégrer ici...</p>}
        {moduleActif === 3 && <p>📙 Contenu du Module 3 à intégrer ici...</p>}
        {moduleActif === 4 && <p>📕 Contenu du Module 4 à intégrer ici...</p>}
        {moduleActif === 5 && <p>📓 Contenu du Module 5 à intégrer ici...</p>}
        {moduleActif === 6 && <p>📒 Contenu du Module 6 à intégrer ici...</p>}
      </div>
    </div>
  );
}
