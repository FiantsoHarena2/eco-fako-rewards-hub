
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, PlayCircle, Leaf, MapPin, Award, Users, Star } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { UserProfile } from "@/components/UserProfile";
import { AuthModal } from "@/components/AuthModal";

const GetStarted = () => {
  const { isAuthenticated } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      title: "Créer votre compte",
      description: "Inscrivez-vous gratuitement pour commencer votre aventure écologique",
      icon: Users,
      reward: "50 points de bienvenue"
    },
    {
      id: 2,
      title: "Découvrir les types de déchets",
      description: "Apprenez quels déchets vous pouvez collecter et leur valeur",
      icon: Leaf,
      reward: "Badge Apprenti Écolo"
    },
    {
      id: 3,
      title: "Localiser les points de collecte",
      description: "Trouvez les centres de tri près de chez vous",
      icon: MapPin,
      reward: "Accès carte interactive"
    },
    {
      id: 4,
      title: "Faire votre première collecte",
      description: "Collectez et déposez vos premiers déchets",
      icon: Award,
      reward: "100 points bonus"
    }
  ];

  const wasteTypes = [
    { name: "Plastique", value: "10-15 pts/kg", color: "bg-blue-500", description: "Bouteilles, sacs, emballages" },
    { name: "Verre", value: "5-8 pts/kg", color: "bg-green-500", description: "Bouteilles, bocaux, flacons" },
    { name: "Papier", value: "3-5 pts/kg", color: "bg-yellow-500", description: "Journaux, cartons, magazines" },
    { name: "Métal", value: "15-25 pts/kg", color: "bg-gray-500", description: "Canettes, boîtes de conserve" },
    { name: "Textile", value: "8-12 pts/kg", color: "bg-purple-500", description: "Vêtements, chaussures, tissus" },
    { name: "Électronique", value: "20-50 pts/unité", color: "bg-red-500", description: "Téléphones, ordinateurs" }
  ];

  const completeStep = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const progress = (completedSteps.length / steps.length) * 100;

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
              <h1 className="text-xl font-bold gradient-eco bg-clip-text text-transparent">Commencer</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {isAuthenticated ? (
                <UserProfile />
              ) : (
                <Button 
                  onClick={() => setShowAuth(true)}
                  className="gradient-eco text-white"
                >
                  S'inscrire
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenue sur <span className="gradient-eco bg-clip-text text-transparent">HackaFako</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Commencez votre aventure écologique en quelques étapes simples et transformez vos déchets en revenus dès aujourd'hui !
          </p>
          
          {/* Progress */}
          <Card className="max-w-md mx-auto mb-8 glass-effect">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progression</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{completedSteps.length}/{steps.length}</span>
              </div>
              <Progress value={progress} className="h-2" />
              {progress === 100 && (
                <Badge className="mt-2 gradient-eco text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Félicitations ! Vous êtes prêt !
                </Badge>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Guide de démarrage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              const Icon = step.icon;
              
              return (
                <Card key={step.id} className={`transition-all duration-300 hover:shadow-lg ${
                  isCompleted ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'glass-effect'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-full ${
                          isCompleted ? 'bg-green-500' : 'gradient-eco'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="h-6 w-6 text-white" />
                          ) : (
                            <Icon className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg">Étape {step.id}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {step.reward}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                    
                    {step.id === 1 && !isAuthenticated && (
                      <Button 
                        onClick={() => {
                          setShowAuth(true);
                          completeStep(step.id);
                        }}
                        className="w-full gradient-eco text-white"
                      >
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Créer mon compte
                      </Button>
                    )}
                    
                    {step.id === 1 && isAuthenticated && (
                      <Button 
                        onClick={() => completeStep(step.id)}
                        variant="outline"
                        className="w-full border-green-500 text-green-600"
                        disabled={isCompleted}
                      >
                        {isCompleted ? 'Terminé ✓' : 'Marquer comme terminé'}
                      </Button>
                    )}
                    
                    {step.id !== 1 && (
                      <Button 
                        onClick={() => completeStep(step.id)}
                        variant={isCompleted ? "outline" : "default"}
                        className={`w-full ${
                          isCompleted 
                            ? 'border-green-500 text-green-600' 
                            : 'gradient-eco text-white'
                        }`}
                        disabled={isCompleted}
                      >
                        <PlayCircle className="h-4 w-4 mr-2" />
                        {isCompleted ? 'Terminé ✓' : 'Commencer'}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Waste Types Guide */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Types de déchets valorisables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wasteTypes.map((waste, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-4 h-4 rounded-full ${waste.color}`}></div>
                    <h3 className="font-semibold">{waste.name}</h3>
                    <Badge variant="secondary" className="ml-auto">
                      {waste.value}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{waste.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="glass-effect border-green-100 dark:border-green-800/30">
          <CardContent className="pt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Rejoignez notre communauté de 12,000+ collecteurs et commencez à générer des revenus dès aujourd'hui !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isAuthenticated ? (
                <Button 
                  onClick={() => setShowAuth(true)}
                  size="lg" 
                  className="gradient-eco text-white px-8"
                >
                  S'inscrire gratuitement
                </Button>
              ) : (
                <Link to="/">
                  <Button size="lg" className="gradient-eco text-white px-8">
                    Accéder au tableau de bord
                  </Button>
                </Link>
              )}
              <Link to="/community">
                <Button size="lg" variant="outline" className="border-green-500 text-green-600 dark:text-green-400 px-8">
                  Découvrir la communauté
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  );
};

export default GetStarted;
