
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Users, TrendingUp, MessageCircle, Heart, Share2, Star } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { UserProfile } from "@/components/UserProfile";
import { AuthModal } from "@/components/AuthModal";
import { ProtectedAction } from "@/components/ProtectedAction";
import { useState } from "react";

const Community = () => {
  const { isAuthenticated } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  const leaderboard = [
    { rank: 1, name: "Marie Dupont", points: 15420, level: 8, avatar: "", wasteCollected: "2.3t" },
    { rank: 2, name: "Jean Martin", points: 12150, level: 7, avatar: "", wasteCollected: "1.8t" },
    { rank: 3, name: "Sophie Bernard", points: 9870, level: 6, avatar: "", wasteCollected: "1.5t" },
    { rank: 4, name: "Pierre Moreau", points: 8420, level: 6, avatar: "", wasteCollected: "1.2t" },
    { rank: 5, name: "Anne Leroy", points: 7650, level: 5, avatar: "", wasteCollected: "1.1t" }
  ];

  const activities = [
    {
      id: 1,
      user: "Marie Dupont",
      action: "a collecté 15kg de plastique",
      time: "il y a 2h",
      points: 150,
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      user: "Jean Martin",
      action: "a atteint le niveau 7",
      time: "il y a 4h",
      points: 0,
      likes: 8,
      comments: 1
    },
    {
      id: 3,
      user: "Sophie Bernard",
      action: "a échangé 500 points contre une récompense",
      time: "il y a 6h",
      points: -500,
      likes: 15,
      comments: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 transition-all duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-green-100 dark:border-green-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour
              </Link>
              <h1 className="text-xl font-bold gradient-eco bg-clip-text text-transparent">Communauté</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {isAuthenticated ? (
                <UserProfile />
              ) : (
                <Button 
                  onClick={() => setShowAuth(true)}
                  variant="outline"
                  className="border-green-500 dark:border-green-400 text-green-600 dark:text-green-400"
                >
                  Se connecter
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-effect border-green-100 dark:border-green-800/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="gradient-eco p-3 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">12,547</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Membres actifs</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-blue-100 dark:border-blue-800/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2.3M kg</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Déchets collectés</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-yellow-100 dark:border-yellow-800/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="gradient-gold p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">€847K</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Revenus générés</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Classement
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Activité
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Top Collecteurs
                </CardTitle>
                <CardDescription>
                  Les membres les plus actifs de notre communauté
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProtectedAction
                  fallback={
                    <div className="text-center py-8">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Connectez-vous pour voir le classement complet
                      </p>
                      <Button onClick={() => setShowAuth(true)} className="gradient-eco text-white">
                        Se connecter
                      </Button>
                    </div>
                  }
                >
                  <div className="space-y-4">
                    {leaderboard.map((user) => (
                      <div key={user.rank} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/30 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            user.rank === 1 ? 'bg-yellow-500 text-white' :
                            user.rank === 2 ? 'bg-gray-400 text-white' :
                            user.rank === 3 ? 'bg-amber-600 text-white' :
                            'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          }`}>
                            {user.rank}
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback className="gradient-eco text-white">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Niveau {user.level} • {user.wasteCollected} collectés
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-bold">{user.points.toLocaleString()}</span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">points</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ProtectedAction>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-500" />
                  Activité de la Communauté
                </CardTitle>
                <CardDescription>
                  Les dernières actions des membres
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProtectedAction
                  fallback={
                    <div className="text-center py-8">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Connectez-vous pour voir l'activité de la communauté
                      </p>
                      <Button onClick={() => setShowAuth(true)} className="gradient-eco text-white">
                        Se connecter
                      </Button>
                    </div>
                  }
                >
                  <div className="space-y-6">
                    {activities.map((activity) => (
                      <div key={activity.id} className="border-l-2 border-green-200 dark:border-green-800 pl-4 pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="gradient-eco text-white text-xs">
                                {activity.user.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm">
                                <span className="font-semibold">{activity.user}</span>
                                <span className="text-gray-600 dark:text-gray-400"> {activity.action}</span>
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-500">{activity.time}</div>
                            </div>
                          </div>
                          {activity.points !== 0 && (
                            <Badge variant={activity.points > 0 ? "default" : "secondary"} className="ml-2">
                              {activity.points > 0 ? '+' : ''}{activity.points} pts
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-3 ml-11">
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600 dark:text-gray-400">
                            <Heart className="h-4 w-4 mr-1" />
                            {activity.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600 dark:text-gray-400">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {activity.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600 dark:text-gray-400">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ProtectedAction>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  );
};

export default Community;
