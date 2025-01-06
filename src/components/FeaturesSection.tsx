import React from "react";
import { Timer, Target, Shield, Sparkles } from "lucide-react";

interface FeaturesSectionProps {
  theme: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ theme }) => {
  const features = [
    {
      icon: Timer,
      title: "Smart Time Tracking",
      description:
        "Automatically tracks your productive time on PC and syncs with mobile usage.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Reward System",
      description:
        "Earn mobile time by being productive on your PC. Set your own reward ratios.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your data stays private with end-to-end encryption and local processing.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Smart Insights",
      description:
        "Get detailed analytics about your productivity patterns and improvements.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p
              className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              A revolutionary approach to digital wellness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1
                ${theme === "dark" ? "bg-gray-800/50" : "bg-white"}
                border shadow-md ${theme === "dark" ? "border-gray-800" : "border-gray-100"}
                ${theme === "dark" ? "hover:bg-gray-800" : "hover:shadow-xl"}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center
                bg-gradient-to-r ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p
                  className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
