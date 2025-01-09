import { Clock, Moon, Sun, Github } from "lucide-react";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  scroll: boolean;
  scrolled: number;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, scroll, scrolled }) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scroll
        ? `${theme === "dark" ? "bg-gray-900/80" : "bg-white/80"
        } backdrop-blur-lg shadow-lg`
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-xl ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"
                }`}
            >
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">EarnYourTime</span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${theme === "dark" ? "bg-gray-800 text-yellow-500" : "bg-gray-100 text-gray-600"
                }`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <a href="https://github.com/king04aman/EarnYourTime-ComingSoon/">
                <Github className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Star on GitHub</span>
              </a>
            </button>
          </div>
        </div>
        {scrolled > 0 && (
          <div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"
            style={{ width: `${scrolled}%`, transition: "width 0.2s ease-in-out" }}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
