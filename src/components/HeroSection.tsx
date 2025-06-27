
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Coins, Users, Globe, Recycle, TrendingUp, Sparkles, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Hero Section */}
      <div className="text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-yellow-400/10 animate-gradient"></div>
        
        <Badge variant="secondary" className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/50 transition-all duration-300 animate-bounce-slow border border-green-200 dark:border-green-700">
          <Sparkles className="h-3 w-3 mr-1" />
          🌱 Nouveau : Gagnez jusqu'à 500€/mois
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight relative">
          Transformez vos{" "}
          <span className="gradient-eco bg-clip-text text-transparent animate-pulse">déchets</span>
          <br />
          en{" "}
          <span className="gradient-gold bg-clip-text text-transparent animate-pulse">revenus</span>
          <div className="absolute -top-4 -right-4 opacity-20">
            <Zap className="h-12 w-12 text-yellow-400 animate-spin-slow" />
          </div>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Rejoignez la révolution écologique ! Collectez, triez et valorisez vos déchets 
          pour créer une économie circulaire tout en générant des revenus.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gradient-eco text-white hover:opacity-90 px-8 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-effect group">
            <Coins className="mr-2 h-5 w-5 group-hover:animate-spin transition-transform" />
            Commencer à gagner
          </Button>
          <Button size="lg" variant="outline" className="border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 px-8 py-3 hover:scale-105 transition-all duration-300 group glass-effect">
            <Globe className="mr-2 h-5 w-5 group-hover:animate-spin transition-transform" />
            Découvrir l'impact
          </Button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1 group-hover:scale-110 transition-all duration-300">12,547</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Collecteurs actifs</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1 group-hover:scale-110 transition-all duration-300">€847K</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Revenus générés</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 group-hover:scale-110 transition-all duration-300">2.3M</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Kg de déchets recyclés</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 group-hover:scale-110 transition-all duration-300">156</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Villes partenaires</div>
          </div>
        </div>
      </div>

      {/* Enhanced How it works */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-eco bg-clip-text text-transparent">Comment ça marche ?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour transformer vos déchets en revenus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-green-100 dark:border-green-800/30 glass-effect group">
            <CardContent className="pt-8">
              <div className="gradient-eco p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow-effect">
                <Recycle className="h-8 w-8 text-white group-hover:animate-spin" />
              </div>
              <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">1. Collectez</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ramassez les déchets valorisables dans votre quartier ou lors de vos déplacements
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-blue-100 dark:border-blue-800/30 glass-effect group">
            <CardContent className="pt-8">
              <div className="bg-blue-500 dark:bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow-effect">
                <Users className="h-8 w-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">2. Triez</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Catégorisez vos déchets selon notre système de tri intelligent
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-yellow-100 dark:border-yellow-800/30 glass-effect group">
            <CardContent className="pt-8">
              <div className="bg-yellow-500 dark:bg-yellow-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow-effect">
                <TrendingUp className="h-8 w-8 text-white group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">3. Valorisez</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nos partenaires transforment vos déchets en matières premières précieuses
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-yellow-100 dark:border-yellow-800/30 glass-effect group">
            <CardContent className="pt-8">
              <div className="gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow-effect">
                <Coins className="h-8 w-8 text-white group-hover:animate-spin" />
              </div>
              <h3 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">4. Gagnez</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recevez vos gains directement sur votre compte ou échangez contre des récompenses
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
