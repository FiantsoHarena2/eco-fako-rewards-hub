
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  MapPin, 
  Award,
  TrendingUp,
  Home as HomeIcon,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { CollectionMap } from "@/components/CollectionMap";
import { RewardsShop } from "@/components/RewardsShop";
import { CommunityStats } from "@/components/CommunityStats";

const Index = () => {
  const [activeTab, setActiveTab] = useState("accueil");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 transition-all duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-green-100 dark:border-green-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="gradient-eco p-2 rounded-xl shadow-lg glow-effect group-hover:scale-110 transition-all duration-300 animate-pulse-slow">
                <Leaf className="h-6 w-6 text-white animate-float" />
              </div>
              <span className="text-2xl font-bold gradient-eco bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                HackaFako
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium relative group">
                Accueil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium relative group">
                Comment ça marche
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link to="/community" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium relative group">
                Communauté
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <ThemeToggle />
              <Link to="/get-started">
                <Button className="gradient-eco text-white hover:opacity-90 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 glow-effect">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto mt-6 grid-cols-4 glass-effect shadow-lg rounded-xl border border-white/20 dark:border-gray-700/50">
          <TabsTrigger 
            value="accueil" 
            className="data-[state=active]:gradient-eco data-[state=active]:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <HomeIcon className="h-4 w-4 mr-2" />
            Accueil
          </TabsTrigger>
          <TabsTrigger 
            value="dashboard" 
            className="data-[state=active]:gradient-eco data-[state=active]:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Tableau
          </TabsTrigger>
          <TabsTrigger 
            value="collecte" 
            className="data-[state=active]:gradient-eco data-[state=active]:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Collecte
          </TabsTrigger>
          <TabsTrigger 
            value="recompenses" 
            className="data-[state=active]:gradient-eco data-[state=active]:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <Award className="h-4 w-4 mr-2" />
            Récompenses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accueil" className="mt-8 animate-fade-in">
          <HeroSection />
          <CommunityStats />
        </TabsContent>

        <TabsContent value="dashboard" className="mt-8 animate-fade-in">
          <Dashboard />
        </TabsContent>

        <TabsContent value="collecte" className="mt-8 animate-fade-in">
          <CollectionMap />
        </TabsContent>

        <TabsContent value="recompenses" className="mt-8 animate-fade-in">
          <RewardsShop />
        </TabsContent>
      </Tabs>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="gradient-eco p-2 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">HackaFako</span>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Transformez vos déchets en revenus tout en protégeant l'environnement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-green-400">Plateforme</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Comment ça marche</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Types de déchets</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Partenaires</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400">Communauté</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/community" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Communauté</Link></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Classements</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-yellow-400">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300">À propos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className="hover:text-white transition-colors">&copy; 2024 HackaFako. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
