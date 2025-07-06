import React, { useState } from "react";

export default function CalculateurMarge() {
  const [cost, setCost] = useState("");
  const [costo, setCosto] = useState("");
  const [retail, setRetail] = useState("");
  const [ursaff, setUrsaff] = useState(false);
  const [frais, setFrais] = useState("");
  const [useCustomSale, setUseCustomSale] = useState(false);
  const [customSale, setCustomSale] = useState("");
  const [resultat, setResultat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const costVal = parseFloat(cost) || 0;
    const costoVal = parseFloat(costo) || 0;
    const retailVal = parseFloat(retail) || null;
    const fraisVal = parseFloat(frais) || 0;
    const customSaleVal = parseFloat(customSale) || 0;

    // Calcul du coût total d'achat
    const coutTotal = costVal + (costVal * costoVal / 100) + fraisVal;
    const prixVente = useCustomSale && customSaleVal > 0 ? customSaleVal : retailVal;
    if (!prixVente) {
      setResultat(
        "<span style='color:gold;'>Veuillez renseigner un prix retail ou un prix de vente personnalisé.</span>"
      );
      return;
    }

    const margeBrute = prixVente - coutTotal;
    const margeBrutePct = (margeBrute / coutTotal) * 100;
    const urssafVal = ursaff ? (margeBrute * 0.123) : 0;
    const benefNet = margeBrute - urssafVal;

    setResultat(`
      <div class="ligne"><b>Résumé complet :</b></div>
      <div class="ligne">Coût total d'achat (cost + costo + frais de port) : <span style="color:gold">${coutTotal.toFixed(2)} €</span></div>
      <div class="ligne">Prix de vente utilisé : <span style="color:gold">${prixVente.toFixed(2)} €</span></div>
      <div class="ligne">Marge brute : <span style="color:lime">${margeBrute.toFixed(2)} € (${margeBrutePct.toFixed(2)}%)</span></div>
      ${ursaff ? `<div class="ligne">URSSAF (12,3%) : <span style="color:orange">-${urssafVal.toFixed(2)} €</span></div>` : ''}
      <div class="ligne">Marge nette après URSSAF : <span style="color:#ffd700">${benefNet.toFixed(2)} €</span></div>
      <div class="ligne" style="margin-top:1.2rem; color:#aaa;">
        ${retailVal && useCustomSale && customSaleVal > 0 ? `Prix retail initial : <b>${retailVal.toFixed(2)} €</b>` : ""}
      </div>
    `);
  };

  return (
    <section className="section" style={{
      padding: "2rem", maxWidth: 600, margin: "auto",
      fontFamily: "'Outfit', sans-serif", background: "#000", color: "#fff"
    }}>
      <h1 style={{
        fontFamily: "'Playfair Display', serif", color: "gold", textAlign: "center"
      }}>
        🧮 Calculateur de Marge SELEZIONE
      </h1>
      <div className="card" style={{
        background: "#111", borderRadius: 12, padding: "1.5rem", marginBottom: "2rem"
      }}>
        <form id="calc-form" onSubmit={handleSubmit}>
          <label>Prix cost (€) :
            <input
              type="number"
              min="0"
              required
              value={cost}
              onChange={e => setCost(e.target.value)}
              style={{ padding: "0.45rem", borderRadius: 5, border: "none", width: "100%", marginBottom: ".8rem" }}
            />
          </label>
          <label>Costo (%) :
            <input
              type="number"
              min="0"
              max="100"
              required
              value={costo}
              onChange={e => setCosto(e.target.value)}
              style={{ padding: "0.45rem", borderRadius: 5, border: "none", width: "100%", marginBottom: ".8rem" }}
            />
          </label>
          <label>Prix retail (€) :
            <input
              type="number"
              min="0"
              placeholder="Optionnel"
              value={retail}
              onChange={e => setRetail(e.target.value)}
              style={{ padding: "0.45rem", borderRadius: 5, border: "none", width: "100%", marginBottom: ".8rem" }}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={ursaff}
              onChange={e => setUrsaff(e.target.checked)}
              style={{ marginLeft: ".6rem", marginRight: ".3rem" }}
            />
            Ajouter URSSAF (12,3%)
          </label>
          <label>Frais de port (€) :
            <input
              type="number"
              min="0"
              value={frais}
              placeholder="Optionnel"
              onChange={e => setFrais(e.target.value)}
              style={{ padding: "0.45rem", borderRadius: 5, border: "none", width: "100%", marginBottom: ".8rem" }}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={useCustomSale}
              onChange={e => setUseCustomSale(e.target.checked)}
              style={{ marginLeft: ".6rem", marginRight: ".3rem" }}
            />
            J’utilise un prix de vente personnalisé
          </label>
          <label>Prix de vente (€) :
            <input
              type="number"
              min="0"
              placeholder="ex: 595"
              value={customSale}
              onChange={e => setCustomSale(e.target.value)}
              disabled={!useCustomSale}
              style={{ padding: "0.45rem", borderRadius: 5, border: "none", width: "100%", marginBottom: ".8rem" }}
            />
          </label>
          <button
            type="submit"
            style={{
              background: "gold", color: "#000", fontWeight: 700, border: "none", borderRadius: 6,
              padding: ".7rem 1.5rem", fontSize: "1.15rem", cursor: "pointer"
            }}
          >
            Calculer
          </button>
        </form>
        <div className="result" style={{
          marginTop: "2rem", padding: "1.2rem", background: "#181818", borderRadius: 10, color: "#fff"
        }}>
          <div dangerouslySetInnerHTML={{ __html: resultat }} />
        </div>
      </div>
    </section>
  );
}
