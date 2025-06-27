
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Globe, TrendingUp, Award, Leaf, Target } from "lucide-react";

export const CommunityStats = () => {
  const communityData = {
    totalUsers: 12547,
    monthlyGrowth: 18,
    totalWasteCollected: 2340000,
    co2Saved: 1870,
    citiesActive: 156,
    partnersCount: 89
  };

  const topCollectors = [
    { rank: 1, name: "Marie L.", city: "Paris", points: 15420, avatar: "👩" },
    { rank: 2, name: "Ahmed K.", city: "Lyon", points: 14350, avatar: "👨" },
    { rank: 3, name: "Sophie M.", city: "Marseille", points: 13890, avatar: "👩" },
    { rank: 4, name: "Lucas R.", city: "Toulouse", points: 12760, avatar: "👨" },
    { rank: 5, name: "Emma D.", city: "Nantes", points: 11540, avatar: "👩" },
  ];

  const impactGoals = [
    { name: "Objectif CO₂ 2024", current: 1870, target: 2500, unit: "tonnes", progress: 75 },
    { name: "Déchets collectés", current: 2.34, target: 3, unit: "millions kg", progress: 78 },
    { name: "Nouvelles villes", current: 156, target: 200, unit: "villes", progress: 78 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Impact Communautaire</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ensemble, nous créons un impact positif sur l'environnement et construisons un avenir plus durable
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        <Card className="text-center border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {communityData.totalUsers.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Collecteurs actifs</div>
            <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800">
              +{communityData.monthlyGrowth}% ce mois
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardContent className="pt-6">
            <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600 mb-1">
              {(communityData.totalWasteCollected / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-gray-600">Kg recyclés</div>
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
              Cette année
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center border-purple-200 bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="pt-6">
            <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {communityData.co2Saved}
            </div>
            <div className="text-xs text-gray-600">Tonnes CO₂ évitées</div>
            <Badge variant="secondary" className="mt-2 bg-purple-100 text-purple-800">
              Impact direct
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center border-orange-200 bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {communityData.citiesActive}
            </div>
            <div className="text-xs text-gray-600">Villes partenaires</div>
            <Badge variant="secondary" className="mt-2 bg-orange-100 text-orange-800">
              6 continents
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
          <CardContent className="pt-6">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {communityData.partnersCount}
            </div>
            <div className="text-xs text-gray-600">Entreprises partenaires</div>
            <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-800">
              En croissance
            </Badge>
          </CardContent>
        </Card>

        <Card className="text-center border-red-200 bg-gradient-to-br from-red-50 to-white">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-600 mb-1">
              €847K
            </div>
            <div className="text-xs text-gray-600">Revenus générés</div>
            <Badge variant="secondary" className="mt-2 bg-red-100 text-red-800">
              Cumulé
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Collectors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Top Collecteurs du Mois
            </CardTitle>
            <CardDescription>
              Les héros de l'environnement qui font la différence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCollectors.map((collector) => (
                <div key={collector.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full text-sm font-bold text-yellow-800">
                      {collector.rank}
                    </div>
                    <div className="text-2xl">{collector.avatar}</div>
                    <div>
                      <div className="font-medium">{collector.name}</div>
                      <div className="text-sm text-gray-600">{collector.city}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">{collector.points.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">points</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Objectifs d'Impact 2024
            </CardTitle>
            <CardDescription>
              Notre progression vers un monde plus propre
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {impactGoals.map((goal, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">{goal.name}</div>
                    <div className="text-sm text-gray-600">
                      {goal.current} / {goal.target} {goal.unit}
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="text-right mt-1">
                    <Badge variant="outline" className="text-xs">
                      {goal.progress}% atteint
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">78%</div>
                <div className="text-sm text-green-700">Progression moyenne des objectifs</div>
                <div className="text-xs text-gray-600 mt-1">Nous sommes en avance sur le planning !</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
