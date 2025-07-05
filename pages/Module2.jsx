import React, { useState } from "react";

export default function Module2() { const [type, setType] = useState("actualite"); const [sujet, setSujet] = useState(""); const [resultat, setResultat] = useState("🔍 En attente d'une demande..."); const [chargement, setChargement] = useState(false);

const genererActu = async () => { setChargement(true); setResultat("Chargement...");

try {
  const res = await fetch("https://selezione-ia-backend.onrender.com/actus-luxe-ia", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, sujet })
  });
  const data = await res.json();
  setResultat(data.contenu || "⛔️ Aucune donnée retournée.");
} catch (err) {
  setResultat("❌ Erreur lors de la génération.");
} finally {
  setChargement(false);
}

};

return ( <div className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-champagne font-outfit"> <header className="selezione-header"> <a href="/" className="selezione-logo"> <div className="selezione-logo-icon"> <i className="fas fa-diamond"></i> </div> <div className="selezione-logo-text"> <div className="selezione-logo-title">SELEZIONE</div> <div className="selezione-logo-subtitle">Luxury Intelligence</div> </div> </a> <div className="selezione-nav-actions"> <a href="/" className="selezione-btn selezione-btn-back"> <i className="fas fa-arrow-left"></i> Retour Dashboard </a> </div> </header>

<main className="container py-8 px-4 max-w-3xl mx-auto">
    <div className="module-header">
      <div className="module-header-content">
        <div className="module-icon">
          <i className="fas fa-newspaper"></i>
        </div>
        <div>
          <h1 className="module-title">Actualités Luxe IA</h1>
          <p className="module-subtitle">Explorez l'univers du luxe en temps réel grâce à notre Intelligence Artificielle</p>
        </div>
      </div>
    </div>

    <div className="form-group">
      <label className="form-label">Choisissez un type d'actualité :</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="form-input"
      >
        <option value="actualite">🗞️ Actualité Luxe</option>
        <option value="anecdote">📖 Anecdote</option>
        <option value="tendance">📉 Tendance</option>
        <option value="evenement">🎩 Événement</option>
        <option value="createur">👗 Créateur / Designer</option>
        <option value="enchere">💫 Vente aux enchères</option>
      </select>
    </div>

    <div className="form-group">
      <label className="form-label">Sujet (facultatif) :</label>
      <textarea
        value={sujet}
        onChange={(e) => setSujet(e.target.value)}
        className="form-input"
        placeholder="Ex : Gucci, Met Gala..."
      ></textarea>
    </div>

    <button
      onClick={genererActu}
      className="send-btn"
      disabled={chargement}
    >
      <i className="fas fa-bolt"></i> Générer
    </button>

    <div className="response mt-6">
      {chargement ? (
        <div className="loading">
          <div className="spinner"></div> Traitement de votre demande...
        </div>
      ) : (
        resultat
      )}
    </div>
  </main>
</div>

); }


