export default function Dashboard() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Bienvenue sur SELEZIONE</h1>

      <section className="bg-[#0a0a0a] p-4 rounded-2xl mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">✨ Intelligence Artificielle</h2>
        <p className="text-gray-300 mb-2">Utilise nos outils pour prédire les tendances, calculer les marges et optimiser tes ventes.</p>
        <ul className="list-disc list-inside text-white space-y-1">
          <li>🔍 AI Product Selector</li>
          <li>📊 Analyseur de prix (Farfetch, Grailed, Vinted)</li>
          <li>🎯 Détecteur de tendances</li>
          <li>🖼️ Générateur de fonds photo produit</li>
        </ul>
      </section>

      <section className="bg-[#0a0a0a] p-4 rounded-2xl mb-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">📚 Formation Selezione</h2>
        <p className="text-gray-300">Explore les modules complets sur la revente luxe, sourcing, marketing, contenu, logistique, etc.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <a href="/formation" className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-600">Accéder à la formation</a>
        </div>
      </section>

      <section className="bg-[#0a0a0a] p-4 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">🧠 Accès rapide aux outils</h2>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <a href="/outils" className="bg-gray-800 text-white p-3 rounded-xl text-center hover:bg-gray-700 transition">Outils IA</a>
          <a href="/module1" className="bg-gray-800 text-white p-3 rounded-xl text-center hover:bg-gray-700 transition">Module 1</a>
          <a href="/module2" className="bg-gray-800 text-white p-3 rounded-xl text-center hover:bg-gray-700 transition">Module 2</a>
          <a href="/module3" className="bg-gray-800 text-white p-3 rounded-xl text-center hover:bg-gray-700 transition">Module 3</a>
          <a href="/module4" className="bg-gray-800 text-white p-3 rounded-xl text-center hover:bg-gray-700 transition">Module 4</a>
          <a href="/module5" className="bg-gray-800 text-white p-3 rounded-xl text-center hover:bg-gray-700 transition">Module 5</a>
        </div>
      </section>
    </div>
  );
}
