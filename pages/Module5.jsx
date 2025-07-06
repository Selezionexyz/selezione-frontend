import { useState } from "react";

export default function Module5() {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");
  const [output, setOutput] = useState("⌛ En attente...");
  const [loading, setLoading] = useState(false);

  const generer = async () => {
    setOutput("⏳ Chargement des actualités...");
    setLoading(true);
    try {
      const res = await fetch("https://selezione-ia-backend.onrender.com/rss-luxe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sujet: keyword, date }),
      });
      const data = await res.json();
      setOutput(data.contenu || "❌ Aucune actualité trouvée.");
    } catch (err) {
      setOutput("❌ Erreur de génération.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#0f0c29",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#00ffff",
          textShadow: "0 0 10px #00ffff",
        }}
      >
        🗞️ Actus Luxe par Date & RSS
      </h1>
      <div
        className="container"
        style={{
          maxWidth: 600,
          margin: "2rem auto",
          backgroundColor: "#1b1b3a",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,255,255,0.1)",
        }}
      >
        <label htmlFor="keyword" style={{ fontWeight: "bold", display: "block", marginTop: "1rem" }}>
          🔍 Sujet facultatif (Dior, Fashion Week, etc) :
        </label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Ex : Gucci, Met Gala..."
          style={{
            width: "100%",
            padding: "0.75rem",
            marginTop: "0.5rem",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            backgroundColor: "#2c2c54",
            color: "white",
          }}
          disabled={loading}
        />
        <label htmlFor="date" style={{ fontWeight: "bold", display: "block", marginTop: "1rem" }}>
          📅 Choisis une date (facultatif) :
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginTop: "0.5rem",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            backgroundColor: "#2c2c54",
            color: "white",
          }}
          disabled={loading}
        />
        <button
          onClick={generer}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginTop: "1.5rem",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            background: "linear-gradient(to right, #00ffff, #0077ff)",
            color: "black",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "0.3s ease",
            opacity: loading ? 0.7 : 1,
          }}
          disabled={loading}
        >
          🚀 Générer Actus
        </button>
        <div
          id="output"
          className="result"
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#141432",
            padding: "1rem",
            borderRadius: "10px",
            whiteSpace: "pre-wrap",
            minHeight: "60px",
          }}
        >
          {output}
        </div>
      </div>
    </div>
  );
}
