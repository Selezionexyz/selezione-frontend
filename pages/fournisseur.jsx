import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ModuleFournisseur() {
  // Membres
  const [memberName, setMemberName] = useState("");
  const [canalName, setCanalName] = useState("");
  // Article
  const [article, setArticle] = useState({
    brand: "",
    nameProduct: "",
    product: "",
    ref: "",
    color: "",
    mat: "",
    retail: "",
    cost: "",
    costo: 0,
    totalPaid: "",
    size: "",
    qty: 1,
    comment: "",
  });
  // Panier
  const [cart, setCart] = useState([]);
  const [totalGeneral, setTotalGeneral] = useState(0);
  const [commandeResult, setCommandeResult] = useState("");

  // Mise à jour Total payé en live
  function updateTotalPaid(cost, costo) {
    cost = parseFloat(cost) || 0;
    costo = parseFloat(costo) || 0;
    return cost ? (cost + (cost * costo) / 100).toFixed(2) : "";
  }

  // Handle Article Form
  function handleArticleChange(e) {
    let { name, value, type } = e.target;
    if (type === "number") value = value === "" ? "" : Number(value);
    const newArticle = { ...article, [name]: value };
    // recalcul dynamique
    if (name === "cost" || name === "costo") {
      newArticle.totalPaid = updateTotalPaid(newArticle.cost, newArticle.costo);
    }
    setArticle(newArticle);
  }

  // Ajouter au panier
  function addToCart() {
    if (!memberName.trim() || !canalName.trim()) {
      setCommandeResult("⚠️ Remplis les infos membre.");
      return;
    }
    if (!article.brand || !article.ref || !article.cost) {
      setCommandeResult("⚠️ Champs obligatoires manquants.");
      return;
    }
    const totalPaid = updateTotalPaid(article.cost, article.costo);
    const item = {
      ...article,
      totalPaid: parseFloat(totalPaid) || 0,
      qty: article.qty || 1,
      retail: article.retail || "",
    };
    setCart((c) => [...c, item]);
    setArticle({
      brand: "",
      nameProduct: "",
      product: "",
      ref: "",
      color: "",
      mat: "",
      retail: "",
      cost: "",
      costo: 0,
      totalPaid: "",
      size: "",
      qty: 1,
      comment: "",
    });
    setCommandeResult("");
  }

  // Retirer du panier
  function removeFromCart(idx) {
    setCart((c) => c.filter((_, i) => i !== idx));
  }

  // Calcul du total général
  React.useEffect(() => {
    let total = 0;
    for (let item of cart) {
      total += (item.totalPaid || 0) * (item.qty || 1);
    }
    setTotalGeneral(total);
  }, [cart]);

  // Soumettre la commande
  function submitCart() {
    if (!memberName.trim() || !canalName.trim()) {
      setCommandeResult("⚠️ Remplis les infos membre.");
      return;
    }
    if (cart.length === 0) {
      setCommandeResult("⚠️ Ton panier est vide.");
      return;
    }

    let html = `<b>Membre :</b> ${memberName}<br>
      <b>Canal Selezione :</b> ${canalName}<br><br>
      <table border="1" cellpadding="4" style="border-collapse:collapse;font-size:1em;">
        <tr>
          <th>Brands</th><th>Name Product</th><th>Product</th><th>Réf</th><th>Color</th><th>Matière</th><th>Retail</th>
          <th>Cost</th><th>Costo (%)</th><th>Total payé</th><th>Size</th><th>Qty</th><th>Commentaire</th>
        </tr>
        ${cart
          .map(
            (item) => `
          <tr>
            <td>${item.brand}</td><td>${item.nameProduct}</td><td>${item.product}</td><td>${item.ref}</td><td>${item.color}</td><td>${item.mat}</td>
            <td>${item.retail}</td><td>${item.cost}</td><td>${item.costo}</td><td>${Number(item.totalPaid).toFixed(2)}</td><td>${item.size}</td><td>${item.qty}</td><td>${item.comment}</td>
          </tr>`
          )
          .join("")}
      </table>
      <b>Total général :</b> ${totalGeneral.toFixed(2)} €`;

    setCommandeResult("⏳ Envoi en cours...");
    emailjs
      .send("service_o5at45g", "template_4sg16rd", {
        user_email: memberName + " / " + canalName,
        commande: html,
      })
      .then(
        function (response) {
          setCommandeResult(
            <span style={{ color: "lime", fontWeight: 700 }}>Commande envoyée avec succès !</span>
          );
          setCart([]);
        },
        function (error) {
          setCommandeResult(
            "❌ Erreur d’envoi de la commande. Contacte le support. (Technique EmailJS : " +
              JSON.stringify(error) +
              ")"
          );
        }
      );
  }

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "'Outfit', sans-serif",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="section"
        style={{
          padding: "2rem",
          maxWidth: 1000,
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "gold",
            textAlign: "center",
          }}
        >
          🛒 Panier Fournisseur SELEZIONE
        </h1>
        {/* Infos membre */}
        <div
          className="card file-upload"
          style={{
            background: "#111",
            borderRadius: 12,
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <h2>1. Infos membre</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
          >
            <label>
              Membre :{" "}
              <input
                type="text"
                name="member-name"
                required
                placeholder="Nom ou pseudo"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                style={{
                  padding: "0.45rem",
                  margin: "0.3rem 0 0.9rem 0",
                  borderRadius: 5,
                  border: "none",
                  width: "95%",
                }}
              />
            </label>
            <br />
            <label>
              Name Canal Selezione :{" "}
              <input
                type="text"
                name="canal-name"
                required
                placeholder="ex: Francky4doigt"
                value={canalName}
                onChange={(e) => setCanalName(e.target.value)}
                style={{
                  padding: "0.45rem",
                  margin: "0.3rem 0 0.9rem 0",
                  borderRadius: 5,
                  border: "none",
                  width: "95%",
                }}
              />
            </label>
          </form>
        </div>

        {/* Ajouter un article */}
        <div
          className="card file-upload"
          style={{
            background: "#111",
            borderRadius: 12,
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <h2>2. Ajouter un article au panier</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToCart();
            }}
            autoComplete="off"
          >
            <label>
              Brands :{" "}
              <input
                type="text"
                name="brand"
                required
                value={article.brand}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Name Product :{" "}
              <input
                type="text"
                name="nameProduct"
                value={article.nameProduct}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Product :{" "}
              <input
                type="text"
                name="product"
                value={article.product}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Référence :{" "}
              <input
                type="text"
                name="ref"
                required
                value={article.ref}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Color :{" "}
              <input
                type="text"
                name="color"
                value={article.color}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Matière :{" "}
              <input
                type="text"
                name="mat"
                value={article.mat}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Prix retail (€) :{" "}
              <input
                type="number"
                name="retail"
                min={0}
                value={article.retail}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Prix cost (€) :{" "}
              <input
                type="number"
                name="cost"
                min={0}
                required
                value={article.cost}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Costo (%) :{" "}
              <input
                type="number"
                name="costo"
                min={0}
                required
                value={article.costo}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Prix total payé (€) :{" "}
              <input
                type="text"
                name="totalPaid"
                value={article.totalPaid}
                readOnly
                style={{
                  ...inputStyle,
                  background: "#eee",
                  color: "#111",
                  border: 0,
                }}
                tabIndex={-1}
              />
            </label>
            <br />
            <label>
              Size :{" "}
              <input
                type="text"
                name="size"
                value={article.size}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Quantity :{" "}
              <input
                type="number"
                name="qty"
                min={1}
                value={article.qty}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Commentaire :{" "}
              <input
                type="text"
                name="comment"
                value={article.comment}
                onChange={handleArticleChange}
                style={inputStyle}
              />
            </label>
            <br />
            <br />
            <button
              type="submit"
              style={{
                background: "gold",
                color: "#000",
                fontWeight: 700,
                border: "none",
                borderRadius: 6,
                padding: ".7rem 1.5rem",
                fontSize: "1.15rem",
                cursor: "pointer",
              }}
            >
              Ajouter au panier
            </button>
          </form>
        </div>

        {/* Panier */}
        {cart.length > 0 && (
          <div
            className="card"
            id="cart-block"
            style={{
              background: "#111",
              borderRadius: 12,
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <h2>3. Récapitulatif du panier</h2>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "1.5rem",
              }}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Brands</th>
                  <th style={thStyle}>Name Product</th>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Référence</th>
                  <th style={thStyle}>Color</th>
                  <th style={thStyle}>Matière</th>
                  <th style={thStyle}>Retail</th>
                  <th style={thStyle}>Cost</th>
                  <th style={thStyle}>Costo (%)</th>
                  <th style={thStyle}>Total payé</th>
                  <th style={thStyle}>Size</th>
                  <th style={thStyle}>Qty</th>
                  <th style={thStyle}>Commentaire</th>
                  <th style={thStyle}>Retirer</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr
                    key={idx}
                    style={{
                      background: idx % 2 === 0 ? "#181818" : undefined,
                    }}
                  >
                    <td>{item.brand}</td>
                    <td>{item.nameProduct}</td>
                    <td>{item.product}</td>
                    <td>{item.ref}</td>
                    <td>{item.color}</td>
                    <td>{item.mat}</td>
                    <td>{item.retail}</td>
                    <td>{item.cost}</td>
                    <td>{item.costo}</td>
                    <td>{Number(item.totalPaid).toFixed(2)}</td>
                    <td>{item.size}</td>
                    <td>{item.qty}</td>
                    <td>{item.comment}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(idx)}
                        style={{
                          color: "red",
                          background: "none",
                          border: "none",
                          fontWeight: 700,
                          fontSize: "1.3em",
                          cursor: "pointer",
                        }}
                        title="Retirer"
                      >
                        ✖
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ fontWeight: 700, fontSize: "1.15em" }}>
              Total général à payer : <span id="total-general">{totalGeneral.toFixed(2)}</span> €
            </div>
            <br />
            <button
              onClick={submitCart}
              style={{
                background: "gold",
                color: "#000",
                fontWeight: 700,
                border: "none",
                borderRadius: 6,
                padding: ".7rem 1.5rem",
                fontSize: "1.15rem",
                cursor: "pointer",
              }}
            >
              Valider ma commande
            </button>
            <div id="commande-result" style={{ marginTop: "1rem" }}>
              {commandeResult}
            </div>
          </div>
        )}

        {/* Message global erreurs */}
        {commandeResult && cart.length === 0 && (
          <div
            style={{
              marginTop: "1rem",
              color: commandeResult.toString().startsWith("⚠️") ? "orange" : "lime",
              fontWeight: 600,
              fontSize: "1.1em",
            }}
          >
            {commandeResult}
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "0.45rem",
  margin: "0.3rem 0 0.9rem 0",
  borderRadius: 5,
  border: "none",
  width: "95%",
};

const thStyle = {
  background: "#222",
  color: "gold",
  border: "1px solid #444",
  padding: ".45rem",
  textAlign: "center",
};
