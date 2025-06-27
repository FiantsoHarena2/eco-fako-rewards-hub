
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Trophy, MessageCircle, Heart, Share2, Award, TrendingUp, Globe } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("leaderboard");

  const leaderboard = [
    { rank: 1, name: "Marie Dupont", points: 15420, badge: "Éco-Champion", avatar: "MD", location: "Paris" },
    { rank: 2, name: "Pierre Martin", points: 14890, badge: "Super Collecteur", avatar: "PM", location: "Lyon" },
    { rank: 3, name: "Sophie Blanc", points: 13650, badge: "Green Hero", avatar: "SB", location: "Marseille" },
    { rank: 4, name: "Thomas Rousseau", points: 12340, badge: "Recycleur Pro", avatar: "TR", location: "Toulouse" },
    { rank: 5, name: "Julie Moreau", points: 11890, badge: "Éco-Warrior", avatar: "JM", location: "Nice" }
  ];

  const posts = [
    {
      id: 1,
      author: "Marie Dupont",
      avatar: "MD",
      time: "il y a 2h",
      content: "Incroyable journée de collecte ! J'ai réussi à collecter 15kg de plastique dans le parc central. La zone était vraiment productive aujourd'hui !",
      likes: 24,
      comments: 8,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      author: "Pierre Martin",
      avatar: "PM",
      time: "il y a 4h",
      content: "Astuce du jour : Les déchets métalliques se trouvent plus facilement près des zones de construction. Pensez à vérifier les chantiers abandonnés !",
      likes: 31,
      comments: 12
    },
    {
      id: 3,
      author: "Sophie Blanc",
      avatar: "SB",
      time: "il y a 6h",
      content: "Qui veut rejoindre notre groupe de collecte demain matin ? On vise la zone commerciale du centre-ville. Plus on est nombreux, plus on collecte !",
      likes: 18,
      comments: 15
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 gradient-eco bg-clip-text text-transparent">Communauté HackaFako</h1>
        <p className="text-gray-600 text-lg">Connectez-vous avec d'autres éco-collecteurs et partagez vos succès</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("leaderboard")}
          className={`pb-4 px-2 font-medium transition-colors ${
            activeTab === "leaderboard" 
              ? "text-green-600 border-b-2 border-green-600" 
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          <Trophy className="inline h-4 w-4 mr-2" />
          Classement
        </button>
        <button
          onClick={() => setActiveTab("feed")}
          className={`pb-4 px-2 font-medium transition-colors ${
            activeTab === "feed" 
              ? "text-green-600 border-b-2 border-green-600" 
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          <MessageCircle className="inline h-4 w-4 mr-2" />
          Fil d'actualité
        </button>
        <button
          onClick={() => setActiveTab("groups")}
          className={`pb-4 px-2 font-medium transition-colors ${
            activeTab === "groups" 
              ? "text-green-600 border-b-2 border-green-600" 
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          <Users className="inline h-4 w-4 mr-2" />
          Groupes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {activeTab === "leaderboard" && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Top Collecteurs du Mois
                  </CardTitle>
                  <CardDescription>Les champions de la collecte écologique</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboard.map((user) => (
                      <div key={user.rank} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-eco rounded-full text-white font-bold">
                          {user.rank}
                        </div>
                        <Avatar>
                          <AvatarFallback className="bg-green-100 text-green-600 font-medium">
                            {user.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.location}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">{user.points.toLocaleString()} pts</div>
                          <Badge variant="outline" className="mt-1">{user.badge}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "feed" && (
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-green-100 text-green-600 font-medium">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{post.author}</span>
                          <span className="text-gray-500 text-sm">•</span>
                          <span className="text-gray-500 text-sm">{post.time}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        {post.image && (
                          <img 
                            src={post.image} 
                            alt="Post image" 
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                          <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                            <Share2 className="h-4 w-4" />
                            Partager
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "groups" && (
            <div className="space-y-4">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle>Groupes de Collecte</CardTitle>
                  <CardDescription>Rejoignez des équipes locales pour maximiser vos gains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Éco-Warriors Paris", members: 45, location: "Paris", specialty: "Plastique & Métal" },
                      { name: "Green Team Lyon", members: 32, location: "Lyon", specialty: "Organique" },
                      { name: "Collecteurs Marseille", members: 28, location: "Marseille", specialty: "Tous types" }
                    ].map((group, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <div className="font-semibold">{group.name}</div>
                          <div className="text-sm text-gray-600">{group.location} • {group.members} membres</div>
                          <div className="text-sm text-green-600">Spécialité: {group.specialty}</div>
                        </div>
                        <Button variant="outline" size="sm">Rejoindre</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats Community */}
          <Card className="gradient-eco text-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">Impact Communautaire</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Collecteurs actifs</span>
                  <span className="font-bold">12,547</span>
                </div>
                <div className="flex justify-between">
                  <span>Kg recyclés ce mois</span>
                  <span className="font-bold">89,432</span>
                </div>
                <div className="flex justify-between">
                  <span>CO₂ économisé</span>
                  <span className="font-bold">156 tonnes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Défis du Mois
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Collecteur Plastique</span>
                    <span className="text-sm text-yellow-600">75%</span>
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">75/100 kg collectés</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Éco-Mentor</span>
                    <span className="text-sm text-green-600">40%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">2/5 nouveaux aidés</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions Rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full gradient-eco text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Publier un succès
              </Button>
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Créer un groupe
              </Button>
              <Button variant="outline" className="w-full">
                <Globe className="mr-2 h-4 w-4" />
                Organiser un événement
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
