import React from 'react'; import { Link } from 'react-router-dom';

const Academy = () => { return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6 font-[Poppins]"> <div className="max-w-5xl mx-auto"> <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-10 shadow-md"> 🎓 Espace Formation - SELEZIONE Academy </h1>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Link to="/academy/module1" className="bg-[#1b1b3a] rounded-xl shadow-lg p-6 hover:bg-[#26264a] transition-all">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📘 Module 1</h2>
        <p className="text-sm text-gray-300">Fondamentaux du Luxe et des Marques</p>
      </Link>

      <Link to="/academy/module2" className="bg-[#1b1b3a] rounded-xl shadow-lg p-6 hover:bg-[#26264a] transition-all">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📗 Module 2</h2>
        <p className="text-sm text-gray-300">Fonctionnement des Maisons & Authenticité</p>
      </Link>

      <Link to="/academy/module3" className="bg-[#1b1b3a] rounded-xl shadow-lg p-6 hover:bg-[#26264a] transition-all">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📙 Module 3</h2>
        <p className="text-sm text-gray-300">Stratégies de Revente et Positionnement</p>
      </Link>

      <Link to="/academy/module4" className="bg-[#1b1b3a] rounded-xl shadow-lg p-6 hover:bg-[#26264a] transition-all">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">👜 Module 4</h2>
        <p className="text-sm text-gray-300">Lancer son Activité Prêt-à-Porter Luxe</p>
      </Link>

      <Link to="/academy/module5" className="bg-[#1b1b3a] rounded-xl shadow-lg p-6 hover:bg-[#26264a] transition-all">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📸 Module 5</h2>
        <p className="text-sm text-gray-300">Création de Contenu & Influence</p>
      </Link>

      <Link to="/academy/module6" className="bg-[#1b1b3a] rounded-xl shadow-lg p-6 hover:bg-[#26264a] transition-all">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🚚 Module 6</h2>
        <p className="text-sm text-gray-300">Logistique, SAV & Expérience Client</p>
      </Link>

      <Link to="/academy/module7" className="bg-[#1b1b3a] rounded-xl shadow-lg p-6 hover:bg-[#26264a] transition-all">
        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧾 Module 7</h2>
        <p className="text-sm text-gray-300">Commande & Suivi des Sélections</p>
      </Link>
    </div>
  </div>
</div>

); };

export default Academy;

