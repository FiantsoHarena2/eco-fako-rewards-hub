
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Coins, Users, Globe, Recycle, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
          🌱 Nouveau : Gagnez jusqu'à 500€/mois
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transformez vos{" "}
          <span className="gradient-eco bg-clip-text text-transparent">déchets</span>
          <br />
          en{" "}
          <span className="gradient-gold bg-clip-text text-transparent">revenus</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Rejoignez la révolution écologique ! Collectez, triez et valorisez vos déchets 
          pour créer une économie circulaire tout en générant des revenus.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gradient-eco text-white hover:opacity-90 px-8 py-3">
            <Coins className="mr-2 h-5 w-5" />
            Commencer à gagner
          </Button>
          <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3">
            <Globe className="mr-2 h-5 w-5" />
            Découvrir l'impact
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">12,547</div>
            <div className="text-sm text-gray-600">Collecteurs actifs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-1">€847K</div>
            <div className="text-sm text-gray-600">Revenus générés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">2.3M</div>
            <div className="text-sm text-gray-600">Kg de déchets recyclés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">156</div>
            <div className="text-sm text-gray-600">Villes partenaires</div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour transformer vos déchets en revenus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100">
            <CardContent className="pt-8">
              <div className="gradient-eco p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">1. Collectez</h3>
              <p className="text-sm text-gray-600">
                Ramassez les déchets valorisables dans votre quartier ou lors de vos déplacements
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-blue-100">
            <CardContent className="pt-8">
              <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">2. Triez</h3>
              <p className="text-sm text-gray-600">
                Catégorisez vos déchets selon notre système de tri intelligent
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-yellow-100">
            <CardContent className="pt-8">
              <div className="bg-yellow-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">3. Valorisez</h3>
              <p className="text-sm text-gray-600">
                Nos partenaires transforment vos déchets en matières premières précieuses
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-yellow-100">
            <CardContent className="pt-8">
              <div className="gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Coins className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">4. Gagnez</h3>
              <p className="text-sm text-gray-600">
                Recevez vos gains directement sur votre compte ou échangez contre des récompenses
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
