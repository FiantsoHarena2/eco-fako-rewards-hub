
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, TrendingUp, Leaf, Target, Award, Calendar } from "lucide-react";

export const Dashboard = () => {
  const userStats = {
    totalEarnings: 347.50,
    monthlyEarnings: 89.20,
    wasteCollected: 245,
    ecoPoints: 1250,
    level: 4,
    nextLevelProgress: 68,
    streak: 12
  };

  const recentActivities = [
    { date: "Aujourd'hui", action: "Collecte plastique", amount: "+€12.50", points: "+45 pts" },
    { date: "Hier", action: "Collecte métal", amount: "+€8.30", points: "+30 pts" },
    { date: "2 jours", action: "Collecte organique", amount: "+€15.20", points: "+55 pts" },
    { date: "3 jours", action: "Bonus communauté", amount: "+€25.00", points: "+100 pts" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tableau de Bord</h1>
        <p className="text-gray-600">Suivez vos performances et vos gains</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gains Totaux</CardTitle>
            <Coins className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">€{userStats.totalEarnings}</div>
            <p className="text-xs text-green-600 mt-1">+€{userStats.monthlyEarnings} ce mois</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Déchets Collectés</CardTitle>
            <Leaf className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{userStats.wasteCollected} kg</div>
            <p className="text-xs text-blue-600 mt-1">+23 kg cette semaine</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Éco-Points</CardTitle>
            <Award className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{userStats.ecoPoints}</div>
            <p className="text-xs text-yellow-600 mt-1">Niveau {userStats.level} Éco-Héros</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Série Active</CardTitle>
            <Calendar className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{userStats.streak} jours</div>
            <p className="text-xs text-purple-600 mt-1">Record personnel !</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Progression vers le Niveau {userStats.level + 1}
              </CardTitle>
              <CardDescription>
                Encore {1000 - (userStats.nextLevelProgress * 10)} points pour débloquer de nouveaux avantages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={userStats.nextLevelProgress} className="mb-4" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{userStats.nextLevelProgress}%</span>
                <span>Niveau {userStats.level + 1}</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Activité Récente</CardTitle>
              <CardDescription>Vos dernières collectes et gains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{activity.action}</div>
                      <div className="text-sm text-gray-600">{activity.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">{activity.amount}</div>
                      <div className="text-sm text-yellow-600">{activity.points}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-600" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    🌱 Éco-Débutant
                  </Badge>
                  <span className="text-sm text-gray-600">Débloqué</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    ♻️ Recycleur Pro
                  </Badge>
                  <span className="text-sm text-gray-600">Débloqué</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    💰 Premiers Gains
                  </Badge>
                  <span className="text-sm text-gray-600">Débloqué</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-gray-300 text-gray-400">
                    🏆 Éco-Champion
                  </Badge>
                  <span className="text-sm text-gray-400">Verrouillé</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 gradient-eco text-white">
                Voir tous les achievements
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Actions Rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Coins className="mr-2 h-4 w-4" />
                Retirer mes gains
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Award className="mr-2 h-4 w-4" />
                Échanger mes points
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="mr-2 h-4 w-4" />
                Voir les statistiques
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
