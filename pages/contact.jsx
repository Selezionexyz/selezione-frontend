import { useState } from "react";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  // Ici tu peux remplacer par un vrai envoi (EmailJS, API, etc)
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    // reset form ou envoi réel ici
    setNom("");
    setEmail("");
    setMessage("");
  }

  return (
    <div style={{
      backgroundColor: "#0f0c29",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      minHeight: "100vh",
      padding: "2rem",
    }}>
      <h1 style={{ color: "#00ffff", textAlign: "center" }}>📧 Contactez-nous</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 600,
          margin: "auto",
          backgroundColor: "#191933",
          padding: "2rem",
          borderRadius: 12,
        }}
      >
        <label style={{ display: "block", marginTop: "1rem" }}>Nom :</label>
        <input
          type="text"
          required
          value={nom}
          onChange={e => setNom(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            border: "none",
            borderRadius: 8,
            background: "#1f1f3b",
            color: "#fff",
          }}
        />

        <label style={{ display: "block", marginTop: "1rem" }}>Email :</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            border: "none",
            borderRadius: 8,
            background: "#1f1f3b",
            color: "#fff",
          }}
        />

        <label style={{ display: "block", marginTop: "1rem" }}>Message :</label>
        <textarea
          rows={5}
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            border: "none",
            borderRadius: 8,
            background: "#1f1f3b",
            color: "#fff",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "1.5rem",
            background: "#00ffff",
            color: "#000",
            padding: 12,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          Envoyer
        </button>
        {sent && (
          <div style={{ color: "#00ffff", textAlign: "center", marginTop: "1rem" }}>
            Merci pour votre message !
          </div>
        )}
      </form>
    </div>
  );
}
