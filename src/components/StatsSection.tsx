import React from "react";

interface StatsSectionProps {
  theme: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ theme }) => {
  const stats = [
    {
      label: "Beta Testers",
      value: "500+",
    },
    {
      label: "Early Access Requests",
      value: "5k+",
    },
    {
      label: "Expected Productivity Gain",
      value: "40%+",
    },
    {
      label: "Community Feedback",
      value: "4.8/5",
    },
  ];

  return (
    <section className={`py-20 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div
                className={`text-4xl font-bold mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                {stat.value}
              </div>
              <div className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
