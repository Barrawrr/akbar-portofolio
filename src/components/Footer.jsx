import React from "react";
import ToogleTheme from "../hooks/ToogleTheme";
const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-primary-dark pt-6 pb-20 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <ToogleTheme />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-2 w-full lg:w-auto text-center lg:text-right">
            <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">Copyright © {new Date().getFullYear()} Akbar RA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
