import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const [currentChapter, setCurrentChapter] = useState("chapitre1");

  const renderContent = () => {
    switch (currentChapter) {
      case "chapitre1":
        return (
          <div className="p-4 text-white">
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">🎓 Module 1 - Chapitre 1 : Introduction au Luxe</h1>
            <p className="mb-4">
              Le luxe est une industrie fondée sur l'exclusivité, la rareté, et l'héritage. Ce chapitre explore les origines
              historiques du luxe, les éléments clés qui différencient un produit de luxe d’un produit haut de gamme, et la
              manière dont les grandes maisons comme Hermès, Chanel ou Louis Vuitton ont construit leur mythe.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Origines historiques du luxe</li>
              <li>Évolution des grandes maisons</li>
              <li>Marketing de l’émotion</li>
              <li>Symbolique sociale et culture visuelle</li>
            </ul>
          </div>
        );

      case "chapitre2":
        return (
          <div className="p-4 text-white">
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">📘 Module 1 - Chapitre 2 : Fonctionnement des Marques</h1>
            <p className="mb-4">
              Comprendre comment les maisons de luxe structurent leur activité est essentiel : verticalité, rareté organisée,
              distribution sélective. Exemple avec Hermès qui contrôle l’ensemble de sa chaîne, ou Dior qui régule les
              réassorts pour entretenir la demande.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Intégration verticale</li>
              <li>Distribution sélective</li>
              <li>Gestion du stock et rareté</li>
              <li>Communication maîtrisée</li>
            </ul>
          </div>
        );

      case "chapitre3":
        return (
          <div className="p-4 text-white">
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">🎯 Module 1 - Chapitre 3 : Comprendre les clients et communiquer efficacement</h1>
            <p className="mb-4">
              Dans ce chapitre, nous explorons comment interagir avec les Maisons de Luxe de manière professionnelle :
              posture, vocabulaire, attitude, gestion des objections. L’objectif : inspirer confiance dès le premier échange.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Posture professionnelle</li>
              <li>Langage adapté</li>
              <li>Réponses aux objections</li>
              <li>Communication haut de gamme</li>
            </ul>
          </div>
        );

      case "chapitre4":
        return (
          <div className="p-4 text-white">
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">🎨 Module 1 - Chapitre 4 : Le langage visuel du luxe</h1>
            <p className="mb-4">
              Une image vaut mille mots. Le luxe mise tout sur l’esthétique : charte graphique, typographies, univers
              visuel, packaging. Ce chapitre vous apprend à décoder le visuel d’une marque.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Identité graphique</li>
              <li>Charte visuelle</li>
              <li>Photographie de luxe</li>
              <li>Design produit</li>
            </ul>
          </div>
        );

      case "chapitre5":
        return (
          <div className="p-4 text-white">
            <h1 className="text-3xl font-bold text-cyan-400 mb-4">💡 Module 1 - Chapitre 5 : Étude de cas - Hermès, Chanel, Louis Vuitton</h1>
            <p className="mb-4">
              Une analyse approfondie de trois géants du luxe. Pourquoi Hermès est toujours en rupture ? Pourquoi Chanel
              ne vend pas en ligne ? Pourquoi Louis Vuitton a lancé ses propres ateliers d’upcycling ?
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Stratégie Hermès</li>
              <li>Chanel et le retail exclusif</li>
              <li>LV et la modernité maîtrisée</li>
              <li>Le storytelling de chaque marque</li>
            </ul>
          </div>
        );
        {/* FORMATION */}
        <section className="bg-[#121212] py-16 px-6 text-white" id="formation">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">🎓 Formation SELEZIONE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formations.map((formation, index) => (
              <div key={index} className="bg-[#1f1f1f] rounded-xl p-6 shadow hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">{formation.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{formation.description}</p>
                <Link to={formation.link} className="text-cyan-400 hover:underline text-sm">Accéder ➜</Link>
              </div>
            ))}
          </div>
        </section>

        {/* OUTILS */}
        <section className="bg-[#0f0c29] py-16 px-6 text-white" id="tools">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">🛠️ Outils SELEZIONE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-[#1b1b3a] rounded-xl p-6 shadow hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <Link to={tool.route} className="text-cyan-400 hover:underline text-sm">Ouvrir ➜</Link>
              </div>
            ))}
          </div>
        </section>

        {/* ACTUALITÉ */}
        <section className="bg-black py-16 px-6 text-white" id="actualite">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">📰 Actualité & Veille</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-[#1f1f1f] rounded-xl p-6 shadow hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.summary}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-sm">Lire ➜</a>
              </div>
            ))}
          </div>
        </section>

        {/* ESPACE COMMANDE */}
        <section className="bg-[#0f0c29] py-16 px-6 text-white" id="commandes">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">📦 Commandes & Sélections</h2>
          <div className="flex justify-center">
            <Link to="/commandes" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-xl transition-all shadow">
              Accéder à mes commandes
            </Link>
          </div>
        </section>
        {/* SAV & SUPPORT */}
        <section className="bg-[#1f1f1f] py-16 px-6 text-white" id="sav">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">💬 Service Après-Vente & Support</h2>
          <div className="max-w-2xl mx-auto bg-[#121212] rounded-xl p-6 shadow-md">
            <p className="mb-4 text-gray-300">Besoin d’aide ? Notre équipe est disponible 7j/7. Vous pouvez :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Consulter la FAQ & nos guides interactifs</li>
              <li>Utiliser le chat en ligne intégré (bientôt disponible)</li>
              <li>Envoyer une demande à notre équipe support</li>
            </ul>
            <div className="mt-6 text-center">
              <Link to="/support" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-6 rounded-lg transition-all shadow">
                Accéder au support
              </Link>
            </div>
          </div>
        </section>

        {/* STATISTIQUES */}
        <section className="bg-black py-16 px-6 text-white" id="stats">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">📈 Statistiques Générales</h2>
          <div className="max-w-4xl mx-auto">
            <canvas id="globalStatsChart" height="150"></canvas>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0f0c29] text-white py-6 mt-10 text-center text-sm border-t border-cyan-900">
          <p>&copy; 2025 SELEZIONE. Tous droits réservés. Plateforme propulsée par IA & Passion.</p>
        </footer>
        // BLOC 4/4 - Fin du SaaS SELEZIONE

// 🔄 Données de modules, annonces et outils const formations = [ { title: "🧠 Formation Revente Luxe", description: "20 chapitres - stratégie complète" }, { title: "🛍️ Shopify & Instagram Shopping", description: "Mini-guide e-commerce 2025" }, { title: "✅ Vérification Authenticité", description: "Fiche outil téléchargeable" }, ];

const annonces = [ "🔥 Nouvelle fonctionnalité IA disponible dès lundi !", "🚀 Plus de 800 utilisateurs actifs sur la plateforme en juin !", "📦 Module 4 - Activité Prêt-à-Porter est en ligne !", ];

const outilsIA = [ { title: "🧠 AI Product Selector", desc: "Recommandation produit selon tendance, budget, saison" }, { title: "💰 Analyseur de prix", desc: "Compare les prix sur Farfetch, Vinted, etc." }, { title: "📷 Générateur de fond photo", desc: "Crée un fond pro selon ta DA luxe" }, { title: "📈 Détecteur de tendances", desc: "Scraping & social stats de produit en hausse" }, ];

// 🧠 useEffect pour annonces défilantes (exemple simplifié) useEffect(() => { const interval = setInterval(() => { setCurrentAnnonce((prev) => (prev + 1) % annonces.length); }, 6000); return () => clearInterval(interval); }, []);

// ✅ Export du composant principal SaaS export default function SelezioneApp() { return ( <div className="bg-[#0f0c29] min-h-screen text-white font-sans"> <Header /> <HeroSection /> <Navigation /> <Annonces data={annonces[currentAnnonce]} /> <Academy modules={formations} /> <OutilsSection outils={outilsIA} /> <ActuSection /> <SavSection /> <StatsSection /> <Footer /> </div> ); }

        
        
