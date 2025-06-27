
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Leaf, Smartphone, MapPin, Coins, Users, Award, ArrowRight } from "lucide-react";

const GetStarted = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    {
      id: 1,
      title: "Créer votre profil",
      description: "Complétez vos informations pour personnaliser votre expérience",
      icon: Users,
      action: "Compléter le profil",
      points: 100
    },
    {
      id: 2,
      title: "Télécharger l'application mobile",
      description: "Accédez à toutes les fonctionnalités où que vous soyez",
      icon: Smartphone,
      action: "Télécharger l'app",
      points: 50
    },
    {
      id: 3,
      title: "Localiser votre première zone",
      description: "Trouvez les zones de collecte les plus proches de chez vous",
      icon: MapPin,
      action: "Explorer les zones",
      points: 75
    },
    {
      id: 4,
      title: "Réaliser votre première collecte",
      description: "Commencez à collecter et à gagner vos premiers points",
      icon: Leaf,
      action: "Démarrer la collecte",
      points: 200
    }
  ];

  const wasteTypes = [
    {
      name: "Plastique",
      icon: "🔵",
      difficulty: "Facile",
      reward: "€2.50/kg",
      tips: "Bouteilles, emballages, sacs plastiques"
    },
    {
      name: "Métal",
      icon: "⚪",
      difficulty: "Moyen",
      reward: "€3.20/kg",
      tips: "Canettes, boîtes de conserve, ferraille"
    },
    {
      name: "Carton",
      icon: "🟤",
      difficulty: "Facile",
      reward: "€1.80/kg",
      tips: "Emballages, cartons d'expédition"
    },
    {
      name: "Organique",
      icon: "🟢",
      difficulty: "Expert",
      reward: "€4.00/kg",
      tips: "Compost, déchets verts, restes alimentaires"
    }
  ];

  const toggleStep = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const completionPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 gradient-eco bg-clip-text text-transparent">
          Commencez votre voyage écologique
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Suivez ces étapes simples pour commencer à transformer vos déchets en revenus
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-green-600">{Math.round(completionPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="gradient-eco h-3 rounded-full transition-all duration-500" 
              style={{width: `${completionPercentage}%`}}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Steps */}
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Étapes de démarrage
              </CardTitle>
              <CardDescription>Complétez ces étapes pour optimiser votre expérience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {steps.map((step) => {
                  const isCompleted = completedSteps.includes(step.id);
                  const StepIcon = step.icon;
                  
                  return (
                    <div key={step.id} className={`p-6 rounded-lg border-2 transition-all ${
                      isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200 hover:border-green-300'
                    }`}>
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => toggleStep(step.id)}
                          className="mt-1"
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          ) : (
                            <Circle className="h-6 w-6 text-gray-400" />
                          )}
                        </button>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg ${isCompleted ? 'bg-green-100' : 'bg-white'}`}>
                              <StepIcon className={`h-5 w-5 ${isCompleted ? 'text-green-600' : 'text-gray-600'}`} />
                            </div>
                            <h3 className={`font-semibold ${isCompleted ? 'text-green-800' : 'text-gray-800'}`}>
                              {step.title}
                            </h3>
                            <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                              +{step.points} pts
                            </Badge>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          
                          <Button 
                            className={isCompleted ? "bg-green-600 hover:bg-green-700" : "gradient-eco"} 
                            disabled={isCompleted}
                          >
                            {isCompleted ? "Terminé" : step.action}
                            {!isCompleted && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Waste Types Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                Guide des types de déchets
              </CardTitle>
              <CardDescription>Apprenez à identifier et collecter différents types de déchets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wasteTypes.map((type, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{type.icon}</span>
                      <div>
                        <h4 className="font-semibold">{type.name}</h4>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            type.difficulty === 'Facile' ? 'text-green-600 border-green-600' :
                            type.difficulty === 'Moyen' ? 'text-yellow-600 border-yellow-600' :
                            'text-red-600 border-red-600'
                          }`}
                        >
                          {type.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="font-bold text-green-600 text-lg">{type.reward}</span>
                    </div>
                    <p className="text-sm text-gray-600">{type.tips}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="gradient-eco text-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Vos récompenses potentielles
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Étapes complétées</span>
                  <span className="font-bold">{completedSteps.length}/{steps.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Points gagnés</span>
                  <span className="font-bold">
                    {steps.filter(step => completedSteps.includes(step.id)).reduce((sum, step) => sum + step.points, 0)} pts
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Bonus de bienvenue</span>
                  <span className="font-bold">€50</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                Conseils pour débuter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-800 mb-1">💡 Conseil du jour</div>
                  <div className="text-sm text-green-700">
                    Commencez par collecter près de chez vous pour économiser du temps et des frais de transport.
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Portez des gants pour votre sécurité</div>
                  <div>• Utilisez des sacs résistants</div>
                  <div>• Vérifiez la météo avant de sortir</div>
                  <div>• Rejoignez des groupes locaux</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Besoin d'aide ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Rejoindre la communauté
              </Button>
              <Button variant="outline" className="w-full">
                <Smartphone className="mr-2 h-4 w-4" />
                Guide vidéo
              </Button>
              <Button variant="outline" className="w-full">
                <Coins className="mr-2 h-4 w-4" />
                FAQ & Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
