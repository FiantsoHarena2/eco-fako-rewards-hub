
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  MapPin, 
  Award,
  TrendingUp,
  Home as HomeIcon
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { CollectionMap } from "@/components/CollectionMap";
import { RewardsShop } from "@/components/RewardsShop";
import { CommunityStats } from "@/components/CommunityStats";

const Index = () => {
  const [activeTab, setActiveTab] = useState("accueil");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="gradient-eco p-2 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-eco bg-clip-text text-transparent">
                HackaFako
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Comment ça marche</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Communauté</a>
              <Button className="gradient-eco text-white hover:opacity-90">
                Commencer
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto mt-6 grid-cols-4 bg-white shadow-lg">
          <TabsTrigger value="accueil" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <HomeIcon className="h-4 w-4 mr-2" />
            Accueil
          </TabsTrigger>
          <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <TrendingUp className="h-4 w-4 mr-2" />
            Tableau
          </TabsTrigger>
          <TabsTrigger value="collecte" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <MapPin className="h-4 w-4 mr-2" />
            Collecte
          </TabsTrigger>
          <TabsTrigger value="recompenses" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <Award className="h-4 w-4 mr-2" />
            Récompenses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accueil" className="mt-8">
          <HeroSection />
          <CommunityStats />
        </TabsContent>

        <TabsContent value="dashboard" className="mt-8">
          <Dashboard />
        </TabsContent>

        <TabsContent value="collecte" className="mt-8">
          <CollectionMap />
        </TabsContent>

        <TabsContent value="recompenses" className="mt-8">
          <RewardsShop />
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="gradient-eco p-2 rounded-xl">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">HackaFako</span>
              </div>
              <p className="text-gray-400">
                Transformez vos déchets en revenus tout en protégeant l'environnement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Plateforme</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Comment ça marche</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Types de déchets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Communauté</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Statistiques</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Classements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HackaFako. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
