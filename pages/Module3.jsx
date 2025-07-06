import { useState } from 'react';

export default function Module3() { const [produit, setProduit] = useState(""); const [fiche, setFiche] = useState("\ud83e\udde0 En attente..."); const [loading, setLoading] = useState(false);

const genererFiche = async () => { if (!produit.trim()) { setFiche("\u26a0\ufe0f Merci de d\u00e9crire le produit."); return; }

setLoading(true);
setFiche("\u23f3 G\u00e9n\u00e9ration de la fiche en cours...");

try {
  const res = await fetch("https://selezione-ia-backend.onrender.com/fiche-produit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ produit })
  });
  const data = await res.json();
  setFiche(data.fiche || "\u274c Erreur lors de la g\u00e9n\u00e9ration.");
} catch (error) {
  setFiche("\ud83d\udea8 Erreur de connexion avec le serveur.");
} finally {
  setLoading(false);
}

};

return ( <div className="container max-w-3xl mx-auto bg-gradient-to-br from-[#1f1c3b] to-[#0f0c29] rounded-2xl p-8 shadow-lg mt-10 text-white font-sans"> <h2 className="text-center text-cyan-300 text-3xl font-bold mb-6 drop-shadow">📄 G\u00e9n\u00e9rateur de Fiche Produit</h2>

<label className="block text-lg">🛍️ D\u00e9cris ton produit :</label>
  <textarea
    className="w-full mt-4 p-4 bg-[#191933] rounded-xl text-white resize-y min-h-[140px]"
    placeholder="Ex : Jean slim noir Balenciaga, \u00e9tat neuf, taille 38..."
    value={produit}
    onChange={(e) => setProduit(e.target.value)}
  ></textarea>

  <button
    onClick={genererFiche}
    disabled={loading}
    className="mt-6 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition"
  >
    {loading ? "\u23f3 G\u00e9n\u00e9ration..." : "\ud83d\ude80 G\u00e9n\u00e9rer la fiche"}
  </button>

  <pre className="mt-8 bg-[#0b0b1f] p-6 rounded-xl text-cyan-300 shadow-md whitespace-pre-wrap">
    {fiche}
  </pre>
</div>

); }

