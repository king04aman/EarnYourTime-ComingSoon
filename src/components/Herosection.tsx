import { Zap, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  theme: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 border backdrop-blur-sm
              transition-colors duration-300 dark:border-gray-800 dark:bg-gray-800/10
              border-gray-200 bg-white"
          >
            <Zap className={`w-4 h-4 ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`} />
            <span className="text-sm">Revolutionizing Digital Wellness</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Master Your Time,
            <span className={`block ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
              Earn Your Breaks
            </span>
          </h1>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto transition-colors duration-300
              dark:text-gray-400 text-gray-600"
          >
            The first productivity app that syncs your PC work with mobile
            rewards, creating a perfect balance between focus and relaxation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-4 rounded-full font-medium inline-flex items-center space-x-2
                transition-all duration-300 transform hover:scale-105
                bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg
                hover:shadow-blue-500/25"
            >
              <a href="#join-waitlist">
                Coming Soon
              </a>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#features"
              className={`px-8 py-4 rounded-full font-medium inline-flex items-center space-x-2
                transition-colors duration-300
                ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20
            animate-pulse transform -translate-x-1/2 -translate-y-1/2
            ${theme === "dark" ? "bg-blue-600" : "bg-blue-500"}`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20
            animate-pulse delay-1000 transform translate-x-1/2 translate-y-1/2
            ${theme === "dark" ? "bg-purple-600" : "bg-purple-500"}`}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
