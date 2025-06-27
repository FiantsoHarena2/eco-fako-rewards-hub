
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Coins, Leaf, Users } from "lucide-react";

export const CollectionMap = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const collectionZones = [
    {
      id: 1,
      name: "Centre-ville",
      distance: "0.8 km",
      reward: "€2.50/kg",
      type: "Plastique",
      demand: "Forte",
      collectors: 12,
      estimated: "45 min"
    },
    {
      id: 2,
      name: "Quartier résidentiel",
      distance: "1.2 km",
      reward: "€3.20/kg",
      type: "Métal",
      demand: "Moyenne",
      collectors: 8,
      estimated: "30 min"
    },
    {
      id: 3,
      name: "Zone commerciale",
      distance: "2.1 km",
      reward: "€1.80/kg",
      type: "Carton",
      demand: "Faible",
      collectors: 15,
      estimated: "60 min"
    },
    {
      id: 4,
      name: "Parc municipal",
      distance: "1.5 km",
      reward: "€4.00/kg",
      type: "Organique",
      demand: "Très forte",
      collectors: 5,
      estimated: "35 min"
    }
  ];

  const wasteTypes = [
    { name: "Plastique", color: "bg-blue-500", price: "€2.50/kg", icon: "🔵" },
    { name: "Métal", color: "bg-gray-500", price: "€3.20/kg", icon: "⚪" },
    { name: "Carton", color: "bg-yellow-500", price: "€1.80/kg", icon: "🟡" },
    { name: "Organique", color: "bg-green-500", price: "€4.00/kg", icon: "🟢" },
    { name: "Verre", color: "bg-emerald-500", price: "€2.10/kg", icon: "🟢" },
  ];

  const getDemandColor = (demand) => {
    switch (demand) {
      case "Très forte": return "bg-red-100 text-red-800";
      case "Forte": return "bg-orange-100 text-orange-800";
      case "Moyenne": return "bg-yellow-100 text-yellow-800";
      case "Faible": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-eco bg-clip-text text-transparent">Zones de Collecte</h1>
        <p className="text-gray-600">Trouvez les meilleures opportunités près de vous</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <Card className="h-96 mb-6">
            <CardContent className="h-full p-0">
              <div className="h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simulated map markers */}
                <div className="absolute inset-0">
                  {collectionZones.map((zone, index) => (
                    <div
                      key={zone.id}
                      className={`absolute animate-pulse cursor-pointer transition-transform hover:scale-110 ${
                        index === 0 ? 'top-1/4 left-1/3' :
                        index === 1 ? 'top-1/2 right-1/4' :
                        index === 2 ? 'bottom-1/4 left-1/4' :
                        'top-1/3 right-1/3'
                      }`}
                      onClick={() => setSelectedZone(zone)}
                    >
                      <div className="relative">
                        <MapPin className="h-8 w-8 text-green-600 drop-shadow-lg" />
                        <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                          {zone.reward.match(/\d+\.\d+/)[0]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center z-10">
                  <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4 animate-float" />
                  <p className="text-gray-600 font-medium">Cliquez sur les marqueurs pour voir les détails</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Zone Details */}
          {selectedZone && (
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  {selectedZone.name}
                </CardTitle>
                <CardDescription>
                  Zone de collecte sélectionnée - {selectedZone.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedZone.reward}</div>
                    <div className="text-sm text-gray-600">Récompense</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedZone.distance}</div>
                    <div className="text-sm text-gray-600">Distance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{selectedZone.collectors}</div>
                    <div className="text-sm text-gray-600">Collecteurs actifs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{selectedZone.estimated}</div>
                    <div className="text-sm text-gray-600">Temps estimé</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <Badge className={getDemandColor(selectedZone.demand)}>
                    Demande: {selectedZone.demand}
                  </Badge>
                  <Badge variant="outline">
                    Type: {selectedZone.type}
                  </Badge>
                </div>

                <div className="flex gap-3">
                  <Button className="gradient-eco text-white flex-1">
                    <Navigation className="mr-2 h-4 w-4" />
                    Démarrer la collecte
                  </Button>
                  <Button variant="outline">
                    <Clock className="mr-2 h-4 w-4" />
                    Programmer
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div>
          {/* Waste Types */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Types de Déchets</CardTitle>
              <CardDescription>Prix actuels par kilogramme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {wasteTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{type.icon}</span>
                      <span className="font-medium">{type.name}</span>
                    </div>
                    <span className="font-bold text-green-600">{type.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Collection Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                Conseils de Collecte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-800 mb-1">🌟 Astuce du jour</div>
                  <div className="text-sm text-green-700">
                    Les déchets organiques rapportent plus en fin de semaine !
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Collectez tôt le matin pour de meilleurs prix</div>
                  <div>• Triez sur place pour économiser du temps</div>
                  <div>• Vérifiez la météo avant de sortir</div>
                  <div>• Utilisez l&apos;app pour signaler votre position</div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                <Users className="mr-2 h-4 w-4" />
                Rejoindre un groupe
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
