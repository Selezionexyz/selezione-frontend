import React, { useState } from 'react';

const Module6 = () => { const [query, setQuery] = useState(''); const [result, setResult] = useState('⏳ En attente de requête...');

const scrapeVestiaire = async () => { if (!query.trim()) return; setResult('⏳ Analyse en cours...');

try {
  const res = await fetch("https://selezione-ia-backend.onrender.com/scrape-vestiaire", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const data = await res.json();

  if (!data.produits || data.produits.length === 0) {
    setResult("❌ Aucun résultat trouvé.");
    return;
  }

  const lines = data.produits.map(p => `🔹 ${p.title}\n💶 ${p.price}€\n🔗 ${p.link}`).join("\n\n");
  const stats = `📉 Min : ${data.stats.min}€\n📈 Max : ${data.stats.max}€\n📊 Moyenne : ${data.stats.avg}€`;

  setResult(`✅ Résultats (${data.produits.length} produits) :\n\n${lines}\n\n📌 Analyse IA:\n${data.resume}\n\n${stats}`);
} catch (err) {
  setResult("❌ Erreur lors du scraping.");
}

};

return ( <div className="container p-4 text-white"> <h2 className="text-xl font-bold text-cyan-400 mb-4">🛍️ Analyse Prix - Vestiaire Collective</h2> <input className="w-full p-2 bg-gray-800 rounded text-white" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ex: Gucci Sac Dionysus" /> <button
onClick={scrapeVestiaire}
className="mt-2 bg-cyan-500 text-black font-bold py-2 px-4 rounded w-full"
> 📊 Lancer l'analyse </button> <pre className="bg-gray-900 p-3 mt-4 rounded whitespace-pre-wrap">{result}</pre> </div> ); };

export default Module6;

