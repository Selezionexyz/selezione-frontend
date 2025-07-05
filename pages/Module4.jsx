import React, { useState } from 'react'; import '../../styles/modules.css';

const Module4 = () => { const [desc, setDesc] = useState(''); const [produit, setProduit] = useState(''); const [resultEstimation, setResultEstimation] = useState('🧠 En attente...'); const [resultComparateur, setResultComparateur] = useState('🧠 En attente...'); const [historique, setHistorique] = useState([]); const [suggestions, setSuggestions] = useState([]);

const estimer = async () => { if (!desc.trim()) return; setResultEstimation('⏳ Estimation en cours...'); try { const res = await fetch('https://selezione-ia-backend.onrender.com/estimation-luxe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ description: desc }) }); const data = await res.json(); const result = data.estimation || '❌ Aucune estimation obtenue.'; setResultEstimation(result); setHistorique(prev => [...prev, { type: 'estimation', input: desc, output: result }]); } catch { setResultEstimation('❌ Erreur lors de l’estimation.'); } };

const comparer = async () => { if (!produit.trim()) return; setResultComparateur('⏳ Comparaison en cours...'); try { const res = await fetch('https://selezione-ia-backend.onrender.com/comparateur-luxe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ produit }) }); const data = await res.json(); const result = data.comparaison || '❌ Aucune comparaison générée.'; setResultComparateur(result); setHistorique(prev => [...prev, { type: 'comparaison', input: produit, output: result }]); } catch { setResultComparateur('❌ Erreur lors de la comparaison.'); } };

const genererSuggestions = async () => { if (!produit.trim()) return; try { const res = await fetch('https://selezione-ia-backend.onrender.com/suggestions-produits', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ base: produit }) }); const data = await res.json(); setSuggestions(data.suggestions || []); } catch { setSuggestions(['❌ Erreur de récupération des suggestions.']); } };

return ( <div className="module-container"> <h1 className="module-title">💰 Estimation & Comparateur</h1>

<div className="module-section">
    <h2>📦 Estimateur de Prix</h2>
    <label htmlFor="desc">Décris ton article :</label>
    <textarea id="desc" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Exemple : Sac Chanel Classic Flap noir, très bon état..."></textarea>
    <button onClick={estimer}>📊 Estimer</button>
    <div className="result-box">{resultEstimation}</div>
  </div>

  <div className="module-section">
    <h2>📊 Comparateur Plateformes</h2>
    <label htmlFor="produit">Nom ou type du produit :</label>
    <input id="produit" value={produit} onChange={e => setProduit(e.target.value)} placeholder="Exemple : Sac Louis Vuitton Neverfull" />
    <button onClick={comparer}>⚖️ Comparer</button>
    <div className="result-box">{resultComparateur}</div>
  </div>

  <div className="module-section">
    <h2>🧠 Suggestions IA de Produits Similaires</h2>
    <button onClick={genererSuggestions}>🔍 Générer des idées similaires</button>
    <ul className="result-box">
      {suggestions.map((s, idx) => <li key={idx}>{s}</li>)}
    </ul>
  </div>

  <div className="module-section">
    <h2>🕘 Historique des Recherches</h2>
    <ul className="result-box">
      {historique.map((item, index) => (
        <li key={index}>
          <strong>{item.type === 'estimation' ? 'Estimation' : 'Comparaison'} :</strong> {item.input} ➝ <em>{item.output}</em>
        </li>
      ))}
    </ul>
  </div>
</div>

); };

export default Module4;

