import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, Brain, Calculator, TrendingUp, FileText, 
  Newspaper, ShoppingBag, BookOpen, Settings, User, Search,
  BarChart3, Zap, Target, Award, Crown, Sparkles, Send,
  ArrowRight, Play, Star, ChevronDown, Bell, Diamond,
  Eye, DollarSign, Users, Clock, Filter, MoreVertical,
  ChevronRight, Upload, Download, CheckCircle, AlertCircle, 
  Info, Percent, Euro, MessageCircle, ShoppingCart, Package,
  GraduationCap, Mic, MicOff, Volume2, VolumeX, Loader
} from 'lucide-react';

// ==================== Composant principal ====================
const SelezionePlatform = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user] = useState({ 
    name: 'Alexandre Dupont', 
    role: 'Expert Luxe',
    avatar: '👑',
    level: 'Diamond Member',
    credits: 150
  });

  // ==================== IA D'ACCUEIL CONVERSATIONNELLE ====================
  const WelcomeAI = () => {
    const [messages, setMessages] = useState([
      { 
        type: 'ai', 
        content: `Bonjour ${user.name} ! 👑\n\nJe suis votre assistant IA personnel SELEZIONE. Je suis là pour analyser votre projet dans le prêt-à-porter de luxe et vous accompagner vers le succès.\n\nParlez-moi de votre situation :\n• Débutant qui souhaite se lancer ?\n• Vendeur expérimenté cherchant à optimiser ?\n• Entrepreneur visant l'expansion ?\n\nQuelle est votre ambition dans le luxe ?`,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [aiState, setAiState] = useState('listening'); // listening, analyzing, recommending

    const handleSend = async () => {
      if (!message.trim()) return;
      
      const userMessage = {
        type: 'user',
        content: message,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);
      setMessage('');
      setAiState('analyzing');
      
      try {
        // Simulation d'analyse IA avancée
        setTimeout(() => {
          const analysisResponse = generatePersonalizedResponse(userMessage.content);
          setMessages(prev => [...prev, {
            type: 'ai',
            content: analysisResponse,
            timestamp: new Date().toLocaleTimeString()
          }]);
          setIsLoading(false);
          setAiState('recommending');
        }, 2000);
      } catch (error) {
        setMessages(prev => [...prev, {
          type: 'ai',
          content: 'Désolé, je rencontre une difficulté technique. Pouvez-vous reformuler votre projet ?',
          timestamp: new Date().toLocaleTimeString()
        }]);
        setIsLoading(false);
        setAiState('listening');
      }
    };

    const generatePersonalizedResponse = (userInput) => {
      const input = userInput.toLowerCase();
      
      if (input.includes('débutant') || input.includes('commencer') || input.includes('débuter')) {
        return `🎯 Parfait ! Je détecte un profil débutant ambitieux.\n\n📊 ANALYSE DE VOTRE PROFIL :\n• Potentiel : Élevé 🚀\n• Recommandation : Formation Academy + Outils IA\n• Budget conseillé : 2 000-5 000€ pour débuter\n\n🎯 PLAN D'ACTION PERSONNALISÉ :\n1. Commencez par le Module 1 de l'Academy\n2. Utilisez l'Estimateur IA pour vos premiers achats\n3. Testez le Scraper Vestiaire Collective\n4. Objectif : 3 ventes/mois dès le 2ème mois\n\nVoulez-vous que je vous guide vers votre première formation ?`;
      }
      
      if (input.includes('expérimenté') || input.includes('optimiser') || input.includes('améliorer')) {
        return `💎 Excellent ! Profil expérimenté détecté.\n\n📊 ANALYSE AVANCÉE :\n• Statut : Expert confirmé ⭐\n• Objectif : Optimisation et scaling\n• Potentiel de croissance : +300% possible\n\n🚀 STRATÉGIE D'OPTIMISATION :\n1. Calculateur de marges avancé (URSSAF inclus)\n2. IA de veille automatique du marché\n3. Formation Module 3 : Stratégies avancées\n4. Objectif : Doubler votre CA en 6 mois\n\nQuels sont vos chiffres actuels pour une analyse précise ?`;
      }
      
      if (input.includes('expansion') || input.includes('entreprise') || input.includes('développer')) {
        return `🏆 Visionnaire ! Profil entrepreneur détecté.\n\n📊 ANALYSE STRATÉGIQUE :\n• Vision : Expansion business ⚡\n• Niveau : Expert avancé\n• Potentiel : Création d'empire possible\n\n💼 PLAN D'EXPANSION :\n1. IA de veille marché pour identifier les opportunités\n2. Modules formation avancés (Modules 3-4)\n3. Outils de gestion et automation\n4. Stratégie omnicanale\n\nQuel est votre CA actuel et vos objectifs à 12 mois ?`;
      }
      
      return `🔍 Je perçois votre ambition dans le luxe !\n\n📊 PREMIÈRE ANALYSE :\nVotre message révèle un potentiel intéressant. Pour vous proposer un plan d'action sur-mesure, j'ai besoin de quelques précisions :\n\n• Quel est votre niveau actuel ?\n• Quel budget pouvez-vous investir ?\n• Quels sont vos objectifs à 6 mois ?\n\nPlus vous êtes précis, plus mes recommandations seront ciblées ! 🎯`;
    };

    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Assistant IA Personnel</h2>
              <p className="text-yellow-400 text-sm">
                État : {aiState === 'listening' ? 'À l\'écoute' : 
                        aiState === 'analyzing' ? 'Analyse en cours...' : 
                        'Recommandations prêtes'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-2xl px-4 py-3 rounded-2xl ${
                  msg.type === 'user' 
                    ? 'bg-yellow-500 text-black ml-auto' 
                    : 'bg-gray-800 text-white'
                }`}>
                  <p className="text-sm lg:text-base whitespace-pre-wrap">{msg.content}</p>
                  <p className={`text-xs mt-2 ${msg.type === 'user' ? 'text-black/70' : 'text-gray-400'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white px-4 py-3 rounded-2xl max-w-xs">
                  <div className="flex items-center space-x-2">
                    <Loader className="w-4 h-4 animate-spin text-yellow-400" />
                    <span>Analyse de votre profil...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-yellow-500/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Décrivez votre projet dans le prêt-à-porter de luxe..."
                className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !message.trim()}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ==================== IA DE VEILLE AUTOMATIQUE ====================
  const MarketWatch = () => {
    const [watchData, setWatchData] = useState({
      trending: ['Jacquemus Mini Le Chiquito', 'Bottega Veneta Jodie', 'Loewe Puzzle'],
      priceAlerts: [
        { brand: 'Chanel', item: 'Classic Flap', change: '+12%', status: 'up' },
        { brand: 'Hermès', item: 'Birkin 25', change: '+8%', status: 'up' },
        { brand: 'Dior', item: 'Lady Dior', change: '-3%', status: 'down' }
      ],
      news: [
        { source: 'Vogue', title: 'Les micro-sacs font leur grand retour', time: '2h' },
        { source: 'WWD', title: 'Chanel augmente ses prix de 8%', time: '4h' },
        { source: 'Forbes', title: 'Le marché du luxe d\'occasion explose', time: '6h' }
      ],
      socialBuzz: [
        { platform: 'Instagram', content: '#JacquemusVibes explose avec +340% de mentions', engagement: '892K' },
        { platform: 'TikTok', content: 'Trend "Hermès unboxing" - 12M de vues', engagement: '12M' },
        { platform: 'Twitter', content: 'Débat prix Chanel vs inflation', engagement: '45K' }
      ]
    });

    const [isWatching, setIsWatching] = useState(true);

    useEffect(() => {
      if (isWatching) {
        const interval = setInterval(() => {
          // Simulation de mise à jour en temps réel
          setWatchData(prev => ({
            ...prev,
            news: prev.news.map(item => ({
              ...item,
              time: (parseInt(item.time) + 1) + 'h'
            }))
          }));
        }, 30000);

        return () => clearInterval(interval);
      }
    }, [isWatching]);

    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">IA de Veille Marché</h2>
            <p className="text-gray-400">Surveillance automatique 24/7 du prêt-à-porter de luxe</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${isWatching ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
            <span className="text-sm text-gray-400">{isWatching ? 'En surveillance' : 'Arrêtée'}</span>
            <button 
              onClick={() => setIsWatching(!isWatching)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isWatching ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              } text-white text-sm`}
            >
              {isWatching ? 'Arrêter' : 'Démarrer'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tendances Temps Réel */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Tendances Temps Réel
            </h3>
            <div className="space-y-3">
              {watchData.trending.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-white">{item}</span>
                  <span className="text-green-400 text-sm">🔥 HOT</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alertes Prix */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-yellow-400 mr-2" />
              Alertes Prix
            </h3>
            <div className="space-y-3">
              {watchData.priceAlerts.map((alert, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <span className="text-white font-medium">{alert.brand}</span>
                    <p className="text-gray-400 text-sm">{alert.item}</p>
                  </div>
                  <span className={`font-bold ${alert.status === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {alert.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actualités */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Newspaper className="w-5 h-5 text-blue-400 mr-2" />
              Actualités Luxe
            </h3>
            <div className="space-y-3">
              {watchData.news.map((news, idx) => (
                <div key={idx} className="p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-start justify-between">
                    <span className="text-blue-400 text-xs font-medium">{news.source}</span>
                    <span className="text-gray-500 text-xs">{news.time}</span>
                  </div>
                  <p className="text-white text-sm mt-1">{news.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buzz Réseaux Sociaux */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              Buzz Réseaux Sociaux
            </h3>
            <div className="space-y-3">
              {watchData.socialBuzz.map((buzz, idx) => (
                <div key={idx} className="p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 text-xs font-medium">{buzz.platform}</span>
                    <span className="text-yellow-400 text-xs">{buzz.engagement}</span>
                  </div>
                  <p className="text-white text-sm">{buzz.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ==================== DASHBOARD PRINCIPAL ====================
  const Dashboard = () => (
    <div className="p-6 space-y-8">
      <div className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-yellow-500/20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Bienvenue sur SELEZIONE</h1>
            <p className="text-gray-400 mt-2 text-lg">La plateforme IA ultime pour le prêt-à-porter de luxe</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-400">Crédits IA</p>
              <p className="text-white font-medium">{user.credits} disponibles</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xl">
              {user.avatar}
            </div>
          </div>
        </div>
      </div>

      {/* Métriques Rapides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Analyses IA', value: '847', change: '+23%', icon: Brain, color: 'purple' },
          { label: 'Estimations', value: '156', change: '+12%', icon: Calculator, color: 'blue' },
          { label: 'Veille Active', value: '24/7', change: 'Live', icon: Eye, color: 'green' },
          { label: 'Progression', value: '94%', change: '+8 pts', icon: Award, color: 'yellow' }
        ].map((metric, idx) => (
          <div key={idx} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <metric.icon className={`w-8 h-8 text-${metric.color}-400`} />
              <span className={`text-${metric.color}-400 text-sm font-medium`}>{metric.change}</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
              <p className="text-gray-400 text-sm">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vue d'ensemble */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WelcomeAI />
        <MarketWatch />
      </div>
    </div>
  );

  // ==================== MENU SIDEBAR ====================
  const Sidebar = () => {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'ai-assistant', label: 'Assistant IA', icon: Brain },
      { id: 'estimation', label: 'Estimation Prix', icon: Calculator },
      { id: 'margin-calc', label: 'Calcul Marges', icon: Percent },
      { id: 'market-scraper', label: 'Scraper Marché', icon: Eye },
      { id: 'news-generator', label: 'Actu Luxe IA', icon: Newspaper },
      { id: 'product-sheet', label: 'Fiche Produit', icon: FileText },
      { id: 'market-watch', label: 'Veille Marché', icon: TrendingUp },
      { id: 'academy', label: 'Academy', icon: GraduationCap },
      { id: 'settings', label: 'Paramètres', icon: Settings },
      { id: 'profile', label: 'Profil', icon: User }
    ];

    return (
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-black border-r border-yellow-500/20 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b border-yellow-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Diamond className="w-8 h-8 text-yellow-400" />
              <div>
                <h2 className="text-xl font-bold text-white">SELEZIONE</h2>
                <p className="text-yellow-400 text-sm">Luxury Intelligence</p>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          <nav className="p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors mb-2 ${
                  activeView === item.id 
                    ? 'bg-yellow-500 text-black font-medium' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    );
  };

// ==================== NAVIGATION PRINCIPALE ====================
  const TopNav = () => (
    <nav className="bg-black border-b border-yellow-500/20 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <Diamond className="w-8 h-8 text-yellow-400" />
            <div>
              <h1 className="text-xl font-bold text-white">SELEZIONE</h1>
              <p className="text-yellow-400 text-xs">Luxury Intelligence Platform</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-yellow-400">{user.level}</p>
            </div>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-xl">
              {user.avatar}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
                      {module.progress > 0 ? 'Continuer' : 'Commencer'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'marketplace':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Marketplace SELEZIONE</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8 text-center">
              <ShoppingCart className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Site Marchand en Développement</h3>
              <p className="text-gray-400">Notre marketplace de luxe sera bientôt disponible !</p>
            </div>ng':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Plateforme de Revente</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8 text-center">
              <Package className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Plateforme de Vente en Développement</h3>
              <p className="text-gray-400">Votre espace vendeur professionnel arrive bientôt !</p>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Tchat Communauté</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8 text-center">
              <MessageCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Tchat Professionnel</h3>
              <p className="text-gray-400">Échangez avec la communauté SELEZIONE !</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };
   // ==================== BARRE DE NAVIGATION BASSE (si besoin) ====================
  const BottomNav = () => (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-yellow-500/20 px-6 py-3 flex justify-between items-center md:hidden">
      {/* Ajoute ici boutons mobiles si besoin */}
    </nav>
  );

  // ==================== RENDU FINAL ====================
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Overlay sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      <Sidebar />
      <TopNav />
      
      <main className="pb-20">
        {renderMainContent()}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default SelezionePlatform;         
