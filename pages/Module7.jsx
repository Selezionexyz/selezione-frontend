import React, { useState } from 'react';

const Module7 = () => { const [user, setUser] = useState(''); const [fichier, setFichier] = useState(''); const [selections, setSelections] = useState(''); const [feedback, setFeedback] = useState(''); const [error, setError] = useState(false);

const handleSubmit = async (e) => { e.preventDefault(); let parsedSelections;

try {
  parsedSelections = JSON.parse(selections);
} catch (err) {
  setFeedback('❌ Format JSON invalide.');
  setError(true);
  return;
}

try {
  const res = await fetch('/api/commande', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, fichier, selections: parsedSelections }),
  });

  const data = await res.json();

  if (res.ok) {
    setFeedback('✅ Commande envoyée avec succès !');
    setError(false);
  } else {
    setFeedback(`❌ Erreur : ${data.error}`);
    setError(true);
  }
} catch (err) {
  setFeedback('❌ Erreur lors de la requête.');
  setError(true);
}

};

return ( <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 text-gray-800"> <h2 className="text-2xl font-bold text-center mb-4">📦 Module 7 : Passer une commande</h2> <form onSubmit={handleSubmit} className="space-y-4"> <div> <label className="block text-sm font-medium">👤 Nom du membre</label> <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" /> </div> <div> <label className="block text-sm font-medium">📁 Nom du fichier</label> <input type="text" value={fichier} onChange={(e) => setFichier(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" /> </div> <div> <label className="block text-sm font-medium">🛒 Sélections (JSON)</label> <textarea value={selections} onChange={(e) => setSelections(e.target.value)} rows="6" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder='[ { "ligne": 10, "taille": "M", "quantite": 2 }, { "ligne": 11, "taille": "L", "quantite": 1 } ]'></textarea> </div> <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg">✅ Envoyer la commande</button> </form> <div className={text-center mt-4 text-sm font-medium ${error ? 'text-red-600' : 'text-green-600'}}>{feedback}</div> </div> ); };

export default Module7;

