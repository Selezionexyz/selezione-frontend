import { useState } from "react";

// ⚠️ Les styles CSS doivent être déplacés dans le fichier styles/globals.css ou équivalent.

export default function Module1() {
  const [activeTab, setActiveTab] = useState("chat");
  const [inputs, setInputs] = useState({ chat: "", marque: "", style: "" });
  const [responses, setResponses] = useState({
    chat: "🔍 En attente de votre question...",
    marque: "🔍 En attente d'une marque à analyser...",
    style: "🔍 En attente de votre demande de conseil...",
  });
  const [loading, setLoading] = useState({ chat: false, marque: false, style: false });

  const icons = { chat: 'fa-paper-plane', marque: 'fa-search', style: 'fa-magic' };
  const texts = { chat: 'Envoyer', marque: 'Analyser la marque', style: 'Obtenir des conseils' };

  const handleTab = (tab) => setActiveTab(tab);

  const handleInput = (e, mode) => {
    setInputs({ ...inputs, [mode]: e.target.value });
  };

  const envoyer = async (mode) => {
    const question = inputs[mode].trim();
    if (!question) {
      setResponses((r) => ({
        ...r,
        [mode]: <span style={{ color: "#ffd700" }}>⚠️ Merci d'écrire une question.</span>,
      }));
      return;
    }
    setLoading((l) => ({ ...l, [mode]: true }));
    setResponses((r) => ({
      ...r,
      [mode]: (
        <span className="loading">
          <span className="spinner" />Traitement de votre demande...
        </span>
      ),
    }));
    try {
      const res = await fetch("https://selezione-ia-backend.onrender.com/assistant-luxe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, mode }),
      });
      const data = await res.json();
      setResponses((r) => ({
        ...r,
        [mode]: data.response || "❌ Aucune réponse générée.",
      }));
    } catch (err) {
      setResponses((r) => ({
        ...r,
        [mode]: <span style={{ color: "red" }}>🚫 Erreur de connexion à l'IA. Veuillez réessayer.</span>,
      }));
    }
    setLoading((l) => ({ ...l, [mode]: false }));
  };

  return (
    <div className="container" style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
      {/* Header unifié */}
      <header className="selezione-header" style={{
        background: "rgba(26,26,26,0.85)",
        borderBottom: "1px solid rgba(212,175,55,0.2)",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)"
      }}>
        <a href="/" className="selezione-logo" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", color: "inherit" }}>
          <div className="selezione-logo-icon" style={{
            width: 48, height: 48,
            background: "linear-gradient(135deg,#d4af37,#ffd700)",
            borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#000", fontSize: "1.5rem"
          }}>
            <i className="fas fa-diamond"></i>
          </div>
          <div className="selezione-logo-text" style={{ display: "flex", flexDirection: "column" }}>
            <div className="selezione-logo-title" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem", fontWeight: 700, color: "#ffd700"
            }}>SELEZIONE</div>
            <div className="selezione-logo-subtitle" style={{
              fontSize: "0.75rem", color: "rgba(245,230,211,0.7)",
              textTransform: "uppercase", letterSpacing: 1
            }}>Luxury Intelligence</div>
          </div>
        </a>
        <div className="selezione-nav-actions">
          <a href="/" className="selezione-btn selezione-btn-back" style={{
            background: "#222", color: "#f5e6d3",
            border: "1px solid rgba(212,175,55,0.2)",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.75rem 1.5rem", borderRadius: 16,
            fontWeight: 500, fontSize: "0.9rem", textDecoration: "none"
          }}>
            <i className="fas fa-arrow-left"></i>
            Retour Dashboard
          </a>
        </div>
      </header>

      {/* Contenu principal */}
      <main>
        {/* En-tête du module */}
        <div className="module-header" style={{
          background: "rgba(26,26,26,0.85)",
          border: "1px solid rgba(212,175,55,0.2)",
          borderRadius: 16, padding: "2rem", marginBottom: "2rem",
          backdropFilter: "blur(10px)"
        }}>
          <div className="module-header-content" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div className="module-icon" style={{
              width: 64, height: 64,
              background: "linear-gradient(135deg,#d4af37,#ffd700)",
              borderRadius: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#000", fontSize: "2rem"
            }}>
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h1 className="module-title" style={{
                fontFamily: "'Playfair Display', serif", fontSize: "2.5rem",
                fontWeight: 700, color: "#ffd700", marginBottom: "0.5rem"
              }}>Assistant Luxe IA</h1>
              <p className="module-subtitle" style={{ color: "rgba(245,230,211,0.8)", fontSize: "1.1rem" }}>
                Votre conseiller intelligent pour l'univers du prêt-à-porter de luxe
              </p>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div className="tabs-container" style={{
          display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem"
        }}>
          {["chat", "marque", "style"].map((tab) => (
            <button
              key={tab}
              className={`tab-button${activeTab === tab ? " active" : ""}`}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2rem", background: activeTab === tab ? "linear-gradient(135deg,#d4af37,#ffd700)" : "#222",
                border: `1px solid ${activeTab === tab ? "#d4af37" : "rgba(212,175,55,0.2)"}`,
                borderRadius: 16, color: activeTab === tab ? "#000" : "#f5e6d3",
                cursor: "pointer", fontWeight: 500, transition: "all .3s cubic-bezier(0.165,0.84,0.44,1)"
              }}
              onClick={() => handleTab(tab)}
            >
              <i className={`fas ${tab === "chat" ? "fa-comments" : tab === "marque" ? "fa-tags" : "fa-tshirt"}`}></i>
              {tab === "chat" ? "Chat IA" : tab === "marque" ? "Analyse Marque" : "Conseiller Style"}
            </button>
          ))}
        </div>

        {/* Sections d'outils */}
        <div style={{ display: activeTab === "chat" ? "block" : "none" }}>
          <section className="tool-section active" id="tab-chat" style={{
            background: "rgba(26,26,26,0.85)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: 16, padding: "2rem", backdropFilter: "blur(10px)"
          }}>
            <h3 style={{
              color: "#ffd700", fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem", marginBottom: "1.5rem"
            }}>💬 Chat IA Généraliste</h3>
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="form-label" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem", color: "#f5e6d3" }}>
                Votre question :
              </label>
              <textarea
                className="form-input"
                style={{
                  width: "100%", padding: "1rem", background: "#222",
                  border: "1px solid rgba(212,175,55,0.2)", borderRadius: 8,
                  color: "#f5e6d3", fontFamily: "Inter, sans-serif", fontSize: "1rem",
                  minHeight: 120, resize: "vertical"
                }}
                placeholder="Ex : Quelles sont les tendances 2025 ? Comment authentifier un sac Hermès ?"
                value={inputs.chat}
                onChange={(e) => handleInput(e, "chat")}
                disabled={loading.chat}
              />
            </div>
            <button
              className="send-btn"
              style={{
                width: "100%", padding: "1rem 2rem", background: "linear-gradient(135deg,#d4af37,#ffd700)",
                color: "#000", border: "none", borderRadius: 16, fontWeight: 600, fontSize: "1rem",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
              }}
              disabled={loading.chat}
              onClick={() => envoyer("chat")}
            >
              {loading.chat ? <span className="spinner" /> : <i className={`fas ${icons.chat}`}></i>}
              {texts.chat}
            </button>
            <div id="reponse-chat" className="response" style={{
              background: "#222", border: "1px solid rgba(212,175,55,0.2)",
              borderRadius: 8, padding: "1.5rem", marginTop: "1.5rem",
              minHeight: 150, whiteSpace: "pre-wrap", fontFamily: "Inter, sans-serif", lineHeight: 1.6, color: "#f5e6d3"
            }}>
              {responses.chat}
            </div>
          </section>
        </div>

        <div style={{ display: activeTab === "marque" ? "block" : "none" }}>
          <section className="tool-section active" id="tab-marque" style={{
            background: "rgba(26,26,26,0.85)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: 16, padding: "2rem", backdropFilter: "blur(10px)"
          }}>
            <h3 style={{
              color: "#ffd700", fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem", marginBottom: "1.5rem"
            }}>🏷️ Analyse de Marque</h3>
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="form-label" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem", color: "#f5e6d3" }}>
                Nom de la marque :
              </label>
              <textarea
                className="form-input"
                style={{
                  width: "100%", padding: "1rem", background: "#222",
                  border: "1px solid rgba(212,175,55,0.2)", borderRadius: 8,
                  color: "#f5e6d3", fontFamily: "Inter, sans-serif", fontSize: "1rem",
                  minHeight: 120, resize: "vertical"
                }}
                placeholder="Ex : Balenciaga, Gucci, Dior, Saint Laurent..."
                value={inputs.marque}
                onChange={(e) => handleInput(e, "marque")}
                disabled={loading.marque}
              />
            </div>
            <button
              className="send-btn"
              style={{
                width: "100%", padding: "1rem 2rem", background: "linear-gradient(135deg,#d4af37,#ffd700)",
                color: "#000", border: "none", borderRadius: 16, fontWeight: 600, fontSize: "1rem",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
              }}
              disabled={loading.marque}
              onClick={() => envoyer("marque")}
            >
              {loading.marque ? <span className="spinner" /> : <i className={`fas ${icons.marque}`}></i>}
              {texts.marque}
            </button>
            <div id="reponse-marque" className="response" style={{
              background: "#222", border: "1px solid rgba(212,175,55,0.2)",
              borderRadius: 8, padding: "1.5rem", marginTop: "1.5rem",
              minHeight: 150, whiteSpace: "pre-wrap", fontFamily: "Inter, sans-serif", lineHeight: 1.6, color: "#f5e6d3"
            }}>
              {responses.marque}
            </div>
          </section>
        </div>

        <div style={{ display: activeTab === "style" ? "block" : "none" }}>
          <section className="tool-section active" id="tab-style" style={{
            background: "rgba(26,26,26,0.85)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: 16, padding: "2rem", backdropFilter: "blur(10px)"
          }}>
            <h3 style={{
              color: "#ffd700", fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem", marginBottom: "1.5rem"
            }}>👗 Conseiller Style</h3>
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="form-label" style={{ display: "block", fontWeight: 500, marginBottom: "0.5rem", color: "#f5e6d3" }}>
                Décrivez votre besoin style :
              </label>
              <textarea
                className="form-input"
                style={{
                  width: "100%", padding: "1rem", background: "#222",
                  border: "1px solid rgba(212,175,55,0.2)", borderRadius: 8,
                  color: "#f5e6d3", fontFamily: "Inter, sans-serif", fontSize: "1rem",
                  minHeight: 120, resize: "vertical"
                }}
                placeholder="Ex : Je cherche un look pour un mariage d'été, je mesure 1m70, style élégant mais moderne..."
                value={inputs.style}
                onChange={(e) => handleInput(e, "style")}
                disabled={loading.style}
              />
            </div>
            <button
              className="send-btn"
              style={{
                width: "100%", padding: "1rem 2rem", background: "linear-gradient(135deg,#d4af37,#ffd700)",
                color: "#000", border: "none", borderRadius: 16, fontWeight: 600, fontSize: "1rem",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
              }}
              disabled={loading.style}
              onClick={() => envoyer("style")}
            >
              {loading.style ? <span className="spinner" /> : <i className={`fas ${icons.style}`}></i>}
              {texts.style}
            </button>
            <div id="reponse-style" className="response" style={{
              background: "#222", border: "1px solid rgba(212,175,55,0.2)",
              borderRadius: 8, padding: "1.5rem", marginTop: "1.5rem",
              minHeight: 150, whiteSpace: "pre-wrap", fontFamily: "Inter, sans-serif", lineHeight: 1.6, color: "#f5e6d3"
            }}>
              {responses.style}
            </div>
          </section>
        </div>
      </main>

      {/* Spinner CSS */}
      <style>{`
        .spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid rgba(212,175,55,0.2);
          border-top: 2px solid #ffd700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
