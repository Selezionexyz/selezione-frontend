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
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre2");

const renderContent = () => { switch (currentChapter) { case "chapitre2": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 2 : Fonctionnement des Marques de Luxe </h1> <p className="mb-4"> Comprendre comment fonctionnent les grandes maisons de luxe est essentiel pour réussir dans la revente ou le lancement d’une marque. Leur stratégie repose sur l’image, le storytelling, la distribution sélective et surtout la maîtrise de leur chaîne de valeur. </p>

<h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 Ce que vous allez apprendre</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Découvrir les piliers du fonctionnement des marques de luxe</li>
          <li>Analyser les stratégies de contrôle de l’image</li>
          <li>Comprendre la notion de rareté organisée</li>
          <li>Étudier les modèles Hermès, Dior, Louis Vuitton</li>
        </ul>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Données clés 2025</h2>
        <p className="mb-4">
          Selon Vogue Business (mars 2025), Hermès a ouvert moins de 5 nouvelles boutiques dans le monde l’an dernier, misant sur l’exclusivité totale. Louis Vuitton, de son côté, a digitalisé 30 % de son catalogue tout en augmentant le prix moyen de +18 %.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">💬 Anecdote réelle</h2>
        <p className="mb-4">
          En 2024, la marque CELINE a supprimé tous ses comptes sociaux en Asie pendant une semaine avant de les relancer avec une nouvelle DA et des vidéos 100 % tournées au Japon. Une stratégie pour créer un "manque" et capter une nouvelle audience premium.
        </p>

        <div className="bg-gray-900 rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Quelle marque a ouvert très peu de nouvelles boutiques en 2025 ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Gucci</li>
                <li>B. Hermès ✅</li>
                <li>C. Balenciaga</li>
              </ul>
            </li>
            <li>
              Quelle stratégie CELINE a-t-elle utilisée en Asie en 2024 ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Réduction de prix</li>
                <li>B. Campagne d’influence</li>
                <li>C. Suppression temporaire de ses réseaux ✅</li>
              </ul>
            </li>
            <li>
              Quelle est la notion clé utilisée par les marques pour gérer l’offre ?
              <ul className="list-disc list-inside ml-4">
                <li>A. La diversification produit</li>
                <li>B. La rareté organisée ✅</li>
                <li>C. Le volume de stock élevé</li>
              </ul>
            </li>
            <li>
              Quelle maison a augmenté ses prix moyens de +18 % ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Dior</li>
                <li>B. Louis Vuitton ✅</li>
                <li>C. Prada</li>
              </ul>
            </li>
            <li>
              Quel levier est essentiel pour préserver l’image d’une marque ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Les promotions régulières</li>
                <li>B. Le storytelling maîtrisé ✅</li>
                <li>C. L’expansion rapide</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  default:
    return <p className="text-white">Aucun chapitre sélectionné.</p>;
}

};

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre2")} > Chapitre 2 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;

import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre3");

const renderContent = () => { switch (currentChapter) { case "chapitre3": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 🎯 Module 1 - Chapitre 3 : Comprendre les clients et communiquer efficacement </h1> <p className="mb-4"> Dans ce chapitre, nous allons explorer comment interagir avec les Maisons de Luxe de manière professionnelle : approche commerciale, posture, vocabulaire, attitude, et gestion des objections. Vous apprendrez à incarner la crédibilité et à inspirer confiance dès le premier échange. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 Objectifs pédagogiques</h2> <ul className="list-disc list-inside mb-4"> <li>Adopter une posture professionnelle face aux marques de luxe</li> <li>Maîtriser les codes de langage et les usages dans la mode</li> <li>Gérer les objections avec élégance et assurance</li> <li>Convaincre une Maison de vous faire confiance</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Données clés 2025</h2> <p className="mb-4"> En 2025, 64 % des marques interrogées (source : Vogue Business / Avril 2025) affirment préférer collaborer avec des professionnels ayant un discours structuré et une approche orientée solution. Les profils maîtrisant les codes du luxe convertissent 3 fois plus. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">💬 Anecdote</h2> <p className="mb-4"> Une ancienne acheteuse chez Balenciaga raconte que la première chose qu’elle regarde chez un revendeur n’est ni le stock, ni les prix : c’est son attitude et son vocabulaire. Un bon vocabulaire = un bon réseau. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quelle est la première chose que les Maisons de luxe évaluent chez un revendeur ? <ul className="list-disc list-inside ml-4"> <li>A. Le nombre d'abonnés sur Instagram</li> <li>B. Son attitude et son langage ✅</li> <li>C. Le stock de produits</li> </ul> </li> <li> Quelle attitude est recommandée lors d’un premier contact ? <ul className="list-disc list-inside ml-4"> <li>A. Être direct, rapide et commercial</li> <li>B. Être humble, structuré et pertinent ✅</li> <li>C. Montrer qu’on connaît mieux qu’eux leur business</li> </ul> </li> <li> Pourquoi maîtriser le vocabulaire du luxe est-il important ? <ul className="list-disc list-inside ml-4"> <li>A. Pour se faire bien voir sur les réseaux</li> <li>B. Pour paraître plus intelligent</li> <li>C. Pour inspirer confiance et être crédible ✅</li> </ul> </li> <li> En 2025, quel type de discours est le plus apprécié des marques ? <ul className="list-disc list-inside ml-4"> <li>A. Un discours orienté solution et clair ✅</li> <li>B. Un discours agressif pour se démarquer</li> <li>C. Un pitch improvisé au feeling</li> </ul> </li> <li> Quelle erreur est à éviter ? <ul className="list-disc list-inside ml-4"> <li>A. Être trop souriant</li> <li>B. Utiliser un langage trop familier ✅</li> <li>C. Rappeler trop vite</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre3")} > Chapitre 3 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre4");

const renderContent = () => { switch (currentChapter) { case "chapitre4": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 4 : Le langage visuel du luxe </h1> <p className="mb-4"> Dans ce chapitre, nous allons explorer l’importance capitale de l’esthétique dans l’univers du luxe. Les marques de luxe ne vendent pas uniquement un produit, mais une image. Du packaging au point de vente, du logo à la typographie, chaque détail est pensé pour évoquer l’exclusivité et l’émotion. </p>

<h2 className="text-xl font-semibold text-cyan-300 mb-2">🖼️ Ce que vous allez apprendre</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Les codes visuels des marques de luxe</li>
          <li>L’importance de la cohérence graphique</li>
          <li>Comment créer une identité visuelle percutante</li>
          <li>Exemples concrets : Chanel, Dior, Bottega Veneta</li>
        </ul>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Données clés 2025</h2>
        <p className="mb-4">
          Selon le rapport Lyst Index Q2 2025, les marques ayant une identité visuelle forte obtiennent
          +37 % d’engagement sur les réseaux sociaux. La charte graphique est devenue un levier essentiel
          de reconnaissance et de conversion.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📌 Anecdote</h2>
        <p className="mb-4">
          La maison Bottega Veneta a fait parler d’elle en supprimant ses réseaux sociaux début 2021. Paradoxe ?
          Non : leur langage visuel, ultra reconnaissable (vert émeraude, maillage iconique), suffit à nourrir
          la désirabilité. En 2025, cette stratégie reste étudiée comme un cas d’école en branding visuel.
        </p>

        <div className="bg-gray-900 rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Testez vos connaissances</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Quelle marque a supprimé ses réseaux sociaux pour renforcer son image ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Gucci</li>
                <li>B. Bottega Veneta ✅</li>
                <li>C. Prada</li>
              </ul>
            </li>
            <li>
              Quelle couleur est emblématique de Bottega Veneta ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Bleu marine</li>
                <li>B. Vert émeraude ✅</li>
                <li>C. Rouge profond</li>
              </ul>
            </li>
            <li>
              Quel est le principal levier d’une charte graphique ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Le packaging uniquement</li>
                <li>B. La reconnaissance de marque ✅</li>
                <li>C. Les prix affichés</li>
              </ul>
            </li>
            <li>
              Une identité visuelle forte augmente :
              <ul className="list-disc list-inside ml-4">
                <li>A. Les coûts de production</li>
                <li>B. L’engagement et la conversion ✅</li>
                <li>C. Le besoin de publicité classique</li>
              </ul>
            </li>
            <li>
              Quelle marque est connue pour sa cohérence visuelle exceptionnelle ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Dior ✅</li>
                <li>B. H&M</li>
                <li>C. Zara</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  default:
    return <p className="text-white">Aucun chapitre sélectionné.</p>;
}

};

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex flex-wrap justify-center gap-4 mb-6">
  <button onClick={() => setCurrentChapter("chapitre1")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 1</button>
  <button onClick={() => setCurrentChapter("chapitre2")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 2</button>
  <button onClick={() => setCurrentChapter("chapitre3")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 3</button>
  <button onClick={() => setCurrentChapter("chapitre4")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 4</button>
  <button onClick={() => setCurrentChapter("chapitre5")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 5</button>
  <button onClick={() => setCurrentChapter("chapitre6")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 6</button>
  <button onClick={() => setCurrentChapter("chapitre7")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 7</button>
  <button onClick={() => setCurrentChapter("chapitre8")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 8</button>
  <button onClick={() => setCurrentChapter("chapitre9")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 9</button>
  <button onClick={() => setCurrentChapter("chapitre10")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 10</button>
  <button onClick={() => setCurrentChapter("chapitre11")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 11</button>
  <button onClick={() => setCurrentChapter("chapitre12")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 12</button>
  <button onClick={() => setCurrentChapter("chapitre13")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 13</button>
  <button onClick={() => setCurrentChapter("chapitre14")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 14</button>
  <button onClick={() => setCurrentChapter("chapitre15")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 15</button>
  <button onClick={() => setCurrentChapter("chapitre16")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 16</button>
  <button onClick={() => setCurrentChapter("chapitre17")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 17</button>
  <button onClick={() => setCurrentChapter("chapitre18")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 18</button>
  <button onClick={() => setCurrentChapter("chapitre19")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 19</button>
  <button onClick={() => setCurrentChapter("chapitre20")} className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md font-semibold">Chapitre 20</button>
</div> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre4")} > Chapitre 4 </button> {/* Autres boutons chapitre ici */} </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre4");

const renderContent = () => { switch (currentChapter) { case "chapitre4": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 🎨 Module 1 - Chapitre 4 : Le langage visuel du luxe </h1> <p className="mb-4"> Dans ce chapitre, nous allons explorer le pouvoir des éléments visuels dans la construction d’une image de marque de luxe. Chaque détail — police, couleur, matière, design graphique — contribue à transmettre des émotions précises et à positionner la marque. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📸 Ce que vous allez apprendre</h2> <ul className="list-disc list-inside mb-4"> <li>Décrypter les codes graphiques des marques de luxe</li> <li>Comprendre l’importance des couleurs et des typographies</li> <li>Analyser des exemples concrets de packaging et de design</li> <li>Appliquer ces principes à vos propres projets</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Données clés 2025</h2> <p className="mb-4"> Selon Lyst Index 2025, 74 % des acheteurs de luxe déclarent qu’un packaging haut de gamme influence leur décision d’achat. 58 % disent reconnaître une marque à son univers visuel avant même de lire le logo. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📦 Exemples de marques</h2> <p className="mb-4"> - Hermès utilise l’orange iconique Pantone 1385 pour exprimer tradition et prestige. <br /> - Dior privilégie le gris perle, couleur neutre et raffinée liée à l’élégance parisienne. <br /> - Chanel adopte le noir et blanc pour symboliser le contraste entre modernité et intemporalité. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 Anecdote</h2> <p className="mb-4"> Lors du lancement de sa ligne de haute joaillerie, Louis Vuitton a mandaté un studio graphique pour créer un écrin en forme de malles miniatures, renforçant ainsi l’identité visuelle de la maison et l’expérience client. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quelle couleur est associée à la marque Hermès ? <ul className="list-disc list-inside ml-4"> <li>A. Bleu marine</li> <li>B. Orange Pantone 1385 ✅</li> <li>C. Vert forêt</li> </ul> </li> <li> Quelle maison utilise le noir et blanc pour son identité ? <ul className="list-disc list-inside ml-4"> <li>A. Louis Vuitton</li> <li>B. Gucci</li> <li>C. Chanel ✅</li> </ul> </li> <li> Pourquoi le packaging influence-t-il l’achat ? <ul className="list-disc list-inside ml-4"> <li>A. Il est biodégradable</li> <li>B. Il reflète les codes de la marque ✅</li> <li>C. Il contient des réductions</li> </ul> </li> <li> Quelle marque a conçu des écrins en forme de malles miniatures ? <ul className="list-disc list-inside ml-4"> <li>A. Cartier</li> <li>B. Louis Vuitton ✅</li> <li>C. Balenciaga</li> </ul> </li> <li> Quel est l’intérêt d’utiliser toujours les mêmes codes visuels ? <ul className="list-disc list-inside ml-4"> <li>A. Pour paraître moderne</li> <li>B. Pour fidéliser et renforcer la reconnaissance de marque ✅</li> <li>C. Pour impressionner les concurrents</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre4")} > Chapitre 4 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre5");

const renderContent = () => { switch (currentChapter) { case "chapitre5": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 🎓 Module 1 - Chapitre 5 : Comprendre le client luxe en 2025 </h1> <p className="mb-4"> Dans ce dernier chapitre du Module 1, nous plongeons au cœur du profil psychologique et comportemental du client luxe. Comprendre ce client, c’est comprendre ses valeurs, ses attentes, son rapport à l’exclusivité et au digital. Car oui, le client luxe d’aujourd’hui est plus jeune, plus connecté, plus exigeant. Il ne veut pas seulement acheter un produit, il veut vivre une expérience unique. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 Objectifs pédagogiques</h2> <ul className="list-disc list-inside mb-4"> <li>Identifier les nouveaux segments de clientèle luxe (Gen Z, clients HENRY...)</li> <li>Comprendre les nouveaux leviers émotionnels d’achat</li> <li>Maîtriser les codes relationnels : personnalisation, attention, silence</li> <li>Analyser les erreurs courantes dans la communication client</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Graphique</h2> <p className="mb-4"> Enquête Kantar (juin 2025) : 71% des clients luxe considèrent la relation humaine comme un facteur plus important que le produit lui-même. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">💬 Exemples & anecdotes</h2> <p className="mb-4"> En boutique, Hermès forme ses vendeurs à détecter le langage corporel du client avant même qu’il ne parle. Chez Louis Vuitton, un programme IA apprend à chaque vendeur les habitudes des clients fidèles. Chez Dior, les VIP reçoivent des messages vidéo personnalisés pour leurs anniversaires. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quel segment de clientèle est en forte croissance ? <ul className="list-disc list-inside ml-4"> <li>A. Les baby boomers</li> <li>B. Les HENRY (High Earners Not Rich Yet) ✅</li> <li>C. Les retraités modestes</li> </ul> </li> <li> Quel est le facteur clé selon 71% des clients luxe ? <ul className="list-disc list-inside ml-4"> <li>A. Le prix</li> <li>B. La relation humaine ✅</li> <li>C. La publicité</li> </ul> </li> <li> Quelle marque utilise l’IA pour aider ses vendeurs ? <ul className="list-disc list-inside ml-4"> <li>A. Gucci</li> <li>B. Louis Vuitton ✅</li> <li>C. Cartier</li> </ul> </li> <li> Quelle erreur est souvent commise dans la relation client luxe ? <ul className="list-disc list-inside ml-4"> <li>A. Être trop silencieux</li> <li>B. Être trop pressant ✅</li> <li>C. Offrir un café</li> </ul> </li> <li> Quel est un bon exemple de personnalisation ? <ul className="list-disc list-inside ml-4"> <li>A. Message vidéo pour un anniversaire ✅</li> <li>B. Remise immédiate de 5%</li> <li>C. Invitation à une conférence publique</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre5")} > Chapitre 5 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre6");

const renderContent = () => { switch (currentChapter) { case "chapitre6": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 6 : Logistique, Gestion et SAV dans le Luxe </h1> <p className="mb-4"> Dans ce chapitre, nous explorons les coulisses logistiques d’une activité de revente de produits de luxe : gestion des stocks, relations avec les transporteurs, assurance des colis, gestion des retours et service après-vente haut de gamme. </p>

<h2 className="text-xl font-semibold text-cyan-300 mb-2">📦 Logistique de qualité</h2>
        <p className="mb-4">
          Les clients du luxe attendent une livraison rapide, soignée, avec un emballage raffiné et un suivi précis. Un retard ou une erreur peut nuire à l’image de marque.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔁 Gestion des retours</h2>
        <p className="mb-4">
          Un bon SAV augmente la fidélité client. Proposez des retours simplifiés, une politique claire et un traitement rapide. Le traitement des litiges est aussi une compétence-clé.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Outils utiles</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Boxtal, Sendcloud : gestion des envois multi-transporteurs</li>
          <li>Notion ou Airtable : gestion des stocks et suivi SAV</li>
          <li>Zendesk : gestion du service client avec historique</li>
        </ul>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Données clés 2025</h2>
        <p className="mb-4">
          Selon une étude KPMG (juin 2025), 73 % des clients du luxe considèrent qu’un SAV irréprochable est plus important que le prix. Le suivi logistique est cité comme le critère n°2 de confiance.
        </p>

        <div className="bg-gray-900 rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Quel outil permet de gérer plusieurs transporteurs facilement ?
              <ul className="list-disc list-inside ml-4">
                <li>A. WordPress</li>
                <li>B. Sendcloud ✅</li>
                <li>C. Shopify</li>
              </ul>
            </li>
            <li>
              Quel est le 2ᵉ critère de confiance selon l’étude KPMG 2025 ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Le packaging</li>
                <li>B. Le prix</li>
                <li>C. Le suivi logistique ✅</li>
              </ul>
            </li>
            <li>
              Quel outil est utilisé pour un SAV professionnel ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Discord</li>
                <li>B. Zendesk ✅</li>
                <li>C. Instagram</li>
              </ul>
            </li>
            <li>
              Quelle plateforme aide à la gestion de stock ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Notion ✅</li>
                <li>B. WhatsApp</li>
                <li>C. Outlook</li>
              </ul>
            </li>
            <li>
              Quelle part des clients luxe exigent un SAV irréprochable ?
              <ul className="list-disc list-inside ml-4">
                <li>A. 23 %</li>
                <li>B. 73 % ✅</li>
                <li>C. 50 %</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  default:
    return <p className="text-white">Aucun chapitre sélectionné.</p>;
}

};

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre6")} > Chapitre 6 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre7");

const renderContent = () => { switch (currentChapter) { case "chapitre7": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 7 : Le Luxe de Demain </h1> <p className="mb-4"> L’univers du luxe est en constante mutation, influencé par les nouvelles technologies, les exigences environnementales, et les changements de mentalité des jeunes générations. Ce chapitre explore les scénarios d’avenir du secteur du luxe, entre innovation, éthique, et ultra-personnalisation. </p>

<h2 className="text-xl font-semibold text-cyan-300 mb-2">🧬 Innovations technologiques</h2>
        <p className="mb-4">
          L’IA générative permet désormais de concevoir des pièces uniques en quelques clics, tandis que la blockchain garantit la traçabilité et l’authenticité des articles de luxe. En 2025, 40 % des maisons de luxe utilisent des NFT pour proposer des expériences exclusives ou certifier leurs produits.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🌱 Virage écologique</h2>
        <p className="mb-4">
          Des marques comme Stella McCartney ou Gucci investissent massivement dans des matières innovantes : cuir de champignon, teintures sans eau, recyclage haute couture. Le luxe de demain sera éthique ou ne sera pas.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 IA & personnalisation</h2>
        <p className="mb-4">
          Grâce à l’IA, certaines maisons analysent les comportements d’achat en temps réel pour proposer des produits ultra-personnalisés. En Chine, Burberry teste des cabines d’essayage IA qui adaptent la lumière et les recommandations en fonction de l’utilisateur.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Données 2025</h2>
        <p className="mb-4">
          D’après le World Luxury Index (juin 2025), 65 % des clients de luxe souhaitent que les marques s’engagent pour la planète. 73 % des ventes online de luxe se font via des expériences personnalisées grâce à l’IA.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧩 Quiz - Anticipez le futur</h2>
        <div className="bg-gray-900 rounded-xl p-4 shadow-md">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Quelle technologie est utilisée pour certifier l’authenticité d’un produit ?
              <ul className="list-disc list-inside ml-4">
                <li>A. L'impression 3D</li>
                <li>B. La blockchain ✅</li>
                <li>C. Le cloud computing</li>
              </ul>
            </li>
            <li>
              Quel pourcentage de maisons de luxe utilisent des NFT en 2025 ?
              <ul className="list-disc list-inside ml-4">
                <li>A. 20 %</li>
                <li>B. 40 % ✅</li>
                <li>C. 70 %</li>
              </ul>
            </li>
            <li>
              Quelle matière est citée comme alternative éthique au cuir ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Cuir de pomme</li>
                <li>B. Cuir de champignon ✅</li>
                <li>C. Cuir de requin</li>
              </ul>
            </li>
            <li>
              Quel pays teste des cabines d’essayage IA ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Japon</li>
                <li>B. Chine ✅</li>
                <li>C. États-Unis</li>
              </ul>
            </li>
            <li>
              Quelle proportion de clients attend un engagement écologique ?
              <ul className="list-disc list-inside ml-4">
                <li>A. 25 %</li>
                <li>B. 50 %</li>
                <li>C. 65 % ✅</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );

  default:
    return <p className="text-white">Aucun chapitre sélectionné.</p>;
}

};

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre7")} > Chapitre 7 </button> {/* Ajoute ici les boutons pour les autres chapitres si nécessaire */} </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre8");

const renderContent = () => { switch (currentChapter) { case "chapitre8": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 8 : Conclusion et pistes d'évolution </h1> <p className="mb-4"> Dans ce dernier chapitre du Module 1, nous faisons le point sur tout ce que vous avez appris : les fondations historiques du luxe, la psychologie du consommateur, le rôle des maisons emblématiques, les codes marketing du secteur, et les nouveaux défis de l'industrie à l'ère du digital et de la seconde main. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Bilan</h2> <ul className="list-disc list-inside mb-4"> <li>Le luxe est avant tout une question d'émotion, de désir et d'image.</li> <li>Les grandes maisons capitalisent sur leur héritage pour rester désirables.</li> <li>Les tendances 2025 s’orientent vers l’hyper-personnalisation et la durabilité.</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔮 Et demain ?</h2> <p className="mb-4"> Les maisons doivent désormais intégrer l’intelligence artificielle, l’écoresponsabilité et la transparence dans leurs stratégies. Le marché de la seconde main s’impose comme un pilier incontournable, représentant près de 18 % des ventes mondiales de luxe en 2025 selon BCG. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">💡 Citation à retenir</h2> <p className="mb-4 italic"> « Le luxe, ce n’est pas le besoin, c’est le rêve. Et ce rêve doit évoluer avec son époque. » – Jean-Marc Loubier, ancien PDG de Celine </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Évaluez vos acquis</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quelle part du marché mondial le luxe seconde main représente-t-il en 2025 ? <ul className="list-disc list-inside ml-4"> <li>A. 9 %</li> <li>B. 18 % ✅</li> <li>C. 25 %</li> </ul> </li> <li> Quel levier est devenu crucial pour les marques de luxe modernes ? <ul className="list-disc list-inside ml-4"> <li>A. Le stock important</li> <li>B. La transparence et la durabilité ✅</li> <li>C. La distribution de masse</li> </ul> </li> <li> Quelle est la mission essentielle du luxe selon la citation du chapitre ? <ul className="list-disc list-inside ml-4"> <li>A. Combler un besoin</li> <li>B. Vendre un maximum</li> <li>C. Faire rêver ✅</li> </ul> </li> <li> Quel est le défi principal évoqué pour le futur du luxe ? <ul className="list-disc list-inside ml-4"> <li>A. Produire plus vite</li> <li>B. Intégrer l’IA et l’écoresponsabilité ✅</li> <li>C. Fermer les boutiques physiques</li> </ul> </li> <li> Quelle notion est au cœur du luxe depuis toujours ? <ul className="list-disc list-inside ml-4"> <li>A. L’utilité</li> <li>B. L’accessibilité</li> <li>C. Le désir et l’image ✅</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre8")} > Chapitre 8 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre9");

const renderContent = () => { switch (currentChapter) { case "chapitre9": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 🎯 Module 1 - Chapitre 9 : Positionnement stratégique dans le Luxe </h1> <p className="mb-4"> Positionner une marque de luxe, ce n’est pas simplement choisir un segment de prix élevé. C’est définir un univers, un ADN, un héritage culturel et une promesse émotionnelle qui se traduit à travers chaque point de contact avec le client. Un bon positionnement permet à une marque de se distinguer clairement dans un marché où l’apparence peut parfois uniformiser. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧭 Exemples de positionnements</h2> <ul className="list-disc list-inside mb-4"> <li><strong>Hermès</strong> : Artisanat extrême, rareté, temps d’attente long, zéro marketing agressif.</li> <li><strong>Louis Vuitton</strong> : Équilibre entre accessibilité, désirabilité et distribution massive contrôlée.</li> <li><strong>Rolex</strong> : Prestige statutaire, héritage, produit durable avec valeur de revente.</li> <li><strong>Jacquemus</strong> : Fraîcheur, mode d’auteur, storytelling personnel et visuel digital fort.</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Données clés 2025</h2> <p className="mb-4"> Selon Statista (avril 2025), 78 % des consommateurs de luxe estiment que "la cohérence de l’image de marque" est plus importante que les campagnes promotionnelles. De plus, 66 % des jeunes générations déclarent choisir une marque pour ses engagements sociétaux et son univers. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">💬 Anecdote business</h2> <p className="mb-4"> En 2024, Balenciaga a choisi de réduire drastiquement ses collaborations après avoir été critiquée pour une trop grande dispersion de son identité. Résultat : +18 % de perception positive selon Lyst Index en 2025. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quel est l’objectif principal d’un bon positionnement dans le luxe ? <ul className="list-disc list-inside ml-4"> <li>A. Réduire les coûts de production</li> <li>B. Rendre la marque reconnaissable et unique ✅</li> <li>C. Multiplier les campagnes promotionnelles</li> </ul> </li> <li> Quelle marque est connue pour son absence de marketing de masse ? <ul className="list-disc list-inside ml-4"> <li>A. Hermès ✅</li> <li>B. Dior</li> <li>C. Prada</li> </ul> </li> <li> Quelle est la conséquence d’un mauvais positionnement ? <ul className="list-disc list-inside ml-4"> <li>A. Augmentation des ventes immédiates</li> <li>B. Confusion auprès du public cible ✅</li> <li>C. Augmentation des marges</li> </ul> </li> <li> En 2025, combien de % des jeunes achètent selon l’univers de marque ? <ul className="list-disc list-inside ml-4"> <li>A. 32 %</li> <li>B. 50 %</li> <li>C. 66 % ✅</li> </ul> </li> <li> Quelle maison a amélioré sa perception en réduisant ses collaborations ? <ul className="list-disc list-inside ml-4"> <li>A. Gucci</li> <li>B. Balenciaga ✅</li> <li>C. Fendi</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre9")} > Chapitre 9 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre10");

const renderContent = () => { switch (currentChapter) { case "chapitre10": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 10 : Évolutions futures du luxe & IA </h1>

<p className="mb-4">
          Le luxe évolue à une vitesse sans précédent, sous l’effet de l’intelligence artificielle, des
          métavers, de la durabilité et de la montée en puissance des consommateurs digital natives. Dans ce
          dernier chapitre du module, nous explorons ce qui attend le marché dans les années à venir.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🌐 Luxe & intelligence artificielle</h2>
        <p className="mb-4">
          Des maisons comme Dior, Burberry et Gucci intègrent l’IA dans leurs campagnes, leur CRM, leurs
          prévisions de tendances et même leurs créations. Des outils comme ChatGPT ou MidJourney permettent
          de prototyper des idées plus vite que jamais.
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔮 L'avenir du luxe en 3 points</h2>
        <ul className="list-disc list-inside mb-4">
          <li>L’intégration complète de l’IA dans l’expérience client</li>
          <li>Une exigence accrue de durabilité, de traçabilité et d’éthique</li>
          <li>Des marques qui construisent leur univers dans des métavers (Decentraland, The Sandbox…)</li>
        </ul>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Chiffres 2025</h2>
        <p className="mb-4">
          67 % des maisons de luxe ont utilisé une IA générative en 2025 selon McKinsey. Le marché du luxe
          virtuel (NFT, skins, objets digitaux) dépasse les 12 milliards €.
        </p>

        <div className="bg-gray-900 rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Quelle maison de luxe a déjà intégré l'IA dans ses campagnes marketing ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Zara</li>
                <li>B. Burberry ✅</li>
                <li>C. Uniqlo</li>
              </ul>
            </li>
            <li>
              Quel est le pourcentage des marques utilisant une IA générative en 2025 ?
              <ul className="list-disc list-inside ml-4">
                <li>A. 23 %</li>
                <li>B. 42 %</li>
                <li>C. 67 % ✅</li>
              </ul>
            </li>
            <li>
              Quelle plateforme de métavers accueille déjà des marques de luxe ?
              <ul className="list-disc list-inside ml-4">
                <li>A. TikTok</li>
                <li>B. The Sandbox ✅</li>
                <li>C. Twitch</li>
              </ul>
            </li>
            <li>
              Quelle tendance est devenue indispensable pour les maisons de luxe ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Prix cassés</li>
                <li>B. Durabilité & éthique ✅</li>
                <li>C. Publicité à la télévision</li>
              </ul>
            </li>
            <li>
              Quel secteur atteint 12 milliards € en 2025 ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Le luxe digital (NFT, skins…) ✅</li>
                <li>B. Les montres suisses</li>
                <li>C. Les parfums classiques</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  default:
    return <p className="text-white">Aucun chapitre sélectionné.</p>;
}

};

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre10")} > Chapitre 10 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre11");

const renderContent = () => { switch (currentChapter) { case "chapitre11": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 🧠 Module 1 - Chapitre 11 : Luxe et Durabilité – Un mariage d’avenir ? </h1> <p className="mb-4"> L’industrie du luxe est en pleine transformation. Face aux enjeux climatiques, éthiques et sociaux, les grandes maisons sont appelées à repenser leurs modèles. Ce chapitre explore comment durabilité et prestige peuvent coexister. </p>

<h2 className="text-xl font-semibold text-cyan-300 mb-2">🌱 Ce que vous allez apprendre</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Les engagements écologiques des grandes marques (Chanel, LVMH...)</li>
          <li>Les matières premières éco-responsables</li>
          <li>Le marché de la seconde main dans le luxe</li>
          <li>Les labels et certifications durables</li>
        </ul>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Données clés 2025</h2>
        <p className="mb-4">
          68 % des consommateurs de luxe affirment qu’ils seraient prêts à payer plus cher pour un produit durable. Le marché mondial du luxe de seconde main a atteint 52 milliards € en 2025 (+18 % vs 2024).
        </p>

        <h2 className="text-xl font-semibold text-cyan-300 mb-2">💬 Anecdote</h2>
        <p className="mb-4">
          Stella McCartney fut l’une des premières créatrices à bannir le cuir animal. En 2025, elle a présenté une collection 100 % circulaire en collaboration avec Bolt Threads, utilisant du cuir mycélien (issu de champignons).
        </p>

        <div className="bg-gray-900 rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Testez vos connaissances</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Quel pourcentage de consommateurs de luxe sont prêts à payer plus pour un produit durable ?
              <ul className="list-disc list-inside ml-4">
                <li>A. 42 %</li>
                <li>B. 68 % ✅</li>
                <li>C. 83 %</li>
              </ul>
            </li>
            <li>
              Quelle marque est pionnière dans la mode de luxe durable ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Versace</li>
                <li>B. Stella McCartney ✅</li>
                <li>C. Prada</li>
              </ul>
            </li>
            <li>
              En quoi consiste le cuir mycélien ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Un cuir animal traité naturellement</li>
                <li>B. Un cuir synthétique issu de plastique</li>
                <li>C. Un cuir issu de champignons ✅</li>
              </ul>
            </li>
            <li>
              Quel marché atteint 52 milliards € en 2025 ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Le marché de la joaillerie</li>
                <li>B. Le marché du cuir de luxe</li>
                <li>C. Le marché de la seconde main dans le luxe ✅</li>
              </ul>
            </li>
            <li>
              Quel groupe détient de nombreuses marques engagées dans une transition durable ?
              <ul className="list-disc list-inside ml-4">
                <li>A. Inditex</li>
                <li>B. LVMH ✅</li>
                <li>C. Amazon Fashion</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  default:
    return <p className="text-white">Aucun chapitre sélectionné.</p>;
}

};

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre11")} > Chapitre 11 </button> {/* Ajoute ici les boutons pour les autres chapitres */} </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
case "chapitre12":
  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">
        📚 Module 1 - Chapitre 12 : Marques émergentes et nouveaux codes du luxe
      </h1>
      <p className="mb-4">
        Les marques émergentes bousculent les géants historiques du luxe. Ces nouvelles maisons comme Marine Serre, The Attico, Casablanca ou Coperni redéfinissent les codes traditionnels avec des approches hybrides entre art, écologie, digital et exclusivité. Leur force ? Une communication moderne, des pièces en séries limitées, et une résonance forte avec les générations Z et Alpha.
      </p>

      <h2 className="text-xl font-semibold text-cyan-300 mb-2">🚀 Nouvelles stratégies des marques</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Éditions limitées et "drops" façon streetwear</li>
        <li>Utilisation massive de TikTok et Instagram</li>
        <li>Éco-conception et upcycling comme ADN de marque</li>
        <li>Collaborations audacieuses (ex : Moncler x Rimowa)</li>
      </ul>

      <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Données 2025</h2>
      <p className="mb-4">
        Selon Vogue Business (mars 2025), plus de 37 % des nouvelles marques luxe lancées depuis 2022 reposent sur un modèle DTC (direct to consumer), et 48 % d’entre elles ont un engagement durable comme pilier de communication.
      </p>

      <h2 className="text-xl font-semibold text-cyan-300 mb-2">💡 Anecdote</h2>
      <p className="mb-4">
        En 2024, Coperni a présenté une robe entièrement créée à base de spray en direct sur le corps de Bella Hadid durant la Fashion Week de Paris, générant plus de 950 millions de vues sur TikTok en 72h. Un exemple puissant de disruption créative.
      </p>

      <div className="bg-gray-900 rounded-xl p-4 shadow-md mt-6">
        <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Testez vos connaissances</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Quelle maison a utilisé le spray textile sur un défilé en 2024 ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Balenciaga</li>
              <li>B. Coperni ✅</li>
              <li>C. Courrèges</li>
            </ul>
          </li>
          <li>
            Quel est le modèle économique adopté par 37 % des nouvelles marques luxe ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Wholesale traditionnel</li>
              <li>B. Modèle hybride retail</li>
              <li>C. Direct to Consumer ✅</li>
            </ul>
          </li>
          <li>
            Quelle plateforme est la plus utilisée par ces marques en 2025 ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Facebook</li>
              <li>B. TikTok ✅</li>
              <li>C. Pinterest</li>
            </ul>
          </li>
          <li>
            Quelle valeur centrale retrouve-t-on chez plus de 48 % des marques émergentes ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Accessibilité</li>
              <li>B. Luxe ostentatoire</li>
              <li>C. Engagement durable ✅</li>
            </ul>
          </li>
          <li>
            Quelle marque est connue pour son approche upcycling radical ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Marine Serre ✅</li>
              <li>B. Chanel</li>
              <li>C. Celine</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
import React from "react";

const Chapitre13 = () => { return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 🧠 Module 1 - Chapitre 13 : Éthique, Contrefaçon et Durabilité dans le Luxe </h1>

<p className="mb-4">
    Dans un monde en mutation rapide, l’univers du luxe ne peut plus ignorer les enjeux
    liés à la durabilité, l’éthique et la lutte contre la contrefaçon. Ce chapitre traite
    de ces défis majeurs et des réponses qu’apportent les maisons de luxe.
  </p>

  <h2 className="text-xl font-semibold text-cyan-300 mb-2">🌱 Éthique et responsabilité</h2>
  <p className="mb-4">
    La pression sociale et environnementale pousse les grandes marques à revoir leurs
    chaînes d’approvisionnement : cuir végétal, traçabilité, conditions de travail dans
    les ateliers, etc. En 2025, 87 % des marques de luxe ont intégré un volet durable dans
    leur stratégie selon le rapport LVMH x WGSN.
  </p>

  <h2 className="text-xl font-semibold text-cyan-300 mb-2">🕵️‍♂️ La lutte contre la contrefaçon</h2>
  <p className="mb-4">
    Les fausses pièces coûtent chaque année plus de 50 milliards d’euros au secteur.
    Grâce à l’IA, la blockchain et des puces RFID, les marques développent des solutions
    innovantes pour authentifier leurs articles et protéger leurs clients.
  </p>

  <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔎 Exemples concrets</h2>
  <ul className="list-disc list-inside mb-4">
    <li>Chanel utilise un système de QR Code invisible pour authentifier chaque sac.</li>
    <li>Hermès travaille avec une startup française sur la certification blockchain.</li>
    <li>Gucci propose une plateforme de revente officielle avec contrôle qualité.</li>
  </ul>

  <h2 className="text-xl font-semibold text-cyan-300 mb-2">📌 Quiz - Testez vos connaissances</h2>
  <ol className="list-decimal list-inside space-y-2">
    <li>
      Quelle technologie est utilisée pour tracer l’authenticité d’un produit ?
      <ul className="list-disc list-inside ml-4">
        <li>A. Le cuir végétal</li>
        <li>B. La blockchain ✅</li>
        <li>C. Le polyester recyclé</li>
      </ul>
    </li>
    <li>
      Quel est le coût estimé annuel de la contrefaçon pour le secteur du luxe ?
      <ul className="list-disc list-inside ml-4">
        <li>A. 5 milliards d’euros</li>
        <li>B. 15 milliards d’euros</li>
        <li>C. 50 milliards d’euros ✅</li>
      </ul>
    </li>
    <li>
      Quelle maison utilise un QR code invisible pour sécuriser ses sacs ?
      <ul className="list-disc list-inside ml-4">
        <li>A. Louis Vuitton</li>
        <li>B. Dior</li>
        <li>C. Chanel ✅</li>
      </ul>
    </li>
    <li>
      Quelle technologie n’est pas citée comme outil de lutte contre la contrefaçon ?
      <ul className="list-disc list-inside ml-4">
        <li>A. Puce RFID</li>
        <li>B. Blockchain</li>
        <li>C. Intelligence artisanale ✅</li>
      </ul>
    </li>
    <li>
      Quel est le pourcentage de marques de luxe ayant intégré la durabilité en 2025 ?
      <ul className="list-disc list-inside ml-4">
        <li>A. 47 %</li>
        <li>B. 87 % ✅</li>
        <li>C. 99 %</li>
      </ul>
    </li>
  </ol>
</div>

); };

export default Chapitre13;
import React, { useState } from "react";

const Chapter14 = () => {
  const [currentSection, setCurrentSection] = useState("section1");

  const renderContent = () => {
    switch (currentSection) {
      case "section1":
        return (
          <div className="text-white">
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">🌍 L'Impact des Tendances Écologiques sur le Luxe</h1>
            <p className="mb-4">
              La durabilité est devenue un pilier central dans l'industrie du luxe. Les consommateurs,
              notamment les jeunes générations, demandent désormais plus de transparence concernant la fabrication des produits
              et l'empreinte écologique des grandes marques. Ce chapitre explore les enjeux écologiques dans le secteur du luxe.
            </p>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔄 Les Marques qui S'engagent</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Chanel, Hermès, et Gucci ont adopté des pratiques plus durables.</li>
              <li>Le recyclage et l'upcycling gagnent en popularité, transformant les anciens produits en nouveaux articles de luxe.</li>
              <li>La blockchain pour la traçabilité des produits et la certification de l'éthique de production.</li>
            </ul>
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 L'Essor des Consommateurs Responsables</h2>
            <p className="mb-4">
              En 2025, les consommateurs recherchent activement des alternatives écologiques. Les marques doivent
              répondre à une demande croissante de produits respectueux de l'environnement tout en maintenant l'exclusivité et le luxe.
            </p>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">♻️ Les Tendances : Écologie et Luxe</h3>
            <p className="mb-4">
              - Recyclage des matériaux : L’utilisation de matériaux recyclés dans la fabrication des produits de luxe.
              <br />- Produits d’occasion : Le marché de la seconde main, de plus en plus en vogue, permet de donner une nouvelle vie aux produits de luxe.
              <br />- Utilisation de matières premières éco-responsables : Cuir végétalien, tissus organiques, etc.
            </p>
            <div className="bg-gray-900 rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Quel matériau est le plus souvent utilisé dans l’upcycling ?
                  <ul className="list-disc list-inside ml-4">
                    <li>A. Cuir recyclé ✅</li>
                    <li>B. Métal</li>
                    <li>C. Plastique</li>
                  </ul>
                </li>
                <li>
                  Quel est l’objectif principal des initiatives écologiques dans le luxe ?
                  <ul className="list-disc list-inside ml-4">
                    <li>A. Diminuer les coûts</li>
                    <li>B. Réduire l'empreinte écologique ✅</li>
                    <li>C. Créer de nouveaux produits</li>
                  </ul>
                </li>
                <li>
                  Qu'est-ce que la blockchain permet de certifier dans le secteur du luxe ?
                  <ul className="list-disc list-inside ml-4">
                    <li>A. L'authenticité du produit ✅</li>
                    <li>B. La qualité du produit</li>
                    <li>C. Le prix de vente</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        );
      default:
        return <p className="text-white">Aucune section sélectionnée.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white p-6">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700`}
          onClick={() => setCurrentSection("section1")}
        >
          Section 1
        </button>
      </div>
      <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default Chapter14;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre15");

const renderContent = () => { switch (currentChapter) { case "chapitre15": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 15 : Le Pouvoir du Branding dans le Luxe </h1> <p className="mb-4"> Le branding est au cœur de toute stratégie de marque de luxe. Il ne s’agit pas simplement d’un logo ou d’un slogan, mais d’un univers visuel, narratif et sensoriel cohérent qui permet de construire une image forte, désirable et intemporelle. Ce chapitre vous plonge dans les stratégies de branding les plus efficaces utilisées par les grandes maisons de luxe. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🏛️ Exemples de Marques</h2> <ul className="list-disc list-inside mb-4"> <li>Chanel : cohérence visuelle depuis Coco jusqu’à aujourd’hui, dominance du noir, blanc et doré.</li> <li>Rolex : mise en avant de la précision, l’exclusivité et la longévité, avec des campagnes sobres mais puissantes.</li> <li>Dior : storytelling émotionnel puissant autour de la féminité, de l’audace et du raffinement.</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔍 Ce que vous allez apprendre</h2> <ul className="list-disc list-inside mb-4"> <li>Comment définir l’ADN de votre marque</li> <li>Le rôle des couleurs, polices, matières et sons dans le branding</li> <li>La puissance de la narration (brand storytelling)</li> <li>L’importance du détail et de la cohérence</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🎯 Objectif</h2> <p className="mb-4"> À la fin de ce chapitre, vous serez capable de construire une base solide pour l’univers de votre marque. Vous comprendrez pourquoi dans le luxe, chaque détail compte, du papier utilisé pour une carte à la façon dont vous répondez à un message client. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quelle marque est connue pour une cohérence graphique noire et blanche ? <ul className="list-disc list-inside ml-4"> <li>A. Balmain</li> <li>B. Chanel ✅</li> <li>C. Gucci</li> </ul> </li> <li> Quel élément n’est PAS essentiel dans le branding ? <ul className="list-disc list-inside ml-4"> <li>A. Les couleurs</li> <li>B. La musique</li> <li>C. Le prix du packaging ✅</li> </ul> </li> <li> Quelle maison utilise le storytelling autour de la précision ? <ul className="list-disc list-inside ml-4"> <li>A. Cartier</li> <li>B. Rolex ✅</li> <li>C. Fendi</li> </ul> </li> <li> L’ADN de marque comprend : <ul className="list-disc list-inside ml-4"> <li>A. Les fondateurs uniquement</li> <li>B. La mission, les valeurs, le style ✅</li> <li>C. Les prix de revente</li> </ul> </li> <li> Le branding dans le luxe repose sur : <ul className="list-disc list-inside ml-4"> <li>A. L’unicité et la cohérence ✅</li> <li>B. La production de masse</li> <li>C. Les promotions constantes</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre15")} > Chapitre 15 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre15");

const renderContent = () => { switch (currentChapter) { case "chapitre15": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 15 : Intégration technologique et IA dans le Luxe </h1> <p className="mb-4"> Le secteur du luxe intègre de plus en plus les technologies avancées pour renforcer l’expérience client, la traçabilité des produits et les services personnalisés. Dans ce chapitre, nous verrons comment l’intelligence artificielle, la blockchain ou la réalité augmentée sont devenues des piliers stratégiques. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 Thèmes abordés</h2> <ul className="list-disc list-inside mb-4"> <li>Utilisation de l’IA pour la personnalisation (ex : recommandation de tenues, essayage virtuel)</li> <li>Blockchain pour la traçabilité des produits et lutte contre la contrefaçon</li> <li>Réalité augmentée dans les boutiques (ex : Dior, Gucci)</li> <li>Automatisation de l’expérience client via le Web3 ou des chatbots IA (Louis Vuitton, Balenciaga...)</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Données clés 2025</h2> <p className="mb-4"> 64% des maisons de luxe déclarent utiliser activement au moins une solution IA pour le marketing ou la supply chain. L’investissement global du secteur dans les technologies immersives a atteint 7,3 milliards € en 2025 selon McKinsey. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📌 Cas réel</h2> <p className="mb-4"> Fendi a lancé en 2024 une expérience d’achat avec un avatar 3D interactif capable de guider le client, tandis que Prada permet depuis avril 2025 d’enregistrer l’authenticité de chaque article sur la blockchain Ethereum. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Testez vos connaissances</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quel est l’intérêt principal de la blockchain pour le luxe ? <ul className="list-disc list-inside ml-4"> <li>A. Augmenter le prix des produits</li> <li>B. Automatiser la livraison</li> <li>C. Garantir la traçabilité et lutter contre la contrefaçon ✅</li> </ul> </li> <li> Quelle maison utilise un avatar 3D pour l’achat ? <ul className="list-disc list-inside ml-4"> <li>A. Fendi ✅</li> <li>B. Bottega Veneta</li> <li>C. Loewe</li> </ul> </li> <li> Quelle part des maisons utilisent déjà l’IA ? <ul className="list-disc list-inside ml-4"> <li>A. 23 %</li> <li>B. 41 %</li> <li>C. 64 % ✅</li> </ul> </li> <li> Quel est l’objectif d’un essayage virtuel IA ? <ul className="list-disc list-inside ml-4"> <li>A. Réduire le stock</li> <li>B. Améliorer l’expérience d’achat ✅</li> <li>C. Protéger les données client</li> </ul> </li> <li> Quelle maison enregistre ses articles sur la blockchain Ethereum ? <ul className="list-disc list-inside ml-4"> <li>A. Prada ✅</li> <li>B. Valentino</li> <li>C. Dior</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className="px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700" onClick={() => setCurrentChapter("chapitre15")}>Chapitre 15</button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre17");

const renderContent = () => { switch (currentChapter) { case "chapitre17": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 17 : Le Luxe Responsable et Durable </h1> <p className="mb-4"> Le développement durable est devenu un enjeu central pour l'industrie du luxe. Les grandes maisons, longtemps associées à l'opulence et au gaspillage, prennent désormais des engagements concrets pour réduire leur empreinte carbone, valoriser les circuits courts et repenser la production. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🌍 Vers un luxe plus éthique</h2> <ul className="list-disc list-inside mb-4"> <li>Utilisation de matières recyclées (ex : nylon régénéré par Prada avec sa ligne Re-Nylon)</li> <li>Traçabilité des produits et blockchain pour certifier l’origine</li> <li>Réduction des invendus grâce aux précommandes ou ventes responsables</li> <li>Création de pièces intemporelles au lieu de collections jetables</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">📊 Données 2025</h2> <p className="mb-4"> D’après le rapport Lyst 2025, 72 % des consommateurs du luxe se disent plus enclins à acheter auprès d’une marque engagée écologiquement. 38 % des grandes maisons ont intégré au moins une matière recyclée dans leurs collections. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">💬 Exemple inspirant</h2> <p className="mb-4"> Stella McCartney, pionnière du luxe éthique, n’utilise ni cuir, ni fourrure depuis sa création. En 2025, elle a lancé une collection 100 % biodégradable à base de champignons (mycelium), sans compromettre l’esthétique haut de gamme. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Testez vos connaissances</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quelle maison a lancé une ligne en nylon régénéré ? <ul className="list-disc list-inside ml-4"> <li>A. Gucci</li> <li>B. Prada ✅</li> <li>C. Hermès</li> </ul> </li> <li> Quelle technologie permet de certifier l’origine d’un produit ? <ul className="list-disc list-inside ml-4"> <li>A. L’intelligence artificielle</li> <li>B. La blockchain ✅</li> <li>C. Le deep learning</li> </ul> </li> <li> Quelle part des grandes maisons utilisent des matériaux recyclés en 2025 ? <ul className="list-disc list-inside ml-4"> <li>A. 15 %</li> <li>B. 38 % ✅</li> <li>C. 65 %</li> </ul> </li> <li> Quelle maison n’utilise ni cuir ni fourrure depuis ses débuts ? <ul className="list-disc list-inside ml-4"> <li>A. Stella McCartney ✅</li> <li>B. Louis Vuitton</li> <li>C. Dior</li> </ul> </li> <li> En 2025, quel matériau innovant Stella McCartney utilise-t-elle ? <ul className="list-disc list-inside ml-4"> <li>A. Cuir de cactus</li> <li>B. Nylon recyclé</li> <li>C. Mycelium (champignon) ✅</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre17")} > Chapitre 17 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React, { useState } from "react";

const Academy = () => { const [currentChapter, setCurrentChapter] = useState("chapitre1");

const renderContent = () => { switch (currentChapter) { case "chapitre18": return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 18 : Digitalisation du Luxe et IA en 2025 </h1> <p className="mb-4"> En 2025, la digitalisation du secteur du luxe ne cesse de s’accélérer. Grâce à l’IA, les maisons de luxe affinent leur ciblage client, optimisent leurs stocks, personnalisent les recommandations et fluidifient l’expérience utilisateur. Des plateformes comme Farfetch utilisent le machine learning pour recommander des pièces rares. Hermès expérimente l’IA générative pour ses campagnes visuelles. </p> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 Concepts abordés</h2> <ul className="list-disc list-inside mb-4"> <li>Le rôle de l’IA dans le CRM luxe</li> <li>Exemples concrets : Dior, LVMH, Balenciaga</li> <li>Expériences phygitales et réalité augmentée</li> <li>Risques et limites : déshumanisation ? biais algorithmique ?</li> </ul> <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔍 Étude de cas</h2> <p className="mb-4"> En 2025, LVMH a lancé un assistant virtuel nommé “Misia” qui répond en temps réel aux questions des clients VIP sur WhatsApp et propose des recommandations selon leurs goûts passés. Résultat : +18 % de conversion sur les clients engagés via ce canal. </p> <div className="bg-gray-900 rounded-xl p-4 shadow-md"> <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3> <ol className="list-decimal list-inside space-y-2"> <li> Quelle technologie Dior utilise-t-elle pour ses vitrines interactives ? <ul className="list-disc list-inside ml-4"> <li>A. Réalité augmentée ✅</li> <li>B. Blockchain</li> <li>C. Impression 3D</li> </ul> </li> <li> Quelle maison a lancé l'assistant virtuel “Misia” ? <ul className="list-disc list-inside ml-4"> <li>A. Hermès</li> <li>B. LVMH ✅</li> <li>C. Saint Laurent</li> </ul> </li> <li> Quel est un des risques mentionnés de l’IA dans le luxe ? <ul className="list-disc list-inside ml-4"> <li>A. Baisse des ventes</li> <li>B. Biais algorithmique ✅</li> <li>C. Coût de production</li> </ul> </li> <li> En 2025, combien de % de conversion supplémentaire observe-t-on chez LVMH avec Misia ? <ul className="list-disc list-inside ml-4"> <li>A. +10 %</li> <li>B. +18 % ✅</li> <li>C. +30 %</li> </ul> </li> <li> Quelle plateforme est mentionnée pour recommander des pièces rares ? <ul className="list-disc list-inside ml-4"> <li>A. Vinted</li> <li>B. Vestiaire Collective</li> <li>C. Farfetch ✅</li> </ul> </li> </ol> </div> </div> ); default: return <p className="text-white">Aucun chapitre sélectionné.</p>; } };

return ( <div className="min-h-screen bg-[#0f0c29] text-white p-6"> <div className="flex justify-center space-x-4 mb-6"> <button className={px-4 py-2 rounded-md font-semibold bg-cyan-600 hover:bg-cyan-700} onClick={() => setCurrentChapter("chapitre18")} > Chapitre 18 </button> </div> <div className="max-w-4xl mx-auto bg-[#1b1b3a] p-6 rounded-2xl shadow-xl"> {renderContent()} </div> </div> ); };

export default Academy;
import React from "react";

const Chapitre19 = () => { return ( <div className="p-4 text-white"> <h1 className="text-3xl font-bold text-cyan-400 mb-4"> 📚 Module 1 - Chapitre 19 : Fidélisation et Exclusivité dans le Luxe </h1>

<p className="mb-4">
    Dans le secteur du luxe, la fidélisation client ne se fait pas par des programmes de points classiques,
    mais par une approche sur-mesure, des expériences uniques, et un sentiment d'appartenance. En 2025,
    les grandes maisons investissent dans l’exclusivité digitale, les événements secrets et les collections
    ultra-limités. Les clients attendent plus qu’un produit : ils veulent une relation privilégiée.
  </p>

  <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 Stratégies clés de fidélisation</h2>
  <ul className="list-disc list-inside mb-4">
    <li>Accès prioritaire aux nouvelles collections</li>
    <li>Evénements privés avec designers ou ambassadeurs</li>
    <li>Service client VIP ultra-personnalisé</li>
    <li>Invitations à des expériences exclusives (vernissages, voyages...)</li>
  </ul>

  <h2 className="text-xl font-semibold text-cyan-300 mb-2">💎 Exemples 2025</h2>
  <p className="mb-4">
    La maison Chanel a lancé un salon digital privé où seuls les clients "Haute Joaillerie" accèdent à des pièces
    non publiées sur le site. Balenciaga organise chaque trimestre un dîner ultra-select pour ses plus gros clients
    crypto, avec une preview de la collection suivante.
  </p>

  <div className="bg-gray-900 rounded-xl p-4 shadow-md">
    <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>
        Quelle stratégie est couramment utilisée pour fidéliser les clients dans le luxe ?
        <ul className="list-disc list-inside ml-4">
          <li>A. Cartes de fidélité à tampon</li>
          <li>B. Réductions mensuelles</li>
          <li>C. Accès à des événements privés ✅</li>
        </ul>
      </li>
      <li>
        Quel service Chanel réserve-t-elle à ses clients haute joaillerie ?
        <ul className="list-disc list-inside ml-4">
          <li>A. Accès au site grand public</li>
          <li>B. Accès à un salon digital privé ✅</li>
          <li>C. Newsletter mensuelle</li>
        </ul>
      </li>
      <li>
        Pourquoi les expériences exclusives sont-elles efficaces ?
        <ul className="list-disc list-inside ml-4">
          <li>A. Car elles renforcent le lien émotionnel ✅</li>
          <li>B. Car elles baissent les prix</li>
          <li>C. Car elles réduisent les retours</li>
        </ul>
      </li>
      <li>
        Balenciaga organise des dîners privés pour :
        <ul className="list-disc list-inside ml-4">
          <li>A. Les influenceurs TikTok</li>
          <li>B. Les clients crypto fidèles ✅</li>
          <li>C. Les employés</li>
        </ul>
      </li>
      <li>
        Quel mot définit le mieux la fidélisation luxe ?
        <ul className="list-disc list-inside ml-4">
          <li>A. Réduction</li>
          <li>B. Appartenance ✅</li>
          <li>C. Volume</li>
        </ul>
      </li>
    </ol>
  </div>
</div>

); };

export default Chapitre19;
case "chapitre20":
  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">
        📚 Module 1 - Chapitre 20 : L’Avenir du Luxe – Perspectives 2030
      </h1>

      <p className="mb-4">
        Le luxe ne cesse d’évoluer, entre innovations technologiques, nouvelles attentes clients et défis
        environnementaux. Le chapitre final du Module 1 propose une vision d’ensemble sur ce que pourrait devenir
        l’univers du luxe d’ici 2030.
      </p>

      <h2 className="text-xl font-semibold text-cyan-300 mb-2">🌍 Transformations majeures attendues</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Émergence de marques éco-responsables ultra-luxueuses</li>
        <li>Généralisation des expériences immersives et virtuelles (métavers, IA, réalité augmentée)</li>
        <li>Intégration poussée de l’IA dans les parcours client et la création de produits</li>
        <li>Montée des marchés secondaires (revente, vintage, leasing luxe)</li>
        <li>Évolution du profil des acheteurs : Gen Z, Gen Alpha et marchés africains émergents</li>
      </ul>

      <h2 className="text-xl font-semibold text-cyan-300 mb-2">🔮 Chiffres clés (prévisions 2030)</h2>
      <p className="mb-4">
        • Marché mondial estimé à 2 300 milliards € selon BCG  
        • 35 % des ventes réalisées via les canaux digitaux  
        • Plus de 50 % des achats initiés via des recommandations d’IA
      </p>

      <h2 className="text-xl font-semibold text-cyan-300 mb-2">📌 Anecdote</h2>
      <p className="mb-4">
        En 2025, la maison Gucci a investi dans une startup spécialisée dans les vêtements digitaux. En 2030,
        Gucci prévoit de lancer une ligne entièrement virtuelle, intégrée dans les univers de gaming et
        de réalité virtuelle immersive.
      </p>

      <div className="bg-gray-900 rounded-xl p-4 shadow-md mt-6">
        <h3 className="text-lg font-bold mb-2 text-cyan-400">🎓 Quiz - Validez vos acquis</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Quelle part des ventes est-elle estimée être digitale en 2030 ?
            <ul className="list-disc list-inside ml-4">
              <li>A. 15 %</li>
              <li>B. 35 % ✅</li>
              <li>C. 65 %</li>
            </ul>
          </li>
          <li>
            Quelle maison investit dans la mode digitale ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Louis Vuitton</li>
              <li>B. Gucci ✅</li>
              <li>C. Hermès</li>
            </ul>
          </li>
          <li>
            Quelle technologie est attendue dans les parcours client ?
            <ul className="list-disc list-inside ml-4">
              <li>A. La blockchain uniquement</li>
              <li>B. L’intelligence artificielle ✅</li>
              <li>C. Les SMS marketing</li>
            </ul>
          </li>
          <li>
            Quelle génération influencera de plus en plus le luxe ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Gen X</li>
              <li>B. Gen Z et Alpha ✅</li>
              <li>C. Baby Boomers</li>
            </ul>
          </li>
          <li>
            Quel marché est cité comme en forte croissance ?
            <ul className="list-disc list-inside ml-4">
              <li>A. Australie</li>
              <li>B. Afrique ✅</li>
              <li>C. Scandinavie</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );






















