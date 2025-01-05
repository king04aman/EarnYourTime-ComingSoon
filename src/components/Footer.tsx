import React from "react";

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <>
      <footer
        className={`py-6 ${theme === "dark" ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-600"} transition-colors duration-300`}
      >
        <div className="text-center">
          <p className="text-sm px-4">
            Built with ❤️ by developers for the open-source community. A special thanks to all our contributors.{" "}
          </p>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"} underline`}
          >
            Join us on GitHub
          </a>
        </div>
      </footer>

    </>
  );
};

export default Footer;
