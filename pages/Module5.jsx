<!DOCTYPE html><html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>📰 Actus Luxe RSS – Selezione</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #0f0c29;
      color: white;
      padding: 2rem;
      margin: 0;
    }h1 {
  text-align: center;
  font-size: 2rem;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
}

.container {
  max-width: 600px;
  margin: 2rem auto;
  background-color: #1b1b3a;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,255,255,0.1);
}

label {
  font-weight: bold;
  display: block;
  margin-top: 1rem;
}

input, select, button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
}

input, select {
  background-color: #2c2c54;
  color: white;
}

button {
  margin-top: 1.5rem;
  background: linear-gradient(to right, #00ffff, #0077ff);
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  opacity: 0.9;
}

.result {
  margin-top: 1.5rem;
  background-color: #141432;
  padding: 1rem;
  border-radius: 10px;
  white-space: pre-wrap;
}

  </style>
</head>
<body>
  <h1>🗞️ Actus Luxe par Date & RSS</h1>
  <div class="container">
    <label for="keyword">🔍 Sujet facultatif (Dior, Fashion Week, etc) :</label>
    <input type="text" id="keyword" placeholder="Ex : Gucci, Met Gala..."><label for="date">📅 Choisis une date (facultatif) :</label>
<input type="date" id="date">

<button onclick="generer()">🚀 Générer Actus</button>

<div id="output" class="result">⌛ En attente...</div>

  </div>  <script>
    async function generer() {
      const sujet = document.getElementById("keyword").value;
      const date = document.getElementById("date").value;
      const out = document.getElementById("output");

      out.innerText = "⏳ Chargement des actualités...";

      try {
        const res = await fetch("https://selezione-ia-backend.onrender.com/rss-luxe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sujet, date })
        });

        const data = await res.json();
        out.innerText = data.contenu || "❌ Aucune actualité trouvée.";
      } catch (err) {
        out.innerText = "❌ Erreur de génération.";
      }
    }
  </script></body>
</html>
