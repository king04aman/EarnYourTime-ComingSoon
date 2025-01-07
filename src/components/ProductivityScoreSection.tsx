import React from "react";
import { ChevronRight } from "lucide-react";

interface ProductivityScoreSectionProps {
  theme: string;
}

const ProductivityScoreSection: React.FC<ProductivityScoreSectionProps> = ({ theme }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div
            className={`rounded-2xl p-8 md:p-12 shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} transition-colors duration-300`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Balance Your Digital Life
                </h2>
                <p className={`mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Our innovative approach helps you maintain a healthy balance
                  between work and leisure. The more you focus, the more free
                  time you earn.
                </p>
                <div className="space-y-4">
                  {[
                    "Smart time tracking",
                    "Customizable rewards",
                    "Progress insights",
                    "Habit formation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-blue-900/50" : "bg-blue-100"}`}
                      >
                        <ChevronRight
                          className={`w-4 h-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                        />
                      </div>
                      <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
                <div
                  className={`relative rounded-2xl p-6 border transition-colors duration-300 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        Today's Progress
                      </span>
                      <span className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        78%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}
                    >
                      <div className="h-full w-[78%] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className={`rounded-xl p-4 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900/50" : "bg-gray-50"}`}
                      >
                        <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                          Focus Time
                        </div>
                        <div className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          4h 30m
                        </div>
                      </div>
                      <div
                        className={`rounded-xl p-4 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900/50" : "bg-gray-50"}`}
                      >
                        <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                          Earned Break
                        </div>
                        <div className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          45m
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivityScoreSection;
