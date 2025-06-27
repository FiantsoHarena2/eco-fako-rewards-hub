
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins, Gift, Star, ShoppingBag, Zap, Award } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const RewardsShop = () => {
  const { user } = useAuth();
  const userPoints = user?.points || 0;

  const rewards = {
    money: [
      { id: 1, name: "Retrait PayPal", points: 500, value: "€5.00", icon: "💰", available: true },
      { id: 2, name: "Virement bancaire", points: 1000, value: "€10.00", icon: "🏦", available: true },
      { id: 3, name: "Carte cadeau Amazon", points: 1500, value: "€15.00", icon: "🛒", available: false },
      { id: 4, name: "Crypto-monnaie", points: 2000, value: "€20.00", icon: "₿", available: false },
    ],
    products: [
      { id: 5, name: "Sac de collecte écologique", points: 300, value: "Gratuit", icon: "👜", available: true },
      { id: 6, name: "Gants de protection", points: 150, value: "Gratuit", icon: "🧤", available: true },
      { id: 7, name: "T-shirt HackaFako", points: 800, value: "Gratuit", icon: "👕", available: true },
      { id: 8, name: "Bouteille réutilisable", points: 600, value: "Gratuit", icon: "🍾", available: true },
    ],
    experiences: [
      { id: 9, name: "Atelier recyclage", points: 1200, value: "Gratuit", icon: "🎓", available: true },
      { id: 10, name: "Visite centre de tri", points: 800, value: "Gratuit", icon: "🏭", available: true },
      { id: 11, name: "Conférence écologie", points: 400, value: "Gratuit", icon: "🎤", available: true },
      { id: 12, name: "Plantation d'arbres", points: 1000, value: "Gratuit", icon: "🌳", available: true },
    ]
  };

  const RewardCard = ({ reward, category }) => {
    const canAfford = userPoints >= reward.points;
    
    return (
      <Card className={`transition-all duration-300 hover:shadow-lg ${
        canAfford ? 'hover:-translate-y-2 border-green-200' : 'opacity-60 border-gray-200'
      }`}>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-4xl mb-3">{reward.icon}</div>
            <h3 className="font-semibold mb-2">{reward.name}</h3>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-bold text-lg">{reward.points} pts</span>
            </div>
            <Badge variant="secondary" className="mb-4">
              {reward.value}
            </Badge>
            <Button 
              className={`w-full ${
                canAfford 
                  ? 'gradient-eco text-white hover:opacity-90' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!canAfford}
            >
              {canAfford ? 'Échanger' : 'Points insuffisants'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Boutique de Récompenses</h1>
        <p className="text-gray-600">Échangez vos points contre des récompenses exclusives</p>
      </div>

      {/* User Points Display */}
      <Card className="mb-8 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="gradient-gold p-3 rounded-full">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">{userPoints} Points</div>
                <div className="text-sm text-gray-600">Solde disponible</div>
              </div>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-800 mb-2">
                Niveau {user?.level || 1} - {user?.level >= 4 ? 'Éco-Héros' : 'Apprenti'}
              </Badge>
              <div className="text-sm text-gray-600">Bonus de fidélité: +10%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rewards Tabs */}
      <Tabs defaultValue="money" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="money" className="flex items-center gap-2">
            <Coins className="h-4 w-4" />
            Argent
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Produits
          </TabsTrigger>
          <TabsTrigger value="experiences" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Expériences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="money">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Convertir en Argent</h2>
            <p className="text-gray-600">Transformez vos points en argent réel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.money.map((reward) => (
              <RewardCard key={reward.id} reward={reward} category="money" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Produits Écologiques</h2>
            <p className="text-gray-600">Équipez-vous avec nos produits durables</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.products.map((reward) => (
              <RewardCard key={reward.id} reward={reward} category="products" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="experiences">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Expériences Exclusives</h2>
            <p className="text-gray-600">Participez à des événements écologiques</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.experiences.map((reward) => (
              <RewardCard key={reward.id} reward={reward} category="experiences" />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Special Offers */}
      <Card className="mt-12 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" />
            Offres Spéciales
          </CardTitle>
          <CardDescription>
            Profitez de ces offres limitées dans le temps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <div className="font-semibold">Double Points Weekend</div>
                  <div className="text-sm text-gray-600">Jusqu'à dimanche minuit</div>
                </div>
              </div>
              <Badge className="bg-purple-100 text-purple-800">Actif maintenant</Badge>
            </div>
            
            <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🎁</div>
                <div>
                  <div className="font-semibold">Bonus Parrainage</div>
                  <div className="text-sm text-gray-600">+500 points par ami invité</div>
                </div>
              </div>
              <Badge className="bg-orange-100 text-orange-800">Permanent</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
