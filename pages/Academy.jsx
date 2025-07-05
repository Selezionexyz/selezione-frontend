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
import { useState } from 'react';

export default function Chapitre1() { const [step, setStep] = useState(1); const [score, setScore] = useState(0); const [showResults, setShowResults] = useState(false);

const questions = [ { question: "Quelle est la principale caractéristique du marché du luxe ?", options: ["Prix bas", "Production de masse", "Exclusivité et rareté", "Vente rapide"], answer: "Exclusivité et rareté" }, { question: "Quelle maison de luxe est connue pour sa discrétion extrême et sa stratégie du silence ?", options: ["Gucci", "Balmain", "Hermès", "Versace"], answer: "Hermès" }, { question: "Quel terme décrit le marketing utilisé par les marques de luxe pour renforcer leur prestige ?", options: ["Marketing de masse", "Marketing viral", "Marketing aspirationnel", "Marketing discount"], answer: "Marketing aspirationnel" }, { question: "Quel est le rôle principal du storytelling dans le luxe ?", options: ["Faire rire le client", "Baisser les prix", "Valoriser l'histoire et l'héritage", "Augmenter les coûts logistiques"], answer: "Valoriser l'histoire et l'héritage" }, { question: "Quelle maison incarne le mieux le luxe à la française avec des pièces intemporelles ?", options: ["Balenciaga", "Chanel", "Diesel", "Armani"], answer: "Chanel" } ];

const handleAnswer = (option) => { if (option === questions[step - 1].answer) { setScore(score + 1); } if (step < questions.length) { setStep(step + 1); } else { setShowResults(true); } };

const progress = Math.round((step - 1) / questions.length * 100);

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6 font-sans"> <div className="max-w-3xl mx-auto bg-[#1b1b3a] p-6 rounded-xl shadow-xl"> <h1 className="text-3xl font-bold text-center mb-4 text-cyan-400">Chapitre 1 : Introduction au Luxe</h1>

{!showResults ? (
      <>
        <div className="mb-4">
          <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-sm">Progression : {progress}%</p>
        </div>

        <div className="mb-6">
          <p className="mb-4 text-lg">{questions[step - 1].question}</p>
          <div className="space-y-3">
            {questions[step - 1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full py-2 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-black font-semibold hover:opacity-90"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </>
    ) : (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Résultats du quiz</h2>
        <p className="text-lg">Vous avez obtenu {score} / {questions.length} bonnes réponses.</p>
        {score >= 4 ? (
          <p className="mt-4 text-green-400 font-bold">✅ Accès débloqué au Chapitre 2</p>
        ) : (
          <p className="mt-4 text-red-400 font-bold">❌ Vous devez réviser ce chapitre pour continuer.</p>
        )}
      </div>
    )}

    <div className="mt-10 text-sm text-gray-300">
      <h3 className="text-lg font-semibold mb-2 text-white">Contenu du chapitre :</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Les origines historiques du luxe en Europe</li>
        <li>Le rôle de la rareté et de la symbolique sociale</li>
        <li>Différence entre produit premium, haut de gamme, et luxe véritable</li>
        <li>Notion de patrimoine, savoir-faire, et héritage de marque</li>
        <li>Introduction à la stratégie de marque dans le luxe</li>
        <li>Exemples concrets : Hermès, Louis Vuitton, Chanel</li>
      </ul>
    </div>
  </div>
</div>

); }



