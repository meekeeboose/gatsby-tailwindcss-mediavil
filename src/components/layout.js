import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-teal-700" style={{ backgroundColor: "#574b90" }}>
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className=" no-underline"
              href="https://mediavil.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              mediavil &copy; 2020
            </a>
          </p>

          <p>
            <a
              className=" text-white no-underline"
              href="https://mediavil.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mediavil
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
